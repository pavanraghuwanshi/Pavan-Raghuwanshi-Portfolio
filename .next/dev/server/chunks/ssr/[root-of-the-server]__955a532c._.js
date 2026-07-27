module.exports = [
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:stream/promises [external] (node:stream/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream/promises", () => require("node:stream/promises"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/constants.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AI_SYSTEM_INSTRUCTION",
    ()=>AI_SYSTEM_INSTRUCTION,
    "EXPERIENCES",
    ()=>EXPERIENCES,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "PROJECTS",
    ()=>PROJECTS,
    "SKILLS",
    ()=>SKILLS,
    "STATS",
    ()=>STATS
]);
const NAV_LINKS = [
    {
        name: 'Skills',
        href: '#skills'
    },
    {
        name: 'Experience',
        href: '#experience'
    },
    {
        name: 'Projects',
        href: '#projects'
    },
    {
        name: 'Resume',
        href: '/Pavan-Raghuwanshi.pdf'
    },
    {
        name: 'Contact',
        href: '#contact'
    }
];
const STATS = [
    {
        value: '4',
        label: 'Core Projects',
        sub: 'Production Ready'
    },
    {
        value: '2+',
        label: 'Years of Experience',
        sub: 'Full Stack Tech'
    },
    {
        value: '99.9%',
        label: 'API Uptime',
        sub: 'Redis Caching & clustering'
    },
    {
        value: '100%',
        label: 'Real-time Tracking',
        sub: 'WebSockets & Event-driven'
    }
];
const EXPERIENCES = [
    {
        id: 'hbgadget',
        company: 'HBGadget Tech',
        role: 'Full Stack Developer',
        period: 'Aug 2024 - Present',
        description: [
            "Engineered scalable backend services for real-time GPS tracking, route management, and fleet monitoring using Node.js, Express.js, MongoDB, and Redis.",
            "Designed event-driven APIs and WebSocket services to deliver low-latency vehicle location updates, trip events, and live notifications.",
            "Developed playback, trip history, reporting, and geofence management APIs with optimized MongoDB aggregation pipelines.",
            "Improved backend scalability through Redis caching, query optimization, and efficient data modeling for high-volume GPS and IoT workloads.",
            "Managed production deployments using Linux, Nginx, PM2, VPS servers, and Node.js clustering while collaborating with frontend teams to deliver reliable tracking solutions."
        ],
        logo: 'https://picsum.photos/id/1/200/200',
        color: 'bg-orange-500'
    },
    {
        id: 'royalweb',
        company: 'Royal Web Tech',
        role: 'Full Stack Developer (Intern)',
        period: 'June 2024 - Aug 2024',
        description: [
            "Developed responsive frontend modules for a real estate layout management platform (LMS) using React.js and Chakra UI.",
            "Integrated frontend components with PHP backend APIs for seamless application functionality.",
            "Built reusable UI components using React Hooks and state management (Redux/Context API) to improve maintainability.",
            "Collaborated with cross-functional teams to deliver scalable, production-ready features in an Agile/Scrum environment."
        ],
        logo: 'https://picsum.photos/id/3/200/200',
        color: 'bg-green-500'
    },
    {
        id: 'ghraisoni',
        company: 'G H Raisoni College',
        role: 'Master of Computer Application (MCA)',
        period: '2023 - 2025',
        description: [
            "Pursued postgraduate studies focused on advanced computer applications, software development methodologies, and database systems.",
            "Completed courses in system analysis, advanced web technologies, and network engineering."
        ],
        logo: 'https://picsum.photos/id/2/200/200',
        color: 'bg-purple-600'
    },
    {
        id: 'mvmbhopal',
        company: 'Govt. MVM Bhopal (BU)',
        role: 'Bachelor of Science (BSC)',
        period: '2019 - 2022',
        description: [
            "Earned undergraduate degree focusing on mathematics, statistics, and computer science fundamentals."
        ],
        logo: 'https://picsum.photos/id/4/200/200',
        color: 'bg-blue-500'
    }
];
const PROJECTS = [
    {
        title: "Credence Tracker",
        description: "Real-time GPS vehicle tracking and fleet monitoring system featuring event-driven WebSocket connections, geo-fencing, and route playback history.",
        tags: [
            "Node.js",
            "TypeScript",
            "MongoDB",
            "WebSocket",
            "Redis",
            "Socket.io",
            "Firebase",
            "Razorpay"
        ],
        link: "https://credencetracker.com/",
        image: "/credence_tracker.png"
    },
    {
        title: "ParentsEye",
        description: "School transport student tracking platform enabling live GPS tracking, student attendance, pickup/drop workflows, push notifications, and payment gateway.",
        tags: [
            "Node.js",
            "Express.js",
            "TypeScript",
            "MongoDB",
            "Redis",
            "Socket.IO",
            "Firebase",
            "Razorpay"
        ],
        link: "https://parentseye.in/",
        image: "/parentseye.png"
    },
    {
        title: "RocketSales CRM",
        description: "Salesperson tracking and lead management platform with live location monitoring, route history, role-based authorization (RBAC), and analytical dashboards.",
        tags: [
            "Node.js",
            "Express.js",
            "TypeScript",
            "MongoDB",
            "Redis",
            "JWT",
            "WebSocket"
        ],
        link: "https://web.rocketsalestracker.com/",
        image: "/rocketsales_crm.png"
    },
    {
        title: "LMS Layout Management",
        description: "Responsive layout manager canvas and CRM for real estate properties, integrated with backend REST APIs and state management.",
        tags: [
            "React.js",
            "Redux",
            "Chakra UI",
            "Context API",
            "PHP APIs"
        ],
        link: "#",
        image: "/lms_layout.png"
    }
];
const SKILLS = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redis",
    "WebSockets",
    "Socket.IO",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "Nginx",
    "VPS Deployment",
    "Firebase",
    "Razorpay",
    "JWT",
    "BUN",
    "HONO",
    "Chakra UI"
];
const AI_SYSTEM_INSTRUCTION = `
You are an AI assistant for Pavan Raghuwanshi's portfolio website.
Your goal is to answer questions about Pavan's professional background, skills, and projects based on the provided context.
Be professional, concise, and enthusiastic.
If asked about contact info, suggest using the contact form on the website or reaching out directly via pavanraghuwanshi77@gmail.com or LinkedIn (linkedin.com/in/pavan-raghuwanshi).
Here is the resume context:
Name: Pavan Raghuwanshi
Role: Full Stack Developer
Experience Summary: 2+ years of experience in Node.js, Express.js, MongoDB, Redis, and React.js. Experienced in building scalable REST APIs, real-time systems, GPS tracking solutions, and deploying production applications on Linux.

Work Experience:
- Full Stack Developer at HBGadget Tech (Nagpur, MH) (Aug 2024 - Present):
  * Project Credence Tracker: Engineered backend services for real-time GPS tracking and fleet monitoring. Designed WebSocket APIs for low-latency updates.
  * Project ParentsEye: Developed backend for school transport platform, integrating live tracking, attendance, geofences, Firebase notifications, and Razorpay.
  * Project RocketSales CRM: Built REST APIs for lead management, salesperson real-time tracking, route history, and JWT role-based access control.
- Full Stack Developer (Intern) at Royal Web Tech (Nagpur, MH) (June 2024 - Aug 2024):
  * Layout Management System (LMS): Developed React/Chakra UI frontend modules, integrated PHP backend APIs, and managed application state.

Education:
- Master of Computer Application (MCA) from G H Raisoni College of Arts, Commerce, Science Nagpur (2023 - 2025).
- Bachelor Of Science (BSC) from Govt. MVM Bhopal (BU) (2019 - 2022).

Technical Skills:
- Frontend: React.js, Next.js, TypeScript, Redux, Zustand, Tailwind CSS, React Query, TanStack Table, React Hook Form, Zod, Leaflet, Chakra UI.
- Backend & Databases: Node.js, Express.js, MongoDB, Redis, WebSockets, Socket.IO, JWT, RBAC, Webhooks, Cron Jobs, BUN, HONO, Supabase, basic SQL.
- Payments & Integrations: Razorpay, Firebase Cloud Messaging, Node mailer.
- DevOps & Tools: Git, GitHub, VPS Deployment, NGINX, Node clustering, PM2.
`;
}),
"[project]/services/geminiService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6092856a613e0149f64d1f748aae9adab53cae2657":"sendMessageToGemini"},"",""] */ __turbopack_context__.s([
    "sendMessageToGemini",
    ()=>sendMessageToGemini
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/genai/dist/node/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const sendMessageToGemini = async (message, history = [])=>{
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return "Demo Mode: API Key is missing. Please configure process.env.GEMINI_API_KEY to enable the AI assistant.";
    }
    try {
        const ai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
            apiKey
        });
        const model = 'gemini-1.5-flash';
        // Using chat for maintaining history context
        const chat = ai.chats.create({
            model: model,
            config: {
                systemInstruction: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AI_SYSTEM_INSTRUCTION"]
            },
            history: history.map((h)=>({
                    role: h.role,
                    parts: [
                        {
                            text: h.text
                        }
                    ]
                }))
        });
        const result = await chat.sendMessage({
            message
        });
        return result.text;
    } catch (error) {
        console.error("Error communicating with Gemini:", error);
        return "I'm currently having trouble connecting to the neural network. Please try again later.";
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    sendMessageToGemini
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendMessageToGemini, "6092856a613e0149f64d1f748aae9adab53cae2657", null);
}),
"[project]/.next-internal/server/app/_not-found/page/actions.js { ACTIONS_MODULE0 => \"[project]/services/geminiService.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/geminiService.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/_not-found/page/actions.js { ACTIONS_MODULE0 => \"[project]/services/geminiService.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "6092856a613e0149f64d1f748aae9adab53cae2657",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendMessageToGemini"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$_not$2d$found$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/_not-found/page/actions.js { ACTIONS_MODULE0 => "[project]/services/geminiService.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/geminiService.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__955a532c._.js.map