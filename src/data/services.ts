import {
  Code2,
  Smartphone,
  Megaphone,
  Palette,
  Cloud,
  Settings,
  Handshake,
  Globe,
  BrainCircuit,
  Link,
  Cpu,
  Infinity,
  LineChart,
  Database,
  LayoutDashboard,
  Monitor,
  ShoppingCart,
  Activity,
  FileJson,
  Share2,
  ClipboardList,
  Server,
  Zap,
  CheckCircle,
  Target,
  Briefcase,
  Award,
  Plus,
  Layers,
  Shield,
  MessageSquare,
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
    title: "Salesforce Consulting &\nImplementation Services",
    description:
      "Unlock the full potential of Salesforce by designing scalable CRM ecosystems that improve sales performance, customer service efficiency, and operational visibility.",
    heroImage: "/service-hero/Portnxt/Desktop - 1.png",
    overview: {
      title: "Our Salesforce Consulting Services",
      description:
        "We offer comprehensive Salesforce consulting services across various clouds to help businesses of all sizes streamline operations, enhance customer engagement, and drive growth. Our certified experts provide tailored solutions that align with your business goals, ensuring maximum ROI from your Salesforce investment. Explore our specialized services below",
      image: "/service-hero/Portnxt/unsplash-banner.png",
    },
    subServices: [
      {
        title: "Implementation & Customization",
        description:
          "End-to-end Salesforce implementation tailored to your business processes. From discovery to deployment, we ensure a seamless Salesforce setup aligned with your goals.",
        icon: Handshake,
      },
      {
        title: "CRM Optimization",
        description:
          "Improve system performance and user adoption with in-depth CRM audits, workflow optimization, and automation enhancements that increase productivity and data accuracy.",
        icon: Zap,
      },
      {
        title: "Integration Services",
        description:
          "Seamlessly connect Salesforce with ERP systems, marketing platforms, payment gateways, and third-party applications using REST/SOAP APIs and secure middleware solutions.",
        icon: Link,
      },
      {
        title: "Data & Analytics",
        description:
          "Unlock actionable insights with advanced dashboards, custom reports, API data pipelines, and predictive analytics to support smarter business decisions.",
        icon: LineChart,
      },
      {
        title: "Automation & AI",
        description:
          "Leverage AI-driven workflows, intelligent lead prioritization, chatbots, and automated task management to streamline operations and enhance customer engagement.",
        icon: BrainCircuit,
      },
    ],
    majorOperations: [
      {
        title: "Lightning Migration",
        description:
          "Seamless transition from Salesforce Classic to Lightning Experience. We ensure data integrity, UI redesign, and user adoption with minimal downtime.",
        icon: Zap,
      },
      {
        title: "AppExchange Development",
        description:
          "Custom app development tailored to business needs. From architecture to publishing, we build secure and scalable AppExchange solutions.",
        icon: Code2,
      },
      {
        title: "CPQ Implementation",
        description:
          "End-to-end Configure, Price, Quote setup for complex sales processes. Automated pricing rules, approvals, and proposal generation for faster deal closures.",
        icon: ClipboardList,
      },
      {
        title: "Salesforce Managed Services",
        description:
          "Ongoing support, enhancements, and performance monitoring. We provide proactive maintenance, upgrades, and continuous optimization to maximize ROI.",
        icon: Settings,
      },
    ],
    summaryWorks: [
      {
        title: "Global Retailer CRM Overhaul",
        description:
          "Unified 5 isolated CRM instances into a single Salesforce Lightning org, boosting sales velocity by 34%.",
      },
      {
        title: "FinServ Client Portal",
        description:
          "Developed a secure Experience Cloud portal for a major bank, reducing support tickets by 40%.",
      },
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We analyze your current CRM setup, business workflows, and challenges. A detailed gap analysis identifies improvement opportunities.This forms the foundation for a scalable solution.",
      },
      {
        title: "Architecture",
        description:
          "We design a secure and scalable Salesforce architecture.Data models, user roles, and automation flows are structured carefully.Built to support growth and long-term flexibility.",
      },
      {
        title: "Customization",
        description:
          "We configure and customize Salesforce to match your processes. Workflows, validations, and dashboards are tailored precisely. Ensuring seamless user experience and efficiency.",
      },
      {
        title: "Integration",
        description:
          "We integrate Salesforce with ERP, marketing, and third-party tools. Secure APIs enable real-time data synchronization. Creating a unified and connected ecosystem.",
      },
      {
        title: "Optimization",
        description:
          "We continuously monitor and refine system performance. Automation improvements and data enhancements are implemented. Maximizing ROI and user adoption over time.",
      },
    ],
    whyChooseUs: [
      {
        title: "Enterprise Focus",
        description: "Built for operational visibility.",
      },
      {
        title: "Custom Scalability",
        description: "Multi-business-unit architecture.",
      },
      {
        title: "Data Synchronization",
        description: "Event-driven integration methodologies.",
      },
      { title: "AI-Ready CRM", description: "Intelligent pipelines." },
    ],
  },
  "digital-marketing": {
    id: "digital-marketing",
    title: "Digital Marketing &\nPerformance Growth Services",
    description:
      "Data-driven digital marketing strategies that generate measurable business growth. Combining paid media, SEO, CRO, and analytics.",
    heroImage: "/service-hero/Portnxt/Desktop - 10.png",
    overview: {
      title: "Our Digital Marketing &\nPerformance Growth Services",
      description:
        "We offer data-driven digital marketing solutions designed to increase brand visibility, generate qualified leads, and accelerate growth. Our experts craft customized strategies aligned with your business objectives to ensure measurable and sustainable results. Explore our specialized services below.",
      image: "/service-hero/Portnxt/unsplash-banner.png",
    },
    subServices: [
      {
        title: "Google Ads Management",
        description:
          "We enable Targeted search campaigns, Display network visibility, Shopping campaign optimization, YouTube video advertising.",
        icon: Target,
      },
      {
        title: "Meta Ads",
        description:
          "Our services include Lookalike audience targeting, Funnel-based campaign design, Retargeting strategies, Engagement optimization.",
        icon: Megaphone,
      },
      {
        title: "Search Engine Optimization (SEO)",
        description:
          "We provide Technical SEO optimization, Keyword strategy development, Content optimization, Link-building strategies.",
        icon: Globe,
      },
      {
        title: "Conversion Optimization",
        description:
          "We help you Optimize landing pages, Improve user experience, Analyze behavioral data, Implement A/B testing.",
        icon: Activity,
      },
      {
        title: "Performance Marketing",
        description:
          "We deliver Full-funnel campaign planning, Data-driven targeting, ROI-focused execution, Continuous performance tracking.",
        icon: Zap,
      },
    ],
    majorOperations: [
      {
        title: "Programmatic Advertising",
        description:
          "We enable Data-driven media purchasing, Audience targeting at scale, Real-time bidding strategies, Cross-channel campaign delivery.",
        icon: Globe,
      },
      {
        title: "Marketing Automation",
        description:
          "We integrate platforms such as HubSpot and Marketo to Automate email workflows, Manage lead scoring, Personalize customer interactions, Improve campaign lifecycle management.",
        icon: Settings,
      },
      {
        title: "Advanced Attribution Modeling",
        description:
          "We provide Multi-touch attribution models, Channel performance analysis, Conversion tracking, Campaign effectiveness insights.",
        icon: LineChart,
      },
      {
        title: "Predictive Audience Targeting",
        description:
          "We enable Behavioral targeting models, Predictive customer segmentation, Intent-based campaign strategies, Data-driven audience forecasting.",
        icon: BrainCircuit,
      },
    ],
    summaryWorks: [
      {
        title: "E-Commerce ROAS Scaling",
        description:
          "Scaled a D2C brand's Meta ad spend by 400% while maintaining a 3.5x ROAS through advanced lookalike models.",
      },
      {
        title: "B2B SaaS Lead Generation",
        description:
          "Revamped SEO and Google Ads strategy, resulting in a 150% increase in qualified Enterprise leads within 6 months.",
      },
    ],
    process: [
      {
        title: "Research",
        description:
          "We begin by analyzing your industry landscape, target audience, and competitor strategies. This helps us identify opportunities, define positioning, and build a strong foundation for campaign success.",
      },
      {
        title: "Architecture",
        description:
          "Our team designs a conversion focused marketing funnel tailored to your customer journey. This ensures every stage  from awareness to conversion  is strategically optimized.",
      },
      {
        title: "Development",
        description:
          "We develop compelling creatives, messaging, and campaign assets aligned with your brand voice and marketing goals.",
      },
      {
        title: "Launch",
        description:
          "We execute campaigns across selected channels with precision targeting and performance tracking to ensure maximum reach and engagement.",
      },
      {
        title: "Scaling",
        description:
          "Post-launch, we continuously monitor campaign performance and optimize strategies to scale results and maximize ROI.",
      },
    ],
    whyChooseUs: [
      {
        title: "Data-driven Strategy",
        description: "Concrete data for segmentation.",
      },
      {
        title: "High-Performance Growth",
        description: "Targeting CPA, ROAS, LTV.",
      },
      {
        title: "Complete Funnels",
        description: "Holistic converting strategies.",
      },
      { title: "Constant Analytics", description: "Real-time dashboards." },
    ],
  },
  "microsoft-dynamics-365": {
    id: "microsoft-dynamics-365",
    title: "Microsoft Dynamics 365\nImplementation Services",
    description:
      "Complete Microsoft Dynamics 365 implementation services across CRM and ERP workloads to streamline operations and enable real-time decision-making.",
    heroImage: "/service-hero/Portnxt/Desktop - 2.png",
    overview: {
      title: "Our Microsoft Dynamics Services",
      description:
        "We offer comprehensive Microsoft Dynamics 365 consulting services to help businesses unify CRM and ERP capabilities, streamline operations, and improve decision-making. Our certified experts deliver tailored implementations aligned with your business objectives, ensuring scalability, efficiency, and measurable ROI. Explore our specialized services below.",
      image: "/service-hero/Portnxt/unsplash-banner.png",
    },
    subServices: [
      {
        title: "Dynamics 365 CRM",
        description:
          "Manage sales, marketing, and customer service efficiently. Build stronger customer relationships and automate workflows",
        icon: Briefcase,
      },
      {
        title: "Dynamics 365 ERP",
        description:
          "Streamline finance and operations with smart ERP solutions. Improve efficiency with real-time business insights.",
        icon: LayoutDashboard,
      },
      {
        title: "Extensions",
        description:
          "Enhance Dynamics 365 with custom apps and automation. Tailored solutions built for your business needs.",
        icon: Plus,
      },
      {
        title: "Integration",
        description:
          "Seamlessly connect with SAP, Oracle, and Azure. Ensure secure and smooth data flow across systems.",
        icon: Link,
      },
      {
        title: "Reporting",
        description:
          "Turn data into actionable insights with Power BI dashboards. Make smarter decisions with real-time analytics.",
        icon: LineChart,
      },
    ],
    majorOperations: [
      {
        title: "Legacy System Migration",
        description:
          "Seamlessly migrate from AX/NAV to Dynamics 365 Cloud. Ensure secure data transfer with minimal downtime.",
        icon: Cloud,
      },
      {
        title: "Power Apps Extendability",
        description:
          "Build custom low-code applications integrated with Dataverse. Enhance productivity with tailored business solutions.",
        icon: Smartphone,
      },
      {
        title: "Supply Chain Resilience",
        description:
          "Implement predictive supply chain models in D365 SCM. Improve visibility, planning, and operational efficiency.",
        icon: Share2,
      },
      {
        title: "Data Security & Compliance",
        description:
          "Ensure enterprise-grade security and regulatory compliance. Protect business data with advanced governance controls",
        icon: Settings,
      },
    ],
    summaryWorks: [
      {
        title: "Manufacturing ERP Rollout",
        description:
          "Deployed D365 Finance & Operations across 12 global facilities, unifying legacy ledgers.",
      },
      {
        title: "Healthcare Field Service",
        description:
          "Implemented D365 Field Service to optimize routing for 500+ mobile healthcare technicians.",
      },
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We analyze your current CRM setup, business workflows, and challenges. A detailed gap analysis identifies improvement opportunities.This forms the foundation for a scalable solution.",
      },
      {
        title: "Architecture",
        description:
          "We design a secure and scalable CRM architecture. Data models, user roles, and automation flows are structured carefully.Built to support growth and long-term flexibility.",
      },
      {
        title: "Configuration",
        description:
          "We configure and customize Salesforce to match your processes. Workflows, validations, and dashboards are tailored precisely. Ensuring seamless user experience and efficiency.",
      },
      {
        title: "Validation",
        description:
          "We integrate Salesforce with ERP, marketing, and third-party tools. Secure APIs enable real-time data synchronization. Creating a unified and connected ecosystem.",
      },
      {
        title: "Go-Live",
        description:
          "We continuously monitor and refine system performance. Automation improvements and data enhancements are implemented. Maximizing ROI and user adoption over time.",
      },
    ],
    whyChooseUs: [
      {
        title: "End-to-end Deployments",
        description: "Roadmap to operations.",
      },
      { title: "Role-based Dashboards", description: "Tailored insights." },
      {
        title: "Power Platform Experts",
        description: "Extend functionality rapidly.",
      },
      { title: "Seamless Migration", description: "Minimal disruption." },
    ],
  },
  "oracle-erp": {
    id: "oracle-erp",
    title: "Oracle Erp",
    description: "Professional IT services tailored to your needs.",
    heroImage: "/service-hero/Portnxt/Desktop - 3.png",
    overview: {
      title: "Our Oracle Erp Services",
      description:
        "We provide end-to-end Oracle ERP & Cloud solutions to optimize enterprise operations, financial management, and business performance. Our experienced consultants design and implement scalable systems aligned with your strategic goals, maximizing efficiency and long-term value. Explore our specialized services below.",
      image: "/service-hero/Portnxt/unsplash-banner.png",
    },
    subServices: [
      {
        title: "Implementation & Customization",
        description:
          "End-to-end Oracle ERP deployment and configuration. Customized workflows aligned to business processes. Secure, scalable, and performance-driven setup.",
        icon: Database,
      },
      {
        title: "CRM Optimization",
        description:
          "Improve customer engagement and sales efficiency. Lead scoring, automation, and performance tracking. Data-driven CRM strategy for better results.",
        icon: Briefcase,
      },
      {
        title: "Integration Services",
        description:
          "Seamless integration with enterprise applications. Secure REST/SOAP API connectivity. Reliable and real-time data synchronization.",
        icon: Link,
      },
      {
        title: "Data & Analytics",
        description:
          "Advanced dashboards and business intelligence reporting. Real-time data insights for decision-making. Transform data into strategic advantage.",
        icon: LineChart,
      },
      {
        title: "Automation & AI",
        description:
          "AI-powered workflow automation solutions. Predictive analytics and smart prioritization. Enhance productivity with intelligent systems.",
        icon: BrainCircuit,
      },
    ],
    majorOperations: [
      {
        title: "Lightning Migration",
        description:
          "Seamless transition from Salesforce Classic to Lightning Experience. We ensure data integrity, UI redesign, and user adoption with minimal downtime.",
        icon: Cloud,
      },
      {
        title: "AppExchange Development",
        description:
          "Custom app development tailored to business needs. From architecture to publishing, we build secure and scalable AppExchange solutions.",
        icon: Target,
      },
      {
        title: "CPQ Implementation",
        description:
          "End-to-end Configure, Price, Quote setup for complex sales processes. Automated pricing rules, approvals, and proposal generation for faster deal closures.",
        icon: LayoutDashboard,
      },
      {
        title: "Digital Transformation Solution",
        description:
          "We help organizations accelerate their digital journey by modernizing legacy systems, automating business processes, and integrating intelligent platforms.",
        icon: Activity,
      },
    ],
    summaryWorks: [
      {
        title: "Global Retailer CRM Overhaul",
        description:
          "Unified 5 isolated CRM instances into a single Salesforce Lightning org, boosting sales velocity by 34%.",
      },
      {
        title: "FinServ Client Portal",
        description:
          "Developed a secure Experience Cloud portal for a major bank, reducing support tickets by 40%.",
      },
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We analyze your current CRM setup, business workflows, and challenges. A detailed gap analysis identifies improvement opportunities.This forms the foundation for a scalable solution.",
      },
      {
        title: "Architecture",
        description:
          "We design a secure and scalable Salesforce architecture.Data models, user roles, and automation flows are structured carefully.Built to support growth and long-term flexibility.",
      },
      {
        title: "Customization",
        description:
          "We configure and customize Salesforce to match your processes. Workflows, validations, and dashboards are tailored precisely. Ensuring seamless user experience and efficiency.",
      },
      {
        title: "Integration",
        description:
          "We integrate Salesforce with ERP, marketing, and third-party tools. Secure APIs enable real-time data synchronization. Creating a unified and connected ecosystem.",
      },
      {
        title: "Optimization",
        description:
          "We continuously monitor and refine system performance. Automation improvements and data enhancements are implemented. Maximizing ROI and user adoption over time.",
      },
    ],
    whyChooseUs: [
      {
        title: "Enterprise Focus",
        description: "Built for operational visibility.",
      },
      {
        title: "Custom Scalability",
        description: "Multi-business-unit architecture.",
      },
      {
        title: "Data Synchronization",
        description: "Event-driven integration methodologies.",
      },
      { title: "AI-Ready CRM", description: "Intelligent pipelines." },
    ],
  },
  "web-development": {
    id: "web-development",
    title: "Web Development",
    description: "Professional IT services tailored to your needs.",
    heroImage: "/service-hero/Portnxt/Desktop - 11.png",
    overview: {
      title: "Our Web Development Services",
      description:
        "We deliver comprehensive web and application development services to create scalable, secure, and user-centric digital experiences. Our development team builds tailored solutions aligned with your business goals, ensuring performance, innovation, and long-term value. Explore our specialized services below.",
      image: "/service-hero/Portnxt/unsplash-banner.png",
    },
    subServices: [
      {
        title: "Implementation & Customization",
        description:
          "We enable Custom web architecture, Workflow-driven functionality, Role-based access setup, Scalable platform configuration.",
        icon: Code2,
      },
      {
        title: "CRM Optimization",
        description:
          "We help you Capture and score leads, Automate customer journeys, Improve engagement tracking, Optimize conversion performance.",
        icon: LayoutDashboard,
      },
      {
        title: "Integration Services",
        description:
          "Our services include ERP system integration, API-based connectivity, Cross-platform synchronization, Real-time data exchange.",
        icon: Link,
      },
      {
        title: "Data & Analytics",
        description:
          "We provide API-driven data integration, User behavior tracking, Reporting dashboards, Performance insights.",
        icon: LineChart,
      },
      {
        title: "Automation & AI",
        description:
          "Leverage AI-driven workflows, intelligent lead prioritization, chatbots, and automated task management to streamline operations and enhance customer engagement.",
        icon: BrainCircuit,
      },
    ],
    majorOperations: [
      {
        title: "Lightning Migration",
        description:
          "Seamless transition from Salesforce Classic to Lightning Experience. We ensure data integrity, UI redesign, and user adoption with minimal downtime.",
        icon: Zap,
      },
      {
        title: "AppExchange Development",
        description:
          "Custom app development tailored to business needs. From architecture to publishing, we build secure and scalable AppExchange solutions.",
        icon: Target,
      },
      {
        title: "CPQ Implementation",
        description:
          "End-to-end Configure, Price, Quote setup for complex sales processes. Automated pricing rules, approvals, and proposal generation for faster deal closures.",
        icon: ClipboardList,
      },
      {
        title: "Headless Web Architecture",
        description:
          "We provide API-first development, Decoupled frontend-backend systems, Faster content delivery, Omnichannel experience enablement.",
        icon: Layers,
      },
    ],
    summaryWorks: [
      {
        title: "Global Retailer CRM Overhaul",
        description:
          "Unified 5 isolated CRM instances into a single Salesforce Lightning org, boosting sales velocity by 34%.",
      },
      {
        title: "FinServ Client Portal",
        description:
          "Developed a secure Experience Cloud portal for a major bank, reducing support tickets by 40%.",
      },
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We begin by evaluating your current systems, workflows, and business needs. This helps us identify gaps and opportunities to enhance digital efficiency.",
      },
      {
        title: "Architecture",
        description:
          "Our team designs a robust web architecture and data structure that supports performance, scalability, and future growth.",
      },
      {
        title: "Customization",
        description:
          "We develop and customize your web platform to align with your operational requirements and user experience goals.",
      },
      {
        title: "Integration",
        description:
          "We integrate your website with CRM, ERP, and third-party systems to ensure seamless data flow and unified operations.",
      },
      {
        title: "Optimization",
        description:
          "Post-deployment, we continuously monitor and enhance performance to ensure your web platform evolves with your business.",
      },
    ],
    whyChooseUs: [
      {
        title: "Enterprise Focus",
        description: "Built for operational visibility.",
      },
      {
        title: "Custom Scalability",
        description: "Multi-business-unit architecture.",
      },
      {
        title: "Data Synchronization",
        description: "Event-driven integration methodologies.",
      },
      { title: "AI-Ready CRM", description: "Intelligent pipelines." },
    ],
  },
  "microsoft-fabric": {
    id: "microsoft-fabric",
    title: "Microsoft Fabric",
    description: "Professional IT services tailored to your needs.",
    heroImage: "/service-hero/Portnxt/Desktop - 5.png",
    overview: {
      title: "Our Microsoft Fabric Services",
      description:
        "We offer advanced Microsoft Fabric consulting services to unify data engineering, analytics, and AI within a single powerful ecosystem. Our experts design scalable data architectures aligned with your business strategy, enabling smarter insights and optimized performance. Explore our specialized services below.",
      image: "/service-hero/Portnxt/unsplash-banner.png",
    },
    subServices: [
      {
        title: "Implementation & Customization",
        description:
          "We tailor Microsoft Fabric environments to align with your business needs by configuring data workflows and operational processes.",
        icon: Database,
      },
      {
        title: "CRM Optimization",
        description:
          "Improve system performance and user adoption with in-depth CRM audits, workflow optimization, and automation enhancements that increase productivity and data accuracy.",
        icon: Briefcase,
      },
      {
        title: "Integration Services",
        description:
          "We connect Microsoft Fabric with your enterprise systems to create a unified data environment.This eliminates data silos and enables seamless collaboration across systems.",
        icon: Link,
      },
      {
        title: "Data & Analytics",
        description:
          "Unlock actionable insights with advanced dashboards, custom reports, API data pipelines, and predictive analytics to support smarter business decisions.",
        icon: LineChart,
      },
      {
        title: "Automation & AI",
        description:
          "Leverage AI-driven workflows, intelligent lead prioritization, chatbots, and automated task management to streamline operations and enhance customer engagement.",
        icon: BrainCircuit,
      },
    ],
    majorOperations: [
      {
        title: "Lightning Migration",
        description:
          "Seamless transition from Salesforce Classic to Lightning Experience. We ensure data integrity, UI redesign, and user adoption with minimal downtime.",
        icon: Cloud,
      },
      {
        title: "AppExchange Development",
        description:
          "Custom app development tailored to business needs. From architecture to publishing, we build secure and scalable AppExchange solutions.",
        icon: Target,
      },
      {
        title: "CPQ Implementation",
        description:
          "End-to-end Configure, Price, Quote setup for complex sales processes. Automated pricing rules, approvals, and proposal generation for faster deal closures.",
        icon: LayoutDashboard,
      },
      {
        title: "Real-Time Data Streaming",
        description:
          "Enable instant access to business insights with real-time data streaming capabilities in Microsoft Fabric.This empowers organizations to respond proactively to trends, risks, and opportunities as they happen.",
        icon: Activity,
      },
    ],
    summaryWorks: [
      {
        title: "Global Retailer CRM Overhaul",
        description:
          "Unified 5 isolated CRM instances into a single Salesforce Lightning org, boosting sales velocity by 34%.",
      },
      {
        title: "FinServ Client Portal",
        description:
          "Developed a secure Experience Cloud portal for a major bank, reducing support tickets by 40%.",
      },
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We analyze your current CRM setup, business workflows, and challenges. A detailed gap analysis identifies improvement opportunities.This forms the foundation for a scalable solution.",
      },
      {
        title: "Architecture",
        description:
          "We design a secure and scalable CRM architecture.Data models, user roles, and automation flows are structured carefully.Built to support growth and long-term flexibility.",
      },
      {
        title: "Customization",
        description:
          "We configure and customize Salesforce to match your processes. Workflows, validations, and dashboards are tailored precisely. Ensuring seamless user experience and efficiency.",
      },
      {
        title: "Integration",
        description:
          "We integrate Salesforce with ERP, marketing, and third-party tools. Secure APIs enable real-time data synchronization. Creating a unified and connected ecosystem.",
      },
      {
        title: "Optimization",
        description:
          "We continuously monitor and refine system performance. Automation improvements and data enhancements are implemented. Maximizing ROI and user adoption over time.",
      },
    ],
    whyChooseUs: [
      {
        title: "Enterprise Focus",
        description: "Built for operational visibility.",
      },
      {
        title: "Custom Scalability",
        description: "Multi-business-unit architecture.",
      },
      {
        title: "Data Synchronization",
        description: "Event-driven integration methodologies.",
      },
      { title: "AI-Ready CRM", description: "Intelligent pipelines." },
    ],
  },
  "data-engineering": {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Professional IT services tailored to your needs.",
    heroImage: "/service-hero/Portnxt/Desktop - 6.png",
    overview: {
      title: "Our Data Engineering Services",
      description:
        "We provide comprehensive data engineering solutions to build reliable, scalable, and high-performance data infrastructures. Our specialists design robust pipelines and architectures tailored to your analytics goals, ensuring accurate insights and business agility. Explore our specialized services below.",
      image: "/service-hero/Portnxt/unsplash-banner.png",
    },
    subServices: [
      {
        title: "Implementation & Customization",
        description:
          "We design and implement tailored data frameworks that align with your business processes.This ensures your systems are optimized for performance and future growth.",
        icon: Database,
      },
      {
        title: "CRM Optimization",
        description:
          "Improve customer engagement through data-driven CRM enhancements.These improvements enhance pipeline visibility and operational efficiency.",
        icon: Briefcase,
      },
      {
        title: "Integration Services",
        description:
          "We unify your enterprise ecosystem through seamless data integration.This creates a connected environment for smarter collaboration and reporting.",
        icon: Link,
      },
      {
        title: "Data & Analytics",
        description:
          "Turn data into actionable intelligence through structured ingestion pipelines. This empowers leadership with accurate and timely decision-making capabilities.",
        icon: LineChart,
      },
      {
        title: "Automation & AI",
        description:
          "By embedding AI into your data ecosystem, we help your teams focus on high-value opportunities and accelerate business growth.",
        icon: BrainCircuit,
      },
    ],
    majorOperations: [
      {
        title: "Lightning Migration",
        description:
          "Seamless transition from Salesforce Classic to Lightning Experience. We ensure data integrity, UI redesign, and user adoption with minimal downtime.",
        icon: Cloud,
      },
      {
        title: "AppExchange Development",
        description:
          "Custom app development tailored to business needs. From architecture to publishing, we build secure and scalable AppExchange solutions.",
        icon: Target,
      },
      {
        title: "CPQ Implementation",
        description:
          "End-to-end Configure, Price, Quote setup for complex sales processes. Automated pricing rules, approvals, and proposal generation for faster deal closures.",
        icon: LayoutDashboard,
      },
      {
        title: "Data Pipeline Engineering",
        description:
          "Build reliable and scalable data pipelines to support real-time analytics and reporting.",
        icon: Activity,
      },
    ],
    summaryWorks: [
      {
        title: "Global Retailer CRM Overhaul",
        description:
          "Unified 5 isolated CRM instances into a single Salesforce Lightning org, boosting sales velocity by 34%.",
      },
      {
        title: "FinServ Client Portal",
        description:
          "Developed a secure Experience Cloud portal for a major bank, reducing support tickets by 40%.",
      },
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We begin by analyzing your current CRM environment, business workflows, and operational challenges. This helps us identify gaps, inefficiencies, and opportunities for automation and improvement.",
      },
      {
        title: "Architecture",
        description:
          "Our team designs a scalable CRM architecture and structured data model that supports your business processes while ensuring flexibility, security, and future growth.",
      },
      {
        title: "Customization",
        description:
          "We configure and customize CRM functionalities to match your unique operational needs — including workflow automation, custom objects, and user-friendly interfaces.",
      },
      {
        title: "Integration",
        description:
          "We integrate your CRM with key systems such as ERP platforms and third-party tools to ensure seamless data flow and real-time synchronization across your organization.",
      },
      {
        title: "Optimization",
        description:
          "Post-implementation, we continuously monitor system performance and enhance it through analytics, feedback, and updates — ensuring your CRM evolves alongside your business.",
      },
    ],
    whyChooseUs: [
      {
        title: "Enterprise Focus",
        description: "Built for operational visibility.",
      },
      {
        title: "Custom Scalability",
        description: "Multi-business-unit architecture.",
      },
      {
        title: "Data Synchronization",
        description: "Event-driven integration methodologies.",
      },
      { title: "AI-Ready CRM", description: "Intelligent pipelines." },
    ],
  },
  "mobile-app-development": {
    id: "mobile-app-development",
    title: "Mobile Application Development",
    description:
      "High-performance, secure mobile applications for iOS and Android platforms, linking deeply with enterprise operations.",
    heroImage: "/service-hero/Portnxt/Desktop - 12.png",
    overview: {
      title: "Our Mobile Application Development Services",
      description:
        "We provide end-to-end mobile app development services to build high-performance Android and iOS applications. Our experts design intuitive, scalable solutions aligned with your business strategy, ensuring enhanced user engagement and measurable growth. Explore our specialized services below.",
      image: "/service-hero/Portnxt/unsplash-banner.png",
    },
    subServices: [
      {
        title: "Native iOS",
        description:
          "We develop high-performance iOS applications tailored for reliability and user experience.",
        icon: Smartphone,
      },
      {
        title: "Native Android",
        description:
          "We build robust Android applications designed for flexibility and scalability.",
        icon: Smartphone,
      },
      {
        title: "Cross-Platform",
        description:
          "We create cost-effective apps that work seamlessly across multiple platforms.",
        icon: Code2,
      },
      {
        title: "Enterprise Integrations",
        description:
          "We integrate mobile apps with enterprise systems to ensure real-time data access.",
        icon: Link,
      },
    ],
    majorOperations: [
      {
        title: "IoT Device Integration",
        description:
          "We provide BLE and WiFi connectivity, Integration with industrial sensors, Consumer hardware synchronization, Real-time device monitoring.",
        icon: Cpu,
      },
      {
        title: "Biometric Authentication",
        description:
          "We integrate FaceID and TouchID, FIDO2 protocols, Multi-factor authentication, Secure access controls.",
        icon: Shield,
      },
      {
        title: "Offline-First Architectures",
        description:
          "We implement SQLite-based local storage, Smart caching strategies, Data sync mechanisms, Offline workflow continuity.",
        icon: Database,
      },
      {
        title: "Real-Time Push & Event Systems",
        description:
          "We develop Event-driven notification systems, Real-time data updates, Context-aware alerts, User engagement triggers.",
        icon: Activity,
      },
    ],
    summaryWorks: [
      {
        title: "Field Workforce Companion App",
        description:
          "Developed a cross-platform React Native app for telecom field technicians, reducing report filing time by 50%.",
      },
      {
        title: "Retail Consumer Loyalty App",
        description:
          "Launched a native iOS/Android loyalty app integrating directly with Magento and Salesforce CRM, acquiring 2M+ users.",
      },
    ],
    process: [
      {
        title: "User Journey Mapping",
        description:
          "We begin by understanding your audience, business goals, and user expectation. Our team conducts detailed research to map user behaviors, needs, and pain points.",
      },
      {
        title: "UX/UI Wireframing",
        description:
          "With insights from the journey mapping phase, we translate ideas into intuitive design structures. We ensure the interface is not only visually appealing but also easy to navigate and optimized for engagement.",
      },
      {
        title: "Sprint Execution",
        description:
          "Development is carried out using agile methodologies to ensure flexibility and transparency. This iterative approach ensures your solution evolves efficiently without compromising quality.",
      },
      {
        title: "Security & Performance Validation",
        description:
          "Before launch, we conduct comprehensive testing to guarantee reliability and safety. This ensures your application performs smoothly under real-world conditions.",
      },
      {
        title: "App Store & Live Launch",
        description:
          "Once fully validated, we handle the deployment process seamlessly. Our goal is to ensure a smooth launch with minimal downtime and maximum readiness for user adoption.",
      },
    ],
    whyChooseUs: [
      {
        title: "Seamless Operations",
        description: "Augment workforce management.",
      },
      { title: "Cross-Platform", description: "Lower overhead targeting." },
      { title: "Secure Data", description: "Robust architectural safeguards." },
      {
        title: "Deep Integrations",
        description: "Direct connectivity to ERPs.",
      },
    ],
  },
  "custom-ai-solutions": {
    id: "custom-ai-solutions",
    title: "Custom AI Solutions &\nIntelligent Systems",
    description:
      "Custom AI systems tailored to enterprise needs, automating decision-making and unlocking insights across data formats.",
    heroImage: "/service-hero/Portnxt/Desktop - 7.png",
    overview: {
      title: "Our AI Solutions Services",
      description:
        "We deliver innovative AI and intelligent automation solutions that help businesses enhance efficiency and drive data-driven decisions. Our experts develop customized AI models aligned with your operational goals, ensuring measurable impact and competitive advantage. Explore our specialized services below.",
      image: "/service-hero/Portnxt/unsplash-banner.png",
    },
    subServices: [
      {
        title: "Generative AI Solutions",
        description:
          "We develop advanced Generative AI systems tailored to your business needs.These solutions enhance productivity by providing accurate, real-time intelligence.",
        icon: BrainCircuit,
      },
      {
        title: "AI Agents",
        description:
          "We build intelligent AI agents capable of automating complex tasks and collaborating across systems.This enables organizations to streamline operations.",
        icon: Zap,
      },
      {
        title: "Predictive Analytics",
        description:
          "Harness AI-driven insights to anticipate trends and mitigate risks.These capabilities support proactive decision-making and operational stability.",
        icon: LineChart,
      },
      {
        title: "Intelligent Docs",
        description:
          "Transform document-heavy processes with intelligent automation.This improves accuracy, speeds up processing, and ensures regulatory compliance.",
        icon: FileJson,
      },
    ],
    majorOperations: [
      {
        title: "LLM Fine-Tuning",
        description:
          "We customize open-source Large Language Models to align with your business context and data environment.",
        icon: Code2,
      },
      {
        title: "Computer Vision Systems",
        description:
          "Enhance operational safety and quality through AI-powered visual intelligence.",
        icon: Monitor,
      },
      {
        title: "Conversational Copilots",
        description:
          "These copilots streamline workflows and enhance employee experience.",
        icon: MessageSquare,
      },
      {
        title: "Autonomous Decision Engines",
        description:
          "Enable intelligent, data-driven decision-making with AI-powered automation.",
        icon: Layers,
      },
    ],
    summaryWorks: [
      {
        title: "Automated Invoice Processing",
        description:
          "Designed a deep learning OCR pipeline that eliminated 90% of manual data entry for a logistics firm.",
      },
      {
        title: "Predictive Maintenance AI",
        description:
          "Implemented an anomaly detection model on edge sensors, predicting machine failure 48 hours in advance.",
      },
    ],
    process: [
      {
        title: "Feasibility",
        description:
          "We begin by identifying high-impact AI opportunities within your business. This involves analyzing workflows, challenges, and data readiness to determine where AI can deliver the most value.",
      },
      {
        title: "Design",
        description:
          "Our experts design AI models tailored to your specific use cases. This includes defining architecture, selecting appropriate algorithms, and ensuring scalability and performance.",
      },
      {
        title: "Development",
        description:
          "We train AI models using relevant datasets to ensure accuracy and domain alignment. This phase focuses on building intelligent systems capable of solving real business problems.",
      },
      {
        title: "Integration",
        description:
          "Once trained, we integrate AI models into your enterprise ecosystem. This ensures seamless functionality within existing systems and workflows.",
      },
      {
        title: "Optimization",
        description:
          "AI systems require ongoing refinement. We continuously monitor performance, retrain models when necessary, and optimize outputs to ensure long-term efficiency and relevance.",
      },
    ],
    whyChooseUs: [
      {
        title: "Responsible AI",
        description: "Bias-checked models protecting IP.",
      },
      {
        title: "Real Workflows",
        description: "API-driven outputs for operations.",
      },
      {
        title: "Document Automation",
        description: "Paperwork into actionable tables.",
      },
      {
        title: "Scalable Infrastructure",
        description: "ML pipelines updating securely.",
      },
    ],
  },
  "servicenow-implementation": {
    id: "servicenow-implementation",
    title: "ServiceNow Implementation &\nConsulting",
    description:
      "ServiceNow consulting and implementation services to streamline IT operations, automate workflows, and enhance delivery.",
    heroImage: "/service-hero/Portnxt/Desktop - 8.png",
    overview: {
      title: "Our ServiceNow Implementation & Consulting Services",
      description:
        "We offer specialized ServiceNow consulting services to streamline IT operations and automate service management processes. Our certified professionals design tailored workflows that improve productivity, visibility, and organizational efficiency. Explore our specialized services below.",
      image: "/service-hero/Portnxt/unsplash-banner.png",
    },
    subServices: [
      {
        title: "ITSM",
        description:
          "We enable Efficient incident tracking, SLA definition and monitoring, Automated ticket routing, Improved service response times.",
        icon: LayoutDashboard,
      },
      {
        title: "ITOM",
        description:
          "We provide Automated discovery mapping, Cloud environment monitoring, Infrastructure health insights, Proactive issue detection",
        icon: Server,
      },
      {
        title: "HRSD",
        description:
          "We help you Automate onboarding workflows, Create employee self-service portals, Manage HR requests efficiently, Improve HR process visibility.",
        icon: Shield,
      },
      {
        title: "Custom Development",
        description:
          "We develop Low-code business apps, Workflow-driven solutions, Department-specific tools, Scalable enterprise applications.",
        icon: Code2,
      },
    ],
    majorOperations: [
      {
        title: "Service Portal Design",
        description:
          "We design portals that Enable easy service requests, Provide real-time incident tracking, Improve user engagement, Enhance self-service capabilities.",
        icon: Monitor,
      },
      {
        title: "CMDB Population",
        description:
          "We enable Automated discovery mapping, Hybrid cloud environment tracking, Asset relationship visibility, Data consistency and accuracy.",
        icon: Database,
      },
      {
        title: "IntegrationHub Deployment",
        description:
          "We implement Spoke-based integrations, Automated cross-platform actions, Connectivity with Jira, Azure, and Workday, Workflow-driven system communication.",
        icon: Link,
      },
      {
        title: "AI-Powered Incident Management",
        description:
          "We provide Predictive incident detection, Automated root cause analysis, Smart ticket prioritization, AI-driven resolution recommendations.",
        icon: BrainCircuit,
      },
    ],
    summaryWorks: [
      {
        title: "Global ITSM Consolidation",
        description:
          "Unified 4 regional IT helpdesks into a single global ServiceNow instance, resolving tickets 25% faster.",
      },
      {
        title: "Zero-Touch Employee Onboarding",
        description:
          "Automated the entire HR onboarding flow—from laptop procurement (IT) to payroll routing (Finance).",
      },
    ],
    process: [
      {
        title: "Mapping",
        description:
          "We begin by analyzing your existing service workflows and operational processes. This helps us identify improvement areas and define how the platform can best support your business needs.",
      },
      {
        title: "Setup",
        description:
          "Our team designs the platform architecture to ensure scalability, performance, and integration readiness. This forms the foundation for a stable and future-ready implementation.",
      },
      {
        title: "Customization",
        description:
          "We configure platform modules to align with your unique operational requirements. From service workflows to automation rules, we tailor the system for optimal efficiency.",
      },
      {
        title: "Migration",
        description:
          "We securely migrate your legacy data into the new environment while ensuring accuracy and consistency. This enables a smooth transition without disrupting business continuity.",
      },
      {
        title: "Adoption",
        description:
          "Post-deployment, we provide hands-on support to ensure successful adoption. Our focus is on user enablement, system stability, and performance optimization.",
      },
    ],
    whyChooseUs: [
      {
        title: "Efficiency",
        description: "Eliminating silos between IT & HR.",
      },
      { title: "Performance", description: "Actionable visibility KPIs." },
      {
        title: "Extensibility",
        description: "Connecting smoothly to SAP/Oracle.",
      },
      { title: "Governance", description: "Rigid RBAC boundaries." },
    ],
  },
  "jira-implementation": {
    id: "jira-implementation",
    title: "Jira Implementation &\nAgile Project Management",
    description:
      "Jira consulting and optimization services helping organizations streamline Agile delivery and CI/CD collaboration natively.",
    heroImage: "/service-hero/Portnxt/Desktop - 9.png",
    overview: {
      title: "Our Jira Implementation &\nAgile Project Management Services",
      description:
        "We provide expert Jira consulting and implementation services to enhance agile project management and team collaboration. Our solutions are customized to fit your workflows, enabling improved transparency, productivity, and project success. Explore our specialized services below.",
      image: "/service-hero/Portnxt/unsplash-banner.png",
    },
    subServices: [
      {
        title: "Jira Software",
        description:
          "We enable Scrum and Kanban board setup, Sprint planning and backlog management, Workflow customization, Team collaboration tools.",
        icon: Target,
      },
      {
        title: "Jira Service Management",
        description:
          "We provide ITSM portal configuration, Request management workflows, SLA tracking, Incident and service request automation.",
        icon: Shield,
      },
      {
        title: "DevOps Integration",
        description:
          "Our services include CI/CD pipeline integration, Release tracking, Development workflow automation, Real-time status monitoring.",
        icon: Activity,
      },
      {
        title: "Analytics",
        description:
          "We help you Build executive dashboards, Enable performance tracking, Generate delivery insights, Improve strategic visibility.",
        icon: LineChart,
      },
    ],
    majorOperations: [
      {
        title: "Scaled Agile Framework (SAFe)",
        description:
          "We implement Jira Align integration, Advanced Roadmaps setup, Portfolio tracking frameworks, Cross-team dependency mapping.",
        icon: Layers,
      },
      {
        title: "Automated Workflow Routing",
        description:
          "We build JQL-based transition logic, ScriptRunner automation, Rule-driven issue routing, Approval and escalation workflows.",
        icon: Code2,
      },
      {
        title: "Jira Cloud Migrations",
        description:
          "We provide Zero-downtime migrations, Data integrity assurance, Workflow preservation, User access continuity.",
        icon: Cloud,
      },
      {
        title: "Agile Performance Intelligence",
        description:
          "We enable Sprint performance analytics, Delivery trend analysis, Bottleneck identification, Predictive project tracking.",
        icon: Activity,
      },
    ],
    summaryWorks: [
      {
        title: "Software Delivery Pipeline",
        description:
          "Integrated Jira Software with Jenkins and Bitbucket, granting executives real-time CI/CD visibility.",
      },
      {
        title: "ITSM Service Management Cutover",
        description:
          "Transitioned a massive university IT department to Jira Service Management for streamlined student support requests.",
      },
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We begin by evaluating your current project management practices and agile maturity. This helps identify gaps, inefficiencies, and opportunities to improve delivery workflows.",
      },
      {
        title: "Design",
        description:
          "Our team designs optimized workflows tailored to your agile framework — whether Scrum, Kanban, or hybrid models — ensuring alignment with business objectives.",
      },
      {
        title: "Setup",
        description:
          "We configure Jira modules and integrate them with your development and collaboration tools to enable seamless project tracking and automation.",
      },
      {
        title: "Validation",
        description:
          "We validate workflows, integrations, and automation rules to ensure everything functions accurately before full deployment.",
      },
      {
        title: "Improvement",
        description:
          "Post-implementation, we continuously monitor performance and refine processes to support evolving project needs and improve delivery outcomes.",
      },
    ],
    whyChooseUs: [
      {
        title: "Holistic Tracing",
        description: "End-to-end pipeline visibility.",
      },
      {
        title: "Frictionless Processes",
        description: "Minimizing administrative burdens.",
      },
      {
        title: "Enterprise Aggregation",
        description: "Synchronizing milestones.",
      },
      {
        title: "Certified Frameworks",
        description: "Robust governance models.",
      },
    ],
  },
  "sap-implementation": {
    id: "sap-implementation",
    title: "SAP Implementation &\nEnterprise Transformation",
    description:
      "Secure, high-performance SAP implementation services to modernize core business processes and improve operational visibility.",
    heroImage: "/service-hero/Portnxt/Desktop -4.png",
    overview: {
      title: "Our SAP Implementation Services",
      description:
        "We deliver comprehensive SAP implementation services to modernize core business processes and improve operational visibility. Our certified professionals customize solutions to match your industry requirements, ensuring seamless integration and sustainable growth. Explore our specialized services below.",
      image: "/service-hero/Portnxt/unsplash-banner.png",
    },
    subServices: [
      {
        title: "SAP S/4HANA",
        description:
          "Our structured migration approach ensures minimal disruption, faster adoption, and improved performance across business operations.",
        icon: Layers,
      },
      {
        title: "SAP BTP",
        description:
          "Leverage SAP BTP to extend and enhance your SAP landscape with intelligent applications and modern user experiences.Our solutions improve usability.",
        icon: Monitor,
      },
      {
        title: "SAP SuccessFactors",
        description:
          "This helps organizations enhance workforce efficiency and create a more engaging employee experience.",
        icon: Briefcase,
      },
      {
        title: "Integration",
        description:
          "By syncing SAP with Azure Data Lakes, we empower businesses with actionable insights and data-driven strategies.",
        icon: Cloud,
      },
    ],
    majorOperations: [
      {
        title: "Brownfield Conversion",
        description:
          "Upgrade your existing SAP ECC environment directly to SAP S/4HANA without losing critical historical data.",
        icon: Database,
      },
      {
        title: "Custom Fiori Extensions",
        description:
          "These intuitive extensions empower frontline teams with faster access to information and improved operational productivity.",
        icon: Smartphone,
      },
      {
        title: "Master Data Governance",
        description:
          "Establish strong governance frameworks for enterprise-wide data consistency.Our SAP MDG solutions ensure reliable master data across your organization.",
        icon: Shield,
      },
      {
        title: "AI-Driven Process Automation",
        description:
          "By embedding AI capabilities into SAP workflows, we help businesses reduce manual effort, improve accuracy, and unlock new levels of operational agility.",
        icon: Activity,
      },
    ],
    summaryWorks: [
      {
        title: "Automotive S/4HANA Transformation",
        description:
          "Executed a massive Green-field S/4HANA deployment streamlining parts manufacturing across Europe.",
      },
      {
        title: "Cloud Analytics & Forecasting",
        description:
          "Implemented SAP Analytics Cloud to unify demand forecasting against actual CRM pipelines.",
      },
    ],
    process: [
      {
        title: "Blueprinting",
        description:
          "We begin by analyzing your existing business processes, operational workflows, and system landscape. This phase helps us identify gaps, improvement opportunities, and transformation priorities — ensuring SAP aligns perfectly with your strategic objectives.",
      },
      {
        title: "Architecture",
        description:
          "We design a scalable SAP architecture tailored to your business needs. This includes system structure, data flow, and integration planning to ensure performance, flexibility, and future readiness.",
      },
      {
        title: "Development",
        description:
          "Our team configures SAP modules to match your business workflows and industry requirements. From finance to supply chain and HR, we customize the system to support operational efficiency and automation.",
      },
      {
        title: "Testing",
        description:
          "We perform rigorous system testing while securely migrating legacy data into the new SAP environment. This ensures accuracy, consistency, and smooth transition without disrupting business continuity.",
      },
      {
        title: "Hypercare",
        description:
          "After deployment, we provide dedicated post go live support to ensure system stability and user adoption. Our hypercare phase focuses on performance monitoring, issue resolution, and optimization for a successful long-term rollout.",
      },
    ],
    whyChooseUs: [
      {
        title: "Massive Scope Support",
        description: "Untangling multi-faceted layers.",
      },
      {
        title: "Clean Digital Cores",
        description: "Minimizing technical debt.",
      },
      { title: "Future Ready", description: "Modernize UI/UX and API reach." },
      {
        title: "Rigorous Auditing",
        description: "Global compliance matrices.",
      },
    ],
  },
};

export const defaultService = {
  ...servicesData["salesforce-consulting"],
  title: "Service",
  description: "Professional IT services tailored to your needs.",
};
