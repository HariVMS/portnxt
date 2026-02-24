import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import { ServiceData } from "@/data/services";
import FAQAccordion from "@/components/ui/FAQAccordion"; // Ensure this matches file path found in list_dir

interface ServicePageTemplateProps {
  data: ServiceData;
}

export default function ServicePageTemplate({
  data,
}: ServicePageTemplateProps) {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={data.heroImage || "/img/Home/about_us_robot.webp"}
            alt={data.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 to-slate-900"></div>
        </div>

        <div className="container relative z-10 2xl:max-w-[1536px]">
          <div className="max-w-4xl">
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">
              Services
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-slate-300 text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl">
              {data.description}
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#007bfd] text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-transparent hover:text-[#007bfd] hover:border-[#007bfd] border-2 border-transparent transition-all duration-300 shadow-xl"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Sub-Services / Features Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container 2xl:max-w-[1536px]">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-black font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              Empowering Your Business with{" "}
              <span className="text-[#007bfd]">{data.title}</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Comprehensive solutions designed to scale, innovate, and drive
              growth for your enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.subServices.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[30px] border bg-white p-2 hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                <div className="flex flex-col rounded-xl p-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-[#007bfd]">
                    {service.icon ? (
                      <service.icon size={32} />
                    ) : (
                      <CheckCircle2 size={32} />
                    )}
                  </div>
                  <h3 className="text-[18px] font-bold text-slate-900 mb-3 group-hover:text-[#007bfd] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base text-slate-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="font-semibold text-[#ED184F] group-hover:underline inline-flex items-center gap-1">
                    Read More <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Operations Section */}
      {data.majorOperations && data.majorOperations.length > 0 && (
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="container 2xl:max-w-[1536px]">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-[#007bfd] font-bold tracking-widest text-sm uppercase mb-3 block">
                Technical Capabilities
              </span>
              <h2 className="text-black font-bold text-3xl md:text-5xl mb-6">
                Major Operations
              </h2>
              <p className="text-slate-500 text-lg">
                Deep technical expertise enabling robust implementation of{" "}
                {data.title}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.majorOperations.map((op, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-[#007bfd]/50 hover:shadow-xl transition-all shadow-sm group"
                >
                  <div className="w-14 h-14 bg-[#007bfd]/10 rounded-xl flex items-center justify-center text-[#007bfd] mb-6 group-hover:bg-[#007bfd] group-hover:text-white transition-colors">
                    {op.icon ? (
                      <op.icon size={28} />
                    ) : (
                      <CheckCircle2 size={28} />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {op.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {op.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Summary Works Section */}
      {data.summaryWorks && data.summaryWorks.length > 0 && (
        <section className="py-20 lg:py-28 bg-slate-900 text-white">
          <div className="container 2xl:max-w-[1536px]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-[#ED184F] font-bold tracking-widest text-sm uppercase mb-3 block">
                  Proven Results
                </span>
                <h2 className="font-bold text-3xl md:text-5xl mb-6">
                  Summary Works & Case Studies
                </h2>
                <p className="text-slate-400 text-lg">
                  Real-world scenarios where our {data.title} expertise drove
                  transformation.
                </p>
              </div>
              <Link
                href="/about-us"
                className="inline-flex flex-shrink-0 items-center gap-2 text-white border border-slate-700 hover:bg-white hover:text-black px-6 py-3 rounded-full font-bold transition-all"
              >
                View Case Studies <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.summaryWorks.map((work, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-3xl bg-slate-800 border border-slate-700 hover:border-[#ED184F] transition-colors"
                >
                  <div className="aspect-video w-full relative overflow-hidden bg-slate-950">
                    <Image
                      src={work.image || "/img/Home/about_us_robot.webp"}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                    />
                    {work.industry && (
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-white">
                        {work.industry}
                      </div>
                    )}
                  </div>
                  <div className="p-8 md:p-10 flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-4">{work.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                      {work.description}
                    </p>
                    <span className="font-bold text-[#ED184F] group-hover:text-white transition-colors mt-auto inline-flex items-center gap-2">
                      Read Report <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Process Section - Matches Reference: Numbered White Cards in Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container 2xl:max-w-[1536px]">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">
              Our Process
            </h2>
            <p className="text-slate-600 max-w-4xl text-sm leading-relaxed">
              In today's digital world, your website often serves as the first
              impression of your business. It is vital to perform well, look
              appealing, and provide an exceptional user experience tailored to
              your goals. At Port NxT Digital Solutions, our Custom Web
              Development Services create bespoke web solutions that are
              visually appealing, functional, secure, and optimized for success.
              We craft digital experiences that drive engagement and growth
              through a comprehensive and collaborative development process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.process.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
              >
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#007bfd] text-white flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <div className="mt-10">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section - Matches Reference: Circular Cards on Green Wave */}
      <section className="relative py-28 overflow-hidden">
        {/* Background Wave - Simulating the green curve from screenshot */}
        <div className="absolute inset-0 z-0">
          {/* Top White, Bottom Green split roughly */}
          <div className="h-1/2 bg-white"></div>
          <div className="h-1/2 bg-[#8bc540] relative">
            {/* CSS Curve could go here, for now using solid or gradient to approximate */}
            <div className="absolute -top-24 left-0 w-full h-48 bg-[#8bc540] rounded-[50%] transform scale-x-150"></div>
          </div>
          <div className="absolute inset-0 bg-transparent flex items-center justify-center">
            <div className="w-[120%] h-[600px] bg-[#a3d95b] rounded-[100%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 -z-10 blur-3xl opacity-50"></div>
          </div>
        </div>

        {/* Visual Fix: Using a clip-path or SVG would be best, but for CSS-only: */}
        <div className="absolute top-[20%] left-0 w-full h-[500px] bg-[#97d74d] -skew-y-3 origin-bottom-left z-0 transform scale-110"></div>

        <div className="container relative z-10 2xl:max-w-[1536px] text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-16 relative inline-block">
            Why Choose Us?
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            {data.whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-full w-[300px] h-[300px] p-8 flex flex-col items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-white/50 text-center relative z-20 group"
              >
                <div className="mb-4 text-[#007bfd] group-hover:scale-110 transition-transform">
                  {/* Icons would be specific here, using generic for now */}
                  <div className="p-3 bg-slate-100 rounded-full">
                    <CheckCircle2 size={32} className="text-[#007bfd]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Consultation Form Section - Matches Reference: Dark Box with 3D Illustration */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container 2xl:max-w-[1000px] mx-auto bg-[#161b22] rounded-[40px] p-8 md:p-12 border border-slate-700 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="w-full md:w-3/5">
              <h2 className="text-2xl font-bold text-white mb-2">
                Need a Consultation?
              </h2>
              <p className="text-slate-400 text-sm mb-8">
                Let us know your business needs, and our team will reply shortly
                to start the conversation.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="bg-[#1f2633] border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#007bfd]"
                  />
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    className="bg-[#1f2633] border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#007bfd]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-[#1f2633] border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#007bfd]"
                  />
                  <input
                    type="text"
                    placeholder="Enter your business name"
                    className="bg-[#1f2633] border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#007bfd]"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="How can we help you"
                  className="w-full bg-[#1f2633] border border-slate-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#007bfd]"
                ></textarea>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-[#007bfd] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 flex items-center gap-2"
                  >
                    Get a Callback <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full md:w-2/5 flex justify-center">
              {/* Illustration Placeholder - Robot/Person */}
              <div className="relative w-full h-[300px]">
                <Image
                  src="/img/Home/contact-us.webp"
                  alt="Consultation"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Top Right Contact Info */}
          <div className="absolute top-8 right-8 flex gap-4 text-white text-xs hidden md:flex">
            <div className="flex items-center gap-1">
              <Phone size={12} className="text-[#007bfd]" /> Call us
            </div>
            <div className="flex items-center gap-1">
              <Mail size={12} className="text-yellow-400" /> Email us
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare size={12} className="text-green-500" /> WhatsApp
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      {data.faq && data.faq.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={data.faq} />
          </div>
        </section>
      )}

      {/* 5. CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/img/pattern.png')]"></div>
        <div className="container 2xl:max-w-[1536px] relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how our {data.title} services can help you achieve
            your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex justify-center items-center gap-2 bg-white text-primary px-10 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-slate-100 transition-colors shadow-2xl"
            >
              Book a Call
            </Link>
            <Link
              href="/"
              className="inline-flex justify-center items-center gap-2 border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-white/10 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
