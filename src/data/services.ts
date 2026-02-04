
import {
    Code2, Smartphone, Megaphone, Palette, Cloud, Settings, Handshake, Globe, BrainCircuit, Link, Cpu, Infinity
} from "lucide-react";

export interface ServiceData {
    id: string;
    title: string;
    description: string;
    heroImage?: string;
    subServices: {
        title: string;
        description: string;
        icon?: any;
    }[];
    process: {
        title: string;
        description: string;
    }[];
    whyChooseUs: {
        title: string;
        description: string;
    }[];
    faq?: {
        question: string;
        answer: string;
    }[];
}

export const servicesData: Record<string, ServiceData> = {
    "web-development": {
        id: "web-development",
        title: "Web Development",
        description: "Robust and scalable websites tailored to your business needs. We create pioneering, feasible websites that drive engagement.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Custom Web Development", description: "Tailored solutions built from scratch to meet your specific business requirements.", icon: Code2 },
            { title: "E-commerce Development", description: "Secure and scalable online stores with seamless shopping experiences.", icon: Code2 },
            { title: "CMS Development", description: "Easy-to-manage websites using powerful Content Management Systems.", icon: Code2 },
            { title: "Full-Stack Development", description: "Comprehensive front-end and back-end integration for robust applications.", icon: Code2 },
            { title: "Web Application Development", description: "Custom web apps to streamline your business operations.", icon: Code2 },
            { title: "Maintenance & Support", description: "Ongoing support to keep your website secure and up-to-date.", icon: Code2 },
        ],
        process: [
            { title: "Discovery & Analysis", description: "Understanding your business needs, challenges, and goals." },
            { title: "Planning & Design", description: "Developing a detailed plan and designing a tailored solution." },
            { title: "Development", description: "Building the website using the current technologies." },
            { title: "Testing & QA", description: "Conducting diligent testing to ensure functionality." },
            { title: "Deployment", description: "Implementing the website and providing user training." },
        ],
        whyChooseUs: [
            { title: "Experienced Team", description: "Adept developers with ample experience in web development." },
            { title: "Customized Solutions", description: "Specialized solutions designed to meet your unique requirements." },
            { title: "User-Centric Design", description: "Prioritizing user experience for functional and appealing interfaces." },
            { title: "Proven Methodology", description: "Efficient project management ensuring timely delivery." },
        ]
    },
    "mobile-app-development": {
        id: "mobile-app-development",
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps for iOS and Android.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "iOS App Development", description: "High-performance apps tailored for the Apple ecosystem.", icon: Smartphone },
            { title: "Android App Development", description: "Scalable and robust apps for the vast Android market.", icon: Smartphone },
            { title: "Cross-Platform Apps", description: "Efficient apps that run seamlessly on both iOS and Android.", icon: Smartphone },
            { title: "App UI/UX Design", description: "Intuitive and engaging designs for mobile interfaces.", icon: Smartphone },
        ],
        process: [
            { title: "Strategy", description: "Defining the app concept and target audience." },
            { title: "Design", description: "Creating wireframes and UI prototypes." },
            { title: "Development", description: "Coding the app with the latest frameworks." },
            { title: "Testing", description: "Rigorous testing on multiple devices." },
            { title: "Launch", description: "Deploying to App Store and Play Store." },
        ],
        whyChooseUs: [
            { title: "Expert Developers", description: "Skilled in Swift, Kotlin, React Native, and Flutter." },
            { title: "Seamless Performance", description: "Optimized apps for diverse devices." },
            { title: "End-to-End Service", description: "From concept to post-launch support." },
            { title: "Agile Approach", description: "Flexible development adapting to your feedback." },
        ]
    },
    "search-engine-optimization": {
        id: "search-engine-optimization",
        title: "SEO Optimization",
        description: "Ranking your website higher to drive organic traffic.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "On-Page SEO", description: "Optimizing individual web pages to rank higher.", icon: Megaphone },
            { title: "Off-Page SEO", description: "Building authority through backlinks and social signals.", icon: Megaphone },
            { title: "Technical SEO", description: "Improving site structure and performance for crawlers.", icon: Megaphone },
            { title: "Local SEO", description: "Optimizing for local search results and Google Maps.", icon: Megaphone },
        ],
        process: [
            { title: "Audit", description: "Analyzing current site performance." },
            { title: "Keyword Research", description: "Identifying high-value search terms." },
            { title: "Optimization", description: "Implementing technical and content fixes." },
            { title: "Reporting", description: "Tracking progress and adjusting strategy." },
            { title: "Growth", description: "Scaling traffic and conversions." },
        ],
        whyChooseUs: [
            { title: "Data-Driven", description: "Strategies based on analytics and trends." },
            { title: "Transparent Reporting", description: "Clear insights into your ROI." },
            { title: "White Hat Techniques", description: "Ethical practices for long-term success." },
            { title: "Continuous Improvement", description: "Adapting to algorithm updates." },
        ]
    },
    "ui-ux-graphic-design": {
        id: "ui-ux-graphic-design",
        title: "UI/UX & Graphic Design",
        description: "Intuitive and engaging user interfaces for better experience.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "User Research", description: "Understanding user behavior and needs.", icon: Palette },
            { title: "Wireframing", description: "Blueprinting layout and flow.", icon: Palette },
            { title: "Visual Design", description: "Creating stunning, on-brand aesthetics.", icon: Palette },
            { title: "Prototyping", description: "Interactive mockups for testing.", icon: Palette },
        ],
        process: [
            { title: "Empathize", description: "Understanding the user." },
            { title: "Define", description: "Stating the problem clearly." },
            { title: "Ideate", description: "Brainstorming creative solutions." },
            { title: "Prototype", description: "Building tangible representations." },
            { title: "Test", description: "Validating with real users." },
        ],
        whyChooseUs: [
            { title: "Creative Experts", description: "Designers with a keen eye for detail." },
            { title: "User-Centric", description: "Designs that prioritize the end-user." },
            { title: "Modern Tools", description: "Using Figma, Adobe XD, and more." },
            { title: "Brand Consistency", description: "Ensuring cohesive visual identity." },
        ]
    },
    "cloud": {
        id: "cloud",
        title: "Cloud Solutions",
        description: "Secure and efficient cloud infrastructure and migration services.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Cloud Migration", description: "Moving legacy systems to the cloud.", icon: Cloud },
            { title: "Cloud Infrastructure", description: "Setting up robust cloud environments.", icon: Cloud },
            { title: "Cloud Security", description: "Protecting data and applications.", icon: Cloud },
            { title: "Managed Services", description: "Ongoing management and optimization.", icon: Cloud },
        ],
        process: [
            { title: "Assessment", description: "Evaluating current infrastructure." },
            { title: "Strategy", description: "Planning the migration path." },
            { title: "Migration", description: "Executing the move securely." },
            { title: "Optimization", description: "Fine-tuning for performance and cost." },
            { title: "Support", description: "24/7 monitoring and assistance." },
        ],
        whyChooseUs: [
            { title: "Certified Experts", description: "AWS, Azure, and Google Cloud professionals." },
            { title: "Scalability", description: "Solutions that grow with your business." },
            { title: "Cost-Effective", description: "Optimizing comprehensive cloud spend." },
            { title: "Security First", description: "Best-in-class security measures." },
        ]
    },
    "erp-development": {
        id: "erp-development",
        title: "ERP Development",
        description: "Streamlining and integrating business techniques into a unified system.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Custom ERP", description: "Tailored enterprise resource planning systems.", icon: Settings },
            { title: "ERP Integration", description: "Connecting ERP with existing tools.", icon: Settings },
            { title: "Module Development", description: "Adding specific functionality like HR or Finance.", icon: Settings },
            { title: "Migration & Upgrade", description: "Modernizing legacy ERP systems.", icon: Settings },
        ],
        process: [
            { title: "Consulting", description: "Analyzing business processes." },
            { title: "Selection", description: "Choosing the right stack or platform." },
            { title: "Implementation", description: "Deploying the ERP solution." },
            { title: "Customization", description: "Tailoring to specific needs." },
            { title: "Training", description: "Onboarding staff effectively." },
        ],
        whyChooseUs: [
            { title: "Process Expertise", description: "Deep understanding of business workflows." },
            { title: "Efficiency", description: "Automating manual tasks." },
            { title: "Data Accuracy", description: "Single source of truth for data." },
            { title: "Scalability", description: "Systems that expand with your enterprise." },
        ]
    },
    "crm-development": {
        id: "crm-development",
        title: "CRM Development",
        description: "Tailor-made CRM services to beautify consumer relationships.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Custom CRM", description: "Building CRM from the ground up.", icon: Handshake },
            { title: "Salesforce Solutions", description: "Expert implementation and customization.", icon: Handshake },
            { title: "CRM Integration", description: "Syncing with email, marketing, and support.", icon: Handshake },
            { title: "Automation", description: "Automating follow-ups and workflows.", icon: Handshake },
        ],
        process: [
            { title: "Discovery", description: "Mapping customer journey." },
            { title: "Architecture", description: "Designing the data model." },
            { title: "Development", description: "Building features and dashboards." },
            { title: "Integration", description: "Connecting with other tools." },
            { title: "Rollout", description: "Training and deployment." },
        ],
        whyChooseUs: [
            { title: "Customer Focus", description: "Tools that help you serve better." },
            { title: "Data Insights", description: "Actionable analytics on sales." },
            { title: "Efficiency", description: "Streamlined sales operations." },
            { title: "Custom Fit", description: "Aligned with your sales process." },
        ]
    },
    "offshore-development": {
        id: "offshore-development",
        title: "Offshore Development",
        description: "Access to international talent and dedicated development teams.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Dedicated Teams", description: "Your own remote dev team.", icon: Globe },
            { title: "Staff Augmentation", description: "Adding experts to your in-house team.", icon: Globe },
            { title: "Project Outsourcing", description: "Full project delivery.", icon: Globe },
            { title: "Consulting", description: "Technical guidance and strategy.", icon: Globe },
        ],
        process: [
            { title: "Requirement", description: "Defining skill sets needed." },
            { title: "Screening", description: "Selecting the best candidates." },
            { title: "Onboarding", description: "Integrating with your workflow." },
            { title: "Development", description: "Agile delivery and reporting." },
            { title: "Management", description: "Ongoing HR and support." },
        ],
        whyChooseUs: [
            { title: "Cost Efficient", description: "High quality at competitive rates." },
            { title: "Global Talent", description: "Access to top skills worldwide." },
            { title: "Flexible Scaling", description: "Scale up or down easily." },
            { title: "Seamless Comms", description: "Effective communication tools." },
        ]
    },
    "ai-development": {
        id: "ai-development",
        title: "AI Development",
        description: "Smart AI & ML solutions to automate and innovate.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Machine Learning", description: "Predictive models and algorithms.", icon: BrainCircuit },
            { title: "NLP", description: "Natural Language Processing solutions.", icon: BrainCircuit },
            { title: "Computer Vision", description: "Image and video analysis.", icon: BrainCircuit },
            { title: "Chatbots", description: "Intelligent conversational agents.", icon: BrainCircuit },
        ],
        process: [
            { title: "Feasibility", description: "Assessing AI potential." },
            { title: "Data Prep", description: "Cleaning and labeling data." },
            { title: "Modeling", description: "Training and testing models." },
            { title: "Integration", description: "Deploying models to apps." },
            { title: "Monitoring", description: "Tracking performance and drift." },
        ],
        whyChooseUs: [
            { title: "Cutting Edge", description: "Using latest AI research." },
            { title: "Business Value", description: "Focusing on ROI." },
            { title: "Ethical AI", description: "Responsible and fair systems." },
            { title: "Expert Team", description: "Data scientists and engineers." },
        ]
    },
    "block-chain": {
        id: "block-chain",
        title: "Blockchain",
        description: "Secure and transparent transactions through decentralized technology.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Smart Contracts", description: "Self-executing digital agreements.", icon: Link },
            { title: "DApps", description: "Decentralized application development.", icon: Link },
            { title: "Private Blockchains", description: "Enterprise-grade distributed ledgers.", icon: Link },
            { title: "NFT Marketplaces", description: "Platforms for digital assets.", icon: Link },
        ],
        process: [
            { title: "Use Case", description: "Identifying blockchain fit." },
            { title: "Architecture", description: "Designing the network." },
            { title: "Development", description: "Coding contracts and UI." },
            { title: "Audit", description: "Security verification." },
            { title: "Launch", description: "Mainnet deployment." },
        ],
        whyChooseUs: [
            { title: "Security", description: "Immutable and safe systems." },
            { title: "Transparency", description: "Open and verifiable data." },
            { title: "Innovation", description: "Pioneering new business models." },
            { title: "Expertise", description: "Deep knowledge of chains." },
        ]
    },
    "iot-development": {
        id: "iot-development",
        title: "IoT Development",
        description: "Connecting devices for smarter operations and data insights.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Device Connectivity", description: "Protocols for hardware communication.", icon: Cpu },
            { title: "IoT Cloud Platform", description: "Managing device data at scale.", icon: Cpu },
            { title: "Remote Monitoring", description: "Real-time tracking systems.", icon: Cpu },
            { title: "Edge Computing", description: "Processing data near the source.", icon: Cpu },
        ],
        process: [
            { title: "Prototyping", description: "Proof of concept with hardware." },
            { title: "Connectivity", description: "Establishing reliable networks." },
            { title: "Platform", description: "Building the backend." },
            { title: "App", description: "Creating user interfaces." },
            { title: "Deployment", description: "Rolling out devices." },
        ],
        whyChooseUs: [
            { title: "End-to-End", description: "Hardware to software solutions." },
            { title: "Scalability", description: "Handling millions of devices." },
            { title: "Security", description: "Device and data protection." },
            { title: "Innovation", description: "Smart solutions for industry." },
        ]
    },
    "devops": {
        id: "devops",
        title: "DevOps Services",
        description: "Streamlining development and operations for faster delivery.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "CI/CD", description: "Automated build and deploy pipelines.", icon: Infinity },
            { title: "Infrastructure as Code", description: "Managing infra with code.", icon: Infinity },
            { title: "Containerization", description: "Docker and Kubernetes solutions.", icon: Infinity },
            { title: "Monitoring", description: "Full-stack observability.", icon: Infinity },
        ],
        process: [
            { title: "Assessment", description: "Analyzing current workflows." },
            { title: "Automation", description: "Scripting manual tasks." },
            { title: "Pipeline", description: "Building CI/CD flows." },
            { title: "Cloud", description: "Optimizing environment." },
            { title: "Feedback", description: "Continuous improvement loop." },
        ],
        whyChooseUs: [
            { title: "Speed", description: "Faster time to market." },
            { title: "Reliability", description: "Stable and predictable releases." },
            { title: "Collaboration", description: "Better dev and ops harmony." },
            { title: "Efficiency", description: "Reduced manual effort." },
        ]
    },
};

export const defaultService = {
    ...servicesData["web-development"],
    title: "Service",
    description: "Professional IT services tailored to your needs.",
};
