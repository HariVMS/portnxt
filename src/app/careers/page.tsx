import PageHero from "@/components/layout/PageHero";
import ContentBlock from "@/components/ui/ContentBlock";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Careers | Port NxT Digital Solutions",
  description: "Join the #1 Software Development and Digital Marketing Agency.",
};

export default function Careers() {
  return (
    <main>
      <PageHero
        title="Join our team at Port NxT Digital Solutions Pvt Ltd."
        description="Discover a career in Software Development and Digital Marketing Services."
        breadcrumb="Careers"
      />

      <ContentBlock
        subtitle="GROW WITH US"
        title="Join the #1 Software Development and Digital Marketing Agency"
        description="Discover a career in Software Development and Digital Marketing Services. Software development demands expertise in coding languages like Java, Python, or C++, in addition to problem-solving skills and critical thinking."
        imageSrc="/service-hero/carrer.jpeg" // Reusing robot for now
        imageAlt="Careers at Port NxT"
        listItems={[
          "Software Development experts in coding languages",
          "Digital marketing strategists for engagement",
          "Thrilling prospects for progress and creativity",
        ]}
        ctaText="View Openings"
        ctaLink="#openings" // Anchor to openings section
      />

      <section id="openings" className="py-20 bg-gray-bg">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Current Openings
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder openings based on typical agency roles */}
            {[
              "Senior React Developer",
              "Digital Marketing Specialist",
              "UI/UX Designer",
              "Node.js Backend Developer",
              "SEO Analyst",
              "Project Manager",
            ].map((role, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -mr-4 -mt-4 group-hover:bg-primary/10 transition-colors"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 truncate group-hover:text-primary transition-colors">
                  {role}
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  Full Time • On-site
                </p>
                <div className="flex items-center text-sm font-bold text-accent uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Apply Now <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-slate-500">
            Don't see a role that fits? Email your resume to{" "}
            <a
              href="mailto:connect@portnxt.in"
              className="text-primary font-bold hover:underline"
            >
              connect@portnxt.in
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
