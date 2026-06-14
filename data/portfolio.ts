import { cloudinaryAssets } from "@/lib/cloudinary";
import { cdn } from "@/lib/cloudinary";
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
    problem: "Developed an enterprise-grade Content Management System (CMS) that streamlines project requests, proposal management, task assignment, content review, stakeholder approvals, and team collaboration through a structured role-based workflow.",
    architecture: "React Frontend → Spring Boot REST APIs → JWT Authentication → MySQL Database → Cloudinary Media Storage → Workflow & Notification Engine",
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
      live: "#",
    },
    image: cloudinaryAssets.architectures.cms,
  },

  {
    name: "Taskera (TalentLink)",
    problem: "Built a professional freelancing and talent matchmaking platform that connects clients with freelancers, enabling secure project proposals, contract management, communication, and project delivery workflows.",
    architecture: "React Frontend → Django REST APIs → JWT/OAuth Authentication → PostgreSQL Database → Messaging & Notification Services",
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
      live: "#",
    },
    image: cloudinaryAssets.architectures.taskera,
  },

  {
    name: "SmartPay4 - Employee Salary Prediction",
    problem: "Developed a machine learning-powered salary prediction platform that estimates employee salaries based on demographic, educational, and professional attributes using advanced regression models.",
    architecture: "Streamlit Frontend → Data Processing Pipeline → Feature Engineering → XGBoost Regression Model → Prediction Engine",
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
      live: "https://smartpay4.streamlit.app/",
    },
    image: cloudinaryAssets.architectures.smartpay4,
  },

  {
    name: "Recon Automation for Web Pentesting",
    problem: "Developed a Python-based reconnaissance and automation toolkit to support ethical hacking, network scanning, information gathering, and penetration testing activities.",
    architecture: "CLI Interface → Scanning & Enumeration Modules → Information Gathering Engine → Report Generation Utilities",
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
      github: "https://github.com/SID-CSE/Cyber-Security_Ethical-Hacking---Mentorship-Intern.git",
      live: "#",
    },
    image: cloudinaryAssets.architectures.recon,
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

export const certifications = [
    {
    title: "Mathematical Foundation for Machine Learning",
    issuer: "NPTEL - IIsc Bangalore",
    date: "2026",
    credentialId: "NPTEL26CS02S1350203259",
    image: cloudinaryAssets.certificates.NPTELFoundationML,
  },
  {
    title: "Neural Networks for Computer Vision and Natural Language Processing",
    issuer: "NPTEL - IIT Guwahati",
    date: "2026",
    credentialId: "NPTEL26CS04S1450203597",
    image: cloudinaryAssets.certificates.NPTELNeuralNetworks,
  },
  {
    title: "Machine Learning for Engineering and Science Applications",
    issuer: "NPTEL - IIT Madras",
    date: "2026",
    credentialId: "NPTEL26CS76S450205504",
    image: cloudinaryAssets.certificates.NPTELML,
  },
  {
    title: "AI-Foundation Associate",
    issuer: "Oracle University",
    date: "2025",
    credentialId: "323291120OCI25AICFA",
    image: cloudinaryAssets.certificates.oracleAIFoundation,
  },
  {
    title: "AI Data Science Professional",
    issuer: "Oracle University",
    date: "2025",
    credentialId: "323291120OCI25DSOCP",
    image: cloudinaryAssets.certificates.oracleDataScience,
  },
  {
    title: "Generative AI Professional",
    issuer: "Oracle University",
    date: "2025",
    credentialId: "323291120OCI25GAIOCP",
    image: cloudinaryAssets.certificates.oracleGenerativeAI,
  },
  {
    title: "AI Vector Professional",
    issuer: "Oracle University",
    date: "2025",
    credentialId: "323291120DB23AIOCP",
    image: cloudinaryAssets.certificates.oracleVectorSearch,
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
  { label: "GitHub", href: "https://github.com/SID-CSE" },
  { label: "LinkedIn", href: "https://linkedin.com/in/siddharthkumaryo" },
  { label: "Email", href: "mailto:siddharthkumaryo@gmail.com" },
];

export const personal = {
  name: "Siddharth Kumar",
  status: "Final-year Computer Science Engineering student",
  cgpa: "9.05",
  headline: "Full Stack Developer | AI/ML Engineer | Cloud & DevOps Enthusiast",
  summary:
    "I build production-minded applications across the stack, with a focus on AI/ML, cloud delivery, and scalable systems. I enjoy turning ideas into deployable systems and writing clear documentation so teams can move quickly.",
};

export const aboutContent = {
  heroHeadline: "AI/ML Enthusiast | Computer Science Engineer | Problem Solver",
  heroDescription: "Building intelligent solutions through Artificial Intelligence, Machine Learning, Data Analytics, and Cloud Technologies. Passionate about transforming data into insights and developing scalable applications that solve real-world challenges.",

  mainBio: "I'm Siddharth Kumar, a final-year Computer Science Engineering student with a strong passion for Artificial Intelligence, Machine Learning, Data Science, and Cloud Computing. I enjoy transforming complex problems into intelligent, scalable, and impactful solutions through technology.",

  journeyDescription: "My academic journey and hands-on experience have equipped me with a solid foundation in Python, Machine Learning, Data Analytics, Database Management Systems, Operating Systems, Computer Networks, and Object-Oriented Programming. Through multiple internships and industry-oriented projects, I have gained practical experience in developing AI-powered applications, predictive models, web solutions, and cloud-based systems.",

  achievements: "I have successfully completed AI/ML-focused internships and earned elite certifications in Machine Learning, Neural Networks, and Mathematical Foundations of AI. My project portfolio includes solutions in Employee Salary Prediction, Content Management Systems, IoT-based Monitoring Systems, Library Management Systems, and Intelligent Data Analytics Applications.",

  vision: "I am continuously exploring emerging technologies, improving my problem-solving abilities through coding platforms, and building projects that create real-world impact. My goal is to contribute to innovative teams where I can leverage AI and software engineering to develop meaningful technology solutions while continuously learning and growing as an engineer.",

  specializations: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Cloud Computing"
  ],

  coreSkills: [
    "Python",
    "SQL",
    "Machine Learning",
    "Data Analytics",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "Git & GitHub",
    "Web Development"
  ],

  currentFocus: "Building AI-driven applications, strengthening Data Science expertise, and preparing for Software Engineering & AI/ML roles.",

  photoUrl: "https://res.cloudinary.com/dn37tck9g/image/upload/v1781461279/Profile_Picture_wmrgtk.jpg", // User will replace with their Cloudinary URL
};
