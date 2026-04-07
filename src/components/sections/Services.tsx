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
  Handshake,
  Megaphone,
  Settings,
} from "lucide-react";
import Image from "next/image";

// Map titles to likely filenames based on extraction logic
const services = [
  {
    id: "salesforce-consulting",
    icon: Handshake,
    title: "Salesforce Consulting",
    desc: "Scalable CRM ecosystems that improve sales performance.",
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Data-driven strategies that generate measurable business growth.",
  },
  {
    id: "microsoft-dynamics-365",
    icon: Settings,
    title: "Microsoft Dynamics 365",
    desc: "Complete implementation services across CRM and ERP.",
  },
  {
    id: "oracle-erp-cloud",
    icon: Database,
    title: "Oracle ERP & Cloud",
    desc: "Streamline finance, operations, procurement, and supply chain management.",
  },
  {
    id: "web-ecommerce-application",
    icon: Code,
    title: "Web & E-Commerce",
    desc: "Scalable, secure, and high-performance web and e-commerce applications.",
  },
  {
    id: "data-visualization-fabric",
    icon: BarChart,
    title: "Microsoft Fabric",
    desc: "Data visualization platforms converting raw data into actionable intelligence.",
  },
  {
    id: "data-engineering-azure-informatica",
    icon: Cloud,
    title: "Data Engineering",
    desc: "Scalable, secure, and high-performance data ecosystems.",
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "High-performance, secure mobile applications for iOS and Android.",
  },
  {
    id: "custom-ai-solutions",
    icon: Cpu,
    title: "Custom AI Solutions",
    desc: "Intelligent systems that automate decision-making and operational efficiency.",
  },
  {
    id: "servicenow-implementation",
    icon: Globe,
    title: "ServiceNow Implementation",
    desc: "Streamline IT operations, automate workflows, and enhance service delivery.",
  },
  {
    id: "jira-implementation",
    icon: Network,
    title: "Jira Implementation",
    desc: "Agile delivery, project visibility, and CI/CDF collaboration natively.",
  },
  {
    id: "sap-implementation",
    icon: Layers,
    title: "SAP Implementation",
    desc: "Modernize business processes mapping against global architecture standards.",
  },
];

export default function Services() {
  return (
    <section className="py-12 bg-[#F8FAFC]  ">
      <div className="container 2xl:max-w-[1536px] w-full">
        <div className="text-center mb-12">
          <div className="font-bold text-base lg:text-xl text-[#ED184F] ">
            What We Do
          </div>
          <h2 className="font-bold text-xl sm:text-3xl lg:text-3xl lg:mb-3">
            Our Services{" "}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white   items-center justify-center p-6 rounded-[24px] shadow-sm hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 group border border-transparent hover:border-slate-100 relative overflow-hidden h-full flex flex-col gap-2"
            >
              <div className="max-w-16 max-h-16 bg-transparent rounded-2xl flex items-center justify-center  transition-colors relative z-10 shrink-0">
                {/* Try to load real image, fallback to icon. For now using Icon as placeholder until we download all 12 icons */}
                {"type" in service &&
                service.type === "img" &&
                "path" in service ? (
                  <Image
                    src={service.path as string}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <service.icon
                    size={32}
                    className="text-primary  transition-colors"
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
                  href={`/services/${service.id}`}
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
