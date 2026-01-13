"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/Icons/Header";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className=" fixed top-0 left-0 w-full  z-50 bg-white shadow-sm ">
      <header className="fixed top-0 left-0 w-full grid grid-rows-[48px_1fr] z-50 bg-white shadow-sm ">
        {/* Top Bar */}
        <div className="bg-primary text-white py-2 w-full flex  text-xs md:text-sm">
          <div className="container flex flex-col md:flex-row 2xl:max-w-[1536px] justify-between items-center gap-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="tel:+919667949121"
                  className="flex items-center gap-2 hover:text-white/80 transition-colors"
                >
                  <span className="font-normal text-[15px] font-brandon">
                    +91 96679 49121
                  </span>
                </a>
                <span className="hidden md:inline text-white text-[18px]">
                  |
                </span>
              </div>
              <a
                href="mailto:sales@portnext.com"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <span className="font-normal text-[15px]">
                  sales@portnext.com
                </span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                {/* Social Icons - White circle bg in reference? Simplified here */}
                <a href="#">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-primary">
                    <FacebookIcon />
                  </span>
                </a>
                <a href="#">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-primary">
                    <InstagramIcon />
                  </span>
                </a>
                <a href="#">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-primary">
                    <LinkedinIcon />
                  </span>
                </a>
                <a href="#">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-primary">
                    <TwitterIcon />
                  </span>
                </a>
                <a href="#">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-primary">
                    <YoutubeIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col p-4 font-bold text-sm text-slate-800">
              <Link href="/about-us" className="py-3 border-b border-slate-50">
                COMPANY
              </Link>

              <button
                className="flex items-center justify-between py-3 border-b border-slate-50"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                SERVICES
                <ChevronDown
                  size={14}
                  className={`transform transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="bg-slate-50 p-4 space-y-4">
                  <div className="font-bold text-primary text-xs uppercase">
                    Development
                  </div>
                  <Link
                    href="/services/web-development"
                    className="block text-slate-600 font-normal py-1"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/services/mobile-app-development"
                    className="block text-slate-600 font-normal py-1"
                  >
                    App Development
                  </Link>

                  <div className="font-bold text-primary text-xs uppercase mt-2">
                    Marketing
                  </div>
                  <Link
                    href="/services/search-engine-optimization"
                    className="block text-slate-600 font-normal py-1"
                  >
                    SEO
                  </Link>
                </div>
              )}

              <Link href="/careers" className="py-3 border-b border-slate-50">
                CAREERS
              </Link>
              <Link href="/blogs" className="py-3 border-b border-slate-50">
                BLOG
              </Link>
              <Link
                href="/contact-us"
                className="py-3 border-b border-slate-50"
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </header>
      {/* Main Navigation */}
      <div className="container bg-white w-full relative 2xl:max-w-[1536px] 2xl:h-[92px]">
        <div className="flex justify-between items-center h-full">
          {/* Logo - Renaming to Portnext visually via Alt for now, assuming image swap later or it contains text */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/img/Home/makelink-innovation-logo.webp"
              alt="Portnext Innovation"
              width={290}
              height={60}
              className="" // Should ideally be replaced by actual Portnext logo
              priority
            />
          </Link>
          <div className="flex items-center justify-center gap-3">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-5 font-bold text-[16px] tracking-normal text-slate-800 uppercase">
              <Link
                href="/about-us"
                className="hover:text-sky-700 transition-colors "
              >
                COMPANY
              </Link>

              <div className="relative group">
                <button className="flex items-center gap-2 hover:text-sky-700 transition-colors py-4">
                  SERVICES
                  <ChevronDown size={14} className="text-gray-500" />
                </button>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white shadow-xl border-t-4 border-primary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 rounded-b-xl p-8 grid grid-cols-3 gap-8 text-left normal-case">
                  {/* Other Services */}
                  <div className="space-y-4">
                    <div className="bg-secondary-pink/30 p-3 rounded-lg flex items-center gap-3">
                      <div className="font-bold text-slate-900 text-sm">
                        Other Services
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600 font-normal">
                      <li>
                        <Link
                          href="/services/ui-ux-graphic-design"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          UI/UX Graphic Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/cloud"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          Cloud Solutions
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/block-chain"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          Blockchain Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/devops"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          DevOps Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/salesforce"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          Salesforce
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Development Services */}
                  <div className="space-y-4">
                    <div className="bg-secondary-green p-3 rounded-lg flex items-center gap-3">
                      <div className="font-bold text-slate-900 text-sm">
                        Development Services
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600 font-normal">
                      <li>
                        <Link
                          href="/services/web-development"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/mobile-app-development"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          Mobile App Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/ai-development"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          AI Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/erp-development"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          ERP Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/crm-development"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          CRM Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/iot-development"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          IoT Development
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Digital Marketing */}
                  <div className="space-y-4">
                    <div className="bg-secondary-purple/30 p-3 rounded-lg flex items-center gap-3">
                      <div className="font-bold text-slate-900 text-sm">
                        Digital Marketing
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600 font-normal">
                      <li>
                        <Link
                          href="/services/search-engine-optimization"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          SEO Optimization
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/social-media-marketing"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          Social Media Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/pay-per-click"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          Pay Per Click (PPC)
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/content-marketing"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          Content Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/email-marketing"
                          className="hover:text-sky-700 hover:tracking-wide transition-all"
                        >
                          Email Marketing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Link
                href="/careers"
                className="hover:text-sky-700 transition-colors"
              >
                CAREERS
              </Link>
              <Link
                href="/blogs"
                className="hover:text-sky-700 transition-colors"
              >
                BLOG
              </Link>
              <Link
                href="/contact-us"
                className="hover:text-sky-700 transition-colors"
              >
                CONTACT
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/brochure"
                className="flex items-center gap-1 bg-primary text-white px-8 pr-7 py-4 h-[68px] max-w-[208px]   rounded-full text-[12px] font-bold tracking-widest btn-hover-effect group border-2 border-white hover:border-primary shadow-lg"
              >
                <span className="text-[18px]">BROCHURE</span>
                <span className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-white">
                  {" "}
                  <GoArrowUpRight
                    size={21}
                    className="group-hover:rotate-45  stroke-[0.5] text-primary  transition-transform duration-500"
                  />
                </span>
              </Link>
            </div>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </div>
  );
}
