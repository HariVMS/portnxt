import PageHero from "@/components/layout/PageHero";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | Portnext Innovation",
  description: "Get in touch with Portnext Innovation for your software development and digital marketing needs.",
};

export default function ContactUs() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        description="Have a project in mind or want to discuss a potential partnership? We'd love to hear from you."
        breadcrumb="Contact"
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left Column: Contact Form */}
            <div>
              <div className="mb-8">
                <span className="text-secondary-pink font-bold tracking-widest text-sm uppercase mb-2 block text-accent">GET IN TOUCH</span>
                <h2 className="text-3xl font-bold text-slate-900">Send us a message</h2>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-bold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mobile" className="text-sm font-bold text-slate-700">Mobile Number</label>
                    <input
                      type="tel"
                      id="mobile"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="business" className="text-sm font-bold text-slate-700">Business Name</label>
                    <input
                      type="text"
                      id="business"
                      placeholder="Your Company Ltd."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest btn-hover-effect shadow-xl border-2 border-transparent hover:border-primary uppercase w-full md:w-auto justify-center"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>

            {/* Right Column: Contact Info */}
            <div className="space-y-10">
              <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Office Address</span>
                      <p className="text-slate-700 font-medium leading-relaxed">
                        SCO. 7, IIIrd Floor, Amartex Plaza, near Vardhaman Mall, Sector 19, Faridabad, Haryana 121002
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Phone Number</span>
                      <p className="text-slate-700 font-medium hover:text-primary transition-colors">
                        <a href="tel:+919667949121">+91 96679 49121</a>
                      </p>
                      <p className="text-slate-700 font-medium hover:text-primary transition-colors">
                        <a href="tel:+918130365606">+91 81303 65606</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 shadow-sm shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Email Address</span>
                      <p className="text-slate-700 font-medium hover:text-primary transition-colors">
                        <a href="mailto:sales@portnext.com">sales@portnext.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="overflow-hidden rounded-3xl h-[300px] shadow-lg border border-slate-100 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8407478832966!2d77.30894237619226!3d28.414002990666687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd99a5e8e34b%3A0x6d9536d5073145e6!2sMakelink%20Innovation%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1709628000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Portnext Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
