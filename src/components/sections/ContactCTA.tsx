import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";

export default function ContactCTA() {
    return (
        <section
            id="contact"
            className="py-10 bg-slate-50 relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/img/Home/box-pattern.svg')" }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[1536px]">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
                    {/* Left Content - Image */}
                    <div className="mt-5 md:mt-0 flex justify-center md:justify-start">
                        <Image
                            src="/img/Home/contact-us.webp"
                            alt="Contact Us"
                            width={600}
                            height={600}
                            className="object-cover w-full"
                        />
                    </div>

                    {/* Right Content - Text */}
                    <div className="max-w-lg">
                        <h4 className="font-bold text-base lg:text-xl text-[#ED184F] mb-3">
                            Contact Us
                        </h4>
                        <h2 className="font-bold text-xl sm:text-3xl lg:text-3xl lg:mb-6 mb-3 text-slate-900 leading-tight">
                            Let's Talk About Your Business's Requirements
                        </h2>
                        <p className="text-black text-base lg:text-[16px] mb-8 leading-relaxed">
                            Please fill out this form, and one of our experts will connect with you shortly. Ensure that the information you provide is accurate so we can reach you and gather the necessary details to offer appropriate solutions.
                        </p>



                        <Link
                            href="/contact-us"
                            className="flex items-center gap-1 bg-primary text-white pl-6 pr-6 py-4 h-[60px] max-w-fit rounded-full text-[12px] font-bold  btn-hover-effect group border-2 border-white hover:border-primary shadow-lg"
                        >
                            <span className="text-[16px] uppercase">Get A Callback</span>
                            <span className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white ml-2">
                                <GoArrowUpRight
                                    size={18}
                                    className="group-hover:rotate-45 stroke-[0.5] text-primary transition-transform duration-500"
                                />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
