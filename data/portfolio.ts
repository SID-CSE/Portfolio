export const navigationItems = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "System", href: "#system-design" },
  { label: "AI/ML", href: "#ai-showcase" },
  { label: "Cloud", href: "#cloud-architecture" },
  { label: "Certs", href: "#certifications" },
  { label: "Writing", href: "#writing" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroRoles = [
  "Full Stack Developer",
  "AI/ML Engineer",
  "Cloud & DevOps Enthusiast",
  "Product-minded Problem Solver",
];

export const heroFocusAreas = [
  "Shipping production-grade web applications",
  "Designing and deploying cloud-native backends",
  "Building ML prototypes and inference demos",
  "End-to-end product engineering and deployment",
];

export const heroStats = [
  { value: "5", label: "featured projects" },
  { value: "4", label: "core disciplines" },
  { value: "9.05", label: "CGPA" },
];

export const aboutStats = [
  { value: "05", label: "projects completed" },
  { value: "12+", label: "technologies" },
  { value: "03", label: "internships & labs" },
];

export const philosophy = [
  {
    title: "Systems Thinking",
    description:
      "I design around data flow, failure modes, and operational simplicity instead of isolated features.",
  },
  {
    title: "Reliability",
    description:
      "I prefer observability, clear boundaries, and graceful failure over clever but fragile shortcuts.",
  },
  {
    title: "Iteration Speed",
    description:
      "I ship small, learn quickly, and keep the feedback loop short without sacrificing structure.",
  },
  {
    title: "Documentation",
    description:
      "I write for the next engineer first: clean READMEs, diagrams, and implementation notes.",
  },
];

export const skillCategories = [
  {
    label: "Frontend",
    accent: "from-indigo-500/80 to-cyan-400/80",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: "Backend",
    accent: "from-emerald-500/80 to-teal-400/80",
    skills: ["Python", "FastAPI", "Flask", "REST APIs", "Node.js"],
  },
  {
    label: "Databases",
    accent: "from-sky-500/80 to-blue-400/80",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
  },
  {
    label: "AI / ML",
    accent: "from-fuchsia-500/80 to-pink-400/80",
    skills: ["Machine Learning", "scikit-learn", "XGBoost", "Pandas", "NumPy"],
  },
  {
    label: "Cloud",
    accent: "from-amber-500/80 to-orange-400/80",
    skills: ["AWS", "Cloud fundamentals", "Vercel", "Cloudinary"],
  },
  {
    label: "DevOps",
    accent: "from-violet-500/80 to-purple-400/80",
    skills: ["Docker", "GitHub Actions", "CI/CD", "Linux"],
  },
];

export const projectCards = [
  {
    name: "Employee Salary Prediction System",
    problem: "Predict employee salaries using regression and data-driven feature engineering.",
    architecture: "Data preprocessing → Feature engineering → XGBoost model → Streamlit demo for exploration",
    stack: ["Python", "XGBoost", "scikit-learn", "Pandas", "Streamlit"],
    challenges: ["Careful feature engineering to reduce bias", "Model evaluation and validation", "Interactive demo for stakeholders"],
    impact: ["Improved salary estimation accuracy for HR use-cases", "Demo-ready analytics interface"],
    links: { github: "https://github.com/your-repo/employee-salary-prediction", live: "#" },
  },
  {
    name: "Remote Farm Animal Monitoring System",
    problem: "Provide remote monitoring and real-time tracking for livestock using IoT sensors and edge devices.",
    architecture: "Raspberry Pi sensors → MQTT / REST ingestion → Lightweight backend → Dashboard",
    stack: ["Raspberry Pi", "Python", "IoT Sensors"],
    challenges: ["Edge reliability", "Sensor calibration", "Real-time telemetry"],
    impact: ["Reduced response time for animal health events", "Remote monitoring for farmers"],
    links: { github: "https://github.com/your-repo/farm-monitor", live: "#" },
  },
  {
    name: "Recon Automation Toolkit",
    problem: "Automate reconnaissance tasks for ethical pentesting and information gathering.",
    architecture: "CLI and scripted utilities for scanning, enumeration, and report generation",
    stack: ["Python", "Networking", "Security Automation"],
    challenges: ["Safe network scanning practices", "Efficient data collection", "Modular tooling"],
    impact: ["Faster reconnaissance for security assessments", "Reusable automation modules"],
    links: { github: "https://github.com/your-repo/recon-toolkit", live: "#" },
  },
  {
    name: "ZENSHOP E-Commerce Platform",
    problem: "Course project to build a full-stack e-commerce platform with order management and product catalog.",
    architecture: "Frontend → API → Relational DB → Auth & payments (demo)",
    stack: ["Full Stack", "Relational DB"],
    challenges: ["Requirements-driven design", "Transaction integrity", "User flows"],
    impact: ["End-to-end e-commerce demo", "Course-grade project"],
    links: { github: "https://github.com/your-repo/zenshop", live: "#" },
  },
  {
    name: "University Library Management System",
    problem: "Capstone for managing library resources, book tracking, and student operations.",
    architecture: "CRUD interfaces → Backend services → Database schemas",
    stack: ["Full Stack", "Database Management"],
    challenges: ["Data modeling", "User-role management", "Search and indexing"],
    impact: ["Streamlined library workflows", "Capstone deliverable"],
    links: { github: "https://github.com/your-repo/library-system", live: "#" },
  },
];

export const systemDesignTabs = [
  {
    id: "design",
    label: "Design",
    title: "Service topology",
    content:
      "A modular web front end calls a BFF layer, which fans out to application services, analytics jobs, and third-party APIs.",
  },
  {
    id: "tradeoffs",
    label: "Trade-offs",
    title: "Reliability vs speed",
    content:
      "I keep the main path simple, move heavy work to background jobs, and cache the outputs that users read most often.",
  },
  {
    id: "scalability",
    label: "Scalability",
    title: "Growth plan",
    content:
      "Scale writes with queues and partitioned tables, scale reads with edge caching, and keep diagrams versioned with code.",
  },
];

export const mlModels = [
  {
    name: "Retrieval QA model",
    accuracy: "92% citation precision",
    dataset: "Internal docs + support transcripts",
    inference: "https://streamlit.io",
  },
  {
    name: "Churn signal classifier",
    accuracy: "0.89 F1 on validation",
    dataset: "Historical product activity",
    inference: "https://huggingface.co",
  },
];

export const cloudServices = [
  "EC2",
  "S3",
  "Lambda",
  "RDS",
  "CloudFront",
  "API Gateway",
  "Docker",
  "GitHub Actions",
];

const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cloudinaryPlaceholder =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='900' viewBox='0 0 1200 900'%3E%3Crect width='1200' height='900' fill='%2308162f'/%3E%3Ctext x='600' y='430' fill='%23e2e8f0' font-family='Arial, sans-serif' font-size='44' text-anchor='middle'%3ECertification image pending Cloudinary setup%3C/text%3E%3Ctext x='600' y='490' fill='%2394a3b8' font-family='Arial, sans-serif' font-size='24' text-anchor='middle'%3ESet NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME%3C/text%3E%3C/svg%3E";

function cloudinaryCertificate(publicId: string) {
  if (!cloudinaryCloudName) {
    return cloudinaryPlaceholder;
  }

  return `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/f_auto,q_auto/${publicId}`;
}

export const certifications = [
  {
    title: "AI-Foundation Associate",
    issuer: "Issuer",
    date: "2026",
    credentialId: "AIF-001",
    image: cloudinaryCertificate("certificates/AI-Foundation-Associate-eCertificate_page-0001 (1).jpg"),
  },
  {
    title: "AI Data Science Professional",
    issuer: "Issuer",
    date: "2026",
    credentialId: "AIDS-002",
    image: cloudinaryCertificate("certificates/AI-Data-Science-Professional-eCertificate_page-0001 (1).jpg"),
  },
  {
    title: "Generative AI Professional",
    issuer: "Issuer",
    date: "2026",
    credentialId: "GAI-003",
    image: cloudinaryCertificate("certificates/AI-Genarative AI Professional_page-0001.jpg"),
  },
  {
    title: "AI Vector Professional",
    issuer: "Issuer",
    date: "2026",
    credentialId: "AVP-004",
    image: cloudinaryCertificate("certificates/AI-Vector-Professional-eCertificate_page-0001 (1).jpg"),
  },
];

export const writings = [
  {
    title: "Designing a portfolio that behaves like a product",
    platform: "Hashnode",
    readTime: "6 min read",
    tags: ["UX", "frontend", "systems"],
  },
  {
    title: "From API calls to inference pipelines",
    platform: "Medium",
    readTime: "8 min read",
    tags: ["AI/ML", "Python", "deployment"],
  },
  {
    title: "The cloud diagram that actually helps teams ship",
    platform: "Dev.to",
    readTime: "5 min read",
    tags: ["cloud", "DevOps", "architecture"],
  },
];

export const experience = [
  {
    role: "Cybersecurity Intern",
    org: "Independent Internship",
    dates: "2022",
    bullets: [
      "Completed a cybersecurity internship and gained practical exposure to automation and reconnaissance.",
      "Built small tooling for scanning and vulnerability verification.",
    ],
  },
  {
    role: "Infosys Springboard Virtual Intern",
    org: "Infosys Springboard",
    dates: "2023",
    bullets: [
      "Selected for and completed the Infosys Springboard virtual internship program.",
      "Worked on guided assignments emphasizing software engineering fundamentals.",
    ],
  },
  {
    role: "Student Projects & Labs",
    org: "University",
    dates: "2021 - Present",
    bullets: [
      "Built full-stack projects, IoT demos, and ML prototypes as part of coursework and personal labs.",
      "Focused on deployable, testable deliverables with clear documentation.",
    ],
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/siddharthkumar" },
  { label: "LinkedIn", href: "https://linkedin.com/in/siddharth-kumar" },
  { label: "Email", href: "mailto:siddharth.kumar@example.com" },
];

export const personal = {
  name: "Siddharth Kumar",
  status: "3rd Year CSE Student (moving into final year)",
  cgpa: "9.05",
  headline: "Full Stack Developer | AI/ML Engineer | Cloud & DevOps Enthusiast",
  summary:
    "I build production-minded applications across the stack, with a focus on AI/ML, cloud delivery, and scalable systems. I enjoy turning ideas into deployable systems and writing clear documentation so teams can move quickly.",
};