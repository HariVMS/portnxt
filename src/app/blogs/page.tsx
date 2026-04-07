import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

export const metadata = {
  title: "Blogs | Port NxT Digital Solutions",
  description:
    "Stay updated with the latest trends in technology and digital marketing.",
};

const blogPosts = [
  {
    title: "What is Cloud Migration? Things to Consider Before Moving...",
    slug: "cloud-migration-guide",
    excerpt:
      "Cloud migration is more than just moving data; it's a strategic shift. Learn how our experts ensure a smooth transition and what you need to consider.",
    date: "October 15, 2025",
    author: "Tech Team",
    category: "Cloud Computing",
  },
  {
    title: "Why Mobile Apps Drive Engagement & Must-Have Features for 2026",
    slug: "mobile-app-trends-2026",
    excerpt:
      "Mobile apps differ from websites in crucial ways. Discover the key features that will drive user engagement in 2026 and how to lead the market.",
    date: "September 28, 2025",
    author: "App Studio",
    category: "Mobile Development",
  },
  {
    title: "Why UI/UX Design Impacts Sales & Key Elements of Good Design",
    slug: "ui-ux-design-impact",
    excerpt:
      "Good design is good business. Explore how UI/UX directly influences sales conversions and the essential elements that make your brand stand out.",
    date: "September 10, 2025",
    author: "Design Lab",
    category: "UI/UX Design",
  },
];

export default function Blogs() {
  return (
    <main>
      <PageHero
        title="Our Latest Blogs"
        description="Insights, trends, and expert opinions on software development, digital marketing, and technology innovation."
        breadcrumb="Blogs"
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 group flex flex-col"
              >
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  {/* Placeholder for blog image - using a colored gradient/pattern or generic image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1">
                    <Tag size={12} /> {post.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} /> {post.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                    <Link href={`#${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-slate-500 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`#${post.slug}`}
                    className="mt-auto inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-primary transition-colors uppercase tracking-widest"
                  >
                    Read More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
