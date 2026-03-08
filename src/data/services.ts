import {
    Code2, Smartphone, Megaphone, Palette, Cloud, Settings, Handshake, Globe, BrainCircuit, Link, Cpu, Infinity,
    LineChart, Database, LayoutDashboard, Monitor, ShoppingCart, Activity, FileJson, Share2, ClipboardList,
    Server, Zap, CheckCircle, Target, Briefcase, Award, Plus, Layers, Shield, MessageSquare
} from "lucide-react";

export interface ServiceData {
    id: string;
    title: string;
    description: string;
    heroImage?: string;
    overview?: {
        title: string;
        description: string;
        image?: string;
    };
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
    majorOperations?: {
        title: string;
        description: string;
        icon?: any;
    }[];
    summaryWorks?: {
        title: string;
        description: string;
        image?: string;
        industry?: string;
    }[];
}

export const servicesData: Record<string, ServiceData> = {
    "salesforce-consulting": {
        id: "salesforce-consulting",
        title: "Salesforce Consulting & Implementation Services",
        description: "Unlock the full potential of Salesforce by designing scalable CRM ecosystems that improve sales performance, customer service efficiency, and operational visibility.",
        heroImage: "/services/ChatGPT Image Mar 2, 2026, 03_31_17 PM 1.png",
        overview: {
            title: "Our Salesforce Consulting Services",
            description: "Are you struggling with an inefficient Salesforce org? Are outdated strategies holding back your business? As your trusted Salesforce Consulting Partner, we understand these challenges and help you overcome them. Our expert team leverages Salesforce best practices to optimize workflows, eliminate redundancies, and enhance your digital capabilities.",
            image: "/services/sayyam-abbasi-5sefR8pTUG0-unsplash 12.png"
        },
        subServices: [
            { title: "Implementation and Customization", description: "As a reliable Salesforce partner, we implement and customize Salesforce to match your business requirements, ensuring it aligns directly with your goals.", icon: Handshake },
            { title: "CRM Optimization", description: "Optimize leads, automate processes with Custom Salesforce Solutions, and analyze performance data to enhance your sales ops.", icon: Zap },
            { title: "Integration Services", description: "We provide comprehensive Salesforce integrations tailored to your requirements, linking legacy systems, ERP software, and third-party apps for streamlined data flow.", icon: Link },
            { title: "Data & Analytics", description: "With our specialized sales and marketing analytics services, you can track key metrics, forecast sales trends, and make proactive decisions.", icon: LineChart },
            { title: "Automation & AI", description: "Leverage the power of AI to automate tedious tasks, score leads, and identify opportunities to drive efficiency and enhance user engagement.", icon: BrainCircuit },
        ],
        majorOperations: [
            { title: "Lightning Migration", description: "Seamless transition from Salesforce Classic to Lightning.", icon: Zap },
            { title: "AppExchange Development", description: "Building and publishing custom apps on AppExchange.", icon: Code2 },
            { title: "CPQ Implementation", description: "Configure, Price, Quote solutions for complex sales.", icon: ClipboardList }
        ],
        summaryWorks: [
            { title: "Global Retailer CRM Overhaul", description: "Unified 5 isolated CRM instances into a single Salesforce Lightning org, boosting sales velocity by 34%.", industry: "Retail", image: "/img/Home/about_us_robot.webp" },
            { title: "FinServ Client Portal", description: "Developed a secure Experience Cloud portal for a major bank, reducing support tickets by 40%.", industry: "Financial Services", image: "/img/Home/about_us_robot.webp" }
        ],
        process: [
            { title: "Assessment", description: "CRM Assessment & Gap Analysis" },
            { title: "Architecture", description: "Architecture & Data Model Design" },
            { title: "Customization", description: "Implementation & Customization" },
            { title: "Integration", description: "Integration & Data Synchronization" },
            { title: "Optimization", description: "Continuous Optimization" },
        ],
        whyChooseUs: [
            { title: "Enterprise Focus", description: "Built for operational visibility." },
            { title: "Custom Scalability", description: "Multi-business-unit architecture." },
            { title: "Data Synchronization", description: "Event-driven integration methodologies." },
            { title: "AI-Ready CRM", description: "Intelligent pipelines." },
        ]
    },
    "digital-marketing": {
        id: "digital-marketing",
        title: "Digital Marketing & Performance Growth Services",
        description: "Data-driven digital marketing strategies that generate measurable business growth. Combining paid media, SEO, CRO, and analytics.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Google Ads Management", description: "Search, Display, Shopping & YouTube.", icon: Target },
            { title: "Meta Ads", description: "Lookalike audience strategies and funnels.", icon: Megaphone },
            { title: "Search Engine Optimization", description: "On-page & off-page SEO.", icon: Globe },
            { title: "Conversion Optimization", description: "Corporate websites and conversion rate optimization.", icon: Activity },
            { title: "Performance Marketing", description: "Full-funnel paid media strategy.", icon: Zap },
        ],
        majorOperations: [
            { title: "Programmatic Advertising", description: "Automated, data-driven ad buying across vast publisher networks.", icon: Globe },
            { title: "Marketing Automation", description: "HubSpot and Marketo integrations for seamless lead nurturing.", icon: Settings },
            { title: "Advanced Attribution Modeling", description: "Multi-touch attribution to accurately measure channel ROI.", icon: LineChart }
        ],
        summaryWorks: [
            { title: "E-Commerce ROAS Scaling", description: "Scaled a D2C brand's Meta ad spend by 400% while maintaining a 3.5x ROAS through advanced lookalike models.", industry: "E-Commerce", image: "/img/Home/about_us_robot.webp" },
            { title: "B2B SaaS Lead Generation", description: "Revamped SEO and Google Ads strategy, resulting in a 150% increase in qualified Enterprise leads within 6 months.", industry: "Technology", image: "/img/Home/about_us_robot.webp" }
        ],
        process: [
            { title: "Research", description: "Market & Competitor Research" },
            { title: "Architecture", description: "Funnel Strategy & Architecture" },
            { title: "Development", description: "Creative Development" },
            { title: "Launch", description: "Campaign Launch" },
            { title: "Scaling", description: "Continuous Scaling" },
        ],
        whyChooseUs: [
            { title: "Data-driven Strategy", description: "Concrete data for segmentation." },
            { title: "High-Performance Growth", description: "Targeting CPA, ROAS, LTV." },
            { title: "Complete Funnels", description: "Holistic converting strategies." },
            { title: "Constant Analytics", description: "Real-time dashboards." },
        ]
    },
    "microsoft-dynamics-365": {
        id: "microsoft-dynamics-365",
        title: "Microsoft Dynamics 365 Implementation Services",
        description: "Complete Microsoft Dynamics 365 implementation services across CRM and ERP workloads to streamline operations and enable real-time decision-making.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Dynamics 365 CRM", description: "Sales, Customer Service, Marketing.", icon: Briefcase },
            { title: "Dynamics 365 ERP", description: "Business Central, Finance & Operations.", icon: LayoutDashboard },
            { title: "Extensions", description: "Power Platform extensions.", icon: Plus },
            { title: "Integration", description: "SAP, Oracle, and Azure Data Lake.", icon: Link },
            { title: "Reporting", description: "Power BI dashboards.", icon: LineChart },
        ],
        majorOperations: [
            { title: "Legacy System Migration", description: "Securely migrating from AX/NAV to the modern D365 Cloud ecosystem.", icon: Cloud },
            { title: "Power Apps Extendability", description: "Building custom low-code apps connected natively to the Dataverse.", icon: Smartphone },
            { title: "Supply Chain Resilience", description: "Deploying predictive supply chain models within D365 SCM.", icon: Share2 }
        ],
        summaryWorks: [
            { title: "Manufacturing ERP Rollout", description: "Deployed D365 Finance & Operations across 12 global facilities, unifying legacy ledgers.", industry: "Manufacturing", image: "/img/Home/about_us_robot.webp" },
            { title: "Healthcare Field Service", description: "Implemented D365 Field Service to optimize routing for 500+ mobile healthcare technicians.", industry: "Healthcare", image: "/img/Home/about_us_robot.webp" }
        ],
        process: [
            { title: "Assessment", description: "Gap Analysis" },
            { title: "Architecture", description: "Solution Architecture" },
            { title: "Configuration", description: "Custom Development" },
            { title: "Validation", description: "UAT & Testing" },
            { title: "Go-Live", description: "Post-Implementation Support" },
        ],
        whyChooseUs: [
            { title: "End-to-end Deployments", description: "Roadmap to operations." },
            { title: "Role-based Dashboards", description: "Tailored insights." },
            { title: "Power Platform Experts", description: "Extend functionality rapidly." },
            { title: "Seamless Migration", description: "Minimal disruption." }
        ]
    },
    "oracle-erp-cloud": {
        id: "oracle-erp-cloud",
        title: "Oracle ERP & Cloud Implementation Services",
        description: "End-to-end Oracle ERP and Cloud implementation services, enabling enterprises to streamline finance, operations, procurement, and supply chain.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Oracle ERP", description: "Fusion Cloud ERP, supply chain, financials.", icon: Database },
            { title: "Oracle HCM Cloud", description: "Core HR, Payroll, Talent Acquisition.", icon: Briefcase },
            { title: "Extensions", description: "Custom workflows and API integration.", icon: Code2 },
            { title: "Data Migration", description: "Secure migration to Oracle Cloud.", icon: Server },
            { title: "Business Intelligence", description: "Oracle BI, OTBI reporting.", icon: LineChart },
        ],
        majorOperations: [
            { title: "Oracle EBS Upgrades", description: "Modernizing on-premise E-Business Suite instances to Oracle Cloud Infrastructure (OCI).", icon: Cloud },
            { title: "Procure-to-Pay Automation", description: "Automating procurement lifecycles using Oracle SCM.", icon: Target },
            { title: "Financial Consolidation", description: "Implementing Oracle EPM for global financial close and consolidation.", icon: LayoutDashboard }
        ],
        summaryWorks: [
            { title: "Global Supply Chain Modernization", description: "Migrated a legacy supply chain system to Oracle SCM Cloud, reducing inventory holding costs by 18%.", industry: "Logistics", image: "/img/Home/about_us_robot.webp" },
            { title: "Enterprise HCM Deployment", description: "Rolled out Oracle HCM Cloud for a 10,000+ employee organization, standardizing global HR processes.", industry: "Enterprise Services", image: "/img/Home/about_us_robot.webp" }
        ],
        process: [
            { title: "Mapping", description: "Requirement Mapping" },
            { title: "Setup", description: "Cloud Environment Setup" },
            { title: "Configuration", description: "Custom Development" },
            { title: "Migration", description: "Data Integration" },
            { title: "Go-Live", description: "Compliance Validation" },
        ],
        whyChooseUs: [
            { title: "Secure Modernization", description: "Future-ready operations." },
            { title: "Unified Analytics", description: "Real-time visibility." },
            { title: "Industry Specializations", description: "Tailored processes." },
            { title: "Custom Workflows", description: "Role-specific adjustments." }
        ]
    },
    "web-ecommerce-application": {
        id: "web-ecommerce-application",
        title: "Web Application & E-Commerce Development",
        description: "Scalable, secure, and high-performance web and e-commerce applications tailored. Enterprise-grade platforms converted-focused.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Custom Web Apps", description: "Enterprise portals, API-first architecture.", icon: Code2 },
            { title: "E-Commerce", description: "Headless commerce, multi-vendor marketplaces.", icon: ShoppingCart },
            { title: "Optimization", description: "Core Web Vitals compliance.", icon: Zap },
            { title: "Integration", description: "CRM, ERP, and robust CI/CD.", icon: Link },
        ],
        majorOperations: [
            { title: "Headless Commerce Architecture", description: "Decoupling frontend from backend using Next.js and Shopify Plus/CommerceTools.", icon: Layers },
            { title: "Microservices Transition", description: "Refactoring monolithic web applications into scalable microservices.", icon: Server },
            { title: "Progressive Web Apps (PWA)", description: "Building offline-capable, app-like experiences for mobile browsers.", icon: Smartphone }
        ],
        summaryWorks: [
            { title: "B2B Marketplace Portal", description: "Developed a custom Next.js/Node.js B2B procurement portal processing $5M+ in monthly transactions.", industry: "B2B Distribution", image: "/img/Home/about_us_robot.webp" },
            { title: "High-Traffic Retail Front", description: "Rearchitected an e-commerce giant to a Headless stack, improving page load speeds by 60% and lifting mobile conversions.", industry: "Retail", image: "/img/Home/about_us_robot.webp" }
        ],
        process: [
            { title: "Analysis", description: "Requirement Analysis" },
            { title: "Design", description: "UX Wireframing" },
            { title: "Development", description: "Agile Sprint-Based" },
            { title: "Testing", description: "Security & Performance" },
            { title: "Deployment", description: "Continuous Enhancement" },
        ],
        whyChooseUs: [
            { title: "Conversion Focused", description: "Optimized frontend interactions." },
            { title: "Cloud-Native", description: "Scalable backend deployments." },
            { title: "Modern Tech Stack", description: "React, .NET, Node.js." },
            { title: "Agile Delivery", description: "Rapid releases." }
        ]
    },
    "data-visualization-fabric": {
        id: "data-visualization-fabric",
        title: "Data Visualization & Analytics with Microsoft Fabric",
        description: "Enterprise-grade data visualization solutions using Microsoft Fabric and Power BI. Transfoming raw data into intelligence.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Analytics Architecture", description: "OneLake, Lakehouse/Warehouse.", icon: Database },
            { title: "Power BI Dashboards", description: "Executive KPI dashboards.", icon: LayoutDashboard },
            { title: "Data Modeling", description: "Star schema design, RLS.", icon: Layers },
            { title: "Real-Time Analytics", description: "Streaming integration.", icon: Zap },
        ],
        majorOperations: [
            { title: "Semantic Layer Engineering", description: "Creating governed, business-friendly data models across billions of rows.", icon: Cpu },
            { title: "DirectLake Optimization", description: "Implementing native Fabric DirectLake connections for real-time dashboarding.", icon: Activity },
            { title: "Embedded Analytics", description: "Embedding secure Power BI reports directly into customer-facing SaaS products.", icon: Monitor }
        ],
        summaryWorks: [
            { title: "Global Sales KPI Command Center", description: "Built a massive Power BI dashboard ecosystem over OneLake tracking real-time sales across 40 countries.", industry: "Global Sales", image: "/img/Home/about_us_robot.webp" },
            { title: "Hospital Wait Time Analytics", description: "Developed a predictive streaming dashboard monitoring ER loads and staff allocation.", industry: "Healthcare", image: "/img/Home/about_us_robot.webp" }
        ],
        process: [
            { title: "Assessment", description: "Data Assessment" },
            { title: "Modeling", description: "Architecture Design" },
            { title: "Pipeline", description: "Fabric Implementation" },
            { title: "Dashboards", description: "Dashboard Development" },
            { title: "Optimization", description: "Performance Tuning" },
        ],
        whyChooseUs: [
            { title: "Enterprise-Grade Scale", description: "Millions of records prepared." },
            { title: "Governance Controls", description: "Secure semantic layers." },
            { title: "Direct Lake Innovation", description: "High-performance analytics." },
            { title: "Actionable Focus", description: "Predictive logic for C-Suite." }
        ]
    },
    "data-engineering-azure-informatica": {
        id: "data-engineering-azure-informatica",
        title: "Data Engineering Services with Azure & Informatica",
        description: "Scalable, secure, and high-performance data ecosystems enabling organizations to centralize and govern data.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Azure Data Platform", description: "ADLS, ADF, Databricks.", icon: Cloud },
            { title: "Data Ingestion", description: "Incremental loading, SCD Type 2.", icon: Database },
            { title: "Informatica Engineering", description: "IICS, ETL workflows.", icon: FileJson },
            { title: "Governance & Security", description: "RBAC, compliance tracking.", icon: Shield },
        ],
        majorOperations: [
            { title: "Data Warehouse Modernization", description: "Migrating legacy on-premise Netezza/Teradata appliances to Azure Synapse/Snowflake.", icon: Server },
            { title: "Real-time Event Streaming", description: "Architecting Kafka and Azure Event Hubs pipelines for high-velocity data ingestion.", icon: Activity },
            { title: "Master Data Management (MDM)", description: "Implementing strict MDM rules via Informatica to ensure a single source of truth.", icon: Shield }
        ],
        summaryWorks: [
            { title: "FinTech Transaction Lakehouse", description: "Engineered a Spark-based Azure Databricks platform processing 10M+ daily ledger transactions with strict ACID compliance.", industry: "Financial Technology", image: "/img/Home/about_us_robot.webp" },
            { title: "Logistics Tracking Harmonization", description: "Unified 7 disparate tracking APIs into a central Informatica pipeline for real-time fleet visibility.", industry: "Logistics", image: "/img/Home/about_us_robot.webp" }
        ],
        process: [
            { title: "Planning", description: "Enterprise Data Assessment" },
            { title: "Mapping", description: "Data Model Design" },
            { title: "Automation", description: "Pipeline Development" },
            { title: "Validation", description: "Performance Testing" },
            { title: "Assurance", description: "Deployment Monitoring" },
        ],
        whyChooseUs: [
            { title: "Complex Transformations", description: "Enterprise normalization tasks." },
            { title: "Platform Agnostic", description: "Informatica + Azure operations." },
            { title: "Robust Auditing", description: "Compliance frameworks integrated." },
            { title: "Modern Lakehouse", description: "Medallion principles mapped." }
        ]
    },
    "mobile-app-development": {
        id: "mobile-app-development",
        title: "Mobile Application Development",
        description: "High-performance, secure mobile applications for iOS and Android platforms, linking deeply with enterprise operations.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Native iOS", description: "Swift-based, optimized apps.", icon: Smartphone },
            { title: "Native Android", description: "Kotlin & Java-based UIs.", icon: Smartphone },
            { title: "Cross-Platform", description: "Flutter and React Native.", icon: Code2 },
            { title: "Enterprise Integrations", description: "Connecting to ERP systems.", icon: Link },
        ],
        majorOperations: [
            { title: "IoT Device Integration", description: "Connecting mobile apps via BLE/WiFi to industrial sensors and consumer hardware.", icon: Cpu },
            { title: "Biometric Authentication", description: "Securely integrating FaceID, TouchID, and FIDO2 protocols for FinTech compliance.", icon: Shield },
            { title: "Offline-First Architectures", description: "Utilizing SQLite and local caching to ensure app functionality in low-connectivity environments.", icon: Database }
        ],
        summaryWorks: [
            { title: "Field Workforce Companion App", description: "Developed a cross-platform React Native app for telecom field technicians, reducing report filing time by 50%.", industry: "Telecommunications", image: "/img/Home/about_us_robot.webp" },
            { title: "Retail Consumer Loyalty App", description: "Launched a native iOS/Android loyalty app integrating directly with Magento and Salesforce CRM, acquiring 2M+ users.", industry: "Retail", image: "/img/Home/about_us_robot.webp" }
        ],
        process: [
            { title: "Journey", description: "User Journey Mapping" },
            { title: "Design", description: "UX/UI Wireframing" },
            { title: "Agile", description: "Sprint Execution" },
            { title: "Testing", description: "Security Testing" },
            { title: "Deployment", description: "App Store Deployment" },
        ],
        whyChooseUs: [
            { title: "Seamless Operations", description: "Augment workforce management." },
            { title: "Cross-Platform", description: "Lower overhead targeting." },
            { title: "Secure Data", description: "Robust architectural safeguards." },
            { title: "Deep Integrations", description: "Direct connectivity to ERPs." }
        ]
    },
    "custom-ai-solutions": {
        id: "custom-ai-solutions",
        title: "Custom AI Solutions & Intelligent Systems",
        description: "Custom AI systems tailored to enterprise needs, automating decision-making and unlocking insights across data formats.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Generative AI Solutions", description: "RAG platforms, and custom GPTs.", icon: BrainCircuit },
            { title: "AI Agents", description: "Multi-agent orchestration.", icon: Zap },
            { title: "Predictive Analytics", description: "Risk anomaly detection.", icon: LineChart },
            { title: "Intelligent Docs", description: "OCR and NLP invoice compliance.", icon: FileJson },
        ],
        majorOperations: [
            { title: "LLM Fine-Tuning", description: "Training open-source LLMs (Llama 3, Mistral) securely on proprietary corporate data.", icon: Code2 },
            { title: "Computer Vision Systems", description: "Deploying camera-based AI for manufacturing defect detection and safety compliance.", icon: Monitor },
            { title: "Conversational Copilots", description: "Building internal AI copilots assisting employees with HR, IT, and knowledge-base search.", icon: MessageSquare }
        ],
        summaryWorks: [
            { title: "Automated Invoice Processing", description: "Designed a deep learning OCR pipeline that eliminated 90% of manual data entry for a logistics firm.", industry: "Logistics", image: "/img/Home/about_us_robot.webp" },
            { title: "Predictive Maintenance AI", description: "Implemented an anomaly detection model on edge sensors, predicting machine failure 48 hours in advance.", industry: "Manufacturing", image: "/img/Home/about_us_robot.webp" }
        ],
        process: [
            { title: "Feasibility", description: "Use Case Identification" },
            { title: "Design", description: "Model Design" },
            { title: "Development", description: "Model Training" },
            { title: "Integration", description: "Deployment" },
            { title: "Optimization", description: "Continuous Improvement" },
        ],
        whyChooseUs: [
            { title: "Responsible AI", description: "Bias-checked models protecting IP." },
            { title: "Real Workflows", description: "API-driven outputs for operations." },
            { title: "Document Automation", description: "Paperwork into actionable tables." },
            { title: "Scalable Infrastructure", description: "ML pipelines updating securely." }
        ]
    },
    "servicenow-implementation": {
        id: "servicenow-implementation",
        title: "ServiceNow Implementation & Consulting",
        description: "ServiceNow consulting and implementation services to streamline IT operations, automate workflows, and enhance delivery.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "ITSM", description: "Incident tracking, SLA configuration.", icon: LayoutDashboard },
            { title: "ITOM", description: "Discovery mapping, cloud monitoring.", icon: Server },
            { title: "HRSD", description: "Onboarding automation portals.", icon: Shield },
            { title: "Custom Development", description: "Low-code app creation.", icon: Code2 },
        ],
        majorOperations: [
            { title: "Service Portal Design", description: "Creating intuitive, consumer-grade portals for employees to request services and track incidents.", icon: Monitor },
            { title: "CMDB Population", description: "Automating Configuration Management Database discovery maps across hybrid cloud environments.", icon: Database },
            { title: "IntegrationHub Deployment", description: "Utilizing spokes to trigger automated actions in external systems like Jira, Azure, and Workday directly from ServiceNow flows.", icon: Link }
        ],
        summaryWorks: [
            { title: "Global ITSM Consolidation", description: "Unified 4 regional IT helpdesks into a single global ServiceNow instance, resolving tickets 25% faster.", industry: "Technology", image: "/img/Home/about_us_robot.webp" },
            { title: "Zero-Touch Employee Onboarding", description: "Automated the entire HR onboarding flow—from laptop procurement (IT) to payroll routing (Finance).", industry: "Corporate Services", image: "/img/Home/about_us_robot.webp" }
        ],
        process: [
            { title: "Mapping", description: "Process Mapping" },
            { title: "Setup", description: "Platform Architecture" },
            { title: "Customization", description: "Module Configuration" },
            { title: "Migration", description: "Data Migration" },
            { title: "Adoption", description: "Go-Live Support" }
        ],
        whyChooseUs: [
            { title: "Efficiency", description: "Eliminating silos between IT & HR." },
            { title: "Performance", description: "Actionable visibility KPIs." },
            { title: "Extensibility", description: "Connecting smoothly to SAP/Oracle." },
            { title: "Governance", description: "Rigid RBAC boundaries." }
        ]
    },
    "jira-implementation": {
        id: "jira-implementation",
        title: "Jira Implementation & Agile Project Management",
        description: "Jira consulting and optimization services helping organizations streamline Agile delivery and CI/CD collaboration natively.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Jira Software", description: "Scrum/Kanban configuration.", icon: Target },
            { title: "Jira Service Mgmt", description: "ITSM portal setups.", icon: Shield },
            { title: "DevOps Integration", description: "GitHub/GitLab pipelines tracking.", icon: Activity },
            { title: "Analytics", description: "Executive reporting integrations.", icon: LineChart },
        ],
        majorOperations: [
            { title: "Scaled Agile Framework (SAFe)", description: "Configuring Jira Align and Advanced Roadmaps for enterprise portfolio tracking.", icon: Layers },
            { title: "Automated Workflow Routing", description: "Building complex transition logic based on JQL triggers and ScriptRunner.", icon: Code2 },
            { title: "Jira Cloud Migrations", description: "Executing zero-downtime migrations from Jira Server to Jira Cloud.", icon: Cloud }
        ],
        summaryWorks: [
            { title: "Software Delivery Pipeline", description: "Integrated Jira Software with Jenkins and Bitbucket, granting executives real-time CI/CD visibility.", industry: "Software Product", image: "/img/Home/about_us_robot.webp" },
            { title: "ITSM Service Management Cutover", description: "Transitioned a massive university IT department to Jira Service Management for streamlined student support requests.", industry: "Education", image: "/img/Home/about_us_robot.webp" }
        ],
        process: [
            { title: "Assessment", description: "Agile Gap Analysis" },
            { title: "Design", description: "Workflow Design" },
            { title: "Setup", description: "Configuration & Integration" },
            { title: "Validation", description: "Testing Validation" },
            { title: "Improvement", description: "Continuous Improvement" }
        ],
        whyChooseUs: [
            { title: "Holistic Tracing", description: "End-to-end pipeline visibility." },
            { title: "Frictionless Processes", description: "Minimizing administrative burdens." },
            { title: "Enterprise Aggregation", description: "Synchronizing milestones." },
            { title: "Certified Frameworks", description: "Robust governance models." }
        ]
    },
    "sap-implementation": {
        id: "sap-implementation",
        title: "SAP Implementation & Enterprise Transformation",
        description: "Secure, high-performance SAP implementation services to modernize core business processes and improve operational visibility.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "SAP S/4HANA", description: "Green/Brownfield deployments.", icon: Layers },
            { title: "SAP BTP", description: "Fiori interfaces, and workflow rules.", icon: Monitor },
            { title: "SAP SuccessFactors", description: "Core HR recruitment, payroll.", icon: Briefcase },
            { title: "Integration", description: "Syncing to Azure Data Lakes.", icon: Cloud },
        ],
        majorOperations: [
            { title: "Brownfield Conversion", description: "Upgrading existing SAP ECC environments directly into S/4HANA with historical preservation.", icon: Database },
            { title: "Custom Fiori Extensions", description: "Developing highly specialized UI/UX screens on SAP BTP for frontline warehouse workers.", icon: Smartphone },
            { title: "Master Data Governance", description: "Establishing stringent SAP MDG controls for global supplier and material ledgers.", icon: Shield }
        ],
        summaryWorks: [
            { title: "Automotive S/4HANA Transformation", description: "Executed a massive Green-field S/4HANA deployment streamlining parts manufacturing across Europe.", industry: "Automotive", image: "/img/Home/about_us_robot.webp" },
            { title: "Cloud Analytics & Forecasting", description: "Implemented SAP Analytics Cloud to unify demand forecasting against actual CRM pipelines.", industry: "Consumer Goods", image: "/img/Home/about_us_robot.webp" }
        ],
        process: [
            { title: "Blueprinting", description: "Business Process Assessment" },
            { title: "Architecture", description: "Landscape Design" },
            { title: "Development", description: "Module Configuration" },
            { title: "Testing", description: "Data Migration" },
            { title: "Hypercare", description: "Go-Live & Hypercare" }
        ],
        whyChooseUs: [
            { title: "Massive Scope Support", description: "Untangling multi-faceted layers." },
            { title: "Clean Digital Cores", description: "Minimizing technical debt." },
            { title: "Future Ready", description: "Modernize UI/UX and API reach." },
            { title: "Rigorous Auditing", description: "Global compliance matrices." }
        ]
    }
};

export const defaultService = {
    ...servicesData["salesforce-consulting"],
    title: "Service",
    description: "Professional IT services tailored to your needs.",
};
