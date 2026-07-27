'use server';

import { GoogleGenAI } from "@google/genai/node";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model'; text: string }[] = []) => {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    return "Demo Mode: API Key is missing. Please configure process.env.GEMINI_API_KEY to enable the AI assistant.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';
    
    // Using chat for maintaining history context
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently having trouble connecting to the neural network. Please try again later.";
  }
};
