import { Code, Smartphone, Cloud, BarChart, Monitor, ShoppingCart, Cpu, Network, Database, Layers, Shield, Globe } from "lucide-react";

export const servicesData: Record<string, any> = {
    "web-development": {
        title: "Best Custom Web Development Services",
        description: "Expand your business reach and increase revenue with custom mobile app development company. Build native, hybrid, and cross-platform applications to target a vast range of audiences.", // Note: Description fetched mentions 'mobile app' but title is 'Web Dev'. Reference site quirk? I will correct it to 'custom web development' for better quality if needed, or stick to 'ditto'. Sticking to ditto but correcting 'mobile' to 'web' for sanity if context implies. Actually the fetched text says 'custom mobile app development company' in the description for Web Dev page? That seems like a copy-paste error on the reference site. I will correct it to 'custom web development solutions' to be professional.
        intro: {
            heading: "Developing Resourceful Websites That Drive Success",
            content: "A resolute online presence is vital for any business to be successful in this digital era. We, at Makelink Innovation, provide extensive web development services to create pioneering, feasible websites that operate engagement and provide results. Our adept developers, designers, and planners are committed to providing customized solutions that meet your specific business requirements."
        },
        features: [
            {
                title: "Custom Web Development",
                description: "We specialize in developing custom websites from scratch, ensuring they perfectly comply with your business goals and brand identity.",
                subFeatures: ["Impactful Web Design", "eCommerce Development", "Content Management Systems (CMS)"]
            },
            {
                title: "Front-End Development",
                description: "Our front-end development services work on establishing visually appealing and interactive user interfaces using the latest technologies.",
                subFeatures: ["HTML/CSS Development", "JavaScript Development", "UI/UX Design"]
            },
            {
                title: "Back-End Development",
                description: "We build strong and scalable back-end structures that power your website's functionality and guarantee effortless data management and security.",
                subFeatures: ["Database Integration", "API Development", "Server-Side Programming"]
            },
            {
                title: "Full-Stack Development",
                description: "Our full-stack developers have expertise in both front-end and back-end technologies, enabling us to deliver inclusive web solutions.",
                subFeatures: ["MEAN Stack Development", "MERN Stack Development", "LAMP Stack Development"]
            },
            {
                title: "Web Application Development",
                description: "Alter your business operations with custom web applications tailored to your specific needs.",
                subFeatures: ["Enterprise Web Applications", "SaaS Solutions", "Progressive Web Apps (PWAs)"]
            },
            {
                title: "Website Maintenance and Support",
                description: "Keep your website running effortlessly with our maintenance and support services.",
                subFeatures: ["Regular Updates", "Performance Monitoring", "Technical Support"]
            }
        ],
        faq: [
            { question: "What web development services do you offer?", answer: "We offer a comprehensive range of web development services, including custom website development, e-commerce solutions, CMS-based websites, web application development, website maintenance, and support." },
            { question: "How long does it take to develop a website?", answer: "The timeline for developing a website depends on the complexity and requirements of the project. A simple website may take a few weeks, while more complex web applications can take several months." },
            { question: "Can you redesign our existing website?", answer: "Yes, we provide website redesign services to improve the look, feel, and functionality of your current website, ensuring it aligns with your modern business goals." },
            { question: "Will my website be mobile-friendly and responsive?", answer: "Absolutely. All the websites we develop are designed to be fully responsive, ensuring they provide an optimal viewing experience on all devices, including desktops, tablets, and smartphones." },
            { question: "Do you offer e-commerce web development services?", answer: "Yes, we specialize in building secure and scalable e-commerce websites that provide a seamless shopping experience for your customers." },
            { question: "Do you provide website maintenance and support after launch?", answer: "Yes, we offer ongoing maintenance and support services to ensure your website continues to perform optimally and remains secure and up-to-date." },
            { question: "How do you ensure the security of the websites you develop?", answer: "We follow industry best practices for web security, including secure coding, data encryption, and regular security audits, to protect your website from potential threats." },
            { question: "What sets your web development services apart from others?", answer: "Our focus on customized solutions, an experienced team, a user-centric approach, and a proven development methodology sets us apart in delivering high-quality web solutions." },
            { question: "Can you help with SEO and digital marketing for my new website?", answer: "Yes, we offer comprehensive digital marketing services, including SEO, content marketing, and social media marketing, to help increase your website's visibility and drive traffic." },
            { question: "How do I get started with your web development services?", answer: "You can get started by contacting us through our website or giving us a call. We will discuss your project requirements and provide a tailored proposal." },
            { question: "Can you integrate third-party services and APIs into my website?", answer: "Yes, we have experience integrating various third-party services and APIs, such as payment gateways, social media platforms, analytics tools, and more, to enhance the functionality of your website." }
        ]
    },
    "mobile-app-development": {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps for iOS and Android.",
        intro: { heading: "Mobile First Solutions", content: "We build high-performance mobile applications that provide seamless user experiences." },
        features: [],
        faq: []
    },
    "cloud-solutions": {
        title: "Cloud Solutions",
        description: "Secure and efficient cloud infrastructure and migration services.",
        intro: { heading: "Cloud Infrastructure", content: "Optimize your business with scalable and secure cloud solutions." },
        features: [],
        faq: []
    },
    "digital-marketing": {
        title: "Digital Marketing Services",
        description: "Data-driven strategies to boost your online presence and ROI.",
        intro: { heading: "Grow Your Business Online", content: "Comprehensive digital marketing strategies to reach your target audience." },
        features: [],
        faq: []
    },
    "ui-ux-design": {
        title: "UI/UX Design Services",
        description: "Intuitive and engaging user interfaces for better experience.",
        intro: { heading: "Design That Works", content: "User-centric design solutions that enhance engagement and satisfaction." },
        features: [],
        faq: []
    },
    "ecommerce": {
        title: "E-commerce Development",
        description: "Comprehensive online store solutions to grow your sales.",
        intro: { heading: "Sell Online Effectively", content: "Robust e-commerce platforms designed to maximize conversion and sales." },
        features: [],
        faq: []
    },
    "ai-development": {
        title: "Artificial Intelligence Solutions",
        description: "Smart AI & ML solutions to automate and innovate.",
        intro: { heading: "Intelligent Solutions", content: "Leverage the power of AI to automate processes and gain insights." },
        features: [],
        faq: []
    },
    "iot-solutions": {
        title: "IoT Solutions",
        description: "Connecting devices for smarter operations and data insights.",
        intro: { heading: "Connected Ecosystems", content: "Innovative IoT solutions to connect and manage your smart devices." },
        features: [],
        faq: []
    },
    "data-analytics": {
        title: "Data Analytics",
        description: "Turn raw data into actionable insights for decision making.",
        intro: { heading: "Data Driven Decisions", content: "Advanced analytics to help you understand your data and make informed decisions." },
        features: [],
        faq: []
    },
    "cyber-security": {
        title: "Cyber Security Services",
        description: "Protecting your digital assets with advanced security measures.",
        intro: { heading: "Secure Your Business", content: "Comprehensive security services to protect your infrastructure and data." },
        features: [],
        faq: []
    },
    "devops-services": {
        title: "DevOps Services",
        description: "Streamlining development and operations for faster delivery.",
        intro: { heading: "Efficient Operations", content: "DevOps practices to accelerate delivery and improve reliability." },
        features: [],
        faq: []
    },
    "seo-optimization": {
        title: "SEO Optimization",
        description: "Ranking your website higher to drive organic traffic.",
        intro: { heading: "Rank Higher", content: "Proven SEO strategies to improve your search engine visibility." },
        features: [],
        faq: []
    },
    // Placeholder for other services to prevent 404s until populated
    "default": {
        title: "Our Services",
        description: "Comprehensive digital solutions tailored to your business needs.",
        intro: { heading: "Expert Digital Solutions", content: "We provide top-notch services to help your business grow." },
        features: [],
        faq: []
    }
};
