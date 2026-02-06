'use client'
import { GoArrowUpRight } from "react-icons/go";
import { Check, Loader2 } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <div className="bg-[#f7f7f7]  p-8 pt-9  border border-gray-200  rounded-[20px] h-full">
            <div className="mb-6">
                <h2 className="text-2xl md:text-[1.75rem] font-bold text-slate-900">
                    Collaborate with Makelink Innovation
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                            className="w-full px-5 py-3.5 rounded-sm bg-white border border-gray-200  focus:border-gray-200 outline-none transition-all placeholder:text-gray-400 font-light text-sm"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Enter your mobile number"
                            required
                            className="w-full px-5 py-3.5 rounded-sm bg-white border border-gray-200  focus:border-gray-200 outline-none transition-all placeholder:text-gray-400 font-light text-sm"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            required
                            className="w-full px-5 py-3.5 rounded-sm bg-white border border-gray-200  focus:border-gray-200 outline-none transition-all placeholder:text-gray-400 font-light text-sm"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your business name"
                            className="w-full px-5 py-3.5 rounded-sm bg-white border border-gray-200  focus:border-gray-200 outline-none transition-all placeholder:text-gray-400 font-light text-sm"
                        />
                    </div>
                </div>

                <div>
                    {/* Added extra height to textarea and removed corner rounding to match design inputs if needed, but rounding creates the "soft" look so keeping small rounding or none?. Design shows small rounded. */}
                    <textarea
                        rows={6}
                        placeholder="How can we help you"
                        className="w-full px-5 py-4 rounded-sm bg-white border border-gray-200  focus:border-gray-200 outline-none transition-all placeholder:text-gray-400 font-light text-sm resize-none"
                    ></textarea>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/brochure"
                        className="flex items-center gap-1 bg-primary text-white px-4 py-4 h-[68px] max-w-[208px]   rounded-full text-[12px] font-bold tracking-widest btn-hover-effect group border-2 border-white hover:border-primary shadow-lg"
                    >
                        <span className="text-[18px]">{isSubmitting ? "Sending..." : "Inquire Now"}</span>
                        <span className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-white">
                            {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <GoArrowUpRight
                                size={21}
                                className="group-hover:rotate-45  stroke-[0.5] text-primary  transition-transform duration-500"
                            />}

                        </span>
                    </Link>
                </div>

                {isSuccess && (
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg text-sm">
                        <Check size={16} />
                        <span>Message sent successfully! We'll be in touch soon.</span>
                    </div>
                )}
            </form>
        </div>
    );
}
