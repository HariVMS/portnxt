import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";

export default function Hero() {
  return (
    <section className="relative bg-[url('/hero-banner.svg')] pt-48 pb-22  2xl:max-h-[717px]  overflow-hidden font-sans">
      <div className="container 2xl:max-w-[1536px] relative z-10">
        <div className="grid md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_640px] md:flex-row items-center gap-8 md:gap-16  ">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left z-20">
            <h1 className="text-white lg:max-w-[600px] lg:text-4xl font-bold leading-[1.2] text-xl !font-brandon">
              {" "}
              Port NxT Digital Solutions
              <br className="hidden md:block" />
              <span className="text-2xl mt-2 block font-normal">
                Transforming Digital Ambitions into Scalable Technology
                Solutions
              </span>{" "}
            </h1>
            <p className="text-sm md:text-[15.5px] text-background p-10 pt-9 px-0 font-light ">
              Port NxT Digital Solutions is a full-service IT consulting and
              technology partner helping businesses accelerate digital
              transformation through Data Engineering, AI Solutions, Microsoft
              Fabric, Power Platform, Web & App Development, and Cloud
              Engineering.{" "}
            </p>
            {/* <div className="mb-10 ">
              <Image
                src="/img/Home/startup-india-ISO-logo.svg"
                alt="Portnext Innovation Digital Solutions ISO Certificates"
                width={270}
                height={80}
                className="max-w-full max-h-full"
                priority
              />
            </div> */}

            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact-us"
                className="flex items-center gap-1 bg-primary text-white px-8 pr-7 py-4 h-[68px] max-w-[208px]   rounded-full text-[12px] font-bold tracking-widest btn-hover-effect group border-2 border-white hover:border-primary shadow-lg"
              >
                <span className="text-[18px]">LET'S TALK</span>
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

          {/* Right Content - Visual */}
          <div className="flex-1 relative hidden md:block 2xl:min-w-[900px]">
            <div className="relative w-full  animate-float">
              {/* 3D Image */}
              <Image
                src="/service-hero/Portnxt/Home/home-page.png"
                alt="Portnext Innovation Digital Solutions"
                width={600}
                height={700}
                className=" object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
