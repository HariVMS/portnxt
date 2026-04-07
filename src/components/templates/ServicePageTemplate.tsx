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
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-10  overflow-hidden bg-[#0B0121]">
        {/* Abstract futuristic background grid/glow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#0B0121] to-[#0B0121]"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container relative z-10 2xl:max-w-[1536px]">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
                {data.title}
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                {data.description}
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#0A7AFF] text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-[0_0_20px_rgba(10,122,255,0.4)]"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full  aspect-[4/3]">
                <Image
                  src={data.heroImage || "/img/Home/about_us_robot.webp"}
                  alt={data.title}
                  width={1000}
                  height={1000}
                  className="object-contain rounded-[10px]!"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section (New from Figma) */}
      {data.overview && (
        <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
          <div className="container 2xl:max-w-[1536px]">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <Image
                    src={data.overview.image || "/img/Home/about_us_robot.webp"}
                    alt={data.overview.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  {data.overview.title}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {data.overview.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Sub-Services / Features Grid */}
      <section className="py-20 lg:py-28 bg-[#f8fafc]">
        <div className="container 2xl:max-w-[1536px]">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-black font-bold flex flex-col gap-5 text-3xl md:text-4xl lg:text-5xl mb-6">
              <span>Empowering Your Business with</span>{" "}
              {/* <br className="hidden md:block h-0 " /> */}
              <span className="text-[#0A7AFF]  whitespace-pre-line">
                {data.title}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.subServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 relative group"
              >
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 font-medium text-sm mb-6 group-hover:bg-[#0A7AFF] group-hover:text-white group-hover:border-[#0A7AFF] transition-colors">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Section (Dark theme with glowing centre) */}
      <section className="py-24 lg:py-32 bg-[#1A1235] relative overflow-hidden">
        {/* Glow behind lightbulb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container 2xl:max-w-[1536px] relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-slate-300 max-w-4xl text-sm md:text-base leading-relaxed">
              In today's digital world, your website often serves as the first
              impression of your business. It is vital to perform well, look
              appealing, and provide an exceptional user experience tailored to
              your goals. At Port NxT Digital Solutions, our Custom Web
              Development Services create bespoke web solutions that are
              visually appealing, functional, secure, and optimized for success.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Left Process Cards */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              {[data.process[0], data.process[3]]
                .filter(Boolean)
                .map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-[#241B42]/80 backdrop-blur-sm border border-[#3A2E5D] rounded-2xl p-6 hover:border-[#0A7AFF] transition-colors relative"
                  >
                    <div className="">
                      <h4 className="text-lg font-bold text-white mb-3">
                        {step.title}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Center Lightbulb Illustration */}
            <div className="w-full lg:w-1/3 flex justify-center py-10 lg:py-0 relative">
              <div className="relative w-[200px] h-[300px] md:w-[250px] md:h-[350px]">
                <Image
                  src="/services/alessandro-bianchi-_kdTyfnUFAc-unsplash-removebg-preview 1.png"
                  alt="Process Idea"
                  fill
                  className="object-contain filter drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                />
              </div>
            </div>

            {/* Right Process Cards */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              {[data.process[1], data.process[2]]
                .filter(Boolean)
                .map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-[#241B42]/80 backdrop-blur-sm border border-[#3A2E5D] rounded-2xl p-6 hover:border-[#0A7AFF] transition-colors relative"
                  >
                    <div className="">
                      <h4 className="text-lg font-bold text-white mb-3">
                        {step.title}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* 5th Process Step (if exists) */}
          {data.process[4] && (
            <div className="flex justify-center mt-6">
              <div className="w-full lg:w-1/3 bg-[#241B42]/80 backdrop-blur-sm border border-[#3A2E5D] rounded-2xl p-6 hover:border-[#0A7AFF] transition-colors relative">
                <div className="">
                  <h4 className="text-lg font-bold text-white mb-3">
                    {data.process[4].title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {data.process[4].description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. Major Operations Section */}
      {data.majorOperations && data.majorOperations.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="container 2xl:max-w-[1536px]">
            <div className="mb-12">
              <span className="text-[#0A7AFF] font-bold text-sm uppercase tracking-wider mb-2 block">
                Technical Capabilities
              </span>
              <h2 className="text-black font-bold text-3xl md:text-4xl mb-6">
                Major Operations
              </h2>
              <p className="text-slate-600 text-lg max-w-3xl">
                Deep technical expertise enabling robust implementation of
                cutting-edge enterprise workflows.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-3/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {data.majorOperations.map((op, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all"
                    >
                      <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 font-medium text-xs mb-5">
                        {idx + 1}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {op.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-sm">
                        {op.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-2/5 flex justify-center items-center">
                <div className="relative w-full aspect-square max-w-[500px]">
                  <Image
                    src="/services/ChatGPT Image Mar 3, 2026, 04_49_39 PM 1.png"
                    alt="Major Operations"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Why Choose Us Section (Lime Green with Circular Cards) */}
      <section className="py-24 bg-[#8DC63F]">
        <div className="container 2xl:max-w-[1536px]">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
            Why Choose Us?
          </h2>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {data.whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-full w-[220px] h-[220px] md:w-[260px] md:h-[260px] p-6 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-2 transition-transform duration-300"
              >
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed px-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Summary Works Section (Clean White) */}
      {/* {data.summaryWorks && data.summaryWorks.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="container 2xl:max-w-[1536px]">
            <div className="mb-12">
              <span className="text-[#0A7AFF] font-bold tracking-widest text-sm uppercase mb-3 block">
                Proven Results
              </span>
              <h2 className="font-bold text-3xl md:text-4xl text-black">
                Summary Works & Case Studies
              </h2>
              <p className="text-slate-600 mt-4 max-w-3xl">
                Real-world scenarios where our {data.title.replace("\n", " ")}{" "}
                expertise drove transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.summaryWorks.map((work, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col overflow-hidden h-full min-h-[400px]"
                >
                  <div className="w-full flex-grow bg-slate-50 relative min-h-[350px]">
                    {work.image && (
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-8 md:p-10 bg-white">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {work.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* 8. Consultation Form Section (Dark layout) */}
      <section className="py-20 bg-[#141A29]">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl font-bold text-white mb-2">
                Need a consultation?
              </h2>
              <p className="text-slate-400 mb-10">
                Contact our sales team directly, and our team will reply shortly
                to start the conversation.
              </p>

              <form className="space-y-6" action="/contact">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-slate-200 uppercase tracking-widest font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-transparent border-b border-slate-600 px-0 py-2 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#0A7AFF] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-slate-200 uppercase tracking-widest font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your mobile number"
                      className="w-full bg-transparent border-b border-slate-600 px-0 py-2 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#0A7AFF] transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-slate-200 uppercase tracking-widest font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full bg-transparent border-b border-slate-600 px-0 py-2 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#0A7AFF] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-slate-200 uppercase tracking-widest font-semibold">
                      Business Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your business name"
                      className="w-full bg-transparent border-b border-slate-600 px-0 py-2 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#0A7AFF] transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <label className="text-xs text-slate-200 uppercase tracking-widest font-semibold">
                    Message
                  </label>
                  <textarea
                    rows={1}
                    placeholder="How can we help you"
                    className="w-full bg-transparent border-b border-slate-600 px-0 py-2 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#0A7AFF] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    className="bg-[#0A7AFF] text-white px-10 py-3.5 rounded-full font-bold text-sm hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(10,122,255,0.3)]"
                  >
                    Get a Callback
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full md:w-2/5 flex flex-col justify-center items-center relative">
              {/* Contact channels floating at top right of form section in figma */}
              <div className="flex gap-4 text-white text-xs mb-8 md:absolute md:-top-16 md:-right-8">
                <div className="flex items-center gap-1">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={12} className="text-white" />
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <MessageSquare size={12} className="text-white" />
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail size={12} className="text-white" />
                  </span>
                </div>
              </div>

              {/* Illustration Placeholder */}
              <div className="relative min-w-[300px] min-h-[400px]">
                <Image
                  src="/services/sayyam-abbasi-5sefR8pTUG0-unsplash 12.png"
                  alt="Consultation Illustration"
                  width={1000}
                  height={1000}
                  className="object-contain rounded-[10px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="py-20 bg-[#0A7AFF] text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-blue-100 mb-10">
            Let's discuss how our consulting & implementation services can help
            you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#0A7AFF] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Book a Call
            </Link>
            <Link
              href="/services"
              className="inline-flex justify-center items-center bg-[#4B9CFF] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#3B8DFF] transition-colors"
            >
              View More Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
