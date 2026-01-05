import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-hero-bg overflow-hidden font-sans">
            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left z-20">
                        <h1 className="text-4xl md:text-[64px] font-[800] text-[#111] leading-[1.1] mb-6 tracking-tight">
                            MakeLink Innovation <br />
                            <span className="text-white">Transforming Ideas</span> <br />
                            into Reality
                        </h1>
                        <p className="text-lg md:text-[20px] text-slate-800 mb-10 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed">
                            We empower businesses to seize their present and shape their future through cutting-edge software solutions and digital marketing strategies.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                            <Link
                                href="/contact-us"
                                className="flex items-center gap-2 bg-primary text-white px-9 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 uppercase"
                            >
                                Let's Talk
                                <ArrowUpRight size={18} strokeWidth={3} />
                            </Link>

                            <div className="flex items-center gap-3">
                                <div className="bg-white/40 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold text-[#111] border border-white/30 shadow-sm">
                                    StartupIndia
                                </div>
                                <div className="bg-white/40 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold text-[#111] border border-white/30 shadow-sm">
                                    ISO 9001:2015
                                </div>
                                <div className="bg-white/40 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold text-[#111] border border-white/30 shadow-sm">
                                    ISO 27001:2022
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Visual */}
                    <div className="flex-1 relative w-full flex justify-center md:justify-end">
                        <div className="relative w-full max-w-[600px] animate-float">
                            {/* 3D Image */}
                            <Image
                                src="/img/Home/hero-img.webp"
                                alt="Makelink Innovation Digital Solutions"
                                width={700}
                                height={700}
                                className="w-full h-auto object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
