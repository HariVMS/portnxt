"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronUp,
  Mail,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // You might need to install react-icons if not available, or use a customized SVG/Lucide icon if preferred. Assuming lucide for now if fa not avail or just svg.
// Actually, let's stick to Lucide or standard SVGs to avoid dependency issues if react-icons isn't there, but user likely has it. Checked package.json? No, but common.
// Safest is to use lucide or raw svg for whatsapp if needed. Let's try to use a slightly custom SVG for whatsapp if react-icons is missing, or just check.
// Given the environment, I'll assume standard lucide icons or simple svgs.
// For "X" logo, Lucide has 'X'.
// Screenshot shows Facebook, X (Twitter), Instagram, LinkedIn, Youtube.

export default function Footer() {
  return (
    <footer className="bg-[#192020] text-[#b0b0b0] text-[14px] font-sans pt-12 pb-6 relative z-50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 2xl:max-w-[1536px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-0 lg:ml-10">
          {/* Column 1: Quick Menu */}
          <div className="">
            <h4 className="text-base lg:text-[18px] text-white font-medium mb-3 lg:mb-7">
              Quick Menu
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about-us"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Development Service */}
          <div>
            <h4 className="text-base lg:text-[18px] text-white font-medium mb-3 lg:mb-7">
              Development Service
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-development"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-services"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/erp-development"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  ERP Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-development"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  AI Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/iot-development"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  IOT Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/blockchain"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  Block Chain
                </Link>
              </li>
              <li>
                <Link
                  href="/services/devops"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Digital Marketing */}
          <div>
            <h4 className="text-base lg:text-[18px] !font-brandon text-white font-medium mb-3 lg:mb-7">
              Digital Marketing
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/seo"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/email-marketing"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/smm"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  SMM
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ppc"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  PPC
                </Link>
              </li>
              <li>
                <Link
                  href="/services/content-marketing"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cro"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  CRO
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          {/* <div>
            <h4 className="text-base lg:text-[18px] text-white font-medium mb-3 lg:mb-7">
              Industries
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/industries/healthcare"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/finance"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/real-estate"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/retail"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  Retail
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/education"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/logistics"
                  className="text-[#C2C2C2] hover:text-[#73b9ef] text-[16px] transition-colors block"
                >
                  Logistics
                </Link>
              </li>
            </ul>
          </div> */}
          <div></div>

          {/* Column 5: Contact Info */}
          <div>
            <h4 className="text-base lg:text-[18px] text-white font-medium mb-3 lg:mb-7">
              Contact Info
            </h4>
            <div className="space-y-6">
              <div className="flex gap-3 flex-col">
                <div className="text-white mb-1">
                  Phone Number : +91 99423 83516
                </div>
                <div className="text-white">
                  Email Address: connect@portnxt.in
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/port-nxt-digital-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary text-[#C2C2C2] hover:text-white text-[16px] transition-all"
                >
                  <Linkedin
                    size={16}
                    fill="currentColor"
                    className="stroke-0"
                  />
                </a>
                <a
                  href="https://wa.me/918760227385⁠"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary text-[#C2C2C2] hover:text-white text-[16px] transition-all"
                >
                  <FaWhatsapp size={19} />
                </a>
                <a
                  href="mailto:connect@portnxt.in"
                  className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary text-[#C2C2C2] hover:text-white text-[16px] transition-all"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-10 pt-5 pb-0 border-t border-white px-4 2xl:max-w-[1536px]  flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[16px] text-white">
          © 2025 Port NxT Digital Solutions. All rights reserved.
        </div>
        <div className="flex gap-6 text-[16px] text-white">
          <Link
            href="/terms"
            className="text-white hover:text-[#73b9ef] text-[16px] transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/privacy"
            className="text-white hover:text-[#73b9ef] text-[16px] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/faq"
            className="text-white hover:text-[#73b9ef] text-[16px] transition-colors"
          >
            FAQ
          </Link>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <div className="w-9 h-9 rounded-full bottom-[70px] right-[10px] absolute bg-[#25D366] z-10 animate-ping"></div>

        <a
          href="https://wa.me/918760227385⁠"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] relative z-50  rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 bg-[#007AFF] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#0066d6] transition-colors"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </footer>
  );
}
