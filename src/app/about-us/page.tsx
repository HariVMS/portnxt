import ContentBlock from "@/components/ui/ContentBlock";
import Stats from "@/components/sections/Stats";
import {
  CheckCircle2,
  Lightbulb,
  Users,
  Target,
  Rocket,
  Search,
  Contact,
  Handshake,
} from "lucide-react";
import OurValues from "@/components/sections/about/OurValues";
import OurProcess from "@/components/sections/about/OurProcess";
import SuccessStories from "@/components/sections/about/SuccessStories";
import EsteemedClients from "@/components/sections/about/EsteemedClients";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { IntegrityIcon } from "@/Icons/company";
import { LuBadgeCheck } from "react-icons/lu";

export const metadata = {
  title: "About Us | Port NxT Digital Solutions",
  description:
    "Port NxT Digital Solutions is a technology-driven consulting firm focused on building scalable, secure, and performance-oriented digital systems.",
};

export default function AboutUs() {
  return (
    <main>
      <section
        className="w-full mt-22.5 "
        style={{
          backgroundImage: "url('/img/company/about-us-banner.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container flex flex-col justify-center p-6  md:py-12  lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center  rounded-sm xl:max-w-4xl lg:text-left">
            <h1 className="text-white lg:text-4xl font-medium lg:leading-[1.3] lg:pt-3 text-xl">
              {" "}
              Building scalable, secure, and performance-oriented digital
              systems.{" "}
            </h1>
            <p className="text-white my-3 lg:my-4 text-base font-normal leading-[1.4] lg:text-lg">
              Port NxT Digital Solutions is a technology-driven consulting firm
              focused on enterprise data platforms, AI-powered automation, and
              custom application development for global clients.{" "}
            </p>
            <div className="hidden md:flex items-center pb-4 gap-4">
              <Link
                href="/contact-us"
                className="flex items-center gap-1 bg-primary text-white px-8 pr-7 py-2 max-h-[68px] max-w-[208px]   rounded-full text-[12px] font-bold tracking-widest btn-hover-effect group border-2 border-white hover:border-primary shadow-lg"
              >
                <span className="text-[16px]">LET'S TALK</span>
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
      </section>

      {/* Our Story Section */}
      {/* Reusing the robot image from Home/About or similar. Assuming extracted as 'about-main.webp' or reusing 'robot.webp' */}
      <section
        className="w-full"
        style={{
          backgroundImage: "url('/img/company/background.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ContentBlock
          subtitle="WHO WE ARE"
          title="We are a pleasant team of specialists who love helping businesses develop."
          description=""
          imageSrc="/img/company/about.svg" // Need to verify if this exists, else use hero_robot
          imageAlt="About Port NxT Team"
          listItems={[
            "Enterprise Data Platforms & Architecture",
            "AI-powered Automation & Custom Applications",
            "Cloud Engineering & Infrastructure Modernization",
          ]}
          ctaText="Discover More"
          ctaLink="/services/salesforce-consulting"
        />
      </section>

      {/* Detailed Story Paragraphs */}
      <section className="py-10 bg-white w-full -mt-10">
        <div className="container max-w-7xl text-slate-600 text-lg leading-relaxed space-y-6">
          <p>
            Welcome to Port NxT Digital Solutions. We are a technology-driven
            consulting firm focused on building scalable, secure, and
            performance-oriented digital systems. We specialize in enterprise
            data platforms, AI-powered automation, and custom application
            development for global clients.
          </p>
          <p>
            Our Core Expertise includes Microsoft Fabric & Power BI Solutions,
            Azure Data Engineering & Databricks, Power Platform, Custom Web &
            Mobile Application Development, AI Agents & Generative AI Solutions,
            and Cloud Infrastructure & DevOps.
          </p>
          <p>
            Our talented team works carefully with you to understand your
            desires and innovate your ideas into reality. We use the latest
            technology to ensure your projects are delivered with the highest
            quality, creating an impact that stands out in today's digital
            landscape.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-bg container max-w-[1536px]">
        <div className="mb-5">
          <div className="mx-auto flex font-brandon max-w-[60rem] flex-col items-center text-center">
            <h3 className="font-bold text-xl sm:text-3xl md:text-3xl mb-2 lg:mb-4">
              What sets Port NxT Digital Solutions apart from others{" "}
            </h3>
            <p className="text-[14px] font-brandon! lg:text-[18px] leading-[1.4]">
              {" "}
              Quality is our commitment. By utilizing industry best practices
              and cutting-edge tools, we strive to transform your digital
              innovation into flawless experiences.
            </p>
          </div>
        </div>
        <div className="lg:mt-10 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:px-6 lg:px-8">
          <div className="bg-[#FFC0D9] lg:p-10 p-4 rounded-3xl lg:rounded-[40px] duration-500 transition">
            <Image
              width={50}
              height={50}
              src="/img/company/vision.svg"
              alt="Port NxT Mission"
              title="Our Vision"
            ></Image>
            <div>
              <h3 className="font-semibold text-xl lg:text-2xl my-2">
                {" "}
                Our Vision
              </h3>
              <p className="mt-1">
                {" "}
                We visualize a dynamic world where businesses flourish and
                individuals achieve their dreams through our innovative digital
                solutions. We provide essential software and services that
                empower entrepreneurs and professionals, making success more
                accessible and helping them realize their full potential.
              </p>
            </div>
          </div>
          <div className="bg-[#D0BFFF] lg:p-10 p-4 rounded-3xl lg:rounded-[40px] duration-500 transition">
            <Image
              width={50}
              height={50}
              className=""
              src="/img/company/mission.svg"
              alt="Port NxT Mission"
              title="Our Mission"
            ></Image>
            <div>
              <h3 className="font-semibold text-xl lg:text-2xl my-2">
                {" "}
                Our Mission
              </h3>
              <p className="mt-1">
                {" "}
                Our mission is to empower businesses of all sizes by delivering
                exceptional digital solutions that drive growth, streamline
                operations, and enhance customer experiences. We are committed
                to providing innovative strategies and solutions that inspire
                transformation and promote lasting success in an ever-evolving
                digital landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mt-8 mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:px-6 lg:px-8">
          <div className="bg-[#B5F1CC] lg:p-10 p-4 rounded-3xl lg:rounded-[40px] duration-500 transition">
            <Image
              width={50}
              height={50}
              src="/img/company/value.svg"
              alt="Port NxT Values"
              title="Our Values"
            />
            <div>
              <h3 className="font-semibold text-xl lg:text-2xl my-2">
                Our Values
              </h3>
              <p className="mt-1">
                At Port NxT Digital Solutions, our values are the foundation of
                everything we do. They guide our mission to provide innovative
                digital solutions while fostering trust, promoting innovation,
                and surpassing client expectations. Our core values include:
              </p>
            </div>
            <div className="lg:mt-5 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex gap-1 items-center border-dashed border rounded-full border-black px-3 py-2">
                <div className="flex gap-2 items-center">
                  <Search />
                  <h5 className="text-base">Innovation-Driven Excellence</h5>
                </div>
              </div>
              <div className="flex gap-1 items-center border-dashed border rounded-full border-black px-3 py-2">
                <div className="flex gap-2 items-center">
                  <Contact />
                  <h5 className="text-base">Customer-Centric Approach</h5>
                </div>
              </div>
              <div className="flex gap-1 items-center border-dashed border rounded-full border-black px-3 py-2">
                <div className="flex gap-2 items-center">
                  <IntegrityIcon />
                  <h5 className="text-base">Integrity and Transparency</h5>
                </div>
              </div>
              <div className="flex gap-1 items-center border-dashed border rounded-full border-black px-3 py-2">
                <div className="flex gap-2 items-center">
                  <Lightbulb />
                  <h5 className="text-base">Empowerment Through Technology</h5>
                </div>
              </div>
              <div className="flex gap-1 items-center border-dashed border rounded-full border-black px-3 py-2">
                <div className="flex gap-2 items-center">
                  <Handshake />
                  <h5 className="text-base">Collaboration and Teamwork</h5>
                </div>
              </div>
              <div className="flex gap-1 items-center border-dashed border rounded-full border-black px-3 py-2">
                <div className="flex gap-2 items-center">
                  <LuBadgeCheck size={20} />

                  <h5 className="text-base">Commitment to Lasting Impact</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 pt-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What sets Port NxT Digital Solutions apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality is our commitment",
                icon: CheckCircle2,
                desc: "By utilizing industry best practices and cutting-edge tools, we strive to transform your digital innovation into flawless experiences.",
                color: "text-blue-500",
                bg: "bg-blue-50",
              },
              {
                title: "Innovation at Heart",
                icon: Lightbulb,
                desc: "We believe in staying ahead of the curve. Innovation is at the core of everything we do.",
                color: "text-yellow-500",
                bg: "bg-yellow-50",
              },
              {
                title: "Collaboration",
                icon: Users,
                desc: "We work closely with you. Collaboration and teamwork are essential for us to understand your goals.",
                color: "text-green-500",
                bg: "bg-green-50",
              },
              {
                title: "Lasting Impact",
                icon: Rocket,
                desc: "Our relationship doesn't end at deployment. We are dedicated to providing ongoing support.",
                color: "text-purple-500",
                bg: "bg-purple-50",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-6`}
                >
                  <item.icon size={28} className={item.color} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="client" className="py-8 lg:py-16 bg-[#192020]">
        <div className="container mx-auto max-w-[1536px]">
          <div className="mx-auto flex lg:max-w-[65rem] flex-col items-center text-center text-white">
            <h3 className="font-bold text-xl sm:text-3xl lg:text-3xl mb-4">
              Core Value
            </h3>
            <p>
              At Port NxT Digital Solutions, our decisions and processes are
              guided by an articulated set of values that influence everything
              from hiring to designing and developing solutions.{" "}
            </p>
            <p className="text-[#FFD8C0]">
              Our values encompass all the essential elements of innovation and
              excellence.{" "}
            </p>
            <p>
              {" "}
              They encourage us to learn from every project, collaborate
              seamlessly with a strong team spirit, and maintain transparency
              and accountability. We believe this is the only approach to
              achieving true excellence.
            </p>
          </div>
          <div className="bg-[#252B2B] border-[#3B4040] border rounded-[40px] lg:mt-10 mt-4 lg:p-8 p-3">
            <div className="bg-[#FFD8C0] rounded-[30px] p-4">
              <div className="lg:p-14 p-2">
                <dl className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-8">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <img
                          className=""
                          src="/img/about/continue.svg"
                          alt="Continuous Learning icon"
                          title="Continuous Learning"
                        />
                      </div>
                      <h5 className="font-heading ml-16 text-lg lg:text-xl leading-6 font-semibold ">
                        Continuous Learning
                      </h5>
                    </dt>
                    <p className="mt-2 ml-16 text-base">
                      {" "}
                      In an ever-evolving technological landscape, continuous
                      learning allows us to stay ahead.{" "}
                    </p>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <img
                          className=""
                          src="/img/about/accountably.svg"
                          alt="Accountability icon"
                          title="Accountability"
                        />
                      </div>
                      <h5 className="font-heading ml-16 text-lg lg:text-xl leading-6 font-semibold">
                        Accountability{" "}
                      </h5>
                    </dt>
                    <p className="mt-2 ml-16 text-base">
                      {" "}
                      Maintaining unwavering accountability is essential for
                      thriving in the competitive tech solutions market.{" "}
                    </p>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <img
                          className=""
                          src="/img/about/transparancy.svg"
                          alt="Transparency icon"
                          title="Transparency"
                        />
                      </div>
                      <h5 className="font-heading ml-16 text-lg lg:text-xl leading-6 font-semibold">
                        Transparency{" "}
                      </h5>
                    </dt>
                    <p className="mt-2 ml-16 text-base">
                      Building client-provider relationships based on
                      transparency consistently leads to the best results.{" "}
                    </p>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <img
                          className=""
                          src="/img/about/excellence.svg"
                          alt="Excellence icon"
                          title="Excellence"
                        />
                      </div>
                      <h5 className="font-heading ml-16 text-lg lg:text-xl leading-6 font-semibold">
                        Excellence{" "}
                      </h5>
                    </dt>
                    <p className="mt-2 ml-16 text-base">
                      {" "}
                      Innovation and excellence constantly go hand in hand. We
                      are committed to going the extra mile to ensure
                      exceptional service quality.{" "}
                    </p>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <img
                          className=""
                          src="/img/about/team.svg"
                          alt="Team Work icon"
                          title="Team Work"
                        />
                      </div>
                      <h5 className="font-heading ml-16 text-lg lg:text-xl leading-6 font-semibold">
                        Team Work{" "}
                      </h5>
                    </dt>
                    <p className="mt-2 ml-16 text-base">
                      {" "}
                      Outstanding teamwork is central to our efforts. With each
                      new project, we maintain our commitment as a team of
                      innovators.{" "}
                    </p>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurValues />

      <OurProcess />
      <Stats />
      <SuccessStories />
    </main>
  );
}
