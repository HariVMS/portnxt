import { Lightbulb, Brain, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Creativity",
    desc: "We bring fresh perspectives and creative solutions to every project.",
  },
  {
    icon: Brain,
    title: "Innovative Thinking",
    desc: "Pushing boundaries with forward-thinking strategies and technologies.",
  },
  {
    icon: Award,
    title: "Quality Focus",
    desc: "Uncompromising commitment to high standards and excellence.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Respecting deadlines and ensuring timely project completion.",
  },
];

export default function Features() {
  return (
    <section className="py-12 relative bg-[#1a1a1a] text-white">
      <div className="container 2xl:max-w-[1536px] w-full ">
        <div className="flex  flex-col md:flex-row gap-16 items-center">
          {/* Left Text/Grid */}
          <div className="flex-1">
            <div className="mb-10">
              <span className="text-primary font-bold tracking-wider text-sm">
                WHY CHOOSE US
              </span>
              <h2 className="text-[18px] md:text-5xl font-bold mt-2">
                What Makes Us Different
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#222] p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Abstract or Robot */}
          <div className="hidden  md:block flex-1 h-fit">
            {/* Re-using the robot or another visual concept could go here. 
                    For now, a simple abstract structural block or we can leave it as a balanced text section 
                    if we don't wonder to overload with images. 
                    The reference uses a robot illustration. 
                */}
            <div className="absolute  top-[-15%] h-[500px] w-[500px] right-[-5%] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute  top-[44%] h-[200px] w-[200px] left-[25%] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-50"></div>
            {/* We could put a code snippet or simple graphic here */}
            <div className="relative z-10 border border-white/10 p-8 rounded-2xl bg-[#222]/50 backdrop-blur">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                100%
              </div>
              <div className="text-xl font-medium text-white mb-2">
                Client Satisfaction
              </div>
              <p className="text-slate-400 text-sm">
                Dedicated to exceeding expectations in every interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
