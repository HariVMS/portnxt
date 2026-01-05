import { Stethoscope, Landmark, Home, ShoppingBag, GraduationCap, Truck, Factory, Plane } from "lucide-react";

const industries = [
    { icon: Stethoscope, title: "Healthcare", color: "text-blue-500" },
    { icon: Landmark, title: "Fin-Tech", color: "text-green-500" },
    { icon: Home, title: "Real Estate", color: "text-orange-500" },
    { icon: ShoppingBag, title: "Retail", color: "text-pink-500" },
    { icon: GraduationCap, title: "Education", color: "text-yellow-500" },
    { icon: Truck, title: "Logistics", color: "text-purple-500" },
    { icon: Factory, title: "Manufacturing", color: "text-teal-500" },
    { icon: Plane, title: "Travel", color: "text-cyan-500" },
];

export default function Industries() {
    return (
        <section className="py-20 bg-[#111] text-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Industry Focused Insights</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        We provide tailored technology solutions across various industries to drive innovation and growth.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {industries.map((ind, idx) => (
                        <div
                            key={idx}
                            className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all flex flex-col items-center justify-center text-center gap-4 group hover:bg-[#222]"
                        >
                            <ind.icon size={40} className={`${ind.color} group-hover:scale-110 transition-transform`} />
                            <h3 className="font-bold text-lg">{ind.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
