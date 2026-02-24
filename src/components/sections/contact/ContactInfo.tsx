import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div className="space-y-3 pl-0 xl:pt-15 lg:pl-10 xl:pl-8">
      {/* Address */}
      <div className="flex flex-col items-start gap-0 group">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-accent shrink-0 border border-red-100 group-hover:scale-110 transition-transform duration-300">
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
            <MapPin size={18} className="text-accent" />
          </div>
        </div>
        <div>
          <p className="text-gray-900 text-lg dark:text-slate-800">
            SCO. 7, IIIrd Floor, Amartex Plaza, near Vardhaman Mall, Sector 19,
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex flex-col items-start gap-0 group">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-accent shrink-0 border border-red-100 group-hover:scale-110 transition-transform duration-300">
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
            <Phone size={18} className="text-accent" />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-1 text-slate-600 font-light">
            <span>Mobile: +91 96679 49121 | +91-7827294136</span>
            <span>Mail: connect@portnxt.in</span>
          </div>
        </div>
      </div>

      {/* Hours */}
      <div className="flex flex-col items-start gap-0 group">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-accent shrink-0 border border-red-100 group-hover:scale-110 transition-transform duration-300">
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
            <Clock size={18} className="text-accent" />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-1 text-slate-600 font-light">
            <span>Monday - Saturday: 10:00 - 19:00</span>
            <span>Sunday: Closed</span>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="pt-8">
        <h4 className="text-slate-800 text-[18px] mb-2 font-bold ">
          Social Links
        </h4>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={16} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
            aria-label="YouTube"
          >
            <FaYoutube size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
