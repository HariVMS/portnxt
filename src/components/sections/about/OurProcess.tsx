import { Search, PenTool, Code2, ClipboardCheck } from "lucide-react";

const steps = [
    {
        title: "Requirement Gathering",
        description: "We start with a thorough analysis of your unique requirements to gain a clear understanding of your objectives and target audience.",
        icon: Search,
        number: "01"
    },
    {
        title: "Designing",
        description: "Our team translates your requirements into intuitive wireframes and prototypes, focusing on both functionality and aesthetics.",
        icon: PenTool,
        number: "02"
    },
    {
        title: "Development",
        description: "We select the most suitable technology stack to build your solution. Our skilled engineers code and integrate components.",
        icon: Code2,
        number: "03"
    },
    {
        title: "Testing",
        description: "Finally, we conduct comprehensive testing to identify and resolve any issues before launch, ensuring a flawless experience.",
        icon: ClipboardCheck,
        number: "04"
    }
];

export default function OurProcess() {
    return (
        <section className="py-10 pt-20 bg-gray-50">
            <div className="container 2xl:max-w-[1536px] w-full">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">OUR PROCESS</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How we bring your ideas to life</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Every solution we create and every digital innovation we develop is guided by a clear and structured process.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[48px] left-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center justify-center mb-8 border-4 border-slate-50 group-hover:border-primary transition-colors duration-500 relative">
                                <step.icon size={32} className="text-slate-400 group-hover:text-primary transition-colors duration-500" />
                                <span className="absolute -top-3 -right-3 w-10 h-10 bg-white text-slate-900 border-2 border-slate-100 rounded-full flex items-center justify-center font-bold text-xs shadow-sm group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {step.number}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed px-4">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
