import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";

export default function About() {
  return (
    <section className="py-12 px-5 sm:px-4 bg-[#192020] text-white overflow-hidden relative font-sans">
      <div className="container relative z-10 2xl:max-w-[1536px] px-0 ">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 2xl:grid 2xl:grid-cols-[600px_1fr] ">
          {/* Left Content - Visual */}
          <div className="relative flex justify-center items-center max-w-[600px] max-h-[500px]">
            <div className="relative w-full">
              <Image
                src="/img/Home/about.webp"
                alt="Digital Marketing and Development"
                width={1000}
                height={1000}
                className="relative z-10 w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="flex-1 !font-brandon sm:p-5  lg:max-w-[90%]">
            <h3 className="font-bold !font-brandon text-base lg:text-xl text-[#51BAE9] mb-2">
              About Us
            </h3>
            <h2 className="font-bold text-xl sm:text-3xl md:text-3xl mb-6 text-white">
              Building scalable, secure, and{" "}
              <span className="text-[#51BAE9] italic">
                performance-oriented
              </span>{" "}
              digital systems
            </h2>
            <div className="text-white !font-brandon  text-[15px] leading-relaxed space-y-4 mb-10 font-light">
              <p className="!font-brandon ">
                Port NxT Digital Solutions is a technology-driven consulting
                firm focused on building scalable, secure, and
                performance-oriented digital systems. We specialize in
                enterprise data platforms, AI-powered automation, and custom
                application development for global clients.
              </p>
              <p className="!font-brandon ">
                Our Core Expertise includes Microsoft Fabric & Power BI
                Solutions, Azure Data Engineering & Databricks, Power Platform,
                Custom Web & Mobile Application Development, AI Agents &
                Generative AI Solutions, and Cloud Infrastructure & DevOps.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact-us"
                className="flex items-center gap-1 bg-primary text-white pl-7 pr-7 py-4 h-[68px] max-w-[258px]   rounded-full text-[12px] font-bold tracking-widest btn-hover-effect group border-2 border-white hover:border-primary shadow-lg"
              >
                <span className="text-[16px]">LEARN MORE</span>
                <span className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-white">
                  {" "}
                  <GoArrowUpRight
                    size={21}
                    className="group-hover:rotate-45  stroke-[0.5] text-primary  transition-transform duration-500"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Robot - Bottom Right */}
      <div className="absolute -bottom-10 -right-10 2xl:right-0 2xl:bottom-0 z-0 opacity-80 pointer-events-none hidden lg:block">
        <Image
          src="/img/Home/about-robo.svg"
          alt="AI Robot"
          width={1000}
          height={1000}
          className="w-[150px] md:w-[250px] animate-float-slow"
        />
      </div>
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
