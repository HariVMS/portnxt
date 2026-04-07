import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";

const industries = [
  {
    title: "Ed - Tech",
    icon: "/img/Home/industry-focused/edtech-icon.webp",
    bg: "bg-[#FFC0D9]", // Pink
  },
  {
    title: "Logistics",
    icon: "/img/Home/industry-focused/logistics-icon.webp",
    bg: "bg-[#D0BFFF]", // Muted Purple/Brown tone - adjusting to match "Logistics" usually being a bit more neutral or purple. Screenshot looked purple. Let's try a light purple.
    // customBg: "bg-[#C5CAE9]" // Light Indigo/Purple
  },
  {
    title: "Real - Estate",
    icon: "/img/Home/industry-focused/realestate-icon.webp",
    bg: "bg-[#FFD8C0]", // Light Orange
  },
  {
    title: "Fin - Tech",
    icon: "/img/Home/industry-focused/fintech-icon.webp",
    bg: "bg-[#B5F1CC]", // Light Green
  },
  {
    title: "Healthcare",
    icon: "/img/Home/industry-focused/healthcare-icon.webp",
    bg: "bg-[#9FE9F6]", // Light Cyan
  },
  {
    title: "Retails",
    icon: "/img/Home/industry-focused/retails-icon.webp",
    bg: "bg-[#E3FFBF]", // Light Yellow
  },
  {
    title: "Manufacturing",
    icon: "/img/Home/industry-focused/manufacturing-icon.webp",
    bg: "bg-[#C0E0FF]", // Light Blue
  },
  {
    title: "Travel",
    icon: "/img/Home/industry-focused/travel-agency.webp",
    bg: "bg-[#eaf1b5]", // Lime/Yellowish
  },
];

export default function Industries() {
  return (
    <section className="py-12 bg-[#212529] text-white font-sans">
      <div className="container 2xl:max-w-[1536px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 text-white">
            Industry-focused Insights
          </h2>
          <p className="text-slate-300 max-w-4xl mx-auto text-sm leading-relaxed">
            We take pride in building tech solutions that redefine the ways
            businesses operate and foster innovations across industries. By
            combining trending technologies with human ingenuity, we unlock
            competitive advantages for your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className={`h-[180px] rounded-[20px] flex flex-col items-center justify-center gap-4 text-black  hover:scale-110 transition-all duration-500 ${ind.bg}`}
            >
              <div className="w-20 h-20 relative flex items-center justify-center ">
                <Image
                  src={ind.icon}
                  alt={ind.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain "
                />
              </div>
              {/* Note: brightness-0 on the image might make it all black. The screenshot shows black icons. 
                                 If the webp images are already black, we don't need brightness-0. 
                                 If they are colored, we might need it. I'll assume they are icons. 
                                 Let's actually NOT use brightness-0 first, as provided icons might be styled. 
                                 Actually screenshot shows PURE BLACK icons. I'll add brightness-0 to force it if they aren't black. 
                             */}
              <h3 className="font-bold text-lg">{ind.title}</h3>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-[#252B2B] border-[#3B4040] border rounded-[40px] p-12 text-center  relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 max-w-3xl leading-tight">
              Give your digital product concept a next-gen design touch with our
              Excellent services!
            </h3>
            <p className="text-white mb-8 max-w-2xl text-sm">
              A user-friendly interface can be the key to unlocking your
              product's potential. <br />
              Our services can be a game-changer for your business.
            </p>

            <Link
              href="/contact-us"
              className="flex items-center gap-1 bg-primary text-white pl-7 pr-7 py-4 h-[58px] rounded-full text-[12px] font-bold tracking-widest btn-hover-effect group border-2 border-white hover:border-primary shadow-lg"
            >
              <span className="text-[14px]">LET'S TALK</span>
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
