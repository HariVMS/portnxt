import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
    return (
        <section className="py-20 bg-[#111] text-white overflow-hidden relative">
            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="flex-1">
                        <div className="inline-block px-4 py-1 rounded-full bg-slate-800 text-primary text-xs font-bold tracking-wider mb-6">
                            WHO WE ARE
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Innovation to transform <br />
                            <span className="text-primary">your organization</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            We are a team of passionate developers, designers, and strategists committed to delivering high-quality software solutions. We believe in the power of technology to solve complex problems and drive business growth.
                        </p>

                        <div className="flex gap-4">
                            <Link
                                href="/about"
                                className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold transition-all"
                            >
                                LEARN MORE
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Visual */}
                    <div className="flex-1 relative flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Glow effects */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-3xl"></div>

                            <Image
                                src="/about-image.png"
                                alt="AI Robot Innovation"
                                width={500}
                                height={500}
                                className="relative z-10 w-full h-auto drop-shadow-[0_0_30px_rgba(0,123,253,0.3)]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
