(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Navbar = ()=>{
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 50);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "text-xl font-bold tracking-tight text-white flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-400",
                                children: "Pavan"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "isReady.Me"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center space-x-8",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: "text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors",
                                    ...link.name === 'Resume' ? {
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    } : {},
                                    children: link.name
                                }, link.name, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "px-5 py-2 rounded-full border border-gray-700 text-sm font-medium text-white hover:border-yellow-400 hover:text-yellow-400 transition-all",
                                children: "Let's Talk"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden text-white",
                        onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden absolute top-full left-0 right-0 bg-neutral-900 border-b border-gray-800 p-6 flex flex-col space-y-4 shadow-xl",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: link.href,
                        className: "text-base font-medium text-gray-300 hover:text-yellow-400",
                        onClick: ()=>setIsMobileMenuOpen(false),
                        ...link.name === 'Resume' ? {
                            target: "_blank",
                            rel: "noopener noreferrer"
                        } : {},
                        children: link.name
                    }, link.name, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "0+zEKVBL95ILuBb5rHE6ViYOHu8=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/data:16aa5a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendMessageToGemini",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6036f06b4f929cb171347571f3c59083a92375875b":"sendMessageToGemini"},"services/geminiService.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6036f06b4f929cb171347571f3c59083a92375875b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "sendMessageToGemini");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VtaW5pU2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBHb29nbGVHZW5BSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmFpL25vZGVcIjtcclxuaW1wb3J0IHsgQUlfU1lTVEVNX0lOU1RSVUNUSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kTWVzc2FnZVRvR2VtaW5pID0gYXN5bmMgKG1lc3NhZ2U6IHN0cmluZywgaGlzdG9yeTogeyByb2xlOiAndXNlcicgfCAnbW9kZWwnOyB0ZXh0OiBzdHJpbmcgfVtdID0gW10pID0+IHtcclxuICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWTtcclxuICBcclxuICBpZiAoIWFwaUtleSkge1xyXG4gICAgcmV0dXJuIFwiRGVtbyBNb2RlOiBBUEkgS2V5IGlzIG1pc3NpbmcuIFBsZWFzZSBjb25maWd1cmUgcHJvY2Vzcy5lbnYuR0VNSU5JX0FQSV9LRVkgdG8gZW5hYmxlIHRoZSBBSSBhc3Npc3RhbnQuXCI7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgYWkgPSBuZXcgR29vZ2xlR2VuQUkoeyBhcGlLZXkgfSk7XHJcbiAgICBjb25zdCBtb2RlbCA9ICdnZW1pbmktMS41LWZsYXNoJztcclxuICAgIFxyXG4gICAgLy8gVXNpbmcgY2hhdCBmb3IgbWFpbnRhaW5pbmcgaGlzdG9yeSBjb250ZXh0XHJcbiAgICBjb25zdCBjaGF0ID0gYWkuY2hhdHMuY3JlYXRlKHtcclxuICAgICAgbW9kZWw6IG1vZGVsLFxyXG4gICAgICBjb25maWc6IHtcclxuICAgICAgICBzeXN0ZW1JbnN0cnVjdGlvbjogQUlfU1lTVEVNX0lOU1RSVUNUSU9OLFxyXG4gICAgICB9LFxyXG4gICAgICBoaXN0b3J5OiBoaXN0b3J5Lm1hcChoID0+ICh7XHJcbiAgICAgICAgcm9sZTogaC5yb2xlLFxyXG4gICAgICAgIHBhcnRzOiBbeyB0ZXh0OiBoLnRleHQgfV0sXHJcbiAgICAgIH0pKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNoYXQuc2VuZE1lc3NhZ2UoeyBtZXNzYWdlIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdC50ZXh0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29tbXVuaWNhdGluZyB3aXRoIEdlbWluaTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFwiSSdtIGN1cnJlbnRseSBoYXZpbmcgdHJvdWJsZSBjb25uZWN0aW5nIHRvIHRoZSBuZXVyYWwgbmV0d29yay4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIjtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBS2EsZ01BQUEifQ==
}),
"[project]/components/AIChatBot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$16aa5a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/services/data:16aa5a [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const AIChatBot = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: 'model',
            text: "Hi! I'm Pavan's AI assistant. Ask me anything about his work, skills, or experience!",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIChatBot.useEffect": ()=>{
            scrollToBottom();
        }
    }["AIChatBot.useEffect"], [
        messages,
        isOpen
    ]);
    const handleSend = async ()=>{
        if (!inputValue.trim() || isLoading) return;
        const userMessage = {
            role: 'user',
            text: inputValue,
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInputValue('');
        setIsLoading(true);
        // Filter messages for history (simple mapping)
        const history = messages.map((m)=>({
                role: m.role,
                text: m.text
            }));
        const responseText = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$16aa5a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["sendMessageToGemini"])(userMessage.text, history);
        const aiMessage = {
            role: 'model',
            text: responseText || "Sorry, I couldn't process that.",
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                aiMessage
            ]);
        setIsLoading(false);
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 right-6 z-50 flex flex-col items-end",
        children: [
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 w-[90vw] md:w-[380px] h-[500px] bg-neutral-900 border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-neutral-800 p-4 border-b border-gray-700 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 bg-green-500 rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIChatBot.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-white",
                                        children: "Pavan's AI Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIChatBot.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AIChatBot.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "text-gray-400 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIChatBot.tsx",
                                        lineNumber: 61,
                                        columnNumber: 94
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/AIChatBot.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/AIChatBot.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AIChatBot.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-[#0a0a0a]",
                        children: [
                            messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${msg.role === 'user' ? 'bg-yellow-500 text-black font-medium rounded-tr-none' : 'bg-neutral-800 text-gray-200 rounded-tl-none'}`,
                                        children: msg.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIChatBot.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, idx, false, {
                                    fileName: "[project]/components/AIChatBot.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))),
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-neutral-800 rounded-2xl rounded-tl-none px-4 py-3 flex space-x-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: '0ms'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIChatBot.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: '150ms'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIChatBot.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: '300ms'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIChatBot.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AIChatBot.tsx",
                                    lineNumber: 80,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/AIChatBot.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/components/AIChatBot.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AIChatBot.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-neutral-800 border-t border-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center bg-neutral-900 rounded-full border border-gray-700 px-4 py-2 focus-within:border-yellow-500 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: inputValue,
                                    onChange: (e)=>setInputValue(e.target.value),
                                    onKeyDown: handleKeyPress,
                                    placeholder: "Ask about my projects...",
                                    className: "flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/components/AIChatBot.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSend,
                                    disabled: isLoading || !inputValue.trim(),
                                    className: `ml-2 p-1.5 rounded-full ${isLoading || !inputValue.trim() ? 'text-gray-600' : 'text-yellow-400 hover:bg-yellow-400/10'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIChatBot.tsx",
                                            lineNumber: 106,
                                            columnNumber: 96
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIChatBot.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/AIChatBot.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AIChatBot.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/AIChatBot.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/AIChatBot.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-14 h-14 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black shadow-lg flex items-center justify-center transition-all transform hover:scale-105",
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M19 9l-7 7-7-7"
                    }, void 0, false, {
                        fileName: "[project]/components/AIChatBot.tsx",
                        lineNumber: 119,
                        columnNumber: 91
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/AIChatBot.tsx",
                    lineNumber: 119,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-7 h-7",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    }, void 0, false, {
                        fileName: "[project]/components/AIChatBot.tsx",
                        lineNumber: 121,
                        columnNumber: 90
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/AIChatBot.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/AIChatBot.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/AIChatBot.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AIChatBot, "/oRBQzAAdu5A/O9ykbib0SK2TF8=");
_c = AIChatBot;
const __TURBOPACK__default__export__ = AIChatBot;
var _c;
__turbopack_context__.k.register(_c, "AIChatBot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
]);

//# sourceMappingURL=_237594db._.js.map