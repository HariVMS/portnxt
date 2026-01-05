import Link from "next/link";
import { ArrowRight, Code, Smartphone, Cloud, BarChart, Monitor, ShoppingCart } from "lucide-react";

// Simplified list for display (usually fetched or filtered)
const featuredServices = [
    { icon: Code, title: "Web Development", slug: "web-development", desc: "Robust and scalable websites tailored to your business." },
    { icon: Smartphone, title: "App Development", slug: "mobile-app-development", desc: "Native and cross-platform mobile apps." },
    { icon: Cloud, title: "Cloud Solutions", slug: "cloud", desc: "Secure and efficient cloud infrastructure." },
    { icon: BarChart, title: "Digital Marketing", slug: "digital-marketing", desc: "Data-driven strategies to boost your online presence." },
];

interface RelatedServicesProps {
    currentSlug?: string;
}

export default function RelatedServices({ currentSlug }: RelatedServicesProps) {
    // Filter out current service if slug matches
    const displayServices = currentSlug
        ? featuredServices.filter(s => s.slug !== currentSlug).slice(0, 3)
        : featuredServices.slice(0, 3);

    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-secondary-pink font-bold tracking-widest text-xs uppercase mb-2 block text-accent">EXPLORE MORE</span>
                        <h2 className="text-3xl font-bold text-slate-900">Related Services</h2>
                    </div>
                    <Link href="/services" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        View All Services <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {displayServices.map((service, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-500 mb-6">{service.desc}</p>
                            <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                                Read More <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
