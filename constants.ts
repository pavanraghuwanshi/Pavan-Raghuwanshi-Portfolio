import { Experience, Project, Stat } from './types';

export const NAV_LINKS = [
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '/Pavan-Raghuwanshi.pdf' },
  { name: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
  { value: '4', label: 'Core Projects', sub: 'Production Ready' },
  { value: '2+', label: 'Years of Experience', sub: 'Full Stack Tech' },
  { value: '99.9%', label: 'API Uptime', sub: 'Redis Caching & clustering' },
  { value: '100%', label: 'Real-time Tracking', sub: 'WebSockets & Event-driven' },
];

export const EXPERIENCES: Experience[] = [
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

export const PROJECTS: Project[] = [
  {
    title: "Credence Tracker",
    description: "Real-time GPS vehicle tracking and fleet monitoring system featuring event-driven WebSocket connections, geo-fencing, and route playback history.",
    tags: ["Node.js", "TypeScript", "MongoDB", "WebSocket", "Redis", "Socket.io", "Firebase", "Razorpay"],
    link: "https://credencetracker.com/",
    image: "/credence_tracker.png"
  },
  {
    title: "ParentsEye",
    description: "School transport student tracking platform enabling live GPS tracking, student attendance, pickup/drop workflows, push notifications, and payment gateway.",
    tags: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Redis", "Socket.IO", "Firebase", "Razorpay"],
    link: "https://parentseye.in/",
    image: "/parentseye.png"
  },
  {
    title: "RocketSales CRM",
    description: "Salesperson tracking and lead management platform with live location monitoring, route history, role-based authorization (RBAC), and analytical dashboards.",
    tags: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Redis", "JWT", "WebSocket"],
    link: "https://web.rocketsalestracker.com/",
    image: "/rocketsales_crm.png"
  },
  {
    title: "LMS Layout Management",
    description: "Responsive layout manager canvas and CRM for real estate properties, integrated with backend REST APIs and state management.",
    tags: ["React.js", "Redux", "Chakra UI", "Context API", "PHP APIs"],
    link: "#",
    image: "/lms_layout.png"
  }
];

export const SKILLS = [
  "React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redis", "WebSockets", "Socket.IO", "Tailwind CSS", "Redux", "Zustand", "Nginx", "VPS Deployment", "Firebase", "Razorpay", "JWT", "BUN", "HONO", "Chakra UI"
];

export const AI_SYSTEM_INSTRUCTION = `
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
