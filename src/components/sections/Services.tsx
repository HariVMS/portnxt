import Link from "next/link";
// Keeping Lucide as fallback or for un-downloaded icons
import { Code, Smartphone, Cloud, BarChart, Monitor, ShoppingCart, Cpu, Network, Database, Layers, Shield, Globe } from "lucide-react";

// Map titles to likely filenames based on extraction logic
const services = [
    { icon: Code, title: "Web Development", filename: "web-development-services-icon.webp", desc: "Robust and scalable websites tailored to your business needs." },
    { icon: Smartphone, title: "App Development", filename: "mobile-app-development-services-icon.webp", desc: "Native and cross-platform mobile apps for iOS and Android." },
    { icon: Cloud, title: "Cloud Solutions", filename: "cloud-solutions-services-icon.webp", desc: "Secure and efficient cloud infrastructure and migration services." },
    { icon: BarChart, title: "Digital Marketing", filename: "digital-marketing-services-icon.webp", desc: "Data-driven strategies to boost your online presence and ROI." },
    { icon: Monitor, title: "UI/UX Design", filename: "ui-ux-design-services-icon.webp", desc: "Intuitive and engaging user interfaces for better experience." },
    { icon: ShoppingCart, title: "E-commerce", filename: "ecommerce-services-icon.webp", desc: "Comprehensive online store solutions to grow your sales." },
    { icon: Cpu, title: "Artificial Intelligence", filename: "ai-development-services-icon.webp", desc: "Smart AI & ML solutions to automate and innovate." },
    { icon: Network, title: "IoT Solutions", filename: "iot-solutions-services-icon.webp", desc: "Connecting devices for smarter operations and data insights." },
    { icon: Database, title: "Data Analytics", filename: "data-analytics-services-icon.webp", desc: "Turn raw data into actionable insights for decision making." },
    { icon: Shield, title: "Cyber Security", filename: "cyber-security-services-icon.webp", desc: "Protecting your digital assets with advanced security measures." },
    { icon: Layers, title: "DevOps Services", filename: "devops-services-icon.webp", desc: "Streamlining development and operations for faster delivery." },
    { icon: Globe, title: "SEO Optimization", filename: "seo-optimization-services-icon.webp", desc: "Ranking your website higher to drive organic traffic." },
];

export default function Services() {
    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="container">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary text-[11px] font-bold tracking-wider mb-3">
                        WHAT WE DO
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Our Services</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        We offer a wide range of specialized services to help your business specific goals and requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,123,253,0.1)] transition-all duration-300 group border border-slate-100 hover:border-blue-100 relative overflow-hidden"
                        >
                            {/* Background Decoration on Hover */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>

                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors relative z-10">
                                {/* Try to load real image, fallback to icon. For now using Icon as placeholder until we download all 12 icons */}
                                <service.icon size={32} className="text-primary group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{service.title}</h3>
                            <p className="text-slate-500 text-[15px] mb-6 leading-relaxed relative z-10">
                                {service.desc}
                            </p>

                            <Link href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center text-accent font-bold text-xs tracking-wider uppercase hover:tracking-widest transition-all relative z-10">
                                Read More <span className="text-lg ml-1 leading-none">+</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
