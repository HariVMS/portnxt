import Link from "next/link";
import { Code, Smartphone, Cloud, BarChart, Monitor, ShoppingCart, Cpu, Network, Database, Layers, Shield, Globe } from "lucide-react";

const services = [
    { icon: Code, title: "Web Development", desc: "Robust and scalable websites tailored to your business needs." },
    { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile apps for iOS and Android." },
    { icon: Cloud, title: "Cloud Solutions", desc: "Secure and efficient cloud infrastructure and migration services." },
    { icon: BarChart, title: "Digital Marketing", desc: "Data-driven strategies to boost your online presence and ROI." },
    { icon: Monitor, title: "UI/UX Design", desc: "Intuitive and engaging user interfaces for better experience." },
    { icon: ShoppingCart, title: "E-commerce", desc: "Comprehensive online store solutions to grow your sales." },
    { icon: Cpu, title: "Artificial Intelligence", desc: "Smart AI & ML solutions to automate and innovate." },
    { icon: Network, title: "IoT Solutions", desc: "Connecting devices for smarter operations and data insights." },
    { icon: Database, title: "Data Analytics", desc: "Turn raw data into actionable insights for decision making." },
    { icon: Shield, title: "Cyber Security", desc: "Protecting your digital assets with advanced security measures." },
    { icon: Layers, title: "DevOps Services", desc: "Streamlining development and operations for faster delivery." },
    { icon: Globe, title: "SEO Optimization", desc: "Ranking your website higher to drive organic traffic." },
];

export default function Services() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We offer a wide range of specialized services to help your business specific goals and requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <service.icon size={28} className="text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                {service.desc}
                            </p>
                            <Link href="/services" className="inline-flex items-center text-accent font-semibold text-sm hover:tracking-wide transition-all">
                                Read More +
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
