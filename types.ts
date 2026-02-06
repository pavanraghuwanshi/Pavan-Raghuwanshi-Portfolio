export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  logo: string;
  color: string;
}

export interface Stat {
  label: string;
  value: string;
  sub: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}