import { cloudinaryAssets } from "@/lib/cloudinary";
import { time } from "console";
export const navigationItems = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroRoles = [
  "Full Stack Developer",
  "AI/ML Practitioner",
  "Cloud & DevOps Explorer",
  "Product-minded Problem Solver",
];

export const heroFocusAreas = [
  "Building scalable full-stack applications",
  "Designing cloud-ready backend systems",
  "Developing AI/ML solutions and intelligent applications",
  "Delivering end-to-end software projects"
];

export const heroStats = [
  { value: "15+", label: "Projects Developed" },
  { value: "10+", label: "Certifications" },
  { value: "3+", label: "Internship Experiences" },
  { value: "9.05", label: "CGPA" },
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
"MongoDB",
"InfluxDB",
"Database Design",
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
"Azure",
"Git",
"GitHub"
],
},
];


export const projectCards = [
  {
    name: "Contify CMS",
    problem: "Developed an enterprise-grade Content Management System (CMS) that streamlines project requests, proposal management, task assignment, content review, stakeholder approvals, and team collaboration through a structured role-based workflow.",
    architecture: "React Frontend -> Spring Boot REST APIs -> JWT Authentication -> MySQL Database -> Cloudinary Media Storage -> Workflow & Notification Engine",
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
    architecture: "React Frontend -> Django REST APIs -> JWT/OAuth Authentication -> PostgreSQL Database -> Messaging & Notification Services",
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
    architecture: "Streamlit Frontend -> Data Processing Pipeline -> Feature Engineering -> XGBoost Regression Model -> Prediction Engine",
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
      "Achieved an R² score of 0.89 using XGBoost Regression for salary prediction.",
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
    name: "Game Arcade – Android Gaming & AI Assistant Platform",
    problem: "Developed a multi-game Android application that combines classic logic puzzles, strategy games, and an AI-powered game assistant into a single interactive platform. The application provides users with entertainment, problem-solving challenges, and instant guidance through a domain-specific AI chatbot.",
    architecture: "Game Selection Hub → Individual Game Modules → Custom Game Logic Engine → AI Chat Assistant (Groq API) → User Interaction Layer",
    stack: [
      "Android Studio",
      "Android XML",
      "Material Design",
      "Java",
      "OkHttp",
      "Groq API",
      "Mobile Game Development",
      "AI Chatbots",
    ],
    challenges: [
      "Designing and implementing multiple game engines within a single Android application.",  
      "Developing efficient algorithms for puzzle solving, pathfinding, and game state management.",
      "Integrating the Groq API and handling real-time AI interactions using OkHttp.",
      "Restricting AI responses through domain-specific guardrails to ensure only game-related assistance."
    ],
    impact: [
      "Integrated six classic puzzle and strategy games within a unified Android platform.",
      "Implemented algorithm-based game logic including backtracking, recursion, and pathfinding techniques.",
      "Developed a specialized AI assistant capable of providing game rules, hints, strategies, and explanations.",
      "Demonstrated practical integration of mobile application development and artificial intelligence technologies."
    ],
    links: {
      github: "https://github.com/SID-CSE/GameArcade.git",
      live: "#",
    },
    image: cloudinaryAssets.architectures.gamearcade,
  },
  {
    name: "Recon Automation for Web Pentesting",
    problem: "Developed a Python-based reconnaissance and automation toolkit to support ethical hacking, network scanning, information gathering, and penetration testing activities.",
    architecture: "CLI Interface -> Scanning & Enumeration Modules -> Information Gathering Engine -> Report Generation Utilities",
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
  },
  {
    name: "Raspberry Pi-Based IoT Remote Farm Animal Monitoring System",
    problem:
      "Developed an IoT-enabled livestock monitoring solution using Raspberry Pi Zero 2 W to remotely track farm animal health, activity, and environmental conditions in real time. The system was designed to reduce manual supervision, improve animal welfare, and provide farmers with actionable insights through continuous monitoring and automated alerts.",

    architecture:
      "Health & Activity Sensors → Raspberry Pi Zero 2 W → Data Processing Engine → Wi-Fi Connectivity → Storage & Analytics → Monitoring Dashboard → Real-Time Alerts & Notifications",

    stack: [
      "Raspberry Pi Zero 2 W",
      "Python / Java",
      "IoT Sensors",
      "Wi-Fi Communication",
      "Linux",
      "MQTT / HTTP Protocols",
      "Remote Monitoring Dashboard",
      "Data Analytics",
      "Smart Agriculture"
    ],

    challenges: [
      "Collecting accurate sensor data in outdoor farm environments",
      "Ensuring stable wireless connectivity across large farm areas",
      "Processing real-time health and activity data efficiently",
      "Detecting abnormal animal behavior and generating alerts",
    ],

    impact: [
      "Enabled remote monitoring of livestock health and activity",
      "Provided real-time insights through a centralized dashboard",
      "Demonstrated practical application of smart agriculture technologies",
      "Successfully showcased at Presidency University's Innovative Raspberry Pi Project Exhibition (January 2025)"
    ],

    links: {
      github: "#",
      live: "#",
    },

    image: cloudinaryAssets.architectures.raspberryPi,
  },
  {
    name: "Arduino-Based IoT Wearable Health Monitoring System",
    problem: "Developed a compact and affordable wearable health monitoring system that combines step counting, heart rate monitoring, calorie estimation, and distance tracking. The solution was designed to promote health awareness, encourage physical activity, and provide users with real-time fitness insights through wireless connectivity and mobile integration.",
    architecture: "Motion & Heartbeat Sensors → Arduino Controller → Activity Processing Engine → Bluetooth Module → Mobile Application (ArduTooth) → Real-Time Health Dashboard",
    stack: [
      "Arduino Uno / Lilypad",
      "Embedded C/C++",
      "Bluetooth (HC-05)",
      "Heartbeat Sensor",
      "Motion Detection Sensor",
      "Arduino IDE",    
      "ArduTooth App",
      "Wearable Electronics",
      "IoT Communication"
    ],
    challenges: [
      "Implementing accurate step detection from motion sensor data",
      "Filtering false movement readings to improve counting accuracy",
      "Designing a compact wearable prototype with low power consumption",
      "Synchronizing multiple sensor inputs for real-time monitoring"
    ],
    impact: [
      "Developed a functional wearable fitness tracking solution",
      "Integrated wireless Bluetooth connectivity for mobile monitoring",
      "Promoted health awareness through continuous activity tracking",
      "Successfully showcased at Presidency University's Innovative Arduino Project Exhibition (June 2024)"
    ],
    links: {
      github: "#",
      live: "#",
    },
    image: cloudinaryAssets.architectures.arduino,
  },
];


export const certifications = [
  {
    title: "Software Engineering and Agile software development",
    issuer: "Infosys Springboard",
    date: "2025",
    credentialId: "",
    image: cloudinaryAssets.certificates.SoftwareEngineeringAgile,
  },
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    date: "2025",
    credentialId: "",
    image: cloudinaryAssets.certificates.PythonFoundation,
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025",
    credentialId: "PLAN-7913EE1DB030",
    image: cloudinaryAssets.certificates.IBMAIFundamentals,
  },
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

export const experience = [
  {
    role: "Full Stack Python Intern",
    org: "Infosys Springboard",
    dates: "November 2025 – January 2026",
    project: "Taskera (TalentLink) – Freelance Marketplace & Talent Matching Platform",
    certificate: {
      image: cloudinaryAssets.experience.infosysSpringboard.image,
      title: cloudinaryAssets.experience.infosysSpringboard.title,
    },
    bullets: [
      "Developed responsive frontend interfaces, backend APIs, and database-integrated workflows for a full-stack web application.",
      "Collaborated across the complete software development lifecycle, from design and implementation to testing and deployment.",
      "Led project integration activities, coordinated team deliverables, and ensured successful solution completion.",
      "Presented the final product to the evaluation panel, demonstrating technical functionality and project outcomes.",
    ],
  },
  {
    role: "AI & ML Intern",
    org: "AICTE – Edunet Foundation – IBM SkillsBuild",
    dates: "June 2024 – August 2024",
    project: "Employee Salary Prediction & Classification System",
    certificate: {
      image: cloudinaryAssets.experience.ibmSkillsBuild.image,
      title: cloudinaryAssets.experience.ibmSkillsBuild.title,
    },
    bullets: [
      "Applied machine learning algorithms to real-world datasets involving predictive analytics and decision-making tasks.",
      "Performed data preprocessing, feature engineering, model training, and performance evaluation.",
      "Worked with model optimization techniques and gained exposure to deployment workflows.",
      "Developed practical understanding of the end-to-end machine learning lifecycle and data-driven solutions.",
    ],
  },
  {
    role: "Cybersecurity Mentee",
    org: "1Stop.ai – E-Cell IIT Roorkee",
    dates: "July 2025 – August 2025",
    project: "Recon Automation for Web Pentesting",
    certificate: {
      image: cloudinaryAssets.experience.cybersecurityMentorship.image,
      title: cloudinaryAssets.experience.cybersecurityMentorship.title,
    },
    bullets: [
      "Built foundational and practical skills in cybersecurity, ethical hacking, and network security concepts.",
      "Conducted reconnaissance and information-gathering activities for security assessments.",
      "Worked with vulnerability assessment techniques and security testing methodologies.",
      "Explored threat identification, risk analysis, and best practices for securing applications and systems.",
    ],
  },
  {
    role: "Student Projects & Labs",
    org: "Presidency University",
    dates: "2023 – Present",
    bullets: [
      "Designed and developed full-stack applications, AI/ML solutions, IoT systems, and data-driven projects.",
      "Applied software engineering principles to build scalable, testable, and well-documented solutions.",
      "Worked extensively with Python, Java, SQL, React, Machine Learning, Raspberry Pi, and Arduino platforms.",
      "Continuously explored emerging technologies including Cloud Computing, DevOps, Artificial Intelligence, and Intelligent Monitoring Systems.",
    ],
    projects: [
      "Contify CMS – Enterprise Content Management System",
      "Remote Farm Animal Monitoring System",
      "Game Arcade",
      "Arduino-Based IoT Wearable Health Monitoring System",
    ],
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/SID-CSE" },
  { label: "LinkedIn", href: "https://linkedin.com/in/siddharthkumaryo" },
  { label: "Email", href: "mailto:siddharthkumaryo@gmail.com" },
  { label: "Leetcode", href: "https://leetcode.com/u/SID_CSE/" },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/siddharthkumaryo" },
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
  heroHeadline: "Engineer at the Intersection of Full Stack, Cloud & AI",
  heroDescription: "Building intelligent solutions through Full Stack Development, Artificial Intelligence, Machine Learning, and Cloud Technologies. Passionate about transforming data into insights and developing scalable applications that solve real-world challenges.",

  mainBio: "I am Siddharth Kumar, a final-year Computer Science Engineering student passionate about building intelligent systems that combine the power of Artificial Intelligence, Machine Learning, and Cloud Technologies. My journey in technology is driven by a commitment to solving complex problems through innovation, analytical thinking, and scalable software solutions.Through academic excellence, hands-on project development, professional internships, and continuous upskilling, I have cultivated a strong technical foundation and a growth-oriented mindset. I aspire to contribute to cutting-edge technology initiatives, creating impactful solutions that drive digital transformation and deliver meaningful real-world outcomes.",
  vision: "I'm committed to continuous growth, exploring emerging technologies, sharpening my problem-solving skills through coding platforms, and building projects with tangible impact. My goal is to join an innovative team where I can apply AI and software engineering to create meaningful solutions, while constantly learning and evolving as an engineer.",

  specializations: [
    "Full Stack Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
    "DevOps & CI/CD",
    "Software Engineering",
  ],

  coreSkills: [
    "Python",
    "Java",
    "SQL",
    "AI / ML",
    "Cloud Services",
    "Web Development",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "Git & GitHub",

  ],

  currentFocus: "Building intelligent, scalable, and cloud-ready applications through Full-Stack Development, Artificial Intelligence, Machine Learning, DevOps, and Software Engineering.",

  photoUrl: "https://res.cloudinary.com/dn37tck9g/image/upload/v1781461279/Profile_Picture_wmrgtk.jpg",
};
