import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#97a685] overflow-hidden">
            {/* Background Overlay or Elements could go here */}

            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#111] leading-tight mb-6">
                            MakeLink Innovation <br />
                            <span className="text-white">Transforming Ideas</span> <br />
                            into Reality
                        </h1>
                        <p className="text-lg md:text-xl text-slate-800 mb-8 max-w-xl mx-auto md:mx-0 font-medium">
                            We empower businesses to seize their present and shape their future through cutting-edge software solutions and digital marketing strategies.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1"
                            >
                                LET'S TALK
                                <ArrowUpRight size={20} />
                            </Link>

                            <div className="flex items-center gap-4">
                                {/* Certification Badges Placeholders via text/style */}
                                <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-slate-700 border border-white/50">
                                    StartupIndia
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-slate-700 border border-white/50">
                                    ISO 9001:2015
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Visual */}
                    <div className="flex-1 relative w-full max-w-lg md:max-w-none">
                        {/* Floating Elements (abstract decoration) */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute bottom-10 -left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>

                        <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                            <Image
                                src="/hero-image.png"
                                alt="Makelink Innovation Digital Solutions"
                                width={600}
                                height={600}
                                className="w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
