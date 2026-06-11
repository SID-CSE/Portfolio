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
skills: [
"React.js",
"Next.js",
"JavaScript",
"TypeScript",
"Tailwind CSS",
"HTML5",
"CSS3",
"Vite",
"Responsive Design"
],
},

{
label: "Backend",
accent: "from-emerald-500/80 to-teal-400/80",
skills: [
"Python",
"Java",
"Spring Boot",
"Django",
"Django REST Framework",
"FastAPI",
"Flask",
"REST APIs",
"JWT Authentication"
],
},

{
label: "Databases",
accent: "from-sky-500/80 to-blue-400/80",
skills: [
"MySQL",
"PostgreSQL",
"Database Design",
"SQL",
"ER Modeling"
],
},

{
label: "AI / ML",
accent: "from-fuchsia-500/80 to-pink-400/80",
skills: [
"Machine Learning",
"Scikit-Learn",
"XGBoost",
"Pandas",
"NumPy",
"Data Analytics",
"Feature Engineering",
"Model Evaluation"
],
},

{
label: "Cloud & DevOps",
accent: "from-amber-500/80 to-orange-400/80",
skills: [
"AWS",
"Cloudinary",
"Docker",
"GitHub Actions",
"CI/CD",
"Linux",
"Vercel",
"Git",
"GitHub"
],
},

{
label: "Cybersecurity",
accent: "from-violet-500/80 to-purple-400/80",
skills: [
"Network Scanning",
"Nmap",
"OSINT",
"Reconnaissance",
"Security Automation",
"Kali Linux",
"Web Pentesting Fundamentals"
],
},
];


export const projectCards = [
{
name: "Contify CMS",

problem:
"Developed an enterprise-grade Content Management System (CMS) that streamlines project requests, proposal management, task assignment, content review, stakeholder approvals, and team collaboration through a structured role-based workflow.",

architecture:
"React Frontend → Spring Boot REST APIs → JWT Authentication → MySQL Database → Cloudinary Media Storage → Workflow & Notification Engine",

stack: [
"React",
"Spring Boot",
"Java",
"MySQL",
"Cloudinary",
"JWT",
"REST APIs",
"Git",
],

challenges: [
"Implementing role-based access control for Admins, Editors, and Stakeholders",
"Designing complex project and task lifecycle workflows",
"Building secure JWT authentication and authorization",
"Managing media uploads and storage through Cloudinary",
"Managing real-time notifications, messaging, and content approvals"
],

impact: [
"Automated end-to-end content management workflows",
"Improved collaboration between stakeholders and content teams",
"Enabled secure cloud-based media storage and asset management",
"Streamlined project tracking and approval processes",
"Delivered a scalable enterprise-ready CMS solution"
],

links: {
github: "https://github.com/SID-CSE/CMS_Project",
live: "#"
}


},

{
name: "Taskera (TalentLink)",
problem:
"Built a professional freelancing and talent matchmaking platform that connects clients with freelancers, enabling secure project proposals, contract management, communication, and project delivery workflows.",

architecture:
  "React Frontend → Django REST APIs → JWT/OAuth Authentication → PostgreSQL Database → Messaging & Notification Services",

stack: [
  "React.js",
  "Django",
  "Django REST Framework",
  "PostgreSQL",
  "JWT",
  "OAuth2",
  "Git",
  "Figma"
],

challenges: [
  "Implementing role-based access control for Clients and Freelancers",
  "Designing secure proposal and contract management workflows",
  "Building real-time messaging and notification systems",
  "Creating advanced search and filtering capabilities"
],

impact: [
  "Delivered a complete freelance marketplace platform",
  "Enabled end-to-end project lifecycle management",
  "Improved user engagement through communication features",
  "Successfully presented the project to the Infosys Jury Panel"
],

links: {
  github: "https://github.com/springboardmentor182c-t/talentlink",
  live: "#"
}

},

{
name: "SmartPay4 - Employee Salary Prediction",
problem:
"Developed a machine learning-powered salary prediction platform that estimates employee salaries based on demographic, educational, and professional attributes using advanced regression models.",

architecture:
  "Streamlit Frontend → Data Processing Pipeline → Feature Engineering → XGBoost Regression Model → Prediction Engine",

stack: [
  "Python",
  "XGBoost",
  "Scikit-Learn",
  "Pandas",
  "NumPy",
  "Streamlit",
  "Machine Learning"
],

challenges: [
  "Building a robust preprocessing and feature engineering pipeline",
  "Handling categorical and numerical feature transformations",
  "Optimizing model performance and prediction accuracy",
  "Supporting both single-user and batch salary predictions"
],

impact: [
  "Achieved high prediction accuracy using XGBoost regression",
  "Enabled bulk salary predictions through CSV uploads",
  "Provided visual analytics and model performance insights",
  "Successfully deployed as a live machine learning application"
],

links: {
  github: "https://github.com/SID-CSE/Internship-Project---IBM-Skillsbuild-Edunet-Foundation-AICTE.git",
  live: "https://smartpay4.streamlit.app/"
}

},

{
name: "Recon Automation for Web Pentesting",
problem:
"Developed a Python-based reconnaissance and automation toolkit to support ethical hacking, network scanning, information gathering, and penetration testing activities.",

architecture:
  "CLI Interface → Scanning & Enumeration Modules → Information Gathering Engine → Report Generation Utilities",

stack: [
  "Python",
  "Nmap",
  "Networking",
  "Cybersecurity",
  "OSINT",
  "Kali Linux",
  "Automation"
],

challenges: [
  "Developing modular reconnaissance and scanning utilities",
  "Implementing multi-threaded port scanning techniques",
  "Integrating various information gathering tools into a unified framework",
  "Ensuring usability across multiple pentesting workflows"
],

impact: [
  "Automated repetitive reconnaissance tasks for security assessments",
  "Improved efficiency of network and web application testing",
  "Consolidated multiple security utilities into a single toolkit",
  "Demonstrated practical cybersecurity automation expertise"
],

links: {
  github: "YOUR_GITHUB_LINK",
  live: "#"
}

}
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