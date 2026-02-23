import {
    Code2, Smartphone, Megaphone, Palette, Cloud, Settings, Handshake, Globe, BrainCircuit, Link, Cpu, Infinity,
    LineChart, Database, LayoutDashboard, Monitor, ShoppingCart, Activity, FileJson, Share2, ClipboardList
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
    "salesforce-consulting": {
        id: "salesforce-consulting",
        title: "Salesforce Consulting & Implementation Services",
        description: "At Port NxT Digital Solutions, we help organizations unlock the full potential of Salesforce by designing scalable CRM ecosystems that improve sales performance, customer service efficiency, and operational visibility.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Implementation & Customization", description: "Sales Cloud & Service Cloud setup, custom workflows, and Lightning customization.", icon: Handshake },
            { title: "CRM Optimization", description: "Lead scoring, case lifecycle automation, and CRM performance audit.", icon: Handshake },
            { title: "Integration Services", description: "ERP, Microsoft Fabric, and REST/SOAP API integrations.", icon: Handshake },
            { title: "Data & Analytics", description: "Salesforce API ingestion pipelines and Power BI executive dashboards.", icon: Handshake },
            { title: "Automation & AI Enablement", description: "AI-based lead prioritization and conversational CRM bots.", icon: Handshake },
        ],
        process: [
            { title: "Assessment", description: "CRM Assessment & Gap Analysis" },
            { title: "Architecture", description: "Architecture & Data Model Design" },
            { title: "Customization", description: "Implementation & Customization" },
            { title: "Integration", description: "Integration & Data Synchronization" },
            { title: "Optimization", description: "User Training & Continuous Optimization" },
        ],
        whyChooseUs: [
            { title: "Enterprise Focus", description: "Built for operational visibility and business growth." },
            { title: "Custom Scalability", description: "Designing multi-business-unit CRM architecture." },
            { title: "Data Synchronization", description: "Event-driven integration methodologies." },
            { title: "AI-Ready CRM", description: "Equipping your teams with intelligent pipelines." },
        ]
    },
    "digital-marketing": {
        id: "digital-marketing",
        title: "Digital Marketing & Performance Growth Services",
        description: "Port NxT Digital Solutions delivers data-driven digital marketing strategies that generate measurable business growth. We combine paid media, SEO, conversion optimization, and analytics to create scalable performance engines.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Google Ads Management", description: "Search, Display, Shopping & YouTube Campaigns with ROI-driven bidding.", icon: Megaphone },
            { title: "Meta Ads", description: "Campaign setup, lookalike audience strategies, and funnel-based structuring.", icon: Megaphone },
            { title: "Search Engine Optimization (SEO)", description: "On-page & off-page SEO, backlink building, and local SEO.", icon: Megaphone },
            { title: "Conversion Optimization", description: "Corporate websites, mobile-first UX, and conversion rate optimization (CRO).", icon: Megaphone },
            { title: "Performance Marketing", description: "Full-funnel paid media strategy and A/B testing campaign scaling.", icon: Megaphone },
        ],
        process: [
            { title: "Research", description: "Market & Competitor Research" },
            { title: "Architecture", description: "Funnel Strategy & Campaign Architecture" },
            { title: "Development", description: "Creative & Landing Page Development" },
            { title: "Launch", description: "Campaign Launch & Optimization" },
            { title: "Scaling", description: "Continuous Performance Scaling & Reporting" },
        ],
        whyChooseUs: [
            { title: "Data-driven Strategy", description: "We rely on concrete data for audience segmentation and KPIs." },
            { title: "High-Performance Growth", description: "Targeting CPA, ROAS, LTV, and measurable impact." },
            { title: "Complete Funnels", description: "Holistic strategies converting leads through multiple channels." },
            { title: "Constant Analytics", description: "Real-time performance dashboards directly integrated into your core systems." },
        ]
    },
    "microsoft-dynamics-365": {
        id: "microsoft-dynamics-365",
        title: "Microsoft Dynamics 365 Implementation Services",
        description: "Port NxT Digital Solutions delivers complete Microsoft Dynamics 365 implementation services across CRM and ERP workloads to streamline operations, improve customer engagement, and enable real-time decision-making.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Dynamics 365 CRM", description: "Dynamics 365 Sales, Customer Service, Marketing, and Field Service.", icon: Settings },
            { title: "Dynamics 365 ERP", description: "Business Central, Finance & Operations, and Supply Chain Management.", icon: Settings },
            { title: "Customization & Extensions", description: "Power Platform extensions, custom plugins, and API integrations.", icon: Settings },
            { title: "Integration & Migration", description: "Integration with Salesforce, SAP, Oracle, and Azure Data Lake.", icon: Settings },
            { title: "Reporting & Analytics", description: "Power BI executive dashboards and real-time KPI monitoring.", icon: Settings },
        ],
        process: [
            { title: "Assessment", description: "Business Process Assessment & Gap Analysis" },
            { title: "Architecture", description: "Solution Architecture & Environment Setup" },
            { title: "Configuration", description: "Configuration & Custom Development" },
            { title: "Validation", description: "Data Migration & User Acceptance Testing (UAT)" },
            { title: "Go-Live", description: "Go-Live & Post-Implementation Support" },
        ],
        whyChooseUs: [
            { title: "End-to-end Deployments", description: "From initial roadmap to customized operations in the ecosystem." },
            { title: "Role-based Dashboards", description: "Tailored insights for specific leadership or operational roles." },
            { title: "Power Platform Experts", description: "Extend functionality rapidly using deep Power Apps & Power Automate experience." },
            { title: "Seamless Migration", description: "Minimal disruption during legacy integrations." }
        ]
    },
    "oracle-erp-cloud": {
        id: "oracle-erp-cloud",
        title: "Oracle ERP & Cloud Implementation Services",
        description: "Port NxT Digital Solutions delivers end-to-end Oracle ERP and Oracle Cloud implementation services, enabling enterprises to streamline finance, operations, procurement, and supply chain management.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Oracle ERP Implementation", description: "Oracle EBS, Fusion Cloud ERP, supply chain, and financials setup.", icon: Database },
            { title: "Oracle HCM Cloud", description: "Core HR, Payroll, Talent Acquisition, and Workforce Analytics.", icon: Database },
            { title: "Customization & Extensions", description: "Custom workflows, approval hierarchies, and API integration.", icon: Database },
            { title: "Data Migration", description: "Legacy system migration securely into Oracle Cloud ecosystems.", icon: Database },
            { title: "Business Intelligence", description: "Oracle BI, OTBI reporting, and enterprise performance analytics.", icon: Database },
        ],
        process: [
            { title: "Mapping", description: "Business Process Assessment & Requirement Mapping" },
            { title: "Setup", description: "Solution Architecture & Cloud Environment Setup" },
            { title: "Configuration", description: "Configuration & Custom Development" },
            { title: "Migration", description: "Data Migration & Integration" },
            { title: "Go-Live", description: "Testing, Compliance Validation & Continuous Support" },
        ],
        whyChooseUs: [
            { title: "Secure Modernization", description: "Future-ready operations for finance and industrial processes." },
            { title: "Unified Analytics", description: "Real-time visibility into complex procurement operations." },
            { title: "Industry Specializations", description: "Tailored processes for Healthcare, Retail, and Manufacturing." },
            { title: "Custom Workflows", description: "Role-specific adjustments to standard modules to match your exact business models." }
        ]
    },
    "web-ecommerce-application": {
        id: "web-ecommerce-application",
        title: "Web Application & E-Commerce Development",
        description: "Port NxT designs scalable, secure, and high-performance web and e-commerce applications tailored to modern business needs. We build enterprise-grade platforms converted-focused and mobile-first.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Custom Web Applications", description: "Enterprise portals, SaaS platforms, and API-first backend architecture.", icon: Code2 },
            { title: "E-Commerce Development", description: "Headless commerce, multi-vendor marketplaces, and customized funnel experiences.", icon: ShoppingCart },
            { title: "Performance Optimization", description: "Core Web Vitals compliance, A/B testing, and CRO strategies.", icon: Activity },
            { title: "Integration & Scalability", description: "CRM, ERP, analytics, and robust CI/CD deployment logic.", icon: Infinity },
        ],
        process: [
            { title: "Analysis", description: "Business Requirement Analysis" },
            { title: "Design", description: "UX Wireframing & Prototype Design" },
            { title: "Development", description: "Agile Sprint-Based Development" },
            { title: "Testing", description: "Security & Performance Testing" },
            { title: "Deployment", description: "Deployment, Monitoring & Continuous Enhancement" },
        ],
        whyChooseUs: [
            { title: "Conversion Focused", description: "Maximized pipelines through optimized frontend interactions." },
            { title: "Cloud-Native", description: "Scalable backend deployments that support enterprise growth." },
            { title: "Modern Tech Stack", description: "React, Angular, .NET, Node.js, Laravel, Azure." },
            { title: "Agile Delivery", description: "Rapid releases prioritizing functionality and performance validation." }
        ]
    },
    "data-visualization-fabric": {
        id: "data-visualization-fabric",
        title: "Data Visualization & Analytics with Microsoft Fabric",
        description: "Port NxT Digital Solutions delivers enterprise-grade data visualization solutions using Microsoft Fabric and Power BI. We design scalable analytics platforms transforming raw data into actionable intelligence.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Analytics Architecture", description: "OneLake, Lakehouse/Warehouse, Medallion Architecture, and Delta Tables.", icon: LineChart },
            { title: "Power BI Dashboards", description: "Executive KPI dashboards, operational reports, and financial modeling.", icon: LineChart },
            { title: "Advanced Data Modeling", description: "Star schema design, Role-Level Security (RLS), and semantic tuning.", icon: LineChart },
            { title: "Real-Time Analytics", description: "Predictive analytics, streaming integration, and scenario modeling.", icon: LineChart },
            { title: "Enterprise Connectivity", description: "Integrations for Dynamics 365, Salesforce, and Oracle data ingestion.", icon: LineChart },
        ],
        process: [
            { title: "Assessment", description: "Data Assessment & KPI Identification" },
            { title: "Modeling", description: "Architecture Design & Data Modeling" },
            { title: "Pipeline", description: "Fabric Implementation & Pipeline Development" },
            { title: "Dashboards", description: "Dashboard Development & User Validation" },
            { title: "Optimization", description: "Performance Optimization & Continuous Enhancement" },
        ],
        whyChooseUs: [
            { title: "Enterprise-Grade Scale", description: "We prepare data strategies for millions of records and real-time visualization." },
            { title: "Governance Controls", description: "Secure semantic layers protecting vital operational data." },
            { title: "Direct Lake Innovation", description: "Extensive experience unlocking high-performance analytics in Microsoft Fabric." },
            { title: "Actionable Focus", description: "Moving beyond raw charts into predictive logic for the C-Suite." }
        ]
    },
    "data-engineering-azure-informatica": {
        id: "data-engineering-azure-informatica",
        title: "Data Engineering Services with Azure & Informatica",
        description: "Port NxT Digital Solutions designs scalable, secure, and high-performance data ecosystems enabling organizations to centralize, transform, and govern data using Microsoft Azure and Informatica.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Azure Data Platform", description: "ADLS, Azure Data Factory, Synapse Analytics, and Databricks (PySpark).", icon: FileJson },
            { title: "Data Ingestion", description: "Incremental loading, SCD Type 2 logic, flattening, and reconciliation frameworks.", icon: FileJson },
            { title: "Informatica Engineering", description: "PowerCenter, IICS, ETL/ELT workflows, data profiling, and MDM support.", icon: FileJson },
            { title: "Governance & Security", description: "RBAC, data encryption, compliance execution, and lineage tracking.", icon: FileJson },
            { title: "System Integration", description: "Unified ERP frameworks mapped into real-time analytics sync.", icon: FileJson },
        ],
        process: [
            { title: "Planning", description: "Enterprise Data Assessment & Architecture Planning" },
            { title: "Mapping", description: "Data Model Design & Source Mapping" },
            { title: "Automation", description: "Pipeline Development & Automation" },
            { title: "Validation", description: "Testing, Validation & Performance Optimization" },
            { title: "Assurance", description: "Deployment, Monitoring & Continuous Support" },
        ],
        whyChooseUs: [
            { title: "Complex Transformations", description: "Experienced in enterprise data normalization tasks and massive load requirements." },
            { title: "Platform Agnostic", description: "We blend Informatica toolchains directly with native Azure cloud operations securely." },
            { title: "Robust Auditing", description: "Logging and compliance frameworks integrated natively into the ELT process." },
            { title: "Modern Lakehouse", description: "Expertise mapping Medallion principles correctly over traditional warehouses." }
        ]
    },
    "mobile-app-development": {
        id: "mobile-app-development",
        title: "Mobile Application Development",
        description: "Port NxT Digital Solutions develops high-performance, secure, and scalable mobile applications for iOS and Android platforms, linking deeply with enterprise CRM, ERP, and operations.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Native iOS", description: "Swift-based, iPhone/iPad optimized apps with secure biometric compliance.", icon: Smartphone },
            { title: "Native Android", description: "Kotlin & Java-based, device-responsive UIs tailored for Google Play deployments.", icon: Smartphone },
            { title: "Cross-Platform", description: "Flutter and React Native for cost-efficient mobility and rapid time to market.", icon: Smartphone },
            { title: "Enterprise Integrations", description: "Connecting tools directly to Dynamics 365, Oracle, and Field Management systems.", icon: Smartphone },
            { title: "Mobility Analytics", description: "In-app performance tracking, push notification metrics, and synchronization mapping.", icon: Smartphone },
        ],
        process: [
            { title: "Journey", description: "Requirement Analysis & User Journey Mapping" },
            { title: "Design", description: "UX/UI Wireframing & Prototype Design" },
            { title: "Agile", description: "Agile Development & Sprint Execution" },
            { title: "Testing", description: "Security Testing & Performance Validation" },
            { title: "Deployment", description: "Deployment & Continuous Maintenance" },
        ],
        whyChooseUs: [
            { title: "Seamless Operations", description: "Mobile ecosystems designed to augment existing workforce management tasks securely." },
            { title: "Cross-Platform Leverage", description: "Lower overhead targeting widespread distribution with shared code strategies." },
            { title: "Secure Data Layers", description: "Robust architectural safeguards ensuring field and CRM analytics remain isolated." },
            { title: "Deep Integrations", description: "Direct connectivity to large enterprise applications, not just standalone logic." }
        ]
    },
    "custom-ai-solutions": {
        id: "custom-ai-solutions",
        title: "Custom AI Solutions & Intelligent Systems",
        description: "Port NxT Digital Solutions designs custom AI systems tailored to enterprise needs, automating decision-making and unlocking insights across structured and unstructured data formats.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Generative AI Solutions", description: "Custom GPTs, Retrieval-Augmented Generation (RAG) platforms, and search.", icon: BrainCircuit },
            { title: "AI Agents & Workflows", description: "Multi-agent orchestration, email automation, and ERP-integrated transactional bots.", icon: BrainCircuit },
            { title: "Predictive Analytics", description: "Sales forecasting, customer churn prediction, and risk anomaly detection ML mapping.", icon: BrainCircuit },
            { title: "Intelligent Document Processing", description: "OCR extractions, NLP invoice compliance, and contract review sentiment logic.", icon: BrainCircuit },
            { title: "Enterprise Connectivity", description: "Secure API cloud AI ecosystems directly woven into SAP, Dynamics, or Salesforce.", icon: BrainCircuit },
        ],
        process: [
            { title: "Feasibility", description: "AI Use Case Identification & Feasibility Study" },
            { title: "Design", description: "Data Preparation & Model Design" },
            { title: "Development", description: "Model Development & Testing" },
            { title: "Integration", description: "Integration & Deployment" },
            { title: "Optimization", description: "Monitoring, Optimization & Continuous Improvement" },
        ],
        whyChooseUs: [
            { title: "Responsible AI", description: "Bias-checked, enterprise-compliant logic models protecting internal IP." },
            { title: "Real Workflows", description: "We connect generative concepts to tangible API-driven outputs for operations." },
            { title: "Document Automation", description: "Cutting-edge extractions turning unstructured paperwork into actionable tables." },
            { title: "Scalable Infrastructure", description: "Building ML pipelines capable of updating securely with new data drifts over time." }
        ]
    },
    "servicenow-implementation": {
        id: "servicenow-implementation",
        title: "ServiceNow Implementation & Consulting Services",
        description: "Port NxT provides end-to-end ServiceNow consulting and implementation services to streamline IT operations, automate workflows, and enhance service delivery across enterprise departments.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "IT Service Management (ITSM)", description: "Incident tracking, Service Catalogs, SLA configuration, and CMDB tuning.", icon: Globe },
            { title: "IT Operations Management (ITOM)", description: "Discovery mapping, event analytics, and infrastructure cloud monitoring.", icon: Globe },
            { title: "HR Service Delivery (HRSD)", description: "Onboarding automation portals connecting natively to ERP and payroll structures.", icon: Globe },
            { title: "Custom Development on ServiceNow", description: "Low-code application creation scoped precisely for role-based governance.", icon: Globe },
            { title: "Analytics & Reporting", description: "Performance Analytics bridging Service delivery insights continuously into Power BI.", icon: Globe }
        ],
        process: [
            { title: "Mapping", description: "Current State Assessment & Process Mapping" },
            { title: "Setup", description: "Platform Architecture & Environment Setup" },
            { title: "Customization", description: "Module Configuration & Customization" },
            { title: "Migration", description: "Integration & Data Migration" },
            { title: "Adoption", description: "User Training, Go-Live Support & Continuous Optimization" }
        ],
        whyChooseUs: [
            { title: "Cross-Department Efficiency", description: "Eliminating silos between IT, HR, and Operations teams securely." },
            { title: "Performance Driven", description: "Mapping configurations directly to SLAs and actionable visibility KPIs." },
            { title: "Extensibility", description: "Connecting ServiceNow smoothly back to deep SAP/Oracle enterprise data foundations." },
            { title: "Expert Governance", description: "Setting rigid RBAC boundaries to meet external auditing and regulatory standards." }
        ]
    },
    "jira-implementation": {
        id: "jira-implementation",
        title: "Jira Implementation & Agile Project Management",
        description: "Port NxT provides end-to-end Jira consulting and optimization services helping organizations streamline Agile delivery, project visibility, and CI/CD collaboration natively.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "Jira Software Implementation", description: "Scrum/Kanban configuration, advanced permissions, workflows, and automation logic.", icon: Share2 },
            { title: "Jira Service Management", description: "ITSM portal setups matching incident routing schemas and escalation matrices.", icon: Share2 },
            { title: "DevOps Integration", description: "Binding deployments inherently to GitHub/GitLab pipelines and Azure DevOps tracking.", icon: Share2 },
            { title: "Analytics", description: "Executive reporting spanning burndown charts and broad Microsoft Fabric integrations.", icon: Share2 },
            { title: "Optimization & Migration", description: "Moving legacy project histories seamlessly into Jira Cloud or Data Center deployments.", icon: Share2 }
        ],
        process: [
            { title: "Assessment", description: "Agile Process Assessment & Gap Analysis" },
            { title: "Design", description: "Platform Architecture & Workflow Design" },
            { title: "Setup", description: "Configuration & Integration Setup" },
            { title: "Validation", description: "Testing & User Acceptance Validation" },
            { title: "Improvement", description: "Go-Live & Continuous Improvement" }
        ],
        whyChooseUs: [
            { title: "Holistic Tracing", description: "End-to-end pipeline visibility from business ticket to source-code delivery." },
            { title: "Frictionless Processes", description: "We minimize administrative burdens through highly targeted automation logic." },
            { title: "Enterprise Aggregation", description: "Synchronizing project milestones into broader organizational reporting." },
            { title: "Certified Frameworks", description: "Aligning software deployment methodologies to robust governance models." }
        ]
    },
    "sap-implementation": {
        id: "sap-implementation",
        title: "SAP Implementation & Enterprise Transformation",
        description: "Port NxT delivers secure, high-performance SAP implementation services to modernize core business processes and improve operational visibility mapping against global architecture standards.",
        heroImage: "/img/company/web-development.webp",
        subServices: [
            { title: "SAP S/4HANA Implementation", description: "Green/Brownfield deployments traversing Finance, Asset Management, and Supply Chain structures.", icon: ClipboardList },
            { title: "SAP BTP", description: "Business Technology Platform extensions, Fiori interfaces, and workflow rules.", icon: ClipboardList },
            { title: "SAP SuccessFactors", description: "Core HR recruitment, goal tracking, and payroll processing migrations.", icon: ClipboardList },
            { title: "Integration & Migration", description: "Data harmonization moving legacy ERPs smoothly or syncing to Azure Data Lakes.", icon: ClipboardList },
            { title: "SAP Analytics", description: "Predictive planning models mapped inside SAP Analytics Cloud dashboards.", icon: ClipboardList }
        ],
        process: [
            { title: "Blueprinting", description: "Business Process Assessment & Blueprinting" },
            { title: "Architecture", description: "Solution Architecture & Landscape Design" },
            { title: "Development", description: "Module Configuration & Custom Development" },
            { title: "Testing", description: "Data Migration, Testing & Validation" },
            { title: "Hypercare", description: "Go-Live, Hypercare & Continuous Support" }
        ],
        whyChooseUs: [
            { title: "Massive Scope Support", description: "Expertise untangling multi-faceted corporate layers during global IT restructures." },
            { title: "Clean Digital Cores", description: "Focusing heavily on minimized technical debt during S/4HANA transitions." },
            { title: "Future Ready Integrations", description: "Using BTP effectively to modernize UI/UX and API reach for the workforce." },
            { title: "Rigorous Auditing", description: "Financial tracking configurations strictly matched against global compliance matrices." }
        ]
    }
};

export const defaultService = {
    ...servicesData["salesforce-consulting"],
    title: "Service",
    description: "Professional IT services tailored to your needs.",
};

