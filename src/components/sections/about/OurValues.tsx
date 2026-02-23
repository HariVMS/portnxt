import { Zap, Heart, Shield, Cpu, Users, Star } from "lucide-react";

const values = [
    {
        title: "Innovation-Driven Excellence",
        description: "Quality is our commitment. By utilizing industry best practices and cutting-edge tools, we strive to transform your digital innovation into flawless experiences.",
        icon: Zap,
        color: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        title: "Customer-Centric Approach",
        description: "We start with a thorough analysis of your unique requirements to gain a clear understanding of your objectives and target audience.",
        icon: Heart,
        color: "text-red-500",
        bg: "bg-red-50"
    },
    {
        title: "Integrity and Transparency",
        description: "Building client-provider relationships based on transparency consistently leads to the best results and long-term trust.",
        icon: Shield,
        color: "text-green-500",
        bg: "bg-green-50"
    },
    {
        title: "Empowerment Through Technology",
        description: "We provide essential software and services that empower entrepreneurs and professionals, making success more accessible.",
        icon: Cpu,
        color: "text-purple-500",
        bg: "bg-purple-50"
    },
    {
        title: "Collaboration and Teamwork",
        description: "Outstanding teamwork is central to our efforts. With each new project, we maintain our commitment as a team of innovators.",
        icon: Users,
        color: "text-orange-500",
        bg: "bg-orange-50"
    },
    {
        title: "Commitment to Lasting Impact",
        description: "Our mission is to empower businesses of all sizes by delivering exceptional digital solutions that drive growth and inspire transformation.",
        icon: Star,
        color: "text-yellow-500",
        bg: "bg-yellow-50"
    }
];

export default function OurValues() {
    return (
        <section className="py-10 pt-20 bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">OUR VALUES</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The foundation of everything we do</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        At Portnext Innovation, our decisions and processes are guided by an articulated set of values that influence everything from hiring to designing and developing solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, idx) => (
                        <div key={idx} className="p-10 rounded-3xl bg-white border border-slate-100 hover:border-transparent hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 group relative">
                            <div className={`w-14 h-14 ${value.bg} rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                <value.icon size={28} className={value.color} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm font-medium">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
