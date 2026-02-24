import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    title: "Global Manufacturing Firm",
    category: "Data Engineering",
    description:
      "Migrated 5TB of legacy on-premise data into Azure Cloud Data Factory, deploying Power BI dashboards that increased supply chain visibility by 40%.",
    image: "/img/company/about-us-banner.svg", // Using provided images as placeholders
  },
  {
    title: "Healthcare Provider",
    category: "AI Solutions",
    description:
      "Built a custom generative AI document processor capable of parsing patient intake forms with 99% accuracy, cutting administrative overhead by 25%.",
    image: "/img/company/about-us-banner.svg", // Using provided images as placeholders
  },
  {
    title: "E-Commerce Retailer",
    category: "Salesforce CRM",
    description:
      "Implemented customized Salesforce Service Cloud and integrated it tightly with their Magento storefront, boosting customer retention by 15%.",
    image: "/img/company/about.svg",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
              SUCCESS STORIES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Impact we've delivered
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-500 border border-slate-100"
            >
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-snug">
                  {story.title}
                </h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed flex-grow">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
