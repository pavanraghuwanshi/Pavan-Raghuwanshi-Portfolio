import { Experience, Project, Stat } from './types';

export const NAV_LINKS = [
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
  { value: '10+', label: 'Projects Completed', sub: 'From scratch' },
  { value: '2+', label: 'Years of Experience', sub: 'In Tech' },
  { value: '95%', label: 'Positive Feedback', sub: 'From clients' },
  { value: '5', label: 'Team Lead', sub: 'People managed' },
];

export const EXPERIENCES: Experience[] = [
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

export const PROJECTS: Project[] = [
  {
    title: "EcoDash Analytics",
    description: "A comprehensive dashboard for monitoring environmental metrics in real-time.",
    tags: ["React", "D3.js", "Node.js"],
    link: "#",
    image: "https://picsum.photos/id/180/600/400"
  },
  {
    title: "CryptoTracker Pro",
    description: "Mobile-first application for tracking cryptocurrency portfolios with live alerts.",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
    image: "https://picsum.photos/id/201/600/400"
  },
  {
    title: "TaskFlow AI",
    description: "Productivity tool utilizing generative AI to suggest task prioritizations.",
    tags: ["TypeScript", "Gemini API", "Tailwind"],
    link: "#",
    image: "https://picsum.photos/id/366/600/400"
  }
];

export const SKILLS = [
  "React", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS", "Next.js", "AWS", "Docker", "PostgreSQL", "Gemini API"
];

export const AI_SYSTEM_INSTRUCTION = `
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
