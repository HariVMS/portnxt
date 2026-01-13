import Link from "next/link";
// Keeping Lucide as fallback or for un-downloaded icons
import {
  Code,
  Smartphone,
  Cloud,
  BarChart,
  Monitor,
  ShoppingCart,
  Cpu,
  Network,
  Database,
  Layers,
  Shield,
  Globe,
  Plus,
} from "lucide-react";
import Image from "next/image";

// Map titles to likely filenames based on extraction logic
const services = [
  {
    icon: Code,
    type: "img",
    path: "/img/services/web-development-services-icon.webp",
    title: "Web Development",
    filename: "web-development-services-icon.webp",
    desc: "Robust and scalable websites tailored to your business needs.",
  },
  {
    icon: Smartphone,
    type: "img",
    path: "/img/services/web-development-services-icon.webp",
    title: "App Development",
    filename: "mobile-app-development-services-icon.webp",
    desc: "Native and cross-platform mobile apps for iOS and Android.",
  },
  {
    icon: Cloud,
    type: "img",
    path: "/img/services/web-development-services-icon.webp",
    title: "Cloud Solutions",
    filename: "cloud-solutions-services-icon.webp",
    desc: "Secure and efficient cloud infrastructure and migration services.",
  },
  {
    icon: BarChart,
    type: "img",
    path: "/img/services/web-development-services-icon.webp",
    title: "Digital Marketing",
    filename: "digital-marketing-services-icon.webp",
    desc: "Data-driven strategies to boost your online presence and ROI.",
  },
  {
    icon: Monitor,
    type: "img",
    path: "/img/services/web-development-services-icon.webp",
    title: "UI/UX Design",
    filename: "ui-ux-design-services-icon.webp",
    desc: "Intuitive and engaging user interfaces for better experience.",
  },
  {
    icon: ShoppingCart,
    type: "img",
    path: "/img/services/web-development-services-icon.webp",
    title: "E-commerce",
    filename: "ecommerce-services-icon.webp",
    desc: "Comprehensive online store solutions to grow your sales.",
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    filename: "ai-development-services-icon.webp",
    desc: "Smart AI & ML solutions to automate and innovate.",
  },
  {
    icon: Network,
    title: "IoT Solutions",
    filename: "iot-solutions-services-icon.webp",
    desc: "Connecting devices for smarter operations and data insights.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    filename: "data-analytics-services-icon.webp",
    desc: "Turn raw data into actionable insights for decision making.",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    filename: "cyber-security-services-icon.webp",
    desc: "Protecting your digital assets with advanced security measures.",
  },
  {
    icon: Layers,
    title: "DevOps Services",
    filename: "devops-services-icon.webp",
    desc: "Streamlining development and operations for faster delivery.",
  },
  {
    icon: Globe,
    title: "SEO Optimization",
    filename: "seo-optimization-services-icon.webp",
    desc: "Ranking your website higher to drive organic traffic.",
  },
];

export default function Services() {
  return (
    <section className="py-12 bg-[#F8FAFC]  ">
      <div className="container 2xl:max-w-[1536px] w-full">
        <div className="text-center mb-16">
          <div className="font-bold text-base lg:text-xl text-[#ED184F] ">
            What We Do
          </div>
          <h2 className="font-bold text-xl sm:text-3xl lg:text-3xl lg:mb-3">
            Our Services{" "}
          </h2>
          <p className="text-slate-500  mx-auto text-lg">
            We offer a wide range of specialized services to help your business
            specific goals and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white   items-center justify-center p-6 rounded-[24px] shadow-sm hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 group border border-transparent hover:border-slate-100 relative overflow-hidden h-full flex flex-col gap-2"
            >
              <div className="max-w-16 max-h-16 bg-transparent rounded-2xl flex items-center justify-center  transition-colors relative z-10 shrink-0">
                {/* Try to load real image, fallback to icon. For now using Icon as placeholder until we download all 12 icons */}
                {service.type === "img" ? (
                  <Image
                    src={service.path ?? ""}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="object-cover w-full w-full"
                  />
                ) : (
                  <service.icon
                    size={32}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                )}
              </div>
              <div className="space-y-2 text-center mt-1">
                <h3 className="font-extrabold text-[17px] lg:text-lg !font-brandon">
                  {service.title}
                </h3>
                <p className="text-[#22313f] text-[15px]  !font-brandon  leading-relaxed relative z-10 flex-grow">
                  {service.desc}
                </p>

                <Link
                  href={`/services/${service.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  className="inline-flex gap-[1px] items-center text-accent font-bold text-xs tracking-wider  transition-all relative z-10 mt-auto"
                >
                  Read More
                  <span className="text-lg leading-none">
                    <Plus className="size-3 text-red-600" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
