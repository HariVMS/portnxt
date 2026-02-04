"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { ChevronDown, Menu, X, PenTool, Monitor, Megaphone, ChevronRight } from "lucide-react";
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
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // Always show at top
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-[48px]"
        }`}
    >
      <header className="w-full grid grid-rows-[48px_1fr] z-50 bg-white shadow-sm ">
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
                  className={`transform transition-transform ${isServicesOpen ? "rotate-180" : ""
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1000px] bg-white shadow-xl border-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 rounded-b-xl p-8 grid grid-cols-3 gap-8 text-left normal-case px-7">
                  {/* Other Services */}
                  <div className="space-y-4">
                    <div className="bg-[#FFD1DC] p-3 h-[60px] w-[290px] rounded-lg flex items-center gap-3">
                      <span><svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="-38.71 -38.71 149.10 149.10"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-38.71" y="-38.71" width="149.10" height="149.10" rx="74.55" fill="#ffffff"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><path d="M42.336,42.336c-1.792,1.793-2.24,3.809,0.446,6.496c2.688,2.688,7.394,1.119,7.616,4.928 c2.688-4.256,1.119-8.512-1.566-11.199C46.145,39.871,43.904,40.545,42.336,42.336z"></path><path d="M42.111,41.664c0.896-0.896,1.121-2.24,0.226-3.359c-1.345-2.017-20.16-18.369-20.16-18.369 c-0.896-0.896-2.24-1.119-2.688-0.447c-0.447,0.447-0.224,1.791,0.448,2.688c0,0,12.768,15.681,18.368,20.161 c1.12,0.672,2.465,0.672,3.36-0.227L42.111,41.664z"></path><path d="M64.96,0H6.72C2.911,0,0,2.912,0,6.72v58.239c0,3.809,2.911,6.721,6.72,6.721h58.24c3.808,0,6.72-2.912,6.72-6.721V6.72 C71.68,2.912,68.768,0,64.96,0z M25.088,4.704c1.344,0,2.688,1.12,2.688,2.688c0,1.567-1.12,2.688-2.688,2.688 c-1.345,0-2.688-1.12-2.688-2.688S23.52,4.704,25.088,4.704z M17.472,4.704c1.344,0,2.688,1.12,2.688,2.688 c0,1.567-1.119,2.688-2.688,2.688c-1.569,0-2.688-1.12-2.688-2.688C14.783,5.824,16.128,4.704,17.472,4.704z M10.08,4.704 c1.344,0,2.688,1.12,2.688,2.688c0,1.567-1.12,2.688-2.688,2.688S7.392,8.96,7.392,7.392S8.736,4.704,10.08,4.704z M63.84,59.359 c0,2.466-2.017,4.48-4.48,4.48H12.32c-2.464,0-4.479-2.016-4.479-4.48V19.04c0-2.464,2.016-4.479,4.479-4.479h19.04 c4.256,0,4.48,0,4.48-2.24c0-2.912,2.016-4.479,4.479-4.479h19.041c2.465,0,4.479,2.016,4.479,4.479L63.84,59.359L63.84,59.359z"></path></g></g></g></svg></span>
                      <div className="font-bold text-slate-900 text-base">
                        Other Services
                      </div>
                    </div>
                    <ul className="space-y-4 text-sm text-slate-600 font-normal">
                      <li>
                        <Link
                          href="/services/ui-ux-graphic-design"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          UI/UX & Graphic Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/cloud"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          Cloud Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/block-chain"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          Block Chain
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/devops"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          DevOps
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/salesforce"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          Salesforce
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Development Services */}
                  <div className="space-y-4">
                    <div className="bg-[#D1F2D9] p-3 h-[60px] w-[290px]  rounded-lg flex items-center gap-3">
                      <svg width="44px" height="44px" viewBox="-6.72 -6.72 37.44 37.44" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-6.72" y="-6.72" width="37.44" height="37.44" rx="18.72" fill="#ffffff"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 4L13 6L15 8" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19 4L21 6L19 8" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 16V20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 20H16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                      <div className="font-bold text-slate-900 text-base">
                        Development Services
                      </div>
                    </div>
                    <ul className="space-y-4 text-sm text-slate-600 font-normal">
                      <li>
                        <Link
                          href="/services/web-development"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/mobile-app-development"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          Mobile App Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/ai-development"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          AI Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/erp-development"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          ERP Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/crm-development"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          CRM Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/offshore-development"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          Offshore Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/iot-development"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          IOT Development
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Digital Marketing Services */}
                  <div className="space-y-4">
                    <div className="bg-[#E0D4FC] h-[60px] w-[290px]  p-3 rounded-lg flex items-center gap-3">
                      <svg width="40px" height="40px" viewBox="-6.72 -6.72 37.44 37.44" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-6.72" y="-6.72" width="37.44" height="37.44" rx="18.72" fill="#ffffff"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 15V7m0 8 5.504 3.145A1 1 0 0 0 20 17.277V4.723a1 1 0 0 0-1.496-.868L13 7m0 8h-3m3-8H7a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4v0m0 0v4.5A1.5 1.5 0 0 0 8.5 21v0a1.5 1.5 0 0 0 1.5-1.5V15m-3 0h3"></path></g></svg>
                      <div className="font-bold text-slate-900 text-base">
                        Digital Marketing Services
                      </div>
                    </div>
                    <ul className="space-y-4 text-sm text-slate-600 font-normal">
                      <li>
                        <Link
                          href="/services/search-engine-optimization"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          Search Engine Optimization (SEO)
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/email-marketing"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          Email Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/social-media-marketing"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          Social Media Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/pay-per-click"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          Pay-Per-Click (PPC)
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/content-marketing"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          Content Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/conversion-rate-optimization"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight size={14} className=" group-hover/item:text-primary w-5 h-5" />
                          Conversion Rate Optimization (CRO)
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
