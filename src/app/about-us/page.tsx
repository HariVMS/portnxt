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
  title: "About Us | Portnext Innovation",
  description:
    "We’re the right tech-solutions partner for all your digital innovation & transformation needs.",
};

export default function AboutUs() {
  return (
    <main>
      {/* <PageHero
                title="Software Development & Digital Marketing Company"
                description="Portnext Innovation empowers enterprises and startups alike to stay ahead in an increasingly digital-driven market."
                breadcrumb="About Us"
            /> */}
      <section
        className="w-full mt-27 "
        style={{
          backgroundImage: "url('/img/company/about-us-banner.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container flex flex-col justify-center p-6  md:py-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center rounded-sm xl:max-w-4xl lg:text-left">
            <h1 className="text-white lg:text-4xl font-medium lg:leading-[1.3] text-xl">
              {" "}
              We’re the right tech-solutions partner for all your digital
              innovation &amp; transformation needs.{" "}
            </h1>
            <p className="text-white my-3 lg:my-4 text-base font-normal leading-[1.4] lg:text-lg">
              Makelink Innovation empowers enterprises and startups alike to
              stay ahead in an increasingly digital-driven market.{" "}
            </p>
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
        </div>
      </section>

      {/* Our Story Section */}
      {/* Reusing the robot image from Home/About or similar. Assuming extracted as 'about-main.webp' or reusing 'robot.webp' */}
      <section
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
          imageAlt="About Portnext Team"
          listItems={[
            "Software Development & Digital Marketing Specialists",
            "Creating top-notch software answers just for you",
            "Smart marketing strategies that bring you more customers",
          ]}
          ctaText="Discover More"
          ctaLink="/services/web-development"
        />
      </section>

      {/* Detailed Story Paragraphs */}
      <section className="py-10 bg-white -mt-10">
        <div className="container max-w-4xl text-slate-600 text-lg leading-relaxed space-y-6">
          <p>
            Welcome to Portnext Innovation Pvt. Ltd. We're a pleasant team of
            specialists who love helping businesses develop. Our enterprise
            focuses on the most important areas: Software Development and
            Digital Marketing. We accept it as true in creating an international
            effect, and our intention is to help our customers shine inside the
            Digital world.
          </p>
          <p>
            At Portnext, we create top-notch software answers just for you.
            Whether or not you need web development, a mobile app, or even
            special solutions like blockchain and IoT, we’ve given you covered.
            Our talented team works carefully with you to understand your
            desires and innovate your ideas into truth. We use the latest
            technology to ensure your software program is not just good, but the
            best.
          </p>
          <p>
            But that's not all! We also provide top-notch digital marketing
            services. In today’s busy world, it’s important to stand out. Our
            team knows just how to help your business get noticed. We create
            smart marketing strategies that bring you more customers and help
            your business grow.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-bg container max-w-[1536px]">
        <div className="mb-5">
          <div className="mx-auto flex font-brandon max-w-[60rem] flex-col items-center text-center">
            <h3 className="font-bold text-xl sm:text-3xl md:text-3xl mb-2 lg:mb-4">
              What sets Makelink Innovation apart from others{" "}
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
              alt="Makelink Innovation Mission"
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
              alt="Makelink Innovation Mission"
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
            <img
              className=""
              src="/img/company/value.svg"
              alt="Makelink Innovation Values"
              title="Our Values"
            />
            <div>
              <h3 className="font-semibold text-xl lg:text-2xl my-2">
                Our Values
              </h3>
              <p className="mt-1">
                At Makelink Innovation, our values are the foundation of
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
      <section className="py-10 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What sets Portnext Innovation apart
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

      <OurValues />

      <OurProcess />
      <Stats />
      <SuccessStories />
    </main>
  );
}
