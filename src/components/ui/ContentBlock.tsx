import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ContentBlockProps {
  subtitle?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean; // If true, image is on the right
  listItems?: string[];
  ctaText?: string;
  ctaLink?: string;
}

export default function ContentBlock({
  subtitle,
  title,
  description,
  imageSrc,
  imageAlt = "Illustration",
  reverse = false,
  listItems,
  ctaText,
  ctaLink,
}: ContentBlockProps) {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container 2xl:max-w-[1536px]">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${reverse ? "lg:flex-row-reverse" : ""}`}
        >
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Decorative blob/circle background could go here */}
            <div className="relative z-10">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={500}
                className="w-full h-auto object-contain animate-float-slow"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            {subtitle && (
              <span className="text-accent font-bold tracking-widest text-sm uppercase mb-3 block">
                {subtitle}
              </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              {description}
            </p>

            {listItems && listItems.length > 0 && (
              <ul className="space-y-4 mb-8">
                {listItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-primary mt-1 shrink-0"
                    />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest btn-hover-effect shadow-xl"
              >
                {ctaText}
                <ArrowRight size={18} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
