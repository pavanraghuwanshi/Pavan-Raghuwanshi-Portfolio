module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        name: 'Contact',
        href: '#contact'
    }
];
const STATS = [
    {
        value: '10+',
        label: 'Projects Completed',
        sub: 'From scratch'
    },
    {
        value: '2+',
        label: 'Years of Experience',
        sub: 'In Tech'
    },
    {
        value: '95%',
        label: 'Positive Feedback',
        sub: 'From clients'
    },
    {
        value: '5',
        label: 'Team Lead',
        sub: 'People managed'
    }
];
const EXPERIENCES = [
    {
        id: 'leapthought',
        company: 'LeapThought',
        role: 'Senior Developer',
        period: 'Nov 2021 - Present',
        description: [
            "Architected a multi-tenanted SaaS portal used by 15+ district councils across New Zealand.",
            "Optimized frontend performance by 40% using React Server Components and efficient caching strategies.",
            "Mentored junior developers and established code quality standards."
        ],
        logo: 'https://picsum.photos/id/1/200/200',
        color: 'bg-orange-500'
    },
    {
        id: 'sabrentkaro',
        company: 'SabRentKaro',
        role: 'Full Stack Engineer',
        period: 'Aug 2018 - Oct 2021',
        description: [
            "Led the migration of legacy monolith to microservices architecture.",
            "Implemented real-time dashboard analytics for rental property management.",
            "Integrated payment gateways handling over $1M in monthly transactions."
        ],
        logo: 'https://picsum.photos/id/2/200/200',
        color: 'bg-purple-600'
    },
    {
        id: 'zenoti',
        company: 'Zenoti',
        role: 'Frontend Developer',
        period: 'Sep 2016 - July 2018',
        description: [
            "Developed responsive UI components for the core booking engine.",
            "Collaborated with UX designers to improve user journey flow by 25%.",
            "Wrote comprehensive unit and integration tests achieving 90% coverage."
        ],
        logo: 'https://picsum.photos/id/3/200/200',
        color: 'bg-green-500'
    },
    {
        id: 'areteir',
        company: 'Areteir',
        role: 'Junior Developer',
        period: 'Dec 2015 - Aug 2016',
        description: [
            "Assisted in developing internal tools for data visualization.",
            "Maintained and updated documentation for API endpoints.",
            "Fixed critical bugs in the legacy PHP codebase."
        ],
        logo: 'https://picsum.photos/id/4/200/200',
        color: 'bg-blue-500'
    }
];
const PROJECTS = [
    {
        title: "EcoDash Analytics",
        description: "A comprehensive dashboard for monitoring environmental metrics in real-time.",
        tags: [
            "React",
            "D3.js",
            "Node.js"
        ],
        link: "#",
        image: "https://picsum.photos/id/180/600/400"
    },
    {
        title: "CryptoTracker Pro",
        description: "Mobile-first application for tracking cryptocurrency portfolios with live alerts.",
        tags: [
            "React Native",
            "Firebase",
            "Redux"
        ],
        link: "#",
        image: "https://picsum.photos/id/201/600/400"
    },
    {
        title: "TaskFlow AI",
        description: "Productivity tool utilizing generative AI to suggest task prioritizations.",
        tags: [
            "TypeScript",
            "Gemini API",
            "Tailwind"
        ],
        link: "#",
        image: "https://picsum.photos/id/366/600/400"
    }
];
const SKILLS = [
    "React",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Tailwind CSS",
    "Next.js",
    "AWS",
    "Docker",
    "PostgreSQL",
    "Gemini API"
];
const AI_SYSTEM_INSTRUCTION = `
You are an AI assistant for Sai Varun Reddy G's portfolio website. 
Your goal is to answer questions about Sai's professional background, skills, and projects based on the provided context.
Be professional, concise, and enthusiastic.
If asked about contact info, suggest using the contact form on the website.
Here is the resume context:
Name: Sai Varun Reddy G
Role: Senior Full Stack Developer
Experience: 
- LeapThought (Nov 2021-Present): Senior Developer. Built SaaS portal for NZ councils.
- SabRentKaro (Aug 2018-Oct 2021): Full Stack Engineer. Microservices migration.
- Zenoti (Sep 2016-July 2018): Frontend Developer. Booking engine UI.
- Areteir (Dec 2015-Aug 2016): Junior Developer. Internal tools.
Skills: React, TypeScript, Node.js, GraphQL, Tailwind CSS, Next.js, AWS, Docker, PostgreSQL, Gemini API.
Stats: 23+ Projects, 6+ Years Exp, 96% Positive Feedback.
`;
}),
"[project]/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const Navbar = ()=>{
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "text-xl font-bold tracking-tight text-white flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-400",
                                children: "Varun"
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center space-x-8",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: "text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors",
                                    children: link.name
                                }, link.name, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "px-5 py-2 rounded-full border border-gray-700 text-sm font-medium text-white hover:border-yellow-400 hover:text-yellow-400 transition-all",
                                children: "Let's Talk"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden text-white",
                        onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden absolute top-full left-0 right-0 bg-neutral-900 border-b border-gray-800 p-6 flex flex-col space-y-4 shadow-xl",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: link.href,
                        className: "text-base font-medium text-gray-300 hover:text-yellow-400",
                        onClick: ()=>setIsMobileMenuOpen(false),
                        children: link.name
                    }, link.name, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/services/data:7087d9 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendMessageToGemini",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"609b574b44fd9d1f6ac4fab4ec334d2c9d364a1f33":"sendMessageToGemini"},"services/geminiService.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("609b574b44fd9d1f6ac4fab4ec334d2c9d364a1f33", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "sendMessageToGemini");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VtaW5pU2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IEdvb2dsZUdlbkFJIH0gZnJvbSBcIkBnb29nbGUvZ2VuYWlcIjtcbmltcG9ydCB7IEFJX1NZU1RFTV9JTlNUUlVDVElPTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbi8vIEluaXRpYWxpemUgdGhlIEdlbWluaSBBUEkgY2xpZW50XG4vLyBJbiBOZXh0LmpzIFNlcnZlciBBY3Rpb25zLCBwcm9jZXNzLmVudiBpcyBzZWN1cmVseSBhdmFpbGFibGUgb24gdGhlIHNlcnZlci5cbmNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LkdFTUlOSV9BUElfS0VZIHx8ICcnO1xuY29uc3QgYWkgPSBuZXcgR29vZ2xlR2VuQUkoeyBhcGlLZXkgfSk7XG5cbmV4cG9ydCBjb25zdCBzZW5kTWVzc2FnZVRvR2VtaW5pID0gYXN5bmMgKG1lc3NhZ2U6IHN0cmluZywgaGlzdG9yeTogeyByb2xlOiAndXNlcicgfCAnbW9kZWwnOyB0ZXh0OiBzdHJpbmcgfVtdID0gW10pID0+IHtcbiAgaWYgKCFhcGlLZXkpIHtcbiAgICByZXR1cm4gXCJEZW1vIE1vZGU6IEFQSSBLZXkgaXMgbWlzc2luZy4gUGxlYXNlIGNvbmZpZ3VyZSBwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWSB0byBlbmFibGUgdGhlIEFJIGFzc2lzdGFudC5cIjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgbW9kZWwgPSAnZ2VtaW5pLTMtZmxhc2gtcHJldmlldyc7XG4gICAgXG4gICAgLy8gVXNpbmcgY2hhdCBmb3IgbWFpbnRhaW5pbmcgaGlzdG9yeSBjb250ZXh0XG4gICAgY29uc3QgY2hhdCA9IGFpLmNoYXRzLmNyZWF0ZSh7XG4gICAgICBtb2RlbDogbW9kZWwsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgc3lzdGVtSW5zdHJ1Y3Rpb246IEFJX1NZU1RFTV9JTlNUUlVDVElPTixcbiAgICAgIH0sXG4gICAgICBoaXN0b3J5OiBoaXN0b3J5Lm1hcChoID0+ICh7XG4gICAgICAgIHJvbGU6IGgucm9sZSxcbiAgICAgICAgcGFydHM6IFt7IHRleHQ6IGgudGV4dCB9XSxcbiAgICAgIH0pKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNoYXQuc2VuZE1lc3NhZ2UoeyBtZXNzYWdlIH0pO1xuICAgIHJldHVybiByZXN1bHQudGV4dDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUuZXJyb3IoLi4ub29fdHgoYDEyNDgwMjY2NDNfMzRfNF8zNF82MF8xMWAsXCJFcnJvciBjb21tdW5pY2F0aW5nIHdpdGggR2VtaW5pOlwiLCBlcnJvcikpO1xuICAgIHJldHVybiBcIkknbSBjdXJyZW50bHkgaGF2aW5nIHRyb3VibGUgY29ubmVjdGluZyB0byB0aGUgbmV1cmFsIG5ldHdvcmsuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCI7XG4gIH1cbn07XHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovLyogYzggaWdub3JlIHN0YXJ0ICovLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO3ZhciBfMHgyN2Y0ZWE9XzB4NWNmNztmdW5jdGlvbiBfMHgzNmQ5KCl7dmFyIF8weDJhNzg0MD1bJzY5MDM5MlNCQkdYRCcsJ25pbmphU3VwcHJlc3NDb25zb2xlJywnbGV2ZWwnLCclY1xcXFx4MjBDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGV4dGVuc2lvblxcXFx4MjBpc1xcXFx4MjBjb25uZWN0ZWRcXFxceDIwdG9cXFxceDIwJywnX2Nvbm5lY3RlZCcsJ21hcCcsJ19pc05lZ2F0aXZlWmVybycsJ2dldFdlYlNvY2tldENsYXNzJywnX1N5bWJvbCcsJzUwMTZHaXJ2bmcnLCdjYXBwZWRFbGVtZW50cycsJ3Byb3BzJywnbmVnYXRpdmVJbmZpbml0eScsJ2FzdHJvJywnc3BsaXQnLCdfc29ja2V0JywnY291bnQnLCcxMC4wLjIuMicsJ2ZvckVhY2gnLCdtZXNzYWdlJywnODU0OTFDRUdhU1cnLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywnW29iamVjdFxcXFx4MjBCaWdJbnRdJywnb25vcGVuJywnZXhwbycsJ2RlcHRoJywnc3RhY2snLCdwcm90b3R5cGUnLCdfZGF0ZVRvU3RyaW5nJywnX3NvcnRQcm9wcycsJ3NldHRlcicsJ3VuZGVmaW5lZCcsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ19yZWNvbm5lY3RUaW1lb3V0JywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdfcHJvcGVydHlOYW1lJywnX2lzUHJpbWl0aXZlVHlwZScsJ3VybCcsJ21hdGNoJywnX3NldE5vZGVRdWVyeVBhdGgnLCdfcF9uYW1lJywnX29iamVjdFRvU3RyaW5nJywnYmlnaW50JywncmVkdWNlZExpbWl0cycsJ2VudicsJ2NvbnN0cnVjdG9yJywnW29iamVjdFxcXFx4MjBTZXRdJywnU3RyaW5nJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywnMTk2eGpreEJmJywnb3NOYW1lJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ3Jlc2V0T25Qcm9jZXNzaW5nVGltZUF2ZXJhZ2VNcycsJ3BhcmVudCcsJ193cycsJ19wXycsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdfc2VuZEVycm9yTWVzc2FnZScsJ3JlcGxhY2UnLCdyZWFkeVN0YXRlJywnZ2V0JywnZGF0YScsJ3RvdGFsU3RyTGVuZ3RoJywncmVkdWNlUG9saWN5JywnZnVuY3Rpb24nLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnYW5ndWxhcicsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcsJ01hcCcsJ2VsZW1lbnRzJywnY3VycmVudCcsJ190eXBlJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdlbmRzV2l0aCcsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCdyZXNldFdoZW5RdWlldE1zJywnX2lzTWFwJywnX2luQnJvd3NlcicsJ19ibGFja2xpc3RlZFByb3BlcnR5JywnaG9zdCcsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnMS4wLjAnLCdfaGFzU2V0T25JdHNQYXRoJywnbGVuZ3RoJywnX3NldE5vZGVMYWJlbCcsJ19uaW5qYUlnbm9yZU5leHRFcnJvcicsJ25lZ2F0aXZlWmVybycsJ1N5bWJvbCcsJ2Rpc2FibGVkTG9nJywnMTI3LjAuMC4xJywnUmVnRXhwJywnb3JpZ2luJywnW29iamVjdFxcXFx4MjBEYXRlXScsJ2JvdW5kXFxcXHgyMFByb21pc2UnLCdpbmRleCcsJ2l0ZXJhdG9yJywndHJhY2UnLCdyZWFjdC1uYXRpdmUnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCdhdXRvRXhwYW5kJywnb2JqZWN0JywnZnVuY05hbWUnLCdfY29uc29sZV9uaW5qYScsJ25vZGUnLCdXZWJTb2NrZXQnLCdsb2cnLCdzb21lJywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ3ZlcnNpb25zJywnZGlzYWJsZWRUcmFjZScsJ3B1c2gnLCdjYWxsJywndW5rbm93bicsJ3RpbWVTdGFtcCcsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ19jb25uZWN0aW5nJywnUE9TSVRJVkVfSU5GSU5JVFknLCdzdGFydHNXaXRoJywnaG9zdG5hbWUnLCduZXh0LmpzJywnbW9kdWxlcycsJ25vRnVuY3Rpb25zJywnc2VyaWFsaXplJywncG9zaXRpdmVJbmZpbml0eScsJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZScsJ19kaXNwb3NlV2Vic29ja2V0JywncHJvY2VzcycsJ2NvbmNhdCcsJ19pc0FycmF5JywnY2hhckF0JywnY2FwcGVkJywncmV0dXJuXFxcXHgyMGltcG9ydCh1cmwucGF0aFRvRmlsZVVSTChwYXRoLmpvaW4obm9kZU1vZHVsZXMsXFxcXHgyMFxcXFx4Mjd3cy9pbmRleC5qc1xcXFx4MjcpKS50b1N0cmluZygpKTsnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnbmFtZScsJ2dhdGV3YXkuZG9ja2VyLmludGVybmFsJywnXFxcXHgyMGJyb3dzZXInLCdpbXBvcnQoXFxcXHgyN3BhdGhcXFxceDI3KScsJ3BlcmZvcm1hbmNlJywnX2FkZEZ1bmN0aW9uc05vZGUnLCdvbm1lc3NhZ2UnLCdzdGFja1RyYWNlTGltaXQnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCcxMDgxNnhKVmh6aCcsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnX1dlYlNvY2tldCcsJ2FsbFN0ckxlbmd0aCcsJ3JlbWl4JywnX2hhc01hcE9uSXRzUGF0aCcsJ3Jlc29sdmVHZXR0ZXJzJywnY2FwcGVkUHJvcHMnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdzdWJzdHInLCdfY29ubmVjdFRvSG9zdE5vdycsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ3RvU3RyaW5nJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ19xdW90ZWRSZWdFeHAnLCdiaW5kJywnQm9vbGVhbicsJ3N0cmluZycsJ3N0ckxlbmd0aCcsJ2RvY2tlcml6ZWRBcHAnLCdldmVudFJlY2VpdmVkQ2FsbGJhY2snLCdzb3J0UHJvcHMnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywnZ2xvYmFsJywnYW5kcm9pZCcsJ0hUTUxBbGxDb2xsZWN0aW9uJywnbG9jYXRpb24nLCdjYXRjaCcsJ3JlZHVjZU9uQWNjdW11bGF0ZWRQcm9jZXNzaW5nVGltZU1zJywnaW5jbHVkZXMnLCdzZW5kJywncmVsb2FkJywnNjQxMHFGU29LTCcsJ19pbk5leHRFZGdlJywnXFxcXHgyMHNlcnZlcicsJ2RlZmF1bHQnLCdhcnJheScsJ2RlZmF1bHRMaW1pdHMnLCd3czovLycsJ3VucmVmJywndGVzdCcsJzE3NzAzNTU0MTg3OTQnLCdfYWxsb3dlZFRvU2VuZCcsJ19rZXlTdHJSZWdFeHAnLCdORVhUX1JVTlRJTUUnLCdhcmdzJywnaGFzT3duUHJvcGVydHknLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiMTAuMC4yLjJcXFwiLFxcXCJMQVBUT1AtU0MwOEUwUTRcXFwiLFxcXCIxOTIuMTY4LjAuMzhcXFwiXSwnJywnTnVtYmVyJywnUHJvbWlzZScsJ05FR0FUSVZFX0lORklOSVRZJywnX2V4dGVuZGVkV2FybmluZycsJ3Jvb3RfZXhwX2lkJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCd2YWx1ZU9mJywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ2Nsb3NlJywndGltZScsJ0J1ZmZlcicsJ19jYXBJZlN0cmluZycsJ2Zyb21DaGFyQ29kZScsJ3BlcmZfaG9va3MnLCdjb25zb2xlJywncmVkdWNlT25Db3VudCcsJ19udW1iZXJSZWdFeHAnLCdwZXJMb2dwb2ludCcsJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5JywncmVzb2x2ZScsJ3NlZVxcXFx4MjBodHRwczovL3Rpbnl1cmwuY29tLzJ2dDhqeHp3XFxcXHgyMGZvclxcXFx4MjBtb3JlXFxcXHgyMGluZm8uJywnYXV0b0V4cGFuZExpbWl0JywnX1dlYlNvY2tldENsYXNzJywnaGl0cycsJ1NldCcsJ1tvYmplY3RcXFxceDIwTWFwXScsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ3JlZHVjZUxpbWl0cycsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCc3OGFub3BhWicsJ19zZXROb2RlSWQnLCdpbXBvcnQoXFxcXHgyN3VybFxcXFx4MjcpJywnX2NsZWFuTm9kZScsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywnY292ZXJhZ2UnLCdfYWRkTG9hZE5vZGUnLCcyODQzMzBVRW5kdFknLCdub2RlTW9kdWxlcycsXFxcImM6XFxcXFxcXFxVc2Vyc1xcXFxcXFxcZ2hhbnNcXFxcXFxcXC52c2NvZGVcXFxcXFxcXGV4dGVuc2lvbnNcXFxcXFxcXHdhbGxhYnlqcy5jb25zb2xlLW5pbmphLTEuMC41MTVcXFxcXFxcXG5vZGVfbW9kdWxlc1xcXCIsJ19yZWdFeHBUb1N0cmluZycsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCd2YWx1ZScsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ19pc1VuZGVmaW5lZCcsJyxcXFxceDIwc2VlXFxcXHgyMGh0dHBzOi8vdGlueXVybC5jb20vMnZ0OGp4endcXFxceDIwZm9yXFxcXHgyMG1vcmVcXFxceDIwaW5mby4nLCdzeW1ib2wnLCdlZGdlJywnbnVtYmVyJywndG9VcHBlckNhc2UnLCdkYXRlJywnaXNBcnJheScsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnbnVsbCcsJ19hZGRQcm9wZXJ0eScsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZXh0ZW5zaW9uXFxcXHgyMGlzXFxcXHgyMGNvbm5lY3RlZFxcXFx4MjB0b1xcXFx4MjAnLCdub3cnLCdocnRpbWUnLCd3YXJuJywndG9Mb3dlckNhc2UnLCdzdHJpbmdpZnknLCdlcnJvcicsJzQ3NTIwMGpSRlhWQycsJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJywnb25lcnJvcicsJ3BvcCcsJzEyNDI5RnpFbmt1JywnX3VuZGVmaW5lZCcsJ29uY2xvc2UnLCd0eXBlJywnX2lzU2V0J107XzB4MzZkOT1mdW5jdGlvbigpe3JldHVybiBfMHgyYTc4NDA7fTtyZXR1cm4gXzB4MzZkOSgpO30oZnVuY3Rpb24oXzB4MjQ3ZDVhLF8weDM0MWI4Yil7dmFyIF8weDNmNTVkMT1fMHg1Y2Y3LF8weDM2NDk1Yj1fMHgyNDdkNWEoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDE0ZDI0OD0tcGFyc2VJbnQoXzB4M2Y1NWQxKDB4MWRjKSkvMHgxKigtcGFyc2VJbnQoXzB4M2Y1NWQxKDB4MThlKSkvMHgyKSstcGFyc2VJbnQoXzB4M2Y1NWQxKDB4MjBlKSkvMHgzKihwYXJzZUludChfMHgzZjU1ZDEoMHgxMzApKS8weDQpKy1wYXJzZUludChfMHgzZjU1ZDEoMHgxZTMpKS8weDUrLXBhcnNlSW50KF8weDNmNTVkMSgweDFmYykpLzB4NistcGFyc2VJbnQoXzB4M2Y1NWQxKDB4MjE5KSkvMHg3Ky1wYXJzZUludChfMHgzZjU1ZDEoMHgyMDUpKS8weDgrcGFyc2VJbnQoXzB4M2Y1NWQxKDB4MjAwKSkvMHg5KihwYXJzZUludChfMHgzZjU1ZDEoMHgxYWUpKS8weGEpO2lmKF8weDE0ZDI0OD09PV8weDM0MWI4YilicmVhaztlbHNlIF8weDM2NDk1YlsncHVzaCddKF8weDM2NDk1Ylsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4NGM3YzI1KXtfMHgzNjQ5NWJbJ3B1c2gnXShfMHgzNjQ5NWJbJ3NoaWZ0J10oKSk7fX19KF8weDM2ZDksMHhmMWQ0YikpO2Z1bmN0aW9uIHooXzB4MjJlOTY2LF8weDJhMDhkNCxfMHgxZDlkNWYsXzB4MThlY2E0LF8weDIyNjg2NSxfMHgxNGUzYzgpe3ZhciBfMHgzZDkwYjE9XzB4NWNmNyxfMHg0YzA4ZDMsXzB4M2RmZDlmLF8weDQ4NjgzYyxfMHg3ZGE2ZDM7dGhpc1tfMHgzZDkwYjEoMHgxYTUpXT1fMHgyMmU5NjYsdGhpc1tfMHgzZDkwYjEoMHgxNGYpXT1fMHgyYTA4ZDQsdGhpc1sncG9ydCddPV8weDFkOWQ1Zix0aGlzWydub2RlTW9kdWxlcyddPV8weDE4ZWNhNCx0aGlzW18weDNkOTBiMSgweDFhMSldPV8weDIyNjg2NSx0aGlzW18weDNkOTBiMSgweDFhMildPV8weDE0ZTNjOCx0aGlzW18weDNkOTBiMSgweDFiOCldPSEweDAsdGhpc1tfMHgzZDkwYjEoMHgxZTApXT0hMHgwLHRoaXNbXzB4M2Q5MGIxKDB4MjA5KV09ITB4MSx0aGlzW18weDNkOTBiMSgweDE3MyldPSEweDEsdGhpc1snX2luTmV4dEVkZ2UnXT0oKF8weDNkZmQ5Zj0oXzB4NGMwOGQzPV8weDIyZTk2NltfMHgzZDkwYjEoMHgxN2UpXSk9PW51bGw/dm9pZCAweDA6XzB4NGMwOGQzW18weDNkOTBiMSgweDIzMSldKT09bnVsbD92b2lkIDB4MDpfMHgzZGZkOWZbXzB4M2Q5MGIxKDB4MWJhKV0pPT09J2VkZ2UnLHRoaXNbXzB4M2Q5MGIxKDB4MTRkKV09ISgoXzB4N2RhNmQzPShfMHg0ODY4M2M9dGhpc1tfMHgzZDkwYjEoMHgxYTUpXVtfMHgzZDkwYjEoMHgxN2UpXSk9PW51bGw/dm9pZCAweDA6XzB4NDg2ODNjW18weDNkOTBiMSgweDE2YyldKSE9bnVsbCYmXzB4N2RhNmQzWydub2RlJ10pJiYhdGhpc1snX2luTmV4dEVkZ2UnXSx0aGlzW18weDNkOTBiMSgweDFkNSldPW51bGwsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT0weDAsdGhpc1tfMHgzZDkwYjEoMHgxNTApXT0weDE0LHRoaXNbJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJ109XzB4M2Q5MGIxKDB4MWM2KSx0aGlzW18weDNkOTBiMSgweDEzOSldPSh0aGlzW18weDNkOTBiMSgweDE0ZCldP18weDNkOTBiMSgweDFjNCk6J0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJykrdGhpc1tfMHgzZDkwYjEoMHgxOGYpXTt9eltfMHgyN2Y0ZWEoMHgyMjApXVtfMHgyN2Y0ZWEoMHgyMGMpXT1hc3luYyBmdW5jdGlvbigpe3ZhciBfMHg0ZTllYTI9XzB4MjdmNGVhLF8weDFiZDg5NyxfMHgzNzE4MGQ7aWYodGhpc1tfMHg0ZTllYTIoMHgxZDUpXSlyZXR1cm4gdGhpc1tfMHg0ZTllYTIoMHgxZDUpXTtsZXQgXzB4NTUyMGNmO2lmKHRoaXNbJ19pbkJyb3dzZXInXXx8dGhpc1tfMHg0ZTllYTIoMHgxYWYpXSlfMHg1NTIwY2Y9dGhpc1tfMHg0ZTllYTIoMHgxYTUpXVtfMHg0ZTllYTIoMHgxNjgpXTtlbHNle2lmKChfMHgxYmQ4OTc9dGhpc1snZ2xvYmFsJ11bXzB4NGU5ZWEyKDB4MTdlKV0pIT1udWxsJiZfMHgxYmQ4OTdbXzB4NGU5ZWEyKDB4MTkwKV0pXzB4NTUyMGNmPShfMHgzNzE4MGQ9dGhpc1tfMHg0ZTllYTIoMHgxYTUpXVtfMHg0ZTllYTIoMHgxN2UpXSk9PW51bGw/dm9pZCAweDA6XzB4MzcxODBkW18weDRlOWVhMigweDE5MCldO2Vsc2UgdHJ5e18weDU1MjBjZj0oYXdhaXQgbmV3IEZ1bmN0aW9uKCdwYXRoJyxfMHg0ZTllYTIoMHgyMmEpLCdub2RlTW9kdWxlcycsXzB4NGU5ZWEyKDB4MTgzKSkoYXdhaXQoMHgwLGV2YWwpKF8weDRlOWVhMigweDE4OCkpLGF3YWl0KDB4MCxldmFsKShfMHg0ZTllYTIoMHgxZGUpKSx0aGlzW18weDRlOWVhMigweDFlNCldKSlbXzB4NGU5ZWEyKDB4MWIxKV07fWNhdGNoe3RyeXtfMHg1NTIwY2Y9cmVxdWlyZShyZXF1aXJlKCdwYXRoJylbJ2pvaW4nXSh0aGlzWydub2RlTW9kdWxlcyddLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKF8weDRlOWVhMigweDFkOSkpO319fXJldHVybiB0aGlzW18weDRlOWVhMigweDFkNSldPV8weDU1MjBjZixfMHg1NTIwY2Y7fSx6W18weDI3ZjRlYSgweDIyMCldW18weDI3ZjRlYSgweDE5OCldPWZ1bmN0aW9uKCl7dmFyIF8weDgwNDQ5Yj1fMHgyN2Y0ZWE7dGhpc1tfMHg4MDQ0OWIoMHgxNzMpXXx8dGhpc1tfMHg4MDQ0OWIoMHgyMDkpXXx8dGhpc1tfMHg4MDQ0OWIoMHgxMzMpXT49dGhpc1tfMHg4MDQ0OWIoMHgxNTApXXx8KHRoaXNbXzB4ODA0NDliKDB4MWUwKV09ITB4MSx0aGlzW18weDgwNDQ5YigweDE3MyldPSEweDAsdGhpc1tfMHg4MDQ0OWIoMHgxMzMpXSsrLHRoaXNbXzB4ODA0NDliKDB4MTM2KV09bmV3IFByb21pc2UoKF8weDNhZmI1NCxfMHg0YjE3MjEpPT57dmFyIF8weDU4ODJkNj1fMHg4MDQ0OWI7dGhpc1snZ2V0V2ViU29ja2V0Q2xhc3MnXSgpWyd0aGVuJ10oXzB4YTJhNjMxPT57dmFyIF8weDQyN2NjND1fMHg1Y2Y3O2xldCBfMHg1MGYyMWI9bmV3IF8weGEyYTYzMShfMHg0MjdjYzQoMHgxYjQpKyghdGhpc1tfMHg0MjdjYzQoMHgxNGQpXSYmdGhpc1tfMHg0MjdjYzQoMHgxYTEpXT9fMHg0MjdjYzQoMHgxODYpOnRoaXNbJ2hvc3QnXSkrJzonK3RoaXNbJ3BvcnQnXSk7XzB4NTBmMjFiW18weDQyN2NjNCgweDFmZSldPSgpPT57dmFyIF8weDRhMmI2Yj1fMHg0MjdjYzQ7dGhpc1tfMHg0YTJiNmIoMHgxYjgpXT0hMHgxLHRoaXNbXzB4NGEyYjZiKDB4MTdkKV0oXzB4NTBmMjFiKSx0aGlzW18weDRhMmI2YigweDFkMSldKCksXzB4NGIxNzIxKG5ldyBFcnJvcignbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicpKTt9LF8weDUwZjIxYltfMHg0MjdjYzQoMHgyMWMpXT0oKT0+e3ZhciBfMHg3NjU4Mzc9XzB4NDI3Y2M0O3RoaXNbXzB4NzY1ODM3KDB4MTRkKV18fF8weDUwZjIxYlsnX3NvY2tldCddJiZfMHg1MGYyMWJbJ19zb2NrZXQnXVtfMHg3NjU4MzcoMHgxYjUpXSYmXzB4NTBmMjFiW18weDc2NTgzNygweDIxNCldWyd1bnJlZiddKCksXzB4M2FmYjU0KF8weDUwZjIxYik7fSxfMHg1MGYyMWJbXzB4NDI3Y2M0KDB4MjAyKV09KCk9Pnt2YXIgXzB4MWYxNGEwPV8weDQyN2NjNDt0aGlzW18weDFmMTRhMCgweDFlMCldPSEweDAsdGhpc1snX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHg1MGYyMWIpLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKTt9LF8weDUwZjIxYltfMHg0MjdjYzQoMHgxOGIpXT1fMHgyMGY3MmQ9Pnt2YXIgXzB4MmM4Njg3PV8weDQyN2NjNDt0cnl7aWYoIShfMHgyMGY3MmQhPW51bGwmJl8weDIwZjcyZFtfMHgyYzg2ODcoMHgxM2QpXSl8fCF0aGlzW18weDJjODY4NygweDFhMildKXJldHVybjtsZXQgXzB4MzFlMWJiPUpTT05bJ3BhcnNlJ10oXzB4MjBmNzJkW18weDJjODY4NygweDEzZCldKTt0aGlzWydldmVudFJlY2VpdmVkQ2FsbGJhY2snXShfMHgzMWUxYmJbJ21ldGhvZCddLF8weDMxZTFiYltfMHgyYzg2ODcoMHgxYmIpXSx0aGlzW18weDJjODY4NygweDFhNSldLHRoaXNbXzB4MmM4Njg3KDB4MTRkKV0pO31jYXRjaHt9fTt9KVsndGhlbiddKF8weDQ3MzkyYT0+KHRoaXNbXzB4NTg4MmQ2KDB4MjA5KV09ITB4MCx0aGlzW18weDU4ODJkNigweDE3MyldPSEweDEsdGhpc1tfMHg1ODgyZDYoMHgxZTApXT0hMHgxLHRoaXNbXzB4NTg4MmQ2KDB4MWI4KV09ITB4MCx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPTB4MCxfMHg0NzM5MmEpKVsnY2F0Y2gnXShfMHg1NTc0NTg9Pih0aGlzWydfY29ubmVjdGVkJ109ITB4MSx0aGlzW18weDU4ODJkNigweDE3MyldPSEweDEsY29uc29sZVtfMHg1ODgyZDYoMHgxZjgpXSgnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnK3RoaXNbXzB4NTg4MmQ2KDB4MThmKV0pLF8weDRiMTcyMShuZXcgRXJyb3IoXzB4NTg4MmQ2KDB4MTQzKSsoXzB4NTU3NDU4JiZfMHg1NTc0NThbXzB4NTg4MmQ2KDB4MjE4KV0pKSkpKTt9KSk7fSx6Wydwcm90b3R5cGUnXVtfMHgyN2Y0ZWEoMHgxN2QpXT1mdW5jdGlvbihfMHgxZjBhMmMpe3ZhciBfMHg0YmYyZmY9XzB4MjdmNGVhO3RoaXNbXzB4NGJmMmZmKDB4MjA5KV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDE7dHJ5e18weDFmMGEyY1tfMHg0YmYyZmYoMHgyMDIpXT1udWxsLF8weDFmMGEyY1tfMHg0YmYyZmYoMHgxZmUpXT1udWxsLF8weDFmMGEyY1tfMHg0YmYyZmYoMHgyMWMpXT1udWxsO31jYXRjaHt9dHJ5e18weDFmMGEyY1tfMHg0YmYyZmYoMHgxM2IpXTwweDImJl8weDFmMGEyY1tfMHg0YmYyZmYoMHgxYzcpXSgpO31jYXRjaHt9fSx6Wydwcm90b3R5cGUnXVtfMHgyN2Y0ZWEoMHgxZDEpXT1mdW5jdGlvbigpe3ZhciBfMHgzNDFiYjI9XzB4MjdmNGVhO2NsZWFyVGltZW91dCh0aGlzWydfcmVjb25uZWN0VGltZW91dCddKSwhKHRoaXNbXzB4MzQxYmIyKDB4MTMzKV0+PXRoaXNbJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50J10pJiYodGhpc1tfMHgzNDFiYjIoMHgyMjYpXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weDQzYmViZD1fMHgzNDFiYjIsXzB4NWE3OWY0O3RoaXNbXzB4NDNiZWJkKDB4MjA5KV18fHRoaXNbXzB4NDNiZWJkKDB4MTczKV18fCh0aGlzW18weDQzYmViZCgweDE5OCldKCksKF8weDVhNzlmND10aGlzW18weDQzYmViZCgweDEzNildKT09bnVsbHx8XzB4NWE3OWY0W18weDQzYmViZCgweDFhOSldKCgpPT50aGlzWydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCkpKTt9LDB4MWY0KSx0aGlzW18weDM0MWJiMigweDIyNildWyd1bnJlZiddJiZ0aGlzW18weDM0MWJiMigweDIyNildWyd1bnJlZiddKCkpO30seltfMHgyN2Y0ZWEoMHgyMjApXVsnc2VuZCddPWFzeW5jIGZ1bmN0aW9uKF8weDEzMTNlZCl7dmFyIF8weDQ3OWVmMD1fMHgyN2Y0ZWE7dHJ5e2lmKCF0aGlzW18weDQ3OWVmMCgweDFiOCldKXJldHVybjt0aGlzW18weDQ3OWVmMCgweDFlMCldJiZ0aGlzW18weDQ3OWVmMCgweDE5OCldKCksKGF3YWl0IHRoaXNbXzB4NDc5ZWYwKDB4MTM2KV0pW18weDQ3OWVmMCgweDFhYyldKEpTT05bXzB4NDc5ZWYwKDB4MWZhKV0oXzB4MTMxM2VkKSk7fWNhdGNoKF8weDExYTg3Yyl7dGhpc1tfMHg0NzllZjAoMHgxYzIpXT9jb25zb2xlW18weDQ3OWVmMCgweDFmOCldKHRoaXNbJ19zZW5kRXJyb3JNZXNzYWdlJ10rJzpcXFxceDIwJysoXzB4MTFhODdjJiZfMHgxMWE4N2NbJ21lc3NhZ2UnXSkpOih0aGlzW18weDQ3OWVmMCgweDFjMildPSEweDAsY29uc29sZVsnd2FybiddKHRoaXNbXzB4NDc5ZWYwKDB4MTM5KV0rJzpcXFxceDIwJysoXzB4MTFhODdjJiZfMHgxMWE4N2NbJ21lc3NhZ2UnXSksXzB4MTMxM2VkKSksdGhpc1tfMHg0NzllZjAoMHgxYjgpXT0hMHgxLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKTt9fTtmdW5jdGlvbiBIKF8weDQzZjg5NixfMHgzZjJmNWEsXzB4NTY0MTYxLF8weDMyNDFhOCxfMHgxODhkOWMsXzB4NGMyYzE2LF8weDQ0NzMwZixfMHg2NDdkYjE9bmUpe3ZhciBfMHgzYmIzY2M9XzB4MjdmNGVhO2xldCBfMHgxMDA3YjU9XzB4NTY0MTYxW18weDNiYjNjYygweDIxMyldKCcsJylbXzB4M2JiM2NjKDB4MjBhKV0oXzB4YzZlZDAzPT57dmFyIF8weDQwMWEwMz1fMHgzYmIzY2MsXzB4M2M1YTRhLF8weDE5ZmQ2ZSxfMHg0NmMwMDksXzB4NDhmOWY2LF8weDRmMmZiMCxfMHgzYWE0NjQsXzB4NWU1YjM1LF8weDI4YzZiODt0cnl7aWYoIV8weDQzZjg5NltfMHg0MDFhMDMoMHgxNmIpXSl7bGV0IF8weDEyYWI4YT0oKF8weDE5ZmQ2ZT0oXzB4M2M1YTRhPV8weDQzZjg5NltfMHg0MDFhMDMoMHgxN2UpXSk9PW51bGw/dm9pZCAweDA6XzB4M2M1YTRhW18weDQwMWEwMygweDE2YyldKT09bnVsbD92b2lkIDB4MDpfMHgxOWZkNmVbJ25vZGUnXSl8fCgoXzB4NDhmOWY2PShfMHg0NmMwMDk9XzB4NDNmODk2Wydwcm9jZXNzJ10pPT1udWxsP3ZvaWQgMHgwOl8weDQ2YzAwOVsnZW52J10pPT1udWxsP3ZvaWQgMHgwOl8weDQ4ZjlmNltfMHg0MDFhMDMoMHgxYmEpXSk9PT1fMHg0MDFhMDMoMHgxZWQpOyhfMHgxODhkOWM9PT1fMHg0MDFhMDMoMHgxNzcpfHxfMHgxODhkOWM9PT1fMHg0MDFhMDMoMHgxOTIpfHxfMHgxODhkOWM9PT1fMHg0MDFhMDMoMHgyMTIpfHxfMHgxODhkOWM9PT1fMHg0MDFhMDMoMHgxNDIpKSYmKF8weDE4OGQ5Yys9XzB4MTJhYjhhP18weDQwMWEwMygweDFiMCk6XzB4NDAxYTAzKDB4MTg3KSk7bGV0IF8weDFlMmY3Mz0nJztfMHgxODhkOWM9PT0ncmVhY3QtbmF0aXZlJyYmKF8weDFlMmY3Mz0oKChfMHg1ZTViMzU9KF8weDNhYTQ2ND0oXzB4NGYyZmIwPV8weDQzZjg5NltfMHg0MDFhMDMoMHgyMWQpXSk9PW51bGw/dm9pZCAweDA6XzB4NGYyZmIwW18weDQwMWEwMygweDE3OCldKT09bnVsbD92b2lkIDB4MDpfMHgzYWE0NjRbJ0V4cG9EZXZpY2UnXSk9PW51bGw/dm9pZCAweDA6XzB4NWU1YjM1W18weDQwMWEwMygweDEzMSldKXx8J2VtdWxhdG9yJylbJ3RvTG93ZXJDYXNlJ10oKSxfMHgxZTJmNzMmJihfMHgxODhkOWMrPSdcXFxceDIwJytfMHgxZTJmNzMsKF8weDFlMmY3Mz09PV8weDQwMWEwMygweDFhNil8fF8weDFlMmY3Mz09PSdlbXVsYXRvcicmJigoXzB4MjhjNmI4PV8weDQzZjg5NltfMHg0MDFhMDMoMHgxYTgpXSk9PW51bGw/dm9pZCAweDA6XzB4MjhjNmI4W18weDQwMWEwMygweDE3NildKT09PV8weDQwMWEwMygweDIxNikpJiYoXzB4M2YyZjVhPV8weDQwMWEwMygweDIxNikpKSksXzB4NDNmODk2W18weDQwMWEwMygweDE2YildPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHgxODhkOWN9LF8weDQ0NzMwZiYmXzB4MTg4ZDljJiYhXzB4MTJhYjhhJiYoXzB4MWUyZjczP2NvbnNvbGVbXzB4NDAxYTAzKDB4MTY5KV0oXzB4NDAxYTAzKDB4MWY1KStfMHgxZTJmNzMrXzB4NDAxYTAzKDB4MWViKSk6Y29uc29sZVtfMHg0MDFhMDMoMHgxNjkpXShfMHg0MDFhMDMoMHgyMDgpKyhfMHgxODhkOWNbXzB4NDAxYTAzKDB4MTgxKV0oMHgwKVtfMHg0MDFhMDMoMHgxZWYpXSgpK18weDE4OGQ5Y1tfMHg0MDFhMDMoMHgxOTcpXSgweDEpKSsnLCcsJ2JhY2tncm91bmQ6XFxcXHgyMHJnYigzMCwzMCwzMCk7XFxcXHgyMGNvbG9yOlxcXFx4MjByZ2IoMjU1LDIxMyw5MiknLF8weDQwMWEwMygweDFkMykpKTt9bGV0IF8weGI0ZDllOD1uZXcgeihfMHg0M2Y4OTYsXzB4M2YyZjVhLF8weGM2ZWQwMyxfMHgzMjQxYTgsXzB4NGMyYzE2LF8weDY0N2RiMSk7cmV0dXJuIF8weGI0ZDllOFtfMHg0MDFhMDMoMHgxYWMpXVtfMHg0MDFhMDMoMHgxOWQpXShfMHhiNGQ5ZTgpO31jYXRjaChfMHg0NDJhOTcpe3JldHVybiBjb25zb2xlW18weDQwMWEwMygweDFmOCldKF8weDQwMWEwMygweDEzMiksXzB4NDQyYTk3JiZfMHg0NDJhOTdbXzB4NDAxYTAzKDB4MjE4KV0pLCgpPT57fTt9fSk7cmV0dXJuIF8weGQ3MWMwMT0+XzB4MTAwN2I1W18weDNiYjNjYygweDIxNyldKF8weDEwN2JjOD0+XzB4MTA3YmM4KF8weGQ3MWMwMSkpO31mdW5jdGlvbiBfMHg1Y2Y3KF8weDQ5MDJiYSxfMHgxNWIyN2Epe3ZhciBfMHgzNmQ5MmE9XzB4MzZkOSgpO3JldHVybiBfMHg1Y2Y3PWZ1bmN0aW9uKF8weDVjZjc1MixfMHhiOThhYWIpe18weDVjZjc1Mj1fMHg1Y2Y3NTItMHgxMmM7dmFyIF8weGM0NDg5Nj1fMHgzNmQ5MmFbXzB4NWNmNzUyXTtyZXR1cm4gXzB4YzQ0ODk2O30sXzB4NWNmNyhfMHg0OTAyYmEsXzB4MTViMjdhKTt9ZnVuY3Rpb24gbmUoXzB4NTU1YzdlLF8weDVkYzc1NyxfMHg1NjFkYTEsXzB4OWMwMDRkKXt2YXIgXzB4MWE0YThiPV8weDI3ZjRlYTtfMHg5YzAwNGQmJl8weDU1NWM3ZT09PV8weDFhNGE4YigweDFhZCkmJl8weDU2MWRhMVtfMHgxYTRhOGIoMHgxYTgpXVsncmVsb2FkJ10oKTt9ZnVuY3Rpb24gYihfMHhmYWVlZTEpe3ZhciBfMHg1NmQxOGM9XzB4MjdmNGVhLF8weDE4ODY4OSxfMHg1YjkyYmU7bGV0IF8weDIzOWUxYj1mdW5jdGlvbihfMHgzZWI2MjksXzB4MzVkZWM3KXtyZXR1cm4gXzB4MzVkZWM3LV8weDNlYjYyOTt9LF8weDRiYWE0YztpZihfMHhmYWVlZTFbXzB4NTZkMThjKDB4MTg5KV0pXzB4NGJhYTRjPWZ1bmN0aW9uKCl7dmFyIF8weDIwODU4Mj1fMHg1NmQxOGM7cmV0dXJuIF8weGZhZWVlMVsncGVyZm9ybWFuY2UnXVtfMHgyMDg1ODIoMHgxZjYpXSgpO307ZWxzZXtpZihfMHhmYWVlZTFbXzB4NTZkMThjKDB4MTdlKV0mJl8weGZhZWVlMVtfMHg1NmQxOGMoMHgxN2UpXVtfMHg1NmQxOGMoMHgxZjcpXSYmKChfMHg1YjkyYmU9KF8weDE4ODY4OT1fMHhmYWVlZTFbJ3Byb2Nlc3MnXSk9PW51bGw/dm9pZCAweDA6XzB4MTg4Njg5W18weDU2ZDE4YygweDIzMSldKT09bnVsbD92b2lkIDB4MDpfMHg1YjkyYmVbJ05FWFRfUlVOVElNRSddKSE9PSdlZGdlJylfMHg0YmFhNGM9ZnVuY3Rpb24oKXt2YXIgXzB4NDA4YTFjPV8weDU2ZDE4YztyZXR1cm4gXzB4ZmFlZWUxW18weDQwOGExYygweDE3ZSldW18weDQwOGExYygweDFmNyldKCk7fSxfMHgyMzllMWI9ZnVuY3Rpb24oXzB4MTAyODdkLF8weDQ4NmE0MCl7cmV0dXJuIDB4M2U4KihfMHg0ODZhNDBbMHgwXS1fMHgxMDI4N2RbMHgwXSkrKF8weDQ4NmE0MFsweDFdLV8weDEwMjg3ZFsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHgxNzNlMTZ9PXJlcXVpcmUoXzB4NTZkMThjKDB4MWNjKSk7XzB4NGJhYTRjPWZ1bmN0aW9uKCl7dmFyIF8weDJhZjBlNj1fMHg1NmQxOGM7cmV0dXJuIF8weDE3M2UxNltfMHgyYWYwZTYoMHgxZjYpXSgpO307fWNhdGNoe18weDRiYWE0Yz1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDIzOWUxYiwndGltZVN0YW1wJzpfMHg0YmFhNGMsJ25vdyc6KCk9PkRhdGVbXzB4NTZkMThjKDB4MWY2KV0oKX07fWZ1bmN0aW9uIFgoXzB4NWFjZmMzLF8weDQzZjI5MCxfMHg0MDNmMWEpe3ZhciBfMHhjNzQ1Yzg9XzB4MjdmNGVhLF8weGRiNDFjOCxfMHg0MDlkYjMsXzB4NTY5ODdmLF8weDUyMmI0NCxfMHgxMDFlNzksXzB4MjcyY2EyLF8weDE2YmNlYjtpZihfMHg1YWNmYzNbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddIT09dm9pZCAweDApcmV0dXJuIF8weDVhY2ZjM1tfMHhjNzQ1YzgoMHgxOTkpXTtsZXQgXzB4NTI1ZDg4PSgoXzB4NDA5ZGIzPShfMHhkYjQxYzg9XzB4NWFjZmMzWydwcm9jZXNzJ10pPT1udWxsP3ZvaWQgMHgwOl8weGRiNDFjOFtfMHhjNzQ1YzgoMHgxNmMpXSk9PW51bGw/dm9pZCAweDA6XzB4NDA5ZGIzW18weGM3NDVjOCgweDE2NyldKXx8KChfMHg1MjJiNDQ9KF8weDU2OTg3Zj1fMHg1YWNmYzNbXzB4Yzc0NWM4KDB4MTdlKV0pPT1udWxsP3ZvaWQgMHgwOl8weDU2OTg3ZlsnZW52J10pPT1udWxsP3ZvaWQgMHgwOl8weDUyMmI0NFtfMHhjNzQ1YzgoMHgxYmEpXSk9PT1fMHhjNzQ1YzgoMHgxZWQpLF8weDI4OGFlMz0hIShfMHg0MDNmMWE9PT1fMHhjNzQ1YzgoMHgxNjEpJiYoKF8weDEwMWU3OT1fMHg1YWNmYzNbJ2V4cG8nXSk9PW51bGw/dm9pZCAweDA6XzB4MTAxZTc5W18weGM3NDVjOCgweDE3OCldKSk7ZnVuY3Rpb24gXzB4NWJhZGYzKF8weDRlZGMzYSl7dmFyIF8weDE2OTk0ND1fMHhjNzQ1Yzg7aWYoXzB4NGVkYzNhW18weDE2OTk0NCgweDE3NSldKCcvJykmJl8weDRlZGMzYVtfMHgxNjk5NDQoMHgxNDkpXSgnLycpKXtsZXQgXzB4NTVjODY3PW5ldyBSZWdFeHAoXzB4NGVkYzNhWydzbGljZSddKDB4MSwtMHgxKSk7cmV0dXJuIF8weDQ4ZmQ4Yj0+XzB4NTVjODY3Wyd0ZXN0J10oXzB4NDhmZDhiKTt9ZWxzZXtpZihfMHg0ZWRjM2FbJ2luY2x1ZGVzJ10oJyonKXx8XzB4NGVkYzNhW18weDE2OTk0NCgweDFhYildKCc/Jykpe2xldCBfMHg0MmY0YmU9bmV3IFJlZ0V4cCgnXicrXzB4NGVkYzNhW18weDE2OTk0NCgweDEzYSldKC9cXFxcLi9nLFN0cmluZ1tfMHgxNjk5NDQoMHgxY2IpXSgweDVjKSsnLicpW18weDE2OTk0NCgweDEzYSldKC9cXFxcKi9nLCcuKicpW18weDE2OTk0NCgweDEzYSldKC9cXFxcPy9nLCcuJykrU3RyaW5nW18weDE2OTk0NCgweDFjYildKDB4MjQpKTtyZXR1cm4gXzB4MTY5MTg0PT5fMHg0MmY0YmVbJ3Rlc3QnXShfMHgxNjkxODQpO31lbHNlIHJldHVybiBfMHhiZmEzMmQ9Pl8weGJmYTMyZD09PV8weDRlZGMzYTt9fWxldCBfMHgxYjQzNmE9XzB4NDNmMjkwW18weGM3NDVjOCgweDIwYSldKF8weDViYWRmMyk7cmV0dXJuIF8weDVhY2ZjM1tfMHhjNzQ1YzgoMHgxOTkpXT1fMHg1MjVkODh8fCFfMHg0M2YyOTAsIV8weDVhY2ZjM1tfMHhjNzQ1YzgoMHgxOTkpXSYmKChfMHgyNzJjYTI9XzB4NWFjZmMzWydsb2NhdGlvbiddKT09bnVsbD92b2lkIDB4MDpfMHgyNzJjYTJbXzB4Yzc0NWM4KDB4MTc2KV0pJiYoXzB4NWFjZmMzW18weGM3NDVjOCgweDE5OSldPV8weDFiNDM2YVtfMHhjNzQ1YzgoMHgxNmEpXShfMHgyZjFhNjI9Pl8weDJmMWE2MihfMHg1YWNmYzNbXzB4Yzc0NWM4KDB4MWE4KV1bXzB4Yzc0NWM4KDB4MTc2KV0pKSksXzB4Mjg4YWUzJiYhXzB4NWFjZmMzW18weGM3NDVjOCgweDE5OSldJiYhKChfMHgxNmJjZWI9XzB4NWFjZmMzWydsb2NhdGlvbiddKSE9bnVsbCYmXzB4MTZiY2ViWydob3N0bmFtZSddKSYmKF8weDVhY2ZjM1tfMHhjNzQ1YzgoMHgxOTkpXT0hMHgwKSxfMHg1YWNmYzNbXzB4Yzc0NWM4KDB4MTk5KV07fWZ1bmN0aW9uIEooXzB4MWI4NGNmLF8weDIyY2I3NSxfMHgxMGMzMzAsXzB4NDI1MDI5LF8weDUxMzEzMSxfMHg0NzVhZmEpe3ZhciBfMHgyMTQ2OTY9XzB4MjdmNGVhO18weDFiODRjZj1fMHgxYjg0Y2YsXzB4MjJjYjc1PV8weDIyY2I3NSxfMHgxMGMzMzA9XzB4MTBjMzMwLF8weDQyNTAyOT1fMHg0MjUwMjksXzB4NTEzMTMxPV8weDUxMzEzMSxfMHg1MTMxMzE9XzB4NTEzMTMxfHx7fSxfMHg1MTMxMzFbXzB4MjE0Njk2KDB4MWIzKV09XzB4NTEzMTMxW18weDIxNDY5NigweDFiMyldfHx7fSxfMHg1MTMxMzFbXzB4MjE0Njk2KDB4MjMwKV09XzB4NTEzMTMxW18weDIxNDY5NigweDIzMCldfHx7fSxfMHg1MTMxMzFbJ3JlZHVjZVBvbGljeSddPV8weDUxMzEzMVtfMHgyMTQ2OTYoMHgxM2YpXXx8e30sXzB4NTEzMTMxWydyZWR1Y2VQb2xpY3knXVtfMHgyMTQ2OTYoMHgxZDApXT1fMHg1MTMxMzFbXzB4MjE0Njk2KDB4MTNmKV1bXzB4MjE0Njk2KDB4MWQwKV18fHt9LF8weDUxMzEzMVtfMHgyMTQ2OTYoMHgxM2YpXVsnZ2xvYmFsJ109XzB4NTEzMTMxW18weDIxNDY5NigweDEzZildWydnbG9iYWwnXXx8e307bGV0IF8weDVmMzRlNz17J3BlckxvZ3BvaW50Jzp7J3JlZHVjZU9uQ291bnQnOl8weDUxMzEzMVtfMHgyMTQ2OTYoMHgxM2YpXVtfMHgyMTQ2OTYoMHgxZDApXVtfMHgyMTQ2OTYoMHgxY2UpXXx8MHgzMiwncmVkdWNlT25BY2N1bXVsYXRlZFByb2Nlc3NpbmdUaW1lTXMnOl8weDUxMzEzMVtfMHgyMTQ2OTYoMHgxM2YpXVtfMHgyMTQ2OTYoMHgxZDApXVtfMHgyMTQ2OTYoMHgxYWEpXXx8MHg2NCwncmVzZXRXaGVuUXVpZXRNcyc6XzB4NTEzMTMxW18weDIxNDY5NigweDEzZildW18weDIxNDY5NigweDFkMCldW18weDIxNDY5NigweDE0YildfHwweDFmNCwncmVzZXRPblByb2Nlc3NpbmdUaW1lQXZlcmFnZU1zJzpfMHg1MTMxMzFbJ3JlZHVjZVBvbGljeSddW18weDIxNDY5NigweDFkMCldW18weDIxNDY5NigweDEzNCldfHwweDY0fSwnZ2xvYmFsJzp7J3JlZHVjZU9uQ291bnQnOl8weDUxMzEzMVsncmVkdWNlUG9saWN5J11bXzB4MjE0Njk2KDB4MWE1KV1bXzB4MjE0Njk2KDB4MWNlKV18fDB4M2U4LCdyZWR1Y2VPbkFjY3VtdWxhdGVkUHJvY2Vzc2luZ1RpbWVNcyc6XzB4NTEzMTMxW18weDIxNDY5NigweDEzZildW18weDIxNDY5NigweDFhNSldW18weDIxNDY5NigweDFhYSldfHwweDEyYywncmVzZXRXaGVuUXVpZXRNcyc6XzB4NTEzMTMxWydyZWR1Y2VQb2xpY3knXVsnZ2xvYmFsJ11bXzB4MjE0Njk2KDB4MTRiKV18fDB4MzIsJ3Jlc2V0T25Qcm9jZXNzaW5nVGltZUF2ZXJhZ2VNcyc6XzB4NTEzMTMxW18weDIxNDY5NigweDEzZildW18weDIxNDY5NigweDFhNSldW18weDIxNDY5NigweDEzNCldfHwweDY0fX0sXzB4MWQ3ZGZmPWIoXzB4MWI4NGNmKSxfMHg0ODcyN2E9XzB4MWQ3ZGZmWydlbGFwc2VkJ10sXzB4NTU5M2YwPV8weDFkN2RmZltfMHgyMTQ2OTYoMHgxNzEpXTtmdW5jdGlvbiBfMHgzNGVkMWQoKXt2YXIgXzB4MWE0OWRlPV8weDIxNDY5Njt0aGlzW18weDFhNDlkZSgweDFiOSldPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHgxYTQ5ZGUoMHgxY2YpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4MWE0OWRlKDB4MTljKV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1tfMHgxYTQ5ZGUoMHgyMDEpXT1fMHgxYjg0Y2ZbXzB4MWE0OWRlKDB4MjI0KV0sdGhpc1tfMHgxYTQ5ZGUoMHgxNjIpXT1fMHgxYjg0Y2ZbJ0hUTUxBbGxDb2xsZWN0aW9uJ10sdGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddPU9iamVjdFtfMHgxYTQ5ZGUoMHgxOGQpXSx0aGlzW18weDFhNDlkZSgweDFmMildPU9iamVjdFtfMHgxYTQ5ZGUoMHgyMWEpXSx0aGlzWydfU3ltYm9sJ109XzB4MWI4NGNmW18weDFhNDlkZSgweDE1NyldLHRoaXNbJ19yZWdFeHBUb1N0cmluZyddPVJlZ0V4cFtfMHgxYTQ5ZGUoMHgyMjApXVsndG9TdHJpbmcnXSx0aGlzW18weDFhNDlkZSgweDIyMSldPURhdGVbXzB4MWE0OWRlKDB4MjIwKV1bXzB4MWE0OWRlKDB4MTlhKV07fV8weDM0ZWQxZFtfMHgyMTQ2OTYoMHgyMjApXVtfMHgyMTQ2OTYoMHgxN2EpXT1mdW5jdGlvbihfMHg0ZWQxNjksXzB4N2RjYTVlLF8weDFlYTFlNyxfMHg0Y2E4Mzkpe3ZhciBfMHg1ODE5Y2I9XzB4MjE0Njk2LF8weDJmZmZlZD10aGlzLF8weGQ5MmI3ZT1fMHgxZWExZTdbJ2F1dG9FeHBhbmQnXTtmdW5jdGlvbiBfMHg1ZjJjNDUoXzB4NWU3NjFmLF8weDRlMWJjMixfMHgyOTYxYTgpe3ZhciBfMHgxMTE0ZGM9XzB4NWNmNztfMHg0ZTFiYzJbXzB4MTExNGRjKDB4MjAzKV09J3Vua25vd24nLF8weDRlMWJjMltfMHgxMTE0ZGMoMHgxZmIpXT1fMHg1ZTc2MWZbJ21lc3NhZ2UnXSxfMHg1NTJhYjY9XzB4Mjk2MWE4W18weDExMTRkYygweDE2NyldW18weDExMTRkYygweDE0NildLF8weDI5NjFhOFtfMHgxMTE0ZGMoMHgxNjcpXVsnY3VycmVudCddPV8weDRlMWJjMixfMHgyZmZmZWRbXzB4MTExNGRjKDB4MWU3KV0oXzB4NGUxYmMyLF8weDI5NjFhOCk7fWxldCBfMHgyMzhmY2IsXzB4NWFlODkwLF8weDE2ZTZmNz1fMHgxYjg0Y2ZbXzB4NTgxOWNiKDB4MjA2KV07XzB4MWI4NGNmW18weDU4MTljYigweDIwNildPSEweDAsXzB4MWI4NGNmW18weDU4MTljYigweDFjZCldJiYoXzB4MjM4ZmNiPV8weDFiODRjZltfMHg1ODE5Y2IoMHgxY2QpXVtfMHg1ODE5Y2IoMHgxZmIpXSxfMHg1YWU4OTA9XzB4MWI4NGNmW18weDU4MTljYigweDFjZCldW18weDU4MTljYigweDFmOCldLF8weDIzOGZjYiYmKF8weDFiODRjZltfMHg1ODE5Y2IoMHgxY2QpXVtfMHg1ODE5Y2IoMHgxZmIpXT1mdW5jdGlvbigpe30pLF8weDVhZTg5MCYmKF8weDFiODRjZlsnY29uc29sZSddW18weDU4MTljYigweDFmOCldPWZ1bmN0aW9uKCl7fSkpO3RyeXt0cnl7XzB4MWVhMWU3WydsZXZlbCddKyssXzB4MWVhMWU3W18weDU4MTljYigweDE2MyldJiZfMHgxZWExZTdbXzB4NTgxOWNiKDB4MWE0KV1bXzB4NTgxOWNiKDB4MTZlKV0oXzB4N2RjYTVlKTt2YXIgXzB4MTZjZjRjLF8weDM2MjkxYSxfMHg0MjQ4MDMsXzB4NTRhYzA3LF8weGQ0OGE0ND1bXSxfMHg0YzgzMDk9W10sXzB4MTY2MWRjLF8weDI0YTVlOD10aGlzW18weDU4MTljYigweDE0NyldKF8weDdkY2E1ZSksXzB4MmQwZTNjPV8weDI0YTVlOD09PV8weDU4MTljYigweDFiMiksXzB4NTE5M2ZlPSEweDEsXzB4MjNjNzc1PV8weDI0YTVlOD09PV8weDU4MTljYigweDE0MCksXzB4NmUzNjRjPXRoaXNbXzB4NTgxOWNiKDB4MjI5KV0oXzB4MjRhNWU4KSxfMHg1Mjc3ODY9dGhpc1snX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnXShfMHgyNGE1ZTgpLF8weDIzNjI0NT1fMHg2ZTM2NGN8fF8weDUyNzc4NixfMHgyZTJkZTM9e30sXzB4MjIzNmEzPTB4MCxfMHgxOGI4NDA9ITB4MSxfMHg1NTJhYjYsXzB4NTA1NmRkPS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgxZWExZTdbXzB4NTgxOWNiKDB4MjFlKV0pe2lmKF8weDJkMGUzYyl7aWYoXzB4MzYyOTFhPV8weDdkY2E1ZVtfMHg1ODE5Y2IoMHgxNTMpXSxfMHgzNjI5MWE+XzB4MWVhMWU3W18weDU4MTljYigweDE0NSldKXtmb3IoXzB4NDI0ODAzPTB4MCxfMHg1NGFjMDc9XzB4MWVhMWU3W18weDU4MTljYigweDE0NSldLF8weDE2Y2Y0Yz1fMHg0MjQ4MDM7XzB4MTZjZjRjPF8weDU0YWMwNztfMHgxNmNmNGMrKylfMHg0YzgzMDlbXzB4NTgxOWNiKDB4MTZlKV0oXzB4MmZmZmVkW18weDU4MTljYigweDFmNCldKF8weGQ0OGE0NCxfMHg3ZGNhNWUsXzB4MjRhNWU4LF8weDE2Y2Y0YyxfMHgxZWExZTcpKTtfMHg0ZWQxNjlbXzB4NTgxOWNiKDB4MjBmKV09ITB4MDt9ZWxzZXtmb3IoXzB4NDI0ODAzPTB4MCxfMHg1NGFjMDc9XzB4MzYyOTFhLF8weDE2Y2Y0Yz1fMHg0MjQ4MDM7XzB4MTZjZjRjPF8weDU0YWMwNztfMHgxNmNmNGMrKylfMHg0YzgzMDlbJ3B1c2gnXShfMHgyZmZmZWRbXzB4NTgxOWNiKDB4MWY0KV0oXzB4ZDQ4YTQ0LF8weDdkY2E1ZSxfMHgyNGE1ZTgsXzB4MTZjZjRjLF8weDFlYTFlNykpO31fMHgxZWExZTdbXzB4NTgxOWNiKDB4MTQ4KV0rPV8weDRjODMwOVtfMHg1ODE5Y2IoMHgxNTMpXTt9aWYoIShfMHgyNGE1ZTg9PT1fMHg1ODE5Y2IoMHgxZjMpfHxfMHgyNGE1ZTg9PT1fMHg1ODE5Y2IoMHgyMjQpKSYmIV8weDZlMzY0YyYmXzB4MjRhNWU4IT09XzB4NTgxOWNiKDB4MTJlKSYmXzB4MjRhNWU4IT09XzB4NTgxOWNiKDB4MWM5KSYmXzB4MjRhNWU4IT09XzB4NTgxOWNiKDB4MjJmKSl7dmFyIF8weDI2MDQzOT1fMHg0Y2E4MzlbXzB4NTgxOWNiKDB4MjEwKV18fF8weDFlYTFlN1tfMHg1ODE5Y2IoMHgyMTApXTtpZih0aGlzWydfaXNTZXQnXShfMHg3ZGNhNWUpPyhfMHgxNmNmNGM9MHgwLF8weDdkY2E1ZVsnZm9yRWFjaCddKGZ1bmN0aW9uKF8weDM1NDVmZSl7dmFyIF8weDRmN2U5YT1fMHg1ODE5Y2I7aWYoXzB4MjIzNmEzKyssXzB4MWVhMWU3W18weDRmN2U5YSgweDE0OCldKyssXzB4MjIzNmEzPl8weDI2MDQzOSl7XzB4MThiODQwPSEweDA7cmV0dXJuO31pZighXzB4MWVhMWU3W18weDRmN2U5YSgweDE0YSldJiZfMHgxZWExZTdbXzB4NGY3ZTlhKDB4MTYzKV0mJl8weDFlYTFlN1tfMHg0ZjdlOWEoMHgxNDgpXT5fMHgxZWExZTdbXzB4NGY3ZTlhKDB4MWQ0KV0pe18weDE4Yjg0MD0hMHgwO3JldHVybjt9XzB4NGM4MzA5W18weDRmN2U5YSgweDE2ZSldKF8weDJmZmZlZFtfMHg0ZjdlOWEoMHgxZjQpXShfMHhkNDhhNDQsXzB4N2RjYTVlLCdTZXQnLF8weDE2Y2Y0YysrLF8weDFlYTFlNyxmdW5jdGlvbihfMHgyOGNhNzYpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgyOGNhNzY7fTt9KF8weDM1NDVmZSkpKTt9KSk6dGhpc1tfMHg1ODE5Y2IoMHgxNGMpXShfMHg3ZGNhNWUpJiZfMHg3ZGNhNWVbXzB4NTgxOWNiKDB4MjE3KV0oZnVuY3Rpb24oXzB4NDMwMjc5LF8weGRkZjBkYSl7dmFyIF8weDNiNTZkYT1fMHg1ODE5Y2I7aWYoXzB4MjIzNmEzKyssXzB4MWVhMWU3W18weDNiNTZkYSgweDE0OCldKyssXzB4MjIzNmEzPl8weDI2MDQzOSl7XzB4MThiODQwPSEweDA7cmV0dXJuO31pZighXzB4MWVhMWU3Wydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weDFlYTFlN1tfMHgzYjU2ZGEoMHgxNjMpXSYmXzB4MWVhMWU3W18weDNiNTZkYSgweDE0OCldPl8weDFlYTFlN1tfMHgzYjU2ZGEoMHgxZDQpXSl7XzB4MThiODQwPSEweDA7cmV0dXJuO312YXIgXzB4MzUyYTEzPV8weGRkZjBkYVtfMHgzYjU2ZGEoMHgxOWEpXSgpO18weDM1MmExM1tfMHgzYjU2ZGEoMHgxNTMpXT4weDY0JiYoXzB4MzUyYTEzPV8weDM1MmExM1snc2xpY2UnXSgweDAsMHg2NCkrJy4uLicpLF8weDRjODMwOVtfMHgzYjU2ZGEoMHgxNmUpXShfMHgyZmZmZWRbXzB4M2I1NmRhKDB4MWY0KV0oXzB4ZDQ4YTQ0LF8weDdkY2E1ZSwnTWFwJyxfMHgzNTJhMTMsXzB4MWVhMWU3LGZ1bmN0aW9uKF8weDE5MTZlYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDE5MTZlYTt9O30oXzB4NDMwMjc5KSkpO30pLCFfMHg1MTkzZmUpe3RyeXtmb3IoXzB4MTY2MWRjIGluIF8weDdkY2E1ZSlpZighKF8weDJkMGUzYyYmXzB4NTA1NmRkW18weDU4MTljYigweDFiNildKF8weDE2NjFkYykpJiYhdGhpc1tfMHg1ODE5Y2IoMHgxNGUpXShfMHg3ZGNhNWUsXzB4MTY2MWRjLF8weDFlYTFlNykpe2lmKF8weDIyMzZhMysrLF8weDFlYTFlN1tfMHg1ODE5Y2IoMHgxNDgpXSsrLF8weDIyMzZhMz5fMHgyNjA0Mzkpe18weDE4Yjg0MD0hMHgwO2JyZWFrO31pZighXzB4MWVhMWU3W18weDU4MTljYigweDE0YSldJiZfMHgxZWExZTdbXzB4NTgxOWNiKDB4MTYzKV0mJl8weDFlYTFlN1tfMHg1ODE5Y2IoMHgxNDgpXT5fMHgxZWExZTdbXzB4NTgxOWNiKDB4MWQ0KV0pe18weDE4Yjg0MD0hMHgwO2JyZWFrO31fMHg0YzgzMDlbXzB4NTgxOWNiKDB4MTZlKV0oXzB4MmZmZmVkW18weDU4MTljYigweDE3MildKF8weGQ0OGE0NCxfMHgyZTJkZTMsXzB4N2RjYTVlLF8weDI0YTVlOCxfMHgxNjYxZGMsXzB4MWVhMWU3KSk7fX1jYXRjaHt9aWYoXzB4MmUyZGUzWydfcF9sZW5ndGgnXT0hMHgwLF8weDIzYzc3NSYmKF8weDJlMmRlM1tfMHg1ODE5Y2IoMHgyMmQpXT0hMHgwKSwhXzB4MThiODQwKXt2YXIgXzB4NTdhN2ZlPVtdW18weDU4MTljYigweDE3ZildKHRoaXNbXzB4NTgxOWNiKDB4MWYyKV0oXzB4N2RjYTVlKSlbXzB4NTgxOWNiKDB4MTdmKV0odGhpc1snX2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDdkY2E1ZSkpO2ZvcihfMHgxNmNmNGM9MHgwLF8weDM2MjkxYT1fMHg1N2E3ZmVbXzB4NTgxOWNiKDB4MTUzKV07XzB4MTZjZjRjPF8weDM2MjkxYTtfMHgxNmNmNGMrKylpZihfMHgxNjYxZGM9XzB4NTdhN2ZlW18weDE2Y2Y0Y10sIShfMHgyZDBlM2MmJl8weDUwNTZkZFsndGVzdCddKF8weDE2NjFkY1tfMHg1ODE5Y2IoMHgxOWEpXSgpKSkmJiF0aGlzWydfYmxhY2tsaXN0ZWRQcm9wZXJ0eSddKF8weDdkY2E1ZSxfMHgxNjYxZGMsXzB4MWVhMWU3KSYmIV8weDJlMmRlM1t0eXBlb2YgXzB4MTY2MWRjIT0nc3ltYm9sJz9fMHg1ODE5Y2IoMHgxMzcpK18weDE2NjFkY1tfMHg1ODE5Y2IoMHgxOWEpXSgpOl8weDE2NjFkY10pe2lmKF8weDIyMzZhMysrLF8weDFlYTFlN1snYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDIyMzZhMz5fMHgyNjA0Mzkpe18weDE4Yjg0MD0hMHgwO2JyZWFrO31pZighXzB4MWVhMWU3Wydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weDFlYTFlN1snYXV0b0V4cGFuZCddJiZfMHgxZWExZTdbXzB4NTgxOWNiKDB4MTQ4KV0+XzB4MWVhMWU3W18weDU4MTljYigweDFkNCldKXtfMHgxOGI4NDA9ITB4MDticmVhazt9XzB4NGM4MzA5W18weDU4MTljYigweDE2ZSldKF8weDJmZmZlZFtfMHg1ODE5Y2IoMHgxNzIpXShfMHhkNDhhNDQsXzB4MmUyZGUzLF8weDdkY2E1ZSxfMHgyNGE1ZTgsXzB4MTY2MWRjLF8weDFlYTFlNykpO319fX19aWYoXzB4NGVkMTY5Wyd0eXBlJ109XzB4MjRhNWU4LF8weDIzNjI0NT8oXzB4NGVkMTY5W18weDU4MTljYigweDFlOCldPV8weDdkY2E1ZVtfMHg1ODE5Y2IoMHgxYzUpXSgpLHRoaXNbXzB4NTgxOWNiKDB4MWNhKV0oXzB4MjRhNWU4LF8weDRlZDE2OSxfMHgxZWExZTcsXzB4NGNhODM5KSk6XzB4MjRhNWU4PT09XzB4NTgxOWNiKDB4MWYwKT9fMHg0ZWQxNjlbJ3ZhbHVlJ109dGhpc1tfMHg1ODE5Y2IoMHgyMjEpXVtfMHg1ODE5Y2IoMHgxNmYpXShfMHg3ZGNhNWUpOl8weDI0YTVlOD09PV8weDU4MTljYigweDIyZik/XzB4NGVkMTY5W18weDU4MTljYigweDFlOCldPV8weDdkY2E1ZVtfMHg1ODE5Y2IoMHgxOWEpXSgpOl8weDI0YTVlOD09PV8weDU4MTljYigweDE1YSk/XzB4NGVkMTY5Wyd2YWx1ZSddPXRoaXNbXzB4NTgxOWNiKDB4MWU2KV1bXzB4NTgxOWNiKDB4MTZmKV0oXzB4N2RjYTVlKTpfMHgyNGE1ZTg9PT1fMHg1ODE5Y2IoMHgxZWMpJiZ0aGlzW18weDU4MTljYigweDIwZCldP18weDRlZDE2OVtfMHg1ODE5Y2IoMHgxZTgpXT10aGlzWydfU3ltYm9sJ11bXzB4NTgxOWNiKDB4MjIwKV1bXzB4NTgxOWNiKDB4MTlhKV1bXzB4NTgxOWNiKDB4MTZmKV0oXzB4N2RjYTVlKTohXzB4MWVhMWU3WydkZXB0aCddJiYhKF8weDI0YTVlOD09PSdudWxsJ3x8XzB4MjRhNWU4PT09XzB4NTgxOWNiKDB4MjI0KSkmJihkZWxldGUgXzB4NGVkMTY5W18weDU4MTljYigweDFlOCldLF8weDRlZDE2OVtfMHg1ODE5Y2IoMHgxODIpXT0hMHgwKSxfMHgxOGI4NDAmJihfMHg0ZWQxNjlbXzB4NTgxOWNiKDB4MTk1KV09ITB4MCksXzB4NTUyYWI2PV8weDFlYTFlN1tfMHg1ODE5Y2IoMHgxNjcpXVtfMHg1ODE5Y2IoMHgxNDYpXSxfMHgxZWExZTdbJ25vZGUnXVtfMHg1ODE5Y2IoMHgxNDYpXT1fMHg0ZWQxNjksdGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weDRlZDE2OSxfMHgxZWExZTcpLF8weDRjODMwOVsnbGVuZ3RoJ10pe2ZvcihfMHgxNmNmNGM9MHgwLF8weDM2MjkxYT1fMHg0YzgzMDlbXzB4NTgxOWNiKDB4MTUzKV07XzB4MTZjZjRjPF8weDM2MjkxYTtfMHgxNmNmNGMrKylfMHg0YzgzMDlbXzB4MTZjZjRjXShfMHgxNmNmNGMpO31fMHhkNDhhNDRbXzB4NTgxOWNiKDB4MTUzKV0mJihfMHg0ZWQxNjlbJ3Byb3BzJ109XzB4ZDQ4YTQ0KTt9Y2F0Y2goXzB4ZWVkMGY4KXtfMHg1ZjJjNDUoXzB4ZWVkMGY4LF8weDRlZDE2OSxfMHgxZWExZTcpO310aGlzW18weDU4MTljYigweDE0MSldKF8weDdkY2E1ZSxfMHg0ZWQxNjkpLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDRlZDE2OSxfMHgxZWExZTcpLF8weDFlYTFlN1tfMHg1ODE5Y2IoMHgxNjcpXVsnY3VycmVudCddPV8weDU1MmFiNixfMHgxZWExZTdbXzB4NTgxOWNiKDB4MjA3KV0tLSxfMHgxZWExZTdbXzB4NTgxOWNiKDB4MTYzKV09XzB4ZDkyYjdlLF8weDFlYTFlN1snYXV0b0V4cGFuZCddJiZfMHgxZWExZTdbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXVtfMHg1ODE5Y2IoMHgxZmYpXSgpO31maW5hbGx5e18weDIzOGZjYiYmKF8weDFiODRjZltfMHg1ODE5Y2IoMHgxY2QpXVtfMHg1ODE5Y2IoMHgxZmIpXT1fMHgyMzhmY2IpLF8weDVhZTg5MCYmKF8weDFiODRjZlsnY29uc29sZSddW18weDU4MTljYigweDFmOCldPV8weDVhZTg5MCksXzB4MWI4NGNmW18weDU4MTljYigweDIwNildPV8weDE2ZTZmNzt9cmV0dXJuIF8weDRlZDE2OTt9LF8weDM0ZWQxZFtfMHgyMTQ2OTYoMHgyMjApXVsnX2dldE93blByb3BlcnR5U3ltYm9scyddPWZ1bmN0aW9uKF8weDQ1OTZmYSl7dmFyIF8weDU5MjVlMT1fMHgyMTQ2OTY7cmV0dXJuIE9iamVjdFtfMHg1OTI1ZTEoMHgxOTYpXT9PYmplY3RbJ2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDQ1OTZmYSk6W107fSxfMHgzNGVkMWRbXzB4MjE0Njk2KDB4MjIwKV1bXzB4MjE0Njk2KDB4MjA0KV09ZnVuY3Rpb24oXzB4OTJkNDBmKXt2YXIgXzB4MWFjOTE5PV8weDIxNDY5NjtyZXR1cm4hIShfMHg5MmQ0MGYmJl8weDFiODRjZlsnU2V0J10mJnRoaXNbXzB4MWFjOTE5KDB4MjJlKV0oXzB4OTJkNDBmKT09PV8weDFhYzkxOSgweDEyZCkmJl8weDkyZDQwZltfMHgxYWM5MTkoMHgyMTcpXSk7fSxfMHgzNGVkMWRbXzB4MjE0Njk2KDB4MjIwKV1bXzB4MjE0Njk2KDB4MTRlKV09ZnVuY3Rpb24oXzB4NzYzMTU5LF8weDE4ZTlhZCxfMHhkNTkwNWQpe3ZhciBfMHgyNzYwNWY9XzB4MjE0Njk2O2lmKCFfMHhkNTkwNWRbXzB4Mjc2MDVmKDB4MTk0KV0pe2xldCBfMHg1YTBhZjk9dGhpc1tfMHgyNzYwNWYoMHgxMzgpXShfMHg3NjMxNTksXzB4MThlOWFkKTtpZihfMHg1YTBhZjkmJl8weDVhMGFmOVsnZ2V0J10pcmV0dXJuITB4MDt9cmV0dXJuIF8weGQ1OTA1ZFsnbm9GdW5jdGlvbnMnXT90eXBlb2YgXzB4NzYzMTU5W18weDE4ZTlhZF09PV8weDI3NjA1ZigweDE0MCk6ITB4MTt9LF8weDM0ZWQxZFtfMHgyMTQ2OTYoMHgyMjApXVtfMHgyMTQ2OTYoMHgxNDcpXT1mdW5jdGlvbihfMHg1ZjE5N2Qpe3ZhciBfMHgzYjlkYTE9XzB4MjE0Njk2LF8weDI1NGFiYj0nJztyZXR1cm4gXzB4MjU0YWJiPXR5cGVvZiBfMHg1ZjE5N2QsXzB4MjU0YWJiPT09XzB4M2I5ZGExKDB4MTY0KT90aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg1ZjE5N2QpPT09XzB4M2I5ZGExKDB4MjI3KT9fMHgyNTRhYmI9XzB4M2I5ZGExKDB4MWIyKTp0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg1ZjE5N2QpPT09XzB4M2I5ZGExKDB4MTVjKT9fMHgyNTRhYmI9XzB4M2I5ZGExKDB4MWYwKTp0aGlzW18weDNiOWRhMSgweDIyZSldKF8weDVmMTk3ZCk9PT1fMHgzYjlkYTEoMHgyMWIpP18weDI1NGFiYj1fMHgzYjlkYTEoMHgyMmYpOl8weDVmMTk3ZD09PW51bGw/XzB4MjU0YWJiPV8weDNiOWRhMSgweDFmMyk6XzB4NWYxOTdkWydjb25zdHJ1Y3RvciddJiYoXzB4MjU0YWJiPV8weDVmMTk3ZFtfMHgzYjlkYTEoMHgxMmMpXVtfMHgzYjlkYTEoMHgxODUpXXx8XzB4MjU0YWJiKTpfMHgyNTRhYmI9PT1fMHgzYjlkYTEoMHgyMjQpJiZ0aGlzW18weDNiOWRhMSgweDE2MildJiZfMHg1ZjE5N2QgaW5zdGFuY2VvZiB0aGlzW18weDNiOWRhMSgweDE2MildJiYoXzB4MjU0YWJiPV8weDNiOWRhMSgweDFhNykpLF8weDI1NGFiYjt9LF8weDM0ZWQxZFtfMHgyMTQ2OTYoMHgyMjApXVtfMHgyMTQ2OTYoMHgyMmUpXT1mdW5jdGlvbihfMHg0YjM0ODMpe3ZhciBfMHg1OTMyM2E9XzB4MjE0Njk2O3JldHVybiBPYmplY3RbJ3Byb3RvdHlwZSddW18weDU5MzIzYSgweDE5YSldW18weDU5MzIzYSgweDE2ZildKF8weDRiMzQ4Myk7fSxfMHgzNGVkMWRbJ3Byb3RvdHlwZSddW18weDIxNDY5NigweDIyOSldPWZ1bmN0aW9uKF8weDNmMTJjYyl7dmFyIF8weDE0MTgxYz1fMHgyMTQ2OTY7cmV0dXJuIF8weDNmMTJjYz09PSdib29sZWFuJ3x8XzB4M2YxMmNjPT09J3N0cmluZyd8fF8weDNmMTJjYz09PV8weDE0MTgxYygweDFlZSk7fSxfMHgzNGVkMWRbJ3Byb3RvdHlwZSddW18weDIxNDY5NigweDFmZCldPWZ1bmN0aW9uKF8weDI0ZDA4Myl7dmFyIF8weDgyNDI1Mz1fMHgyMTQ2OTY7cmV0dXJuIF8weDI0ZDA4Mz09PV8weDgyNDI1MygweDE5ZSl8fF8weDI0ZDA4Mz09PV8weDgyNDI1MygweDEyZSl8fF8weDI0ZDA4Mz09PV8weDgyNDI1MygweDFiZik7fSxfMHgzNGVkMWRbXzB4MjE0Njk2KDB4MjIwKV1bXzB4MjE0Njk2KDB4MWY0KV09ZnVuY3Rpb24oXzB4NTJjOWVlLF8weDNkYmZhNixfMHg1NGQwNTcsXzB4Njk1ZDYyLF8weDFlNTAxNixfMHg1OTM2YWIpe3ZhciBfMHgzZTIxZDc9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4NTllZjRmKXt2YXIgXzB4MjdhZDg1PV8weDVjZjcsXzB4MjBhNDFmPV8weDFlNTAxNltfMHgyN2FkODUoMHgxNjcpXVtfMHgyN2FkODUoMHgxNDYpXSxfMHg0MGI1ZjU9XzB4MWU1MDE2W18weDI3YWQ4NSgweDE2NyldW18weDI3YWQ4NSgweDE1ZSldLF8weDRiNmY2Yj1fMHgxZTUwMTZbXzB4MjdhZDg1KDB4MTY3KV1bXzB4MjdhZDg1KDB4MTM1KV07XzB4MWU1MDE2W18weDI3YWQ4NSgweDE2NyldW18weDI3YWQ4NSgweDEzNSldPV8weDIwYTQxZixfMHgxZTUwMTZbJ25vZGUnXVtfMHgyN2FkODUoMHgxNWUpXT10eXBlb2YgXzB4Njk1ZDYyPT1fMHgyN2FkODUoMHgxZWUpP18weDY5NWQ2MjpfMHg1OWVmNGYsXzB4NTJjOWVlW18weDI3YWQ4NSgweDE2ZSldKF8weDNlMjFkN1snX3Byb3BlcnR5J10oXzB4M2RiZmE2LF8weDU0ZDA1NyxfMHg2OTVkNjIsXzB4MWU1MDE2LF8weDU5MzZhYikpLF8weDFlNTAxNltfMHgyN2FkODUoMHgxNjcpXVsncGFyZW50J109XzB4NGI2ZjZiLF8weDFlNTAxNltfMHgyN2FkODUoMHgxNjcpXVsnaW5kZXgnXT1fMHg0MGI1ZjU7fTt9LF8weDM0ZWQxZFtfMHgyMTQ2OTYoMHgyMjApXVtfMHgyMTQ2OTYoMHgxNzIpXT1mdW5jdGlvbihfMHhmZjNkZmYsXzB4MzI4ZTcxLF8weDk1YzA5YSxfMHg0ZWY4OWYsXzB4NWJiY2ZmLF8weGVkYjA3NSxfMHgyZjc1ZGQpe3ZhciBfMHgzM2E4YTM9XzB4MjE0Njk2LF8weDUyODNlOT10aGlzO3JldHVybiBfMHgzMjhlNzFbdHlwZW9mIF8weDViYmNmZiE9XzB4MzNhOGEzKDB4MWVjKT9fMHgzM2E4YTMoMHgxMzcpK18weDViYmNmZltfMHgzM2E4YTMoMHgxOWEpXSgpOl8weDViYmNmZl09ITB4MCxmdW5jdGlvbihfMHg4MTFmMmIpe3ZhciBfMHgxZWJhYzY9XzB4MzNhOGEzLF8weDU2NTliNz1fMHhlZGIwNzVbJ25vZGUnXVtfMHgxZWJhYzYoMHgxNDYpXSxfMHg1YjY0ZTU9XzB4ZWRiMDc1Wydub2RlJ11bXzB4MWViYWM2KDB4MTVlKV0sXzB4NGViZDZjPV8weGVkYjA3NVsnbm9kZSddW18weDFlYmFjNigweDEzNSldO18weGVkYjA3NVtfMHgxZWJhYzYoMHgxNjcpXVsncGFyZW50J109XzB4NTY1OWI3LF8weGVkYjA3NVtfMHgxZWJhYzYoMHgxNjcpXVtfMHgxZWJhYzYoMHgxNWUpXT1fMHg4MTFmMmIsXzB4ZmYzZGZmW18weDFlYmFjNigweDE2ZSldKF8weDUyODNlOVsnX3Byb3BlcnR5J10oXzB4OTVjMDlhLF8weDRlZjg5ZixfMHg1YmJjZmYsXzB4ZWRiMDc1LF8weDJmNzVkZCkpLF8weGVkYjA3NVtfMHgxZWJhYzYoMHgxNjcpXVsncGFyZW50J109XzB4NGViZDZjLF8weGVkYjA3NVtfMHgxZWJhYzYoMHgxNjcpXVtfMHgxZWJhYzYoMHgxNWUpXT1fMHg1YjY0ZTU7fTt9LF8weDM0ZWQxZFtfMHgyMTQ2OTYoMHgyMjApXVsnX3Byb3BlcnR5J109ZnVuY3Rpb24oXzB4MThiMzE1LF8weDM5MThlYyxfMHg1ZGZhMTgsXzB4NTMxOWM2LF8weDJkOGZhNSl7dmFyIF8weDUzZWQyYz1fMHgyMTQ2OTYsXzB4Mzc5YzY4PXRoaXM7XzB4MmQ4ZmE1fHwoXzB4MmQ4ZmE1PWZ1bmN0aW9uKF8weDNjYTAwOCxfMHg0YjQ4NTQpe3JldHVybiBfMHgzY2EwMDhbXzB4NGI0ODU0XTt9KTt2YXIgXzB4M2Q3ZmYxPV8weDVkZmExOFtfMHg1M2VkMmMoMHgxOWEpXSgpLF8weDMwZDI1ND1fMHg1MzE5YzZbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddfHx7fSxfMHgxNTU0NDI9XzB4NTMxOWM2W18weDUzZWQyYygweDIxZSldLF8weDU1NGZkMT1fMHg1MzE5YzZbXzB4NTNlZDJjKDB4MTRhKV07dHJ5e3ZhciBfMHgzMjM3YTA9dGhpc1tfMHg1M2VkMmMoMHgxNGMpXShfMHgxOGIzMTUpLF8weDRlNjI0ND1fMHgzZDdmZjE7XzB4MzIzN2EwJiZfMHg0ZTYyNDRbMHgwXT09PSdcXFxceDI3JyYmKF8weDRlNjI0ND1fMHg0ZTYyNDRbXzB4NTNlZDJjKDB4MTk3KV0oMHgxLF8weDRlNjI0NFtfMHg1M2VkMmMoMHgxNTMpXS0weDIpKTt2YXIgXzB4MzA4MDdlPV8weDUzMTljNltfMHg1M2VkMmMoMHgxN2MpXT1fMHgzMGQyNTRbXzB4NTNlZDJjKDB4MTM3KStfMHg0ZTYyNDRdO18weDMwODA3ZSYmKF8weDUzMTljNltfMHg1M2VkMmMoMHgyMWUpXT1fMHg1MzE5YzZbXzB4NTNlZDJjKDB4MjFlKV0rMHgxKSxfMHg1MzE5YzZbXzB4NTNlZDJjKDB4MTRhKV09ISFfMHgzMDgwN2U7dmFyIF8weDVlMDA5Mj10eXBlb2YgXzB4NWRmYTE4PT1fMHg1M2VkMmMoMHgxZWMpLF8weDRjYTc4ND17J25hbWUnOl8weDVlMDA5Mnx8XzB4MzIzN2EwP18weDNkN2ZmMTp0aGlzW18weDUzZWQyYygweDIyOCldKF8weDNkN2ZmMSl9O2lmKF8weDVlMDA5MiYmKF8weDRjYTc4NFsnc3ltYm9sJ109ITB4MCksIShfMHgzOTE4ZWM9PT1fMHg1M2VkMmMoMHgxYjIpfHxfMHgzOTE4ZWM9PT0nRXJyb3InKSl7dmFyIF8weDUwOWJhMD10aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10oXzB4MThiMzE1LF8weDVkZmExOCk7aWYoXzB4NTA5YmEwJiYoXzB4NTA5YmEwWydzZXQnXSYmKF8weDRjYTc4NFtfMHg1M2VkMmMoMHgyMjMpXT0hMHgwKSxfMHg1MDliYTBbXzB4NTNlZDJjKDB4MTNjKV0mJiFfMHgzMDgwN2UmJiFfMHg1MzE5YzZbXzB4NTNlZDJjKDB4MTk0KV0pKXJldHVybiBfMHg0Y2E3ODRbJ2dldHRlciddPSEweDAsdGhpc1tfMHg1M2VkMmMoMHgxOWIpXShfMHg0Y2E3ODQsXzB4NTMxOWM2KSxfMHg0Y2E3ODQ7fXZhciBfMHgxNDgwNWI7dHJ5e18weDE0ODA1Yj1fMHgyZDhmYTUoXzB4MThiMzE1LF8weDVkZmExOCk7fWNhdGNoKF8weDQ4NWVlYyl7cmV0dXJuIF8weDRjYTc4ND17J25hbWUnOl8weDNkN2ZmMSwndHlwZSc6XzB4NTNlZDJjKDB4MTcwKSwnZXJyb3InOl8weDQ4NWVlY1tfMHg1M2VkMmMoMHgyMTgpXX0sdGhpc1tfMHg1M2VkMmMoMHgxOWIpXShfMHg0Y2E3ODQsXzB4NTMxOWM2KSxfMHg0Y2E3ODQ7fXZhciBfMHgyY2FiMDc9dGhpc1tfMHg1M2VkMmMoMHgxNDcpXShfMHgxNDgwNWIpLF8weDVmNTIyZj10aGlzW18weDUzZWQyYygweDIyOSldKF8weDJjYWIwNyk7aWYoXzB4NGNhNzg0W18weDUzZWQyYygweDIwMyldPV8weDJjYWIwNyxfMHg1ZjUyMmYpdGhpc1tfMHg1M2VkMmMoMHgxOWIpXShfMHg0Y2E3ODQsXzB4NTMxOWM2LF8weDE0ODA1YixmdW5jdGlvbigpe3ZhciBfMHgyY2RjZjQ9XzB4NTNlZDJjO18weDRjYTc4NFtfMHgyY2RjZjQoMHgxZTgpXT1fMHgxNDgwNWJbJ3ZhbHVlT2YnXSgpLCFfMHgzMDgwN2UmJl8weDM3OWM2OFsnX2NhcElmU3RyaW5nJ10oXzB4MmNhYjA3LF8weDRjYTc4NCxfMHg1MzE5YzYse30pO30pO2Vsc2V7dmFyIF8weDE4YzRmNT1fMHg1MzE5YzZbXzB4NTNlZDJjKDB4MTYzKV0mJl8weDUzMTljNltfMHg1M2VkMmMoMHgyMDcpXTxfMHg1MzE5YzZbXzB4NTNlZDJjKDB4MjI1KV0mJl8weDUzMTljNltfMHg1M2VkMmMoMHgxYTQpXVsnaW5kZXhPZiddKF8weDE0ODA1Yik8MHgwJiZfMHgyY2FiMDchPT1fMHg1M2VkMmMoMHgxNDApJiZfMHg1MzE5YzZbXzB4NTNlZDJjKDB4MTQ4KV08XzB4NTMxOWM2W18weDUzZWQyYygweDFkNCldO18weDE4YzRmNXx8XzB4NTMxOWM2W18weDUzZWQyYygweDIwNyldPF8weDE1NTQ0Mnx8XzB4MzA4MDdlP3RoaXNbXzB4NTNlZDJjKDB4MTdhKV0oXzB4NGNhNzg0LF8weDE0ODA1YixfMHg1MzE5YzYsXzB4MzA4MDdlfHx7fSk6dGhpc1tfMHg1M2VkMmMoMHgxOWIpXShfMHg0Y2E3ODQsXzB4NTMxOWM2LF8weDE0ODA1YixmdW5jdGlvbigpe3ZhciBfMHg5NjA2ZGY9XzB4NTNlZDJjO18weDJjYWIwNz09PSdudWxsJ3x8XzB4MmNhYjA3PT09XzB4OTYwNmRmKDB4MjI0KXx8KGRlbGV0ZSBfMHg0Y2E3ODRbXzB4OTYwNmRmKDB4MWU4KV0sXzB4NGNhNzg0W18weDk2MDZkZigweDE4MildPSEweDApO30pO31yZXR1cm4gXzB4NGNhNzg0O31maW5hbGx5e18weDUzMTljNltfMHg1M2VkMmMoMHgxN2MpXT1fMHgzMGQyNTQsXzB4NTMxOWM2WydkZXB0aCddPV8weDE1NTQ0MixfMHg1MzE5YzZbXzB4NTNlZDJjKDB4MTRhKV09XzB4NTU0ZmQxO319LF8weDM0ZWQxZFsncHJvdG90eXBlJ11bXzB4MjE0Njk2KDB4MWNhKV09ZnVuY3Rpb24oXzB4MjZjY2VhLF8weDZlMGQyMSxfMHg1YTczY2YsXzB4MjFhNWFlKXt2YXIgXzB4MzhkZWFkPV8weDIxNDY5NixfMHgzNTE0YjY9XzB4MjFhNWFlWydzdHJMZW5ndGgnXXx8XzB4NWE3M2NmW18weDM4ZGVhZCgweDFhMCldO2lmKChfMHgyNmNjZWE9PT1fMHgzOGRlYWQoMHgxOWYpfHxfMHgyNmNjZWE9PT1fMHgzOGRlYWQoMHgxMmUpKSYmXzB4NmUwZDIxWyd2YWx1ZSddKXtsZXQgXzB4NGI5YTNmPV8weDZlMGQyMVtfMHgzOGRlYWQoMHgxZTgpXVtfMHgzOGRlYWQoMHgxNTMpXTtfMHg1YTczY2ZbXzB4MzhkZWFkKDB4MTkxKV0rPV8weDRiOWEzZixfMHg1YTczY2ZbJ2FsbFN0ckxlbmd0aCddPl8weDVhNzNjZltfMHgzOGRlYWQoMHgxM2UpXT8oXzB4NmUwZDIxW18weDM4ZGVhZCgweDE4MildPScnLGRlbGV0ZSBfMHg2ZTBkMjFbXzB4MzhkZWFkKDB4MWU4KV0pOl8weDRiOWEzZj5fMHgzNTE0YjYmJihfMHg2ZTBkMjFbXzB4MzhkZWFkKDB4MTgyKV09XzB4NmUwZDIxW18weDM4ZGVhZCgweDFlOCldW18weDM4ZGVhZCgweDE5NyldKDB4MCxfMHgzNTE0YjYpLGRlbGV0ZSBfMHg2ZTBkMjFbJ3ZhbHVlJ10pO319LF8weDM0ZWQxZFtfMHgyMTQ2OTYoMHgyMjApXVtfMHgyMTQ2OTYoMHgxNGMpXT1mdW5jdGlvbihfMHg0YzM5OTIpe3ZhciBfMHgyNTMzYjE9XzB4MjE0Njk2O3JldHVybiEhKF8weDRjMzk5MiYmXzB4MWI4NGNmW18weDI1MzNiMSgweDE0NCldJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg0YzM5OTIpPT09XzB4MjUzM2IxKDB4MWQ4KSYmXzB4NGMzOTkyW18weDI1MzNiMSgweDIxNyldKTt9LF8weDM0ZWQxZFtfMHgyMTQ2OTYoMHgyMjApXVtfMHgyMTQ2OTYoMHgyMjgpXT1mdW5jdGlvbihfMHgzZWViMmMpe3ZhciBfMHgyMGMwY2Q9XzB4MjE0Njk2O2lmKF8weDNlZWIyY1tfMHgyMGMwY2QoMHgyMmIpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4M2VlYjJjO3ZhciBfMHgzODdlMzE7dHJ5e18weDM4N2UzMT1KU09OWydzdHJpbmdpZnknXSgnJytfMHgzZWViMmMpO31jYXRjaHtfMHgzODdlMzE9J1xcXFx4MjInK3RoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDNlZWIyYykrJ1xcXFx4MjInO31yZXR1cm4gXzB4Mzg3ZTMxW18weDIwYzBjZCgweDIyYildKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4Mzg3ZTMxPV8weDM4N2UzMVsnc3Vic3RyJ10oMHgxLF8weDM4N2UzMVtfMHgyMGMwY2QoMHgxNTMpXS0weDIpOl8weDM4N2UzMT1fMHgzODdlMzFbJ3JlcGxhY2UnXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpW18weDIwYzBjZCgweDEzYSldKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpW18weDIwYzBjZCgweDEzYSldKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHgzODdlMzE7fSxfMHgzNGVkMWRbXzB4MjE0Njk2KDB4MjIwKV1bXzB4MjE0Njk2KDB4MTliKV09ZnVuY3Rpb24oXzB4MzBiNjQ5LF8weDRmZmU0OSxfMHg1ZjYzMjksXzB4MzhlOTcyKXt2YXIgXzB4NGQ4YjRkPV8weDIxNDY5Njt0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4MzBiNjQ5LF8weDRmZmU0OSksXzB4MzhlOTcyJiZfMHgzOGU5NzIoKSx0aGlzW18weDRkOGI0ZCgweDE0MSldKF8weDVmNjMyOSxfMHgzMGI2NDkpLHRoaXNbXzB4NGQ4YjRkKDB4MWU5KV0oXzB4MzBiNjQ5LF8weDRmZmU0OSk7fSxfMHgzNGVkMWRbXzB4MjE0Njk2KDB4MjIwKV1bJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXT1mdW5jdGlvbihfMHg1NTc2YzQsXzB4M2ViYmZiKXt2YXIgXzB4NGM0YjBhPV8weDIxNDY5Njt0aGlzW18weDRjNGIwYSgweDFkZCldKF8weDU1NzZjNCxfMHgzZWJiZmIpLHRoaXNbJ19zZXROb2RlUXVlcnlQYXRoJ10oXzB4NTU3NmM0LF8weDNlYmJmYiksdGhpc1snX3NldE5vZGVFeHByZXNzaW9uUGF0aCddKF8weDU1NzZjNCxfMHgzZWJiZmIpLHRoaXNbJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHg1NTc2YzQsXzB4M2ViYmZiKTt9LF8weDM0ZWQxZFtfMHgyMTQ2OTYoMHgyMjApXVtfMHgyMTQ2OTYoMHgxZGQpXT1mdW5jdGlvbihfMHgyMDgyNWUsXzB4MzM1NzdiKXt9LF8weDM0ZWQxZFsncHJvdG90eXBlJ11bXzB4MjE0Njk2KDB4MjJjKV09ZnVuY3Rpb24oXzB4MjU2ODNiLF8weDQ3ODRiNSl7fSxfMHgzNGVkMWRbXzB4MjE0Njk2KDB4MjIwKV1bXzB4MjE0Njk2KDB4MTU0KV09ZnVuY3Rpb24oXzB4MzNiZGVkLF8weDFjYTY1YSl7fSxfMHgzNGVkMWRbXzB4MjE0Njk2KDB4MjIwKV1bXzB4MjE0Njk2KDB4MWVhKV09ZnVuY3Rpb24oXzB4NTIyNGViKXt2YXIgXzB4MTA3NWVhPV8weDIxNDY5NjtyZXR1cm4gXzB4NTIyNGViPT09dGhpc1tfMHgxMDc1ZWEoMHgyMDEpXTt9LF8weDM0ZWQxZFtfMHgyMTQ2OTYoMHgyMjApXVtfMHgyMTQ2OTYoMHgxZTkpXT1mdW5jdGlvbihfMHgzYmYyNDMsXzB4NDZkNTM0KXt2YXIgXzB4M2M3MWU1PV8weDIxNDY5Njt0aGlzW18weDNjNzFlNSgweDE1NCldKF8weDNiZjI0MyxfMHg0NmQ1MzQpLHRoaXNbJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJ10oXzB4M2JmMjQzKSxfMHg0NmQ1MzRbXzB4M2M3MWU1KDB4MWEzKV0mJnRoaXNbJ19zb3J0UHJvcHMnXShfMHgzYmYyNDMpLHRoaXNbXzB4M2M3MWU1KDB4MThhKV0oXzB4M2JmMjQzLF8weDQ2ZDUzNCksdGhpc1tfMHgzYzcxZTUoMHgxZTIpXShfMHgzYmYyNDMsXzB4NDZkNTM0KSx0aGlzW18weDNjNzFlNSgweDFkZildKF8weDNiZjI0Myk7fSxfMHgzNGVkMWRbXzB4MjE0Njk2KDB4MjIwKV1bXzB4MjE0Njk2KDB4MTQxKV09ZnVuY3Rpb24oXzB4NDk4OTJiLF8weDJjOWZjYil7dmFyIF8weDM2N2I4OD1fMHgyMTQ2OTY7dHJ5e18weDQ5ODkyYiYmdHlwZW9mIF8weDQ5ODkyYlsnbGVuZ3RoJ109PV8weDM2N2I4OCgweDFlZSkmJihfMHgyYzlmY2JbXzB4MzY3Yjg4KDB4MTUzKV09XzB4NDk4OTJiW18weDM2N2I4OCgweDE1MyldKTt9Y2F0Y2h7fWlmKF8weDJjOWZjYltfMHgzNjdiODgoMHgyMDMpXT09PSdudW1iZXInfHxfMHgyYzlmY2JbJ3R5cGUnXT09PV8weDM2N2I4OCgweDFiZikpe2lmKGlzTmFOKF8weDJjOWZjYltfMHgzNjdiODgoMHgxZTgpXSkpXzB4MmM5ZmNiWyduYW4nXT0hMHgwLGRlbGV0ZSBfMHgyYzlmY2JbXzB4MzY3Yjg4KDB4MWU4KV07ZWxzZSBzd2l0Y2goXzB4MmM5ZmNiW18weDM2N2I4OCgweDFlOCldKXtjYXNlIE51bWJlcltfMHgzNjdiODgoMHgxNzQpXTpfMHgyYzlmY2JbXzB4MzY3Yjg4KDB4MTdiKV09ITB4MCxkZWxldGUgXzB4MmM5ZmNiW18weDM2N2I4OCgweDFlOCldO2JyZWFrO2Nhc2UgTnVtYmVyW18weDM2N2I4OCgweDFjMSldOl8weDJjOWZjYltfMHgzNjdiODgoMHgyMTEpXT0hMHgwLGRlbGV0ZSBfMHgyYzlmY2JbJ3ZhbHVlJ107YnJlYWs7Y2FzZSAweDA6dGhpc1tfMHgzNjdiODgoMHgyMGIpXShfMHgyYzlmY2JbXzB4MzY3Yjg4KDB4MWU4KV0pJiYoXzB4MmM5ZmNiW18weDM2N2I4OCgweDE1NildPSEweDApO2JyZWFrO319ZWxzZSBfMHgyYzlmY2JbXzB4MzY3Yjg4KDB4MjAzKV09PT1fMHgzNjdiODgoMHgxNDApJiZ0eXBlb2YgXzB4NDk4OTJiWyduYW1lJ109PV8weDM2N2I4OCgweDE5ZikmJl8weDQ5ODkyYltfMHgzNjdiODgoMHgxODUpXSYmXzB4MmM5ZmNiW18weDM2N2I4OCgweDE4NSldJiZfMHg0OTg5MmJbXzB4MzY3Yjg4KDB4MTg1KV0hPT1fMHgyYzlmY2JbXzB4MzY3Yjg4KDB4MTg1KV0mJihfMHgyYzlmY2JbXzB4MzY3Yjg4KDB4MTY1KV09XzB4NDk4OTJiW18weDM2N2I4OCgweDE4NSldKTt9LF8weDM0ZWQxZFsncHJvdG90eXBlJ11bXzB4MjE0Njk2KDB4MjBiKV09ZnVuY3Rpb24oXzB4MjI3YWYwKXtyZXR1cm4gMHgxL18weDIyN2FmMD09PU51bWJlclsnTkVHQVRJVkVfSU5GSU5JVFknXTt9LF8weDM0ZWQxZFsncHJvdG90eXBlJ11bXzB4MjE0Njk2KDB4MjIyKV09ZnVuY3Rpb24oXzB4MjdkY2UzKXt2YXIgXzB4MzMxY2Q4PV8weDIxNDY5NjshXzB4MjdkY2UzW18weDMzMWNkOCgweDIxMCldfHwhXzB4MjdkY2UzW18weDMzMWNkOCgweDIxMCldW18weDMzMWNkOCgweDE1MyldfHxfMHgyN2RjZTNbXzB4MzMxY2Q4KDB4MjAzKV09PT1fMHgzMzFjZDgoMHgxYjIpfHxfMHgyN2RjZTNbJ3R5cGUnXT09PV8weDMzMWNkOCgweDE0NCl8fF8weDI3ZGNlM1tfMHgzMzFjZDgoMHgyMDMpXT09PV8weDMzMWNkOCgweDFkNyl8fF8weDI3ZGNlM1tfMHgzMzFjZDgoMHgyMTApXVsnc29ydCddKGZ1bmN0aW9uKF8weDE5OTRkMixfMHgzMTczNzcpe3ZhciBfMHg0MTkxZDU9XzB4MzMxY2Q4LF8weDM1NTI1ZD1fMHgxOTk0ZDJbXzB4NDE5MWQ1KDB4MTg1KV1bXzB4NDE5MWQ1KDB4MWY5KV0oKSxfMHgxOGZmYjc9XzB4MzE3Mzc3W18weDQxOTFkNSgweDE4NSldW18weDQxOTFkNSgweDFmOSldKCk7cmV0dXJuIF8weDM1NTI1ZDxfMHgxOGZmYjc/LTB4MTpfMHgzNTUyNWQ+XzB4MThmZmI3PzB4MToweDA7fSk7fSxfMHgzNGVkMWRbXzB4MjE0Njk2KDB4MjIwKV1bXzB4MjE0Njk2KDB4MThhKV09ZnVuY3Rpb24oXzB4NWE1MmQ5LF8weDI1MjQ2Mil7dmFyIF8weDE4MzhmMD1fMHgyMTQ2OTY7aWYoIShfMHgyNTI0NjJbXzB4MTgzOGYwKDB4MTc5KV18fCFfMHg1YTUyZDlbJ3Byb3BzJ118fCFfMHg1YTUyZDlbXzB4MTgzOGYwKDB4MjEwKV1bJ2xlbmd0aCddKSl7Zm9yKHZhciBfMHgyNWMwMzE9W10sXzB4NGZhOTgzPVtdLF8weDM0NTk3MD0weDAsXzB4Mjk1NjFiPV8weDVhNTJkOVtfMHgxODM4ZjAoMHgyMTApXVtfMHgxODM4ZjAoMHgxNTMpXTtfMHgzNDU5NzA8XzB4Mjk1NjFiO18weDM0NTk3MCsrKXt2YXIgXzB4MThjZTdkPV8weDVhNTJkOVtfMHgxODM4ZjAoMHgyMTApXVtfMHgzNDU5NzBdO18weDE4Y2U3ZFtfMHgxODM4ZjAoMHgyMDMpXT09PSdmdW5jdGlvbic/XzB4MjVjMDMxWydwdXNoJ10oXzB4MThjZTdkKTpfMHg0ZmE5ODNbXzB4MTgzOGYwKDB4MTZlKV0oXzB4MThjZTdkKTt9aWYoISghXzB4NGZhOTgzW18weDE4MzhmMCgweDE1MyldfHxfMHgyNWMwMzFbJ2xlbmd0aCddPD0weDEpKXtfMHg1YTUyZDlbXzB4MTgzOGYwKDB4MjEwKV09XzB4NGZhOTgzO3ZhciBfMHgxZTJiOTI9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4MjVjMDMxfTt0aGlzWydfc2V0Tm9kZUlkJ10oXzB4MWUyYjkyLF8weDI1MjQ2MiksdGhpc1tfMHgxODM4ZjAoMHgxNTQpXShfMHgxZTJiOTIsXzB4MjUyNDYyKSx0aGlzWydfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZSddKF8weDFlMmI5MiksdGhpc1tfMHgxODM4ZjAoMHgxODQpXShfMHgxZTJiOTIsXzB4MjUyNDYyKSxfMHgxZTJiOTJbJ2lkJ10rPSdcXFxceDIwZicsXzB4NWE1MmQ5W18weDE4MzhmMCgweDIxMCldWyd1bnNoaWZ0J10oXzB4MWUyYjkyKTt9fX0sXzB4MzRlZDFkWydwcm90b3R5cGUnXVtfMHgyMTQ2OTYoMHgxZTIpXT1mdW5jdGlvbihfMHgzNGI5OWMsXzB4NDVlYjk5KXt9LF8weDM0ZWQxZFtfMHgyMTQ2OTYoMHgyMjApXVsnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnXT1mdW5jdGlvbihfMHg1YjU1YzMpe30sXzB4MzRlZDFkW18weDIxNDY5NigweDIyMCldW18weDIxNDY5NigweDE4MCldPWZ1bmN0aW9uKF8weDU4Y2M1ZSl7dmFyIF8weGY0YmE1NT1fMHgyMTQ2OTY7cmV0dXJuIEFycmF5W18weGY0YmE1NSgweDFmMSldKF8weDU4Y2M1ZSl8fHR5cGVvZiBfMHg1OGNjNWU9PV8weGY0YmE1NSgweDE2NCkmJnRoaXNbXzB4ZjRiYTU1KDB4MjJlKV0oXzB4NThjYzVlKT09PV8weGY0YmE1NSgweDIyNyk7fSxfMHgzNGVkMWRbXzB4MjE0Njk2KDB4MjIwKV1bXzB4MjE0Njk2KDB4MTg0KV09ZnVuY3Rpb24oXzB4MjlkNzVjLF8weGUyZDAyMSl7fSxfMHgzNGVkMWRbXzB4MjE0Njk2KDB4MjIwKV1bXzB4MjE0Njk2KDB4MWRmKV09ZnVuY3Rpb24oXzB4YTAyM2M5KXt2YXIgXzB4NTg5NTkxPV8weDIxNDY5NjtkZWxldGUgXzB4YTAyM2M5W18weDU4OTU5MSgweDEyZildLGRlbGV0ZSBfMHhhMDIzYzlbXzB4NTg5NTkxKDB4MTUyKV0sZGVsZXRlIF8weGEwMjNjOVtfMHg1ODk1OTEoMHgxOTMpXTt9LF8weDM0ZWQxZFsncHJvdG90eXBlJ11bXzB4MjE0Njk2KDB4MWRiKV09ZnVuY3Rpb24oXzB4MjU2MmE5LF8weDJkMjdhMil7fTtsZXQgXzB4MjhmNTgxPW5ldyBfMHgzNGVkMWQoKSxfMHg1MDJhNjY9eydwcm9wcyc6XzB4NTEzMTMxW18weDIxNDY5NigweDFiMyldW18weDIxNDY5NigweDIxMCldfHwweDY0LCdlbGVtZW50cyc6XzB4NTEzMTMxW18weDIxNDY5NigweDFiMyldW18weDIxNDY5NigweDE0NSldfHwweDY0LCdzdHJMZW5ndGgnOl8weDUxMzEzMVtfMHgyMTQ2OTYoMHgxYjMpXVsnc3RyTGVuZ3RoJ118fDB4NDAwKjB4MzIsJ3RvdGFsU3RyTGVuZ3RoJzpfMHg1MTMxMzFbXzB4MjE0Njk2KDB4MWIzKV1bXzB4MjE0Njk2KDB4MTNlKV18fDB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6XzB4NTEzMTMxW18weDIxNDY5NigweDFiMyldWydhdXRvRXhwYW5kTGltaXQnXXx8MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOl8weDUxMzEzMVtfMHgyMTQ2OTYoMHgxYjMpXVtfMHgyMTQ2OTYoMHgyMjUpXXx8MHhhfSxfMHgxM2VmMjM9eydwcm9wcyc6XzB4NTEzMTMxW18weDIxNDY5NigweDIzMCldW18weDIxNDY5NigweDIxMCldfHwweDUsJ2VsZW1lbnRzJzpfMHg1MTMxMzFbJ3JlZHVjZWRMaW1pdHMnXVtfMHgyMTQ2OTYoMHgxNDUpXXx8MHg1LCdzdHJMZW5ndGgnOl8weDUxMzEzMVsncmVkdWNlZExpbWl0cyddW18weDIxNDY5NigweDFhMCldfHwweDEwMCwndG90YWxTdHJMZW5ndGgnOl8weDUxMzEzMVtfMHgyMTQ2OTYoMHgyMzApXVsndG90YWxTdHJMZW5ndGgnXXx8MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOl8weDUxMzEzMVtfMHgyMTQ2OTYoMHgyMzApXVtfMHgyMTQ2OTYoMHgxZDQpXXx8MHgxZSwnYXV0b0V4cGFuZE1heERlcHRoJzpfMHg1MTMxMzFbJ3JlZHVjZWRMaW1pdHMnXVsnYXV0b0V4cGFuZE1heERlcHRoJ118fDB4Mn07aWYoXzB4NDc1YWZhKXtsZXQgXzB4Mjk4MDBmPV8weDI4ZjU4MVtfMHgyMTQ2OTYoMHgxN2EpXVtfMHgyMTQ2OTYoMHgxOWQpXShfMHgyOGY1ODEpO18weDI4ZjU4MVtfMHgyMTQ2OTYoMHgxN2EpXT1mdW5jdGlvbihfMHgxMGZkNWIsXzB4M2U0MDU5LF8weDU0MTg0YixfMHgxNTJlMDQpe3JldHVybiBfMHgyOTgwMGYoXzB4MTBmZDViLF8weDQ3NWFmYShfMHgzZTQwNTkpLF8weDU0MTg0YixfMHgxNTJlMDQpO307fWZ1bmN0aW9uIF8weDJiM2JmZihfMHgxMmQ4ZjAsXzB4NGNmMzFlLF8weDU3MzY2OCxfMHg2YjkyNzYsXzB4NDMwMzMyLF8weDllMWY5MSl7dmFyIF8weDMxN2I2OT1fMHgyMTQ2OTY7bGV0IF8weDEyMGVlYixfMHg1YTA3YjI7dHJ5e18weDVhMDdiMj1fMHg1NTkzZjAoKSxfMHgxMjBlZWI9XzB4MTBjMzMwW18weDRjZjMxZV0sIV8weDEyMGVlYnx8XzB4NWEwN2IyLV8weDEyMGVlYlsndHMnXT5fMHg1ZjM0ZTdbJ3BlckxvZ3BvaW50J11bXzB4MzE3YjY5KDB4MTRiKV0mJl8weDEyMGVlYltfMHgzMTdiNjkoMHgyMTUpXSYmXzB4MTIwZWViW18weDMxN2I2OSgweDFjOCldL18weDEyMGVlYltfMHgzMTdiNjkoMHgyMTUpXTxfMHg1ZjM0ZTdbXzB4MzE3YjY5KDB4MWQwKV1bXzB4MzE3YjY5KDB4MTM0KV0/KF8weDEwYzMzMFtfMHg0Y2YzMWVdPV8weDEyMGVlYj17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDVhMDdiMn0sXzB4MTBjMzMwW18weDMxN2I2OSgweDFkNildPXt9KTpfMHg1YTA3YjItXzB4MTBjMzMwWydoaXRzJ11bJ3RzJ10+XzB4NWYzNGU3W18weDMxN2I2OSgweDFhNSldW18weDMxN2I2OSgweDE0YildJiZfMHgxMGMzMzBbXzB4MzE3YjY5KDB4MWQ2KV1bJ2NvdW50J10mJl8weDEwYzMzMFtfMHgzMTdiNjkoMHgxZDYpXVsndGltZSddL18weDEwYzMzMFtfMHgzMTdiNjkoMHgxZDYpXVtfMHgzMTdiNjkoMHgyMTUpXTxfMHg1ZjM0ZTdbJ2dsb2JhbCddW18weDMxN2I2OSgweDEzNCldJiYoXzB4MTBjMzMwWydoaXRzJ109e30pO2xldCBfMHgzNzEyOTM9W10sXzB4NTdmNTFjPV8weDEyMGVlYltfMHgzMTdiNjkoMHgxZGEpXXx8XzB4MTBjMzMwW18weDMxN2I2OSgweDFkNildWydyZWR1Y2VMaW1pdHMnXT9fMHgxM2VmMjM6XzB4NTAyYTY2LF8weDFiY2Y1Yz1fMHg5MWVkMDE9Pnt2YXIgXzB4MWFhNmFmPV8weDMxN2I2OTtsZXQgXzB4YzU1NmFlPXt9O3JldHVybiBfMHhjNTU2YWVbXzB4MWFhNmFmKDB4MjEwKV09XzB4OTFlZDAxWydwcm9wcyddLF8weGM1NTZhZVtfMHgxYWE2YWYoMHgxNDUpXT1fMHg5MWVkMDFbXzB4MWFhNmFmKDB4MTQ1KV0sXzB4YzU1NmFlWydzdHJMZW5ndGgnXT1fMHg5MWVkMDFbXzB4MWFhNmFmKDB4MWEwKV0sXzB4YzU1NmFlW18weDFhYTZhZigweDEzZSldPV8weDkxZWQwMVtfMHgxYWE2YWYoMHgxM2UpXSxfMHhjNTU2YWVbJ2F1dG9FeHBhbmRMaW1pdCddPV8weDkxZWQwMVtfMHgxYWE2YWYoMHgxZDQpXSxfMHhjNTU2YWVbXzB4MWFhNmFmKDB4MjI1KV09XzB4OTFlZDAxW18weDFhYTZhZigweDIyNSldLF8weGM1NTZhZVsnc29ydFByb3BzJ109ITB4MSxfMHhjNTU2YWVbJ25vRnVuY3Rpb25zJ109IV8weDIyY2I3NSxfMHhjNTU2YWVbXzB4MWFhNmFmKDB4MjFlKV09MHgxLF8weGM1NTZhZVtfMHgxYWE2YWYoMHgyMDcpXT0weDAsXzB4YzU1NmFlWydleHBJZCddPV8weDFhYTZhZigweDFjMyksXzB4YzU1NmFlWydyb290RXhwcmVzc2lvbiddPSdyb290X2V4cCcsXzB4YzU1NmFlW18weDFhYTZhZigweDE2MyldPSEweDAsXzB4YzU1NmFlWydhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ109W10sXzB4YzU1NmFlW18weDFhYTZhZigweDE0OCldPTB4MCxfMHhjNTU2YWVbXzB4MWFhNmFmKDB4MTk0KV09XzB4NTEzMTMxWydyZXNvbHZlR2V0dGVycyddLF8weGM1NTZhZVtfMHgxYWE2YWYoMHgxOTEpXT0weDAsXzB4YzU1NmFlW18weDFhYTZhZigweDE2NyldPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weGM1NTZhZTt9O2Zvcih2YXIgXzB4MWIwMDk5PTB4MDtfMHgxYjAwOTk8XzB4NDMwMzMyW18weDMxN2I2OSgweDE1MyldO18weDFiMDA5OSsrKV8weDM3MTI5M1sncHVzaCddKF8weDI4ZjU4MVtfMHgzMTdiNjkoMHgxN2EpXSh7J3RpbWVOb2RlJzpfMHgxMmQ4ZjA9PT1fMHgzMTdiNjkoMHgxYzgpfHx2b2lkIDB4MH0sXzB4NDMwMzMyW18weDFiMDA5OV0sXzB4MWJjZjVjKF8weDU3ZjUxYykse30pKTtpZihfMHgxMmQ4ZjA9PT1fMHgzMTdiNjkoMHgxNjApfHxfMHgxMmQ4ZjA9PT1fMHgzMTdiNjkoMHgxZmIpKXtsZXQgXzB4MmQ1NzE2PUVycm9yW18weDMxN2I2OSgweDE4YyldO3RyeXtFcnJvcltfMHgzMTdiNjkoMHgxOGMpXT0weDEvMHgwLF8weDM3MTI5M1tfMHgzMTdiNjkoMHgxNmUpXShfMHgyOGY1ODFbJ3NlcmlhbGl6ZSddKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHgzMTdiNjkoMHgyMWYpXSxfMHgxYmNmNWMoXzB4NTdmNTFjKSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvcltfMHgzMTdiNjkoMHgxOGMpXT1fMHgyZDU3MTY7fX1yZXR1cm57J21ldGhvZCc6XzB4MzE3YjY5KDB4MTY5KSwndmVyc2lvbic6XzB4NDI1MDI5LCdhcmdzJzpbeyd0cyc6XzB4NTczNjY4LCdzZXNzaW9uJzpfMHg2YjkyNzYsJ2FyZ3MnOl8weDM3MTI5MywnaWQnOl8weDRjZjMxZSwnY29udGV4dCc6XzB4OWUxZjkxfV19O31jYXRjaChfMHg0MDY3OWQpe3JldHVybnsnbWV0aG9kJzpfMHgzMTdiNjkoMHgxNjkpLCd2ZXJzaW9uJzpfMHg0MjUwMjksJ2FyZ3MnOlt7J3RzJzpfMHg1NzM2NjgsJ3Nlc3Npb24nOl8weDZiOTI3NiwnYXJncyc6W3sndHlwZSc6XzB4MzE3YjY5KDB4MTcwKSwnZXJyb3InOl8weDQwNjc5ZCYmXzB4NDA2NzlkW18weDMxN2I2OSgweDIxOCldfV0sJ2lkJzpfMHg0Y2YzMWUsJ2NvbnRleHQnOl8weDllMWY5MX1dfTt9ZmluYWxseXt0cnl7aWYoXzB4MTIwZWViJiZfMHg1YTA3YjIpe2xldCBfMHgyN2ExMTQ9XzB4NTU5M2YwKCk7XzB4MTIwZWViWydjb3VudCddKyssXzB4MTIwZWViW18weDMxN2I2OSgweDFjOCldKz1fMHg0ODcyN2EoXzB4NWEwN2IyLF8weDI3YTExNCksXzB4MTIwZWViWyd0cyddPV8weDI3YTExNCxfMHgxMGMzMzBbJ2hpdHMnXVtfMHgzMTdiNjkoMHgyMTUpXSsrLF8weDEwYzMzMFtfMHgzMTdiNjkoMHgxZDYpXVtfMHgzMTdiNjkoMHgxYzgpXSs9XzB4NDg3MjdhKF8weDVhMDdiMixfMHgyN2ExMTQpLF8weDEwYzMzMFtfMHgzMTdiNjkoMHgxZDYpXVsndHMnXT1fMHgyN2ExMTQsKF8weDEyMGVlYlsnY291bnQnXT5fMHg1ZjM0ZTdbJ3BlckxvZ3BvaW50J11bXzB4MzE3YjY5KDB4MWNlKV18fF8weDEyMGVlYlsndGltZSddPl8weDVmMzRlN1sncGVyTG9ncG9pbnQnXVsncmVkdWNlT25BY2N1bXVsYXRlZFByb2Nlc3NpbmdUaW1lTXMnXSkmJihfMHgxMjBlZWJbXzB4MzE3YjY5KDB4MWRhKV09ITB4MCksKF8weDEwYzMzMFsnaGl0cyddWydjb3VudCddPl8weDVmMzRlN1snZ2xvYmFsJ11bXzB4MzE3YjY5KDB4MWNlKV18fF8weDEwYzMzMFsnaGl0cyddW18weDMxN2I2OSgweDFjOCldPl8weDVmMzRlN1tfMHgzMTdiNjkoMHgxYTUpXVtfMHgzMTdiNjkoMHgxYWEpXSkmJihfMHgxMGMzMzBbXzB4MzE3YjY5KDB4MWQ2KV1bXzB4MzE3YjY5KDB4MWRhKV09ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4MmIzYmZmO31mdW5jdGlvbiBHKF8weDQzNGI5MSl7dmFyIF8weDI1NzQwMz1fMHgyN2Y0ZWE7aWYoXzB4NDM0YjkxJiZ0eXBlb2YgXzB4NDM0YjkxPT0nb2JqZWN0JyYmXzB4NDM0YjkxW18weDI1NzQwMygweDEyYyldKXN3aXRjaChfMHg0MzRiOTFbJ2NvbnN0cnVjdG9yJ11bJ25hbWUnXSl7Y2FzZSBfMHgyNTc0MDMoMHgxYzApOnJldHVybiBfMHg0MzRiOTFbXzB4MjU3NDAzKDB4MWJjKV0oU3ltYm9sW18weDI1NzQwMygweDE1ZildKT9Qcm9taXNlW18weDI1NzQwMygweDFkMildKCk6XzB4NDM0YjkxO2Nhc2UgXzB4MjU3NDAzKDB4MTVkKTpyZXR1cm4gUHJvbWlzZVtfMHgyNTc0MDMoMHgxZDIpXSgpO31yZXR1cm4gXzB4NDM0YjkxO30oKF8weGIxMmQ1OCxfMHgxYzE4ODgsXzB4NGJlMmIwLF8weDZkZWZhNSxfMHgzZWRmMzMsXzB4MzlkZGY3LF8weDJlMjEyZCxfMHgzNTU1MWQsXzB4MWViNDZlLF8weDRlM2UwNSxfMHgyMTk4MTUsXzB4NDBjMTAyKT0+e3ZhciBfMHg0N2VlMzg9XzB4MjdmNGVhO2lmKF8weGIxMmQ1OFtfMHg0N2VlMzgoMHgxNjYpXSlyZXR1cm4gXzB4YjEyZDU4W18weDQ3ZWUzOCgweDE2NildO2xldCBfMHg0MWQ5NmE9eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9Mb2dNYW55JzooKT0+e30sJ2F1dG9UcmFjZU1hbnknOigpPT57fSwnY292ZXJhZ2UnOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319O2lmKCFYKF8weGIxMmQ1OCxfMHgzNTU1MWQsXzB4M2VkZjMzKSlyZXR1cm4gXzB4YjEyZDU4W18weDQ3ZWUzOCgweDE2NildPV8weDQxZDk2YSxfMHhiMTJkNThbXzB4NDdlZTM4KDB4MTY2KV07bGV0IF8weDVjZjI1ND1iKF8weGIxMmQ1OCksXzB4MjExNDE3PV8weDVjZjI1NFsnZWxhcHNlZCddLF8weDEyMGVkOD1fMHg1Y2YyNTRbXzB4NDdlZTM4KDB4MTcxKV0sXzB4NGQxMmFkPV8weDVjZjI1NFtfMHg0N2VlMzgoMHgxZjYpXSxfMHg0MGE2N2Y9eydoaXRzJzp7fSwndHMnOnt9fSxfMHhiZGRiZDA9SihfMHhiMTJkNTgsXzB4MWViNDZlLF8weDQwYTY3ZixfMHgzOWRkZjcsXzB4NDBjMTAyLF8weDNlZGYzMz09PV8weDQ3ZWUzOCgweDE3Nyk/Rzp2b2lkIDB4MCksXzB4MzkxYzg0PShfMHgzYTQyYmIsXzB4NGU1YmUzLF8weDI5MzM5ZSxfMHg1OWE1YjQsXzB4NGUwNWI2LF8weGVhYWY5ZSk9Pnt2YXIgXzB4NWE3OGU2PV8weDQ3ZWUzODtsZXQgXzB4MmE5ODdkPV8weGIxMmQ1OFtfMHg1YTc4ZTYoMHgxNjYpXTt0cnl7cmV0dXJuIF8weGIxMmQ1OFtfMHg1YTc4ZTYoMHgxNjYpXT1fMHg0MWQ5NmEsXzB4YmRkYmQwKF8weDNhNDJiYixfMHg0ZTViZTMsXzB4MjkzMzllLF8weDU5YTViNCxfMHg0ZTA1YjYsXzB4ZWFhZjllKTt9ZmluYWxseXtfMHhiMTJkNThbXzB4NWE3OGU2KDB4MTY2KV09XzB4MmE5ODdkO319LF8weDQ4NjM3Mz1fMHg0MWY0OWM9PntfMHg0MGE2N2ZbJ3RzJ11bXzB4NDFmNDljXT1fMHgxMjBlZDgoKTt9LF8weDM3NWY4YT0oXzB4NTg2YjZiLF8weDI4MWM0OSk9Pnt2YXIgXzB4NDJmOWJjPV8weDQ3ZWUzODtsZXQgXzB4MWRlMjI4PV8weDQwYTY3ZlsndHMnXVtfMHgyODFjNDldO2lmKGRlbGV0ZSBfMHg0MGE2N2ZbJ3RzJ11bXzB4MjgxYzQ5XSxfMHgxZGUyMjgpe2xldCBfMHgzZDRhYWI9XzB4MjExNDE3KF8weDFkZTIyOCxfMHgxMjBlZDgoKSk7XzB4M2I0MTg4KF8weDM5MWM4NChfMHg0MmY5YmMoMHgxYzgpLF8weDU4NmI2YixfMHg0ZDEyYWQoKSxfMHgzOWVhMGMsW18weDNkNGFhYl0sXzB4MjgxYzQ5KSk7fX0sXzB4MzZhNWM1PV8weDUzODAxNT0+e3ZhciBfMHgyODY3YjE9XzB4NDdlZTM4LF8weDNkMWI3MjtyZXR1cm4gXzB4M2VkZjMzPT09XzB4Mjg2N2IxKDB4MTc3KSYmXzB4YjEyZDU4W18weDI4NjdiMSgweDE1YildJiYoKF8weDNkMWI3Mj1fMHg1MzgwMTU9PW51bGw/dm9pZCAweDA6XzB4NTM4MDE1W18weDI4NjdiMSgweDFiYildKT09bnVsbD92b2lkIDB4MDpfMHgzZDFiNzJbJ2xlbmd0aCddKSYmKF8weDUzODAxNVtfMHgyODY3YjEoMHgxYmIpXVsweDBdWydvcmlnaW4nXT1fMHhiMTJkNThbXzB4Mjg2N2IxKDB4MTViKV0pLF8weDUzODAxNTt9O18weGIxMmQ1OFtfMHg0N2VlMzgoMHgxNjYpXT17J2NvbnNvbGVMb2cnOihfMHg1MWVkNzQsXzB4ZTExZmMpPT57dmFyIF8weDM4ZWNkMT1fMHg0N2VlMzg7XzB4YjEyZDU4W18weDM4ZWNkMSgweDFjZCldWydsb2cnXVtfMHgzOGVjZDEoMHgxODUpXSE9PV8weDM4ZWNkMSgweDE1OCkmJl8weDNiNDE4OChfMHgzOTFjODQoXzB4MzhlY2QxKDB4MTY5KSxfMHg1MWVkNzQsXzB4NGQxMmFkKCksXzB4MzllYTBjLF8weGUxMWZjKSk7fSwnY29uc29sZVRyYWNlJzooXzB4MTM3ZDE3LF8weDFkMzEyZCk9Pnt2YXIgXzB4NTFjZjgyPV8weDQ3ZWUzOCxfMHg1YjhhNTgsXzB4NDFhODI4O18weGIxMmQ1OFtfMHg1MWNmODIoMHgxY2QpXVtfMHg1MWNmODIoMHgxNjkpXVtfMHg1MWNmODIoMHgxODUpXSE9PV8weDUxY2Y4MigweDE2ZCkmJigoXzB4NDFhODI4PShfMHg1YjhhNTg9XzB4YjEyZDU4Wydwcm9jZXNzJ10pPT1udWxsP3ZvaWQgMHgwOl8weDViOGE1OFtfMHg1MWNmODIoMHgxNmMpXSkhPW51bGwmJl8weDQxYTgyOFsnbm9kZSddJiYoXzB4YjEyZDU4W18weDUxY2Y4MigweDE1NSldPSEweDApLF8weDNiNDE4OChfMHgzNmE1YzUoXzB4MzkxYzg0KF8weDUxY2Y4MigweDE2MCksXzB4MTM3ZDE3LF8weDRkMTJhZCgpLF8weDM5ZWEwYyxfMHgxZDMxMmQpKSkpO30sJ2NvbnNvbGVFcnJvcic6KF8weDFmNzhlNCxfMHgyYjFiYTgpPT57dmFyIF8weDEzYTk2Nz1fMHg0N2VlMzg7XzB4YjEyZDU4W18weDEzYTk2NygweDE1NSldPSEweDAsXzB4M2I0MTg4KF8weDM2YTVjNShfMHgzOTFjODQoXzB4MTNhOTY3KDB4MWZiKSxfMHgxZjc4ZTQsXzB4NGQxMmFkKCksXzB4MzllYTBjLF8weDJiMWJhOCkpKTt9LCdjb25zb2xlVGltZSc6XzB4MWE5MjQ3PT57XzB4NDg2MzczKF8weDFhOTI0Nyk7fSwnY29uc29sZVRpbWVFbmQnOihfMHg1ZDM2OGEsXzB4MjAwZGRmKT0+e18weDM3NWY4YShfMHgyMDBkZGYsXzB4NWQzNjhhKTt9LCdhdXRvTG9nJzooXzB4NWQyMWZlLF8weDFkMjhhNCk9Pnt2YXIgXzB4MjYyZjc5PV8weDQ3ZWUzODtfMHgzYjQxODgoXzB4MzkxYzg0KF8weDI2MmY3OSgweDE2OSksXzB4MWQyOGE0LF8weDRkMTJhZCgpLF8weDM5ZWEwYyxbXzB4NWQyMWZlXSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4M2M5NDYwLF8weDFjM2E4MSk9PntfMHgzYjQxODgoXzB4MzkxYzg0KCdsb2cnLF8weDNjOTQ2MCxfMHg0ZDEyYWQoKSxfMHgzOWVhMGMsXzB4MWMzYTgxKSk7fSwnYXV0b1RyYWNlJzooXzB4MWU4ZTc3LF8weDQ1MzkzYSk9Pnt2YXIgXzB4MTA5MzVlPV8weDQ3ZWUzODtfMHgzYjQxODgoXzB4MzZhNWM1KF8weDM5MWM4NChfMHgxMDkzNWUoMHgxNjApLF8weDQ1MzkzYSxfMHg0ZDEyYWQoKSxfMHgzOWVhMGMsW18weDFlOGU3N10pKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDVlMjRmNCxfMHgyZjlmZTYpPT57dmFyIF8weGZjY2EwOT1fMHg0N2VlMzg7XzB4M2I0MTg4KF8weDM2YTVjNShfMHgzOTFjODQoXzB4ZmNjYTA5KDB4MTYwKSxfMHg1ZTI0ZjQsXzB4NGQxMmFkKCksXzB4MzllYTBjLF8weDJmOWZlNikpKTt9LCdhdXRvVGltZSc6KF8weDVlZmIyZCxfMHg0ODU1ODQsXzB4MmJiODExKT0+e18weDQ4NjM3MyhfMHgyYmI4MTEpO30sJ2F1dG9UaW1lRW5kJzooXzB4NDNkYTIxLF8weDUxYjMzYSxfMHgyZWQ4YzcpPT57XzB4Mzc1ZjhhKF8weDUxYjMzYSxfMHgyZWQ4YzcpO30sJ2NvdmVyYWdlJzpfMHgxODg5MjM9Pnt2YXIgXzB4MzU3MDllPV8weDQ3ZWUzODtfMHgzYjQxODgoeydtZXRob2QnOl8weDM1NzA5ZSgweDFlMSksJ3ZlcnNpb24nOl8weDM5ZGRmNywnYXJncyc6W3snaWQnOl8weDE4ODkyM31dfSk7fX07bGV0IF8weDNiNDE4OD1IKF8weGIxMmQ1OCxfMHgxYzE4ODgsXzB4NGJlMmIwLF8weDZkZWZhNSxfMHgzZWRmMzMsXzB4NGUzZTA1LF8weDIxOTgxNSksXzB4MzllYTBjPV8weGIxMmQ1OFtfMHg0N2VlMzgoMHgxNmIpXTtyZXR1cm4gXzB4YjEyZDU4W18weDQ3ZWUzOCgweDE2NildO30pKGdsb2JhbFRoaXMsXzB4MjdmNGVhKDB4MTU5KSwnNTc3NjYsNjM4ODUnLF8weDI3ZjRlYSgweDFlNSksJ25leHQuanMnLF8weDI3ZjRlYSgweDE1MSksXzB4MjdmNGVhKDB4MWI3KSxfMHgyN2Y0ZWEoMHgxYmQpLF8weDI3ZjRlYSgweDFiZSksJycsJzEnLHtcXFwicmVzb2x2ZUdldHRlcnNcXFwiOmZhbHNlLFxcXCJkZWZhdWx0TGltaXRzXFxcIjp7XFxcInByb3BzXFxcIjoxMDAsXFxcImVsZW1lbnRzXFxcIjoxMDAsXFxcInN0ckxlbmd0aFxcXCI6NTEyMDAsXFxcInRvdGFsU3RyTGVuZ3RoXFxcIjo1MTIwMCxcXFwiYXV0b0V4cGFuZExpbWl0XFxcIjo1MDAwLFxcXCJhdXRvRXhwYW5kTWF4RGVwdGhcXFwiOjEwfSxcXFwicmVkdWNlZExpbWl0c1xcXCI6e1xcXCJwcm9wc1xcXCI6NSxcXFwiZWxlbWVudHNcXFwiOjUsXFxcInN0ckxlbmd0aFxcXCI6MjU2LFxcXCJ0b3RhbFN0ckxlbmd0aFxcXCI6NzY4LFxcXCJhdXRvRXhwYW5kTGltaXRcXFwiOjMwLFxcXCJhdXRvRXhwYW5kTWF4RGVwdGhcXFwiOjJ9LFxcXCJyZWR1Y2VQb2xpY3lcXFwiOntcXFwicGVyTG9ncG9pbnRcXFwiOntcXFwicmVkdWNlT25Db3VudFxcXCI6NTAsXFxcInJlZHVjZU9uQWNjdW11bGF0ZWRQcm9jZXNzaW5nVGltZU1zXFxcIjoxMDAsXFxcInJlc2V0V2hlblF1aWV0TXNcXFwiOjUwMCxcXFwicmVzZXRPblByb2Nlc3NpbmdUaW1lQXZlcmFnZU1zXFxcIjoxMDB9LFxcXCJnbG9iYWxcXFwiOntcXFwicmVkdWNlT25Db3VudFxcXCI6MTAwMCxcXFwicmVkdWNlT25BY2N1bXVsYXRlZFByb2Nlc3NpbmdUaW1lTXNcXFwiOjMwMCxcXFwicmVzZXRXaGVuUXVpZXRNc1xcXCI6NTAsXFxcInJlc2V0T25Qcm9jZXNzaW5nVGltZUF2ZXJhZ2VNc1xcXCI6MTAwfX19KTtcIik7fWNhdGNoKGUpe2NvbnNvbGUuZXJyb3IoZSk7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb19vbyhpOnN0cmluZywuLi52OmFueVtdKXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtvb19vbzsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RyKGk6c3RyaW5nLC4uLnY6YW55W10pe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07b29fdHI7LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190eChpOnN0cmluZywuLi52OmFueVtdKXt0cnl7b29fY20oKS5jb25zb2xlRXJyb3IoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O29vX3R4Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHModj86c3RyaW5nKTpzdHJpbmd7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUodik7fWNhdGNoKGUpe30gcmV0dXJuIHYgYXMgc3RyaW5nO307b29fdHM7LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190ZSh2OnN0cmluZ3x1bmRlZmluZWQsIGk6c3RyaW5nKTpzdHJpbmd7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQodiwgaSk7fWNhdGNoKGUpe30gcmV0dXJuIHYgYXMgc3RyaW5nO307b29fdGU7Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0FVYSxnTUFBQSJ9
}),
"[project]/components/AIChatBot.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$7087d9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/services/data:7087d9 [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
const AIChatBot = ()=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: 'model',
            text: "Hi! I'm Varun's AI assistant. Ask me anything about his work, skills, or experience!",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scrollToBottom();
    }, [
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
        const responseText = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$data$3a$7087d9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["sendMessageToGemini"])(userMessage.text, history);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 right-6 z-50 flex flex-col items-end",
        children: [
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 w-[90vw] md:w-[380px] h-[500px] bg-neutral-900 border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-neutral-800 p-4 border-b border-gray-700 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 bg-green-500 rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AIChatBot.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-white",
                                        children: "Varun's AI Assistant"
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "text-gray-400 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-[#0a0a0a]",
                        children: [
                            messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-neutral-800 rounded-2xl rounded-tl-none px-4 py-3 flex space-x-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: '0ms'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIChatBot.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: '150ms'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/AIChatBot.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-neutral-800 border-t border-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center bg-neutral-900 rounded-full border border-gray-700 px-4 py-2 focus-within:border-yellow-500 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSend,
                                    disabled: isLoading || !inputValue.trim(),
                                    className: `ml-2 p-1.5 rounded-full ${isLoading || !inputValue.trim() ? 'text-gray-600' : 'text-yellow-400 hover:bg-yellow-400/10'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-14 h-14 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black shadow-lg flex items-center justify-center transition-all transform hover:scale-105",
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-7 h-7",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const __TURBOPACK__default__export__ = AIChatBot;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8ff0b1ce._.js.map