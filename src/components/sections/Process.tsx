import { ClipboardList, Search, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
    { id: "01", title: "Planning", desc: "Defining goals and project roadmap.", icon: ClipboardList },
    { id: "02", title: "Req Analysis", desc: "Understanding detailed requirements.", icon: Search },
    { id: "03", title: "Design", desc: "Creating UI/UX design prototypes.", icon: PenTool },
    { id: "04", title: "Development", desc: "Writing clean and scalable code.", icon: Code2 },
    { id: "05", title: "Testing", desc: "Ensuring bug-free performance.", icon: ShieldCheck },
    { id: "06", title: "Deployment", desc: "Launching your product to the world.", icon: Rocket },
];

export default function Process() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider text-sm">WORKFLOW</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 text-slate-900">Step by Step Process</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="text-8xl font-black text-primary">{step.id}</span>
                            </div>

                            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary">
                                <step.icon size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <span className="text-primary">{step.id}.</span> {step.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
