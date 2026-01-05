import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function About() {
    return (
        <section className="py-24 bg-dark-bg text-white overflow-hidden relative font-sans">
            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                    {/* Left Content */}
                    <div className="flex-1">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#1F1F1F] text-primary text-[11px] font-[800] tracking-[0.15em] mb-6 border border-white/5">
                            WHO WE ARE
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Innovation to transform <br />
                            <span className="text-primary">your organization</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
                            We are a team of passionate developers, designers, and strategists committed to delivering high-quality software solutions. We believe in the power of technology to solve complex problems and drive business growth.
                        </p>

                        <div className="flex gap-4">
                            <Link
                                href="/about-us"
                                className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-xs tracking-widest transition-all uppercase shadow-lg shadow-blue-900/20"
                            >
                                Learn More
                                <ArrowUpRight size={16} strokeWidth={3} />
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Visual */}
                    <div className="flex-1 relative flex justify-center items-center">
                        <div className="relative w-full max-w-[500px]">
                            {/* Glow effects */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-500/10 rounded-full blur-[100px]"></div>

                            <Image
                                src="/img/Home/about-robo.svg"
                                alt="AI Robot Innovation"
                                width={500}
                                height={500}
                                className="relative z-10 w-full h-auto animate-float-slow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
