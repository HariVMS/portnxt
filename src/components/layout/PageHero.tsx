import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumb?: string;
}

export default function PageHero({
  title,
  description,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className="bg-dark-bg text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background Overlay/Gradient Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_0%,#1a1a1a_100%)] opacity-80 z-0"></div>

      {/* Decorative Circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="container relative z-10 pt-10">
        <div className="max-w-4xl ">
          {/* {breadcrumb && (
                        <div className="flex items-center gap-2 text-sm text-slate-400 font-bold tracking-widest uppercase mb-4">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-primary">{breadcrumb}</span>
                        </div>
                    )} */}

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            {title}
          </h1>

          {description && (
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              {description}
            </p>
          )}

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest btn-hover-effect shadow-xl border-2 border-transparent hover:border-primary uppercase"
            >
              Let's Talk
              <ArrowUpRight size={18} strokeWidth={3} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
