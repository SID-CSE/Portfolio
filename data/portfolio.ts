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
  "Full Stack Engineer",
  "AI/ML Builder",
  "Cloud Systems Designer",
  "Product-minded Problem Solver",
];

export const heroFocusAreas = [
  "Shipping production-grade web apps",
  "Designing reliable cloud backends",
  "Building ML demos and data pipelines",
  "Turning ideas into polished systems",
];

export const heroStats = [
  { value: "12+", label: "portfolio sections" },
  { value: "4", label: "core disciplines" },
  { value: "95+", label: "lighthouse target" },
];

export const aboutStats = [
  { value: "08", label: "projects shipped" },
  { value: "16", label: "technologies used" },
  { value: "03", label: "cloud architectures" },
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
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Streamlit", "HTML/CSS"],
  },
  {
    label: "Backend",
    accent: "from-emerald-500/80 to-teal-400/80",
    skills: ["Python", "FastAPI", "REST APIs", "Node.js", "WebSockets", "Celery"],
  },
  {
    label: "Databases",
    accent: "from-sky-500/80 to-blue-400/80",
    skills: ["PostgreSQL", "Redis", "MongoDB", "SQLAlchemy", "Vector DBs"],
  },
  {
    label: "AI / ML",
    accent: "from-fuchsia-500/80 to-pink-400/80",
    skills: ["PyTorch", "scikit-learn", "LangChain", "HuggingFace", "OpenAI API", "Pandas / NumPy"],
  },
  {
    label: "Cloud",
    accent: "from-amber-500/80 to-orange-400/80",
    skills: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS RDS", "GCP Basics", "Vercel"],
  },
  {
    label: "DevOps",
    accent: "from-violet-500/80 to-purple-400/80",
    skills: ["Docker", "GitHub Actions", "Nginx", "Linux", "Terraform basics"],
  },
];

export const projectCards = [
  {
    name: "Adaptive Ops Dashboard",
    problem:
      "Small teams needed one place to monitor service health, deployment status, and customer issues without juggling three tools.",
    architecture:
      "Next.js dashboard, FastAPI aggregator, PostgreSQL event store, Redis cache, and webhook-driven alerts.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    challenges: [
      "Normalized noisy event streams into a single operational timeline.",
      "Kept the dashboard responsive during bursty webhook traffic.",
      "Structured alerts so teams could act without alert fatigue.",
    ],
    impact: ["45% faster incident triage", "<300ms cached dashboard loads", "Single view for 5 data sources"],
    links: { github: "https://github.com", live: "https://vercel.com" },
  },
  {
    name: "DocFlow AI Assistant",
    problem:
      "Manual document search slowed support and onboarding because answers were trapped across PDFs, notes, and internal docs.",
    architecture:
      "RAG pipeline with chunking, embeddings, vector search, inference API, and a Streamlit demo for evaluation.",
    stack: ["Python", "LangChain", "OpenAI API", "Vector DBs", "Streamlit", "AWS S3"],
    challenges: [
      "Balanced retrieval quality against latency for interactive Q&A.",
      "Kept citations traceable so the model output stayed trustworthy.",
      "Added fallback answers when retrieval confidence was low.",
    ],
    impact: ["72% faster answer lookup", "92% citation accuracy", "Demo-ready in 3 environments"],
    links: { github: "https://github.com", live: "https://streamlit.io" },
  },
  {
    name: "Cloud Cost Control Plane",
    problem:
      "A growing cloud bill made it hard to see which services were overspending and which workloads could be optimized safely.",
    architecture:
      "Usage ingest jobs, rule engine, optimization suggestions, and a topology viewer for infra decisions.",
    stack: ["AWS", "Terraform", "Docker", "Nginx", "GitHub Actions", "PostgreSQL"],
    challenges: [
      "Grouped usage data into actionable signals instead of raw graphs.",
      "Kept optimization suggestions explainable for non-DevOps stakeholders.",
      "Separated read-heavy analytics from operational data paths.",
    ],
    impact: ["18% projected monthly cost reduction", "2-minute environment audits", "Reusable for 3 service tiers"],
    links: { github: "https://github.com", live: "https://aws.amazon.com" },
  },
  {
    name: "Realtime Learning Tracker",
    problem:
      "Students needed a clearer way to track progress, deadlines, and revision cycles across multiple courses.",
    architecture:
      "Realtime updates, optimistic UI, backend jobs for reminders, and analytics for completion trends.",
    stack: ["React", "Node.js", "WebSockets", "MongoDB", "Redis", "Docker"],
    challenges: [
      "Kept live updates consistent across browser sessions.",
      "Minimized state drift in collaborative interactions.",
      "Designed for mobile-first usage and quick daily check-ins.",
    ],
    impact: ["90% sync reliability", "Sub-second live updates", "Higher daily engagement"],
    links: { github: "https://github.com", live: "https://vercel.com" },
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
    role: "Full Stack Engineer",
    org: "Independent Projects",
    dates: "2024 - Present",
    bullets: [
      "Built portfolio-grade products with measurable performance and deployability in mind.",
      "Turned rough ideas into polished interfaces, APIs, and deployable cloud flows.",
      "Documented architecture decisions so future changes stay low-risk.",
    ],
  },
  {
    role: "AI/ML Builder",
    org: "Personal Labs",
    dates: "2023 - Present",
    bullets: [
      "Experimented with retrieval, classification, and inference demos across practical use cases.",
      "Balanced accuracy, latency, and explainability in model-backed apps.",
      "Shipped Streamlit proofs of concept and production-style API integrations.",
    ],
  },
  {
    role: "Cloud Engineer",
    org: "Systems Practice",
    dates: "2023 - Present",
    bullets: [
      "Designed Docker-first delivery flows and cloud-friendly service boundaries.",
      "Mapped infrastructure decisions into cost, reliability, and scaling trade-offs.",
      "Kept delivery pipelines simple enough to maintain under pressure.",
    ],
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/siddharthkumar" },
  { label: "LinkedIn", href: "https://linkedin.com/in/siddharth-kumar" },
  { label: "Twitter", href: "https://twitter.com/siddharthkumar" },
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