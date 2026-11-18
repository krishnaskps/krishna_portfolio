export const portfolioData = {
  personal: {
    name: "Krishna K P",
    designation: "Senior Software Engineer",
    experienceYears: "9+",
    email: "krishna048713@gmail.com",
    phone: "+919048937226",
    location: "Kannur, India",
    workLocations: ["Bengaluru", "Ernakulam", "Gujarat", "Kozhikode"],
    github: "https://github.com/Krishna1-karthik",
    website: "https://krishna1-karthik.github.io/Personal-websitess/",
    resumeUrl: "/Krishna_KP_Resume.docx",
    photoUrl: "/krishna_photo.jpg",
    headline: "Senior Software Engineer specializing in .NET Core, Angular, Microservices & Cloud Architectures",
    shortBio: "Senior Software Engineer with 9+ years of expertise in architecting and delivering high-performance enterprise applications using .NET Core, Angular (16-19), and SQL Server. Proven success across Banking, Healthcare, Education, and Government domains with a track record of driving resilience, optimizing performance, and mentoring engineering teams.",
    approach: "I focus on building resilient, maintainable, and loosely-coupled enterprise software. By leveraging domain-driven design, clean architecture, automated TDD/BDD testing, and continuous integration, I ensure high system availability, zero-downtime releases, and rapid business value delivery."
  },

  stats: [
    { label: "Years Experience", value: "9+", sub: "Continuous Engineering" },
    { label: "Enterprise Domains", value: "4", sub: "Banking, Health, Gov, Edu" },
    { label: "Roles & Engagements", value: "6", sub: "From NIC to Mphasis" },
    { label: "Education (MCA)", value: "8.54", sub: "CGPA at Maharaja's College" }
  ],

  domains: [
    {
      name: "Banking & Financial Services",
      desc: "Delivered mission-critical account context switching and position management for premier wealth advisory platforms (Charles Schwab).",
      icon: "Landmark"
    },
    {
      name: "Healthcare Systems",
      desc: "Engineered scalable cloud-native microservices, asynchronous message queues, and serverless compute for Qualifacts-Insync.",
      icon: "Activity"
    },
    {
      name: "Government & Public Sector",
      desc: "Built high-volume examination processing and reporting solutions for the National Informatics Centre (KSEEB).",
      icon: "Building2"
    },
    {
      name: "Education & Enterprise IT",
      desc: "Designed robust reporting engines, SSRS analytics, and modular integration APIs across enterprise client portfolios.",
      icon: "GraduationCap"
    }
  ],

  skillCategories: [
    {
      id: "backend",
      title: "Backend & Systems",
      description: "Scalable server architectures, microservices, and distributed APIs",
      skills: [
        { name: "C# .NET", highlight: true },
        { name: ".NET Core (6/7/8/9/10)", highlight: true },
        { name: "ASP.NET Core Web API", highlight: true },
        { name: "ASP.NET MVC", highlight: false },
        { name: "Entity Framework Core", highlight: false },
        { name: "LINQ", highlight: false },
        { name: "ADO.NET", highlight: false },
        { name: "RESTful APIs", highlight: true },
        { name: "Python", highlight: false }
      ]
    },
    {
      id: "frontend",
      title: "Frontend & Architecture",
      description: "Modern single-page applications and micro-frontend architectures",
      skills: [
        { name: "Angular (16 - 19)", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "JavaScript", highlight: false },
        { name: "Micro-Frontends (MFE)", highlight: true },
        { name: "Single-SPA", highlight: true },
        { name: "NgRx State Management", highlight: false },
        { name: "HTML5 / CSS3", highlight: false },
        { name: "Responsive UI", highlight: false }
      ]
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      description: "Cloud-native services, automated pipelines, and containerization",
      skills: [
        { name: "AWS Cloud", highlight: true },
        { name: "AWS Lambda", highlight: true },
        { name: "AWS SQS & SNS", highlight: false },
        { name: "AWS ECS Containers", highlight: false },
        { name: "AWS S3 Bucket", highlight: false },
        { name: "GitHub Actions CI/CD", highlight: true },
        { name: "Bamboo Deployment", highlight: false },
        { name: "Docker", highlight: false },
        { name: "GIT & GitHub", highlight: false }
      ]
    },
    {
      id: "database",
      title: "Databases & Storage",
      description: "Relational, NoSQL, and enterprise reporting solutions",
      skills: [
        { name: "Microsoft SQL Server", highlight: true },
        { name: "PostgreSQL", highlight: false },
        { name: "AWS DynamoDB", highlight: true },
        { name: "SSRS Reporting Services", highlight: false },
        { name: "Database Design & Optimization", highlight: false },
        { name: "SQL Query Tuning", highlight: false }
      ]
    },
    {
      id: "architecture-testing",
      title: "Architecture & QA",
      description: "Resilient patterns, testing methodologies, and agile delivery",
      skills: [
        { name: "Microservices Architecture", highlight: true },
        { name: "Polly Resilience & Circuit Breakers", highlight: true },
        { name: "OAuth2 & Security", highlight: false },
        { name: "Service Discovery", highlight: false },
        { name: "X-Unit Testing", highlight: true },
        { name: "TDD / BDD Frameworks", highlight: false },
        { name: "SDD (Specification-Driven Dev)", highlight: false },
        { name: "Agile / Scrum & Kanban", highlight: false },
        { name: "Code Optimization & SDLC", highlight: false }
      ]
    },
    {
      id: "ai-tooling",
      title: "AI & Modern Tooling",
      description: "Leveraging state-of-the-art AI systems to accelerate delivery",
      skills: [
        { name: "Large Language Models (LLMs)", highlight: true },
        { name: "Agentic AI", highlight: true },
        { name: "Generative AI (Claude Sonnet)", highlight: true },
        { name: "GitHub Copilot", highlight: true },
        { name: "Jira MCP Server", highlight: true },
        { name: "Dev AI for VS Code", highlight: false },
        { name: "Visual Studio IDE", highlight: false }
      ]
    }
  ],

  experiences: [
    {
      id: "mphasis",
      period: "11/2024 - Present",
      role: "Senior Software Engineer",
      company: "Mphasis Limited",
      location: "Bengaluru, India",
      domain: "Banking & Financial Services",
      projectTitle: "Charles Schwab Advisors Services (SAC Account Switcher XL)",
      summary: "Delivered a scalable and resilient ASP.NET Core + Angular 19 full-stack application supporting advisor account and context switching across enterprise tooling.",
      highlights: [
        "Led end-to-end feature development using Micro-Frontends (MFE / Single-SPA), NgRx, REST APIs, OAuth2, and service discovery.",
        "Engineered fault tolerance and resilience patterns using Polly to ensure zero-downtime cross-system context transitions.",
        "Gathered and analyzed technical requirements for Accounts, Position, and Balance Management APIs.",
        "Architected and implemented .NET 8 and Angular 18/19 REST APIs using C# 12 and ADO.NET.",
        "Streamlined development productivity using Jira MCP Server, Dev AI for Visual Studio Code, and GitHub Copilot.",
        "Maintained rigorous testing standards with X-Unit, TDD, and BDD specifications integrated into Bamboo and GitHub Actions CI/CD."
      ],
      technologies: [
        ".NET Core 8",
        "C# 12",
        "Angular 18/19",
        "Micro-Frontends (MFE)",
        "Single-SPA",
        "NgRx",
        "Polly Resilience",
        "OAuth2",
        "ADO.NET",
        "REST APIs",
        "X-Unit",
        "TDD / BDD",
        "Bamboo CI/CD",
        "GitHub Actions",
        "Jira MCP"
      ]
    },
    {
      id: "qualifacts",
      period: "09/2023 - 02/2024",
      role: "Senior Software Engineer",
      company: "Qualifacts - Insync",
      location: "Gujarat, India",
      domain: "Healthcare Enterprise",
      projectTitle: "Cloud-Native Behavioral Health Platform",
      summary: "Engineered scalable healthcare software solutions integrating AWS cloud infrastructure and modern .NET Core services.",
      highlights: [
        "Architected high-volume RESTful Web APIs on .NET Core for electronic health record workflows.",
        "Integrated AWS asynchronous event processing utilizing SQS (Simple Queue Service) and SNS (Simple Notification Service).",
        "Deployed serverless backend computations using AWS Lambda and containerized services via AWS ECS.",
        "Implemented high-speed key-value document storage with AWS DynamoDB and managed secure document assets via AWS S3.",
        "Built responsive frontend modules using Angular 17 and TypeScript adhering to HIPAA healthcare standards."
      ],
      technologies: [
        ".NET Core",
        "C#",
        "Angular 17",
        "AWS Lambda",
        "AWS ECS Containers",
        "AWS SQS / SNS",
        "AWS DynamoDB",
        "AWS S3 Bucket",
        "Web API",
        "CI/CD Pipelines"
      ]
    },
    {
      id: "cyspan",
      period: "11/2021 - 09/2023",
      role: "Software Engineer",
      company: "Cyspan - Integretz",
      location: "Ernakulam, India",
      domain: "Enterprise Systems",
      projectTitle: "Enterprise Integration & Web API Engine",
      summary: "Designed and implemented robust backend services and data workflows using .NET Core, LINQ, and SQL Server.",
      highlights: [
        "Developed and maintained scalable Web APIs facilitating business-to-business enterprise data interchange.",
        "Authored complex LINQ queries and optimized database stored procedures in Microsoft SQL Server.",
        "Participated in sprint planning, code reviews, and architectural refinement sessions.",
        "Enhanced system throughput and response times through optimized caching and payload serialization."
      ],
      technologies: [
        ".NET Core",
        "C#",
        ".NET Framework",
        "Web API",
        "SQL Server",
        "LINQ",
        "Entity Framework"
      ]
    },
    {
      id: "nexgen",
      period: "02/2021 - 11/2021",
      role: "Software Engineer",
      company: "NexGen",
      location: "Ernakulam, India",
      domain: "Enterprise Web Applications",
      projectTitle: "NexGen Enterprise Core Platform",
      summary: "Developed modern ASP.NET Core MVC web applications backed by Microsoft SQL Server.",
      highlights: [
        "Engineered full-stack business applications utilizing ASP.NET Core MVC architecture.",
        "Implemented secure authentication, authorization, and data validation layers.",
        "Designed normalized SQL Server database schemas and relational entities.",
        "Collaborated with QA teams for bug fixing, release verification, and client delivery."
      ],
      technologies: [
        "ASP.NET Core",
        "C#",
        "ASP.NET MVC",
        ".NET",
        "SQL Server"
      ]
    },
    {
      id: "speridian",
      period: "02/2020 - 11/2020",
      role: "Software Engineer",
      company: "Speridian Technologies",
      location: "Kozhikode, India",
      domain: "Enterprise Data & Analytics",
      projectTitle: "Enterprise Reporting & BI Analytics",
      summary: "Developed enterprise applications, analytical reporting layers, and backend workflows.",
      highlights: [
        "Engineered complex business intelligence and operational reports using SQL Server Reporting Services (SSRS).",
        "Developed backend modules with ASP.NET and C# for data extraction, transformation, and reporting.",
        "Tuned database queries, indexes, and execution plans for large transaction datasets."
      ],
      technologies: [
        "ASP.NET",
        "C#",
        "SQL Server",
        "SSRS Reports",
        "Stored Procedures"
      ]
    },
    {
      id: "kseeb",
      period: "03/2016 - 11/2019",
      role: "Junior Software Engineer",
      company: "KSEEB - NIC (National Informatics Centre)",
      location: "Bangalore, India",
      domain: "Government & Education",
      projectTitle: "Karnataka State Examination Portal & Processing Engine",
      summary: "Contributed to high-volume state government portal handling statewide student examinations and verification.",
      highlights: [
        "Maintained and enhanced core examination registration, tabulation, and certification modules for lakhs of students.",
        "Designed and generated critical educational and governmental SSRS reports with strict accuracy requirements.",
        "Wrote robust SQL Server scripts, stored procedures, and data verification routines.",
        "Provided frontline technical support during critical state examination result publication cycles."
      ],
      technologies: [
        "ASP.NET",
        "C#",
        "SQL Server",
        "SSRS Reports",
        "Government Informatics",
        "Data Verification"
      ]
    }
  ],

  projects: [
    {
      id: "sac-account-switcher",
      title: "SAC Account Switcher XL (Charles Schwab)",
      company: "Mphasis Limited",
      role: "Senior Full Stack & Architecture Lead",
      period: "11/2024 - Present",
      category: "Banking & Enterprise",
      summary: "Delivered a scalable and resilient full-stack application supporting financial advisor account and context switching across enterprise tooling for Charles Schwab Advisor Services.",
      keyFeatures: [
        "Micro-Frontend (MFE) architecture powered by Single-SPA and Angular 18/19",
        "High-performance .NET 8 / C# 12 RESTful APIs for Accounts, Position, and Balance management",
        "Polly resilience integration (circuit breakers, exponential retry policies)",
        "OAuth2 secure authentication and service discovery across enterprise microservices",
        "Comprehensive automated testing with X-Unit, TDD, and BDD specifications"
      ],
      technologies: [".NET Core 8", "C# 12", "Angular 19", "Single-SPA", "NgRx", "Polly", "OAuth2", "X-Unit", "Bamboo CI/CD"],
      githubUrl: "https://github.com/Krishna1-karthik"
    },
    {
      id: "qualifacts-healthcare",
      title: "Cloud-Native Behavioral Health Platform",
      company: "Qualifacts - Insync",
      role: "Senior Cloud & Backend Engineer",
      period: "09/2023 - 02/2024",
      category: "Healthcare Cloud",
      summary: "Cloud-first electronic healthcare application utilizing AWS managed services, serverless compute, and microservices for behavioral healthcare clinics.",
      keyFeatures: [
        "Decoupled event pipelines using AWS SQS and SNS for asynchronous task queues",
        "Serverless functions running on AWS Lambda with containerized microservices on AWS ECS",
        "Ultra-low latency patient record indexing with AWS DynamoDB and document storage in S3",
        "Angular 17 user interfaces built with responsive design and accessibility standards"
      ],
      technologies: [".NET Core", "AWS Lambda", "AWS ECS", "AWS SQS/SNS", "DynamoDB", "S3", "Angular 17", "Web API"],
      githubUrl: "https://github.com/Krishna1-karthik"
    },
    {
      id: "enterprise-api-gateway",
      title: "Enterprise Integration & Data Pipeline",
      company: "Cyspan - Integretz",
      role: "Backend Software Engineer",
      period: "11/2021 - 09/2023",
      category: "Enterprise Integration",
      summary: "High-throughput API suite and data synchronization service processing enterprise business transactions and third-party partner integrations.",
      keyFeatures: [
        "Optimized LINQ-to-Entities queries reducing query execution latencies by up to 35%",
        "Resilient RESTful Web APIs with comprehensive payload validation and schema contracts",
        "Structured logging, error boundary handling, and transactional database integrity"
      ],
      technologies: [".NET Core", "C#", "SQL Server", "LINQ", "Web API", "Entity Framework"],
      githubUrl: "https://github.com/Krishna1-karthik"
    },
    {
      id: "kseeb-portal",
      title: "KSEEB State Examination & Certification System",
      company: "KSEEB - NIC",
      role: "Software Engineer",
      period: "03/2016 - 11/2019",
      category: "Government / Public Sector",
      summary: "Statewide public sector examination and results distribution portal for the Karnataka State Secondary Education Examination Board under the National Informatics Centre (NIC).",
      keyFeatures: [
        "Handled critical state examination tabulation for over 800,000+ candidates annually",
        "Automated generation of official mark sheets, tabulation registers, and verification reports via SSRS",
        "High-reliability transactional SQL Server database with audit trails and data integrity safeguards"
      ],
      technologies: ["ASP.NET", "C#", "SQL Server", "SSRS Reports", "NIC Infrastructure"],
      githubUrl: "https://github.com/Krishna1-karthik"
    }
  ],

  education: [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "Maharaja's College, Ernakulam",
      location: "Ernakulam, India",
      period: "08/2012 - 05/2015",
      score: "CGPA 8.54",
      description: "Comprehensive curriculum in advanced software engineering, data structures, algorithms, relational database design, and object-oriented architecture."
    }
  ],

  certifications: [
    {
      title: "Python Certification",
      issuer: "Certified Professional Credential",
      skills: ["Python", "Scripting", "Automation", "Data Processing"]
    }
  ],

  languages: [
    { name: "English", level: "Native / Professional Working Proficiency" },
    { name: "Malayalam", level: "Native Language" }
  ]
};

