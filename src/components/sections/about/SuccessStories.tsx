import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stories = [
    {
        title: "Transforming a Local Retailer into an E-commerce Leader",
        category: "E-Commerce",
        description: "Developed a customized e-commerce platform integrated with inventory management and digital payment solutions. Online sales exceeded expectations within six months.",
        image: "/img/Home/company/background.svg" // Using provided images as placeholders
    },
    {
        title: "Scaling a HealthTech Startup with Custom Software",
        category: "Healthcare",
        description: "Delivered a secure web and mobile application that included real-time video consultations and electronic health records. Scaled to 10k+ users in a year.",
        image: "/img/Home/company/about-us-banner.svg"
    },
    {
        title: "Driving 4X Growth through Digital Marketing",
        category: "Marketing",
        description: "Redesigned website and implemented comprehensive SEO and paid ads strategy. Client saw monthly inquiries quadruple within six months.",
        image: "/img/Home/company/background.svg"
    }
];

export default function SuccessStories() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">SUCCESS STORIES</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Impact we've delivered</h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stories.map((story, idx) => (
                        <div key={idx} className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-500 border border-slate-100">
                            <div className="relative h-[240px] overflow-hidden">
                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
                                        {story.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-snug">
                                    {story.title}
                                </h3>
                                <p className="text-slate-500 mb-6 text-sm leading-relaxed flex-grow">
                                    {story.description}
                                </p>
                                <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase group-hover:gap-3 transition-all mt-auto p-0">
                                    Read Case Study <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
