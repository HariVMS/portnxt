"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import {
  ChevronDown,
  Menu,
  X,
  PenTool,
  Monitor,
  Megaphone,
  ChevronRight,
  Mail,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/Icons/Header";
import { FaWhatsapp } from "react-icons/fa";

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
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-transform duration-300 ${
        isVisible
          ? "translate-y-0"
          : "-translate-y-[80px] xs:-translate-y-[61px] sm:-translate-y-[48px]"
      }`}
    >
      <header className="w-full grid sm:grid-rows-[48px_1fr] z-50 bg-white shadow-sm ">
        {/* Top Bar */}
        <div className="bg-primary text-white py-2 w-full flex  text-xs md:text-sm">
          <div className="container flex flex-col xs:flex-row 2xl:max-w-[1536px] justify-between items-center gap-2">
            <div className="flex xs:flex-col gap-2 xs:gap-1  items-center sm:flex-row sm:gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="tel:+919942383516"
                  className="flex items-center gap-2 hover:text-white/80 transition-colors"
                >
                  <span className="font-normal text-[15px] font-brandon">
                    +91 99423 83516
                  </span>
                </a>
                <span className="hidden md:inline text-white text-[18px]">
                  |
                </span>
              </div>
              <a
                href="mailto:connect@portnxt.in"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <span className="font-normal text-[15px]">
                  connect@portnxt.in
                </span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                {/* Social Icons - White circle bg in reference? Simplified here */}
                <a
                  href="https://linkedin.com/company/port-nxt-digital-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-8 h-8  rounded-full group flex items-center justify-center bg-white text-primary hover:text-white hover:bg-transparent border border-transparent hover:border-white transition-all">
                    <LinkedinIcon />
                  </span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=919942383516"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-primary hover:text-white hover:bg-transparent border border-transparent hover:border-white transition-all">
                    <FaWhatsapp size={19} />
                  </span>
                </a>
                <a href="mailto:connect@portnxt.in">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-primary hover:text-white hover:bg-transparent border border-transparent hover:border-white transition-all">
                    <Mail size={19} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main Navigation */}
      <div className="container bg-white w-full relative 2xl:max-w-[1536px] h-[90px] md:h-[95px] 2xl:h-[92px]">
        <div className="flex justify-between items-center h-full py-4 2xl:pl-10 lg:py-0">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/portnxt/Name_Logo.png"
              alt="Port NxT Digital Solutions"
              width={200}
              height={45}
              className="w-[200px] md:w-[210px] h-auto"
              priority
            />
          </Link>
          <div className="flex items-center justify-center gap-3">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center md:gap-3 lg:gap-5 font-bold text-[16px] tracking-normal text-slate-800 uppercase">
              <Link
                href="/about-us"
                className="hover:text-sky-700 transition-colors sm:text-xs  lg:text-[16px] "
              >
                COMPANY
              </Link>

              <div className="relative group">
                <button className="flex items-center gap-2 hover:text-sky-700 transition-colors sm:text-xs  lg:text-[16px] py-4">
                  SERVICES
                  <ChevronDown size={14} className="text-gray-500" />
                </button>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-[80%] w-[1300px] bg-white shadow-xl border-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 rounded-b-xl p-8 grid grid-cols-4 gap-8 text-left normal-case px-7">
                  {/* Core Enterprise Solutions */}
                  {/* Specialized Services */}
                  <div className="space-y-4">
                    <div className="bg-[#E0D4FC] h-[60px] w-[290px]  p-3 rounded-lg flex items-center gap-3">
                      <svg
                        width="40px"
                        height="40px"
                        viewBox="-6.72 -6.72 37.44 37.44"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0">
                          <rect
                            x="-6.72"
                            y="-6.72"
                            width="37.44"
                            height="37.44"
                            rx="18.72"
                            fill="#ffffff"
                          ></rect>
                        </g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            stroke="#000000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 15V7m0 8 5.504 3.145A1 1 0 0 0 20 17.277V4.723a1 1 0 0 0-1.496-.868L13 7m0 8h-3m3-8H7a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4v0m0 0v4.5A1.5 1.5 0 0 0 8.5 21v0a1.5 1.5 0 0 0 1.5-1.5V15m-3 0h3"
                          ></path>
                        </g>
                      </svg>
                      <div className="font-bold text-slate-900 text-base">
                        Specialized Solutions
                      </div>
                    </div>
                    <ul className="space-y-4 text-sm text-slate-600 font-normal">
                      <li>
                        <Link
                          href="/services/digital-marketing"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight
                            size={14}
                            className=" group-hover/item:text-primary w-5 h-5"
                          />
                          Digital Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/servicenow-implementation"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight
                            size={14}
                            className=" group-hover/item:text-primary w-5 h-5"
                          />
                          ServiceNow Implementation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/jira-implementation"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight
                            size={14}
                            className=" group-hover/item:text-primary w-5 h-5"
                          />
                          Jira Implementation
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-[#FFD1DC] p-3 h-[60px] w-[290px] rounded-lg flex items-center gap-3">
                      <span>
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="40px"
                          height="40px"
                          viewBox="-38.71 -38.71 149.10 149.10"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0">
                            <rect
                              x="-38.71"
                              y="-38.71"
                              width="149.10"
                              height="149.10"
                              rx="74.55"
                              fill="#ffffff"
                            ></rect>
                          </g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <g>
                                <path d="M42.336,42.336c-1.792,1.793-2.24,3.809,0.446,6.496c2.688,2.688,7.394,1.119,7.616,4.928 c2.688-4.256,1.119-8.512-1.566-11.199C46.145,39.871,43.904,40.545,42.336,42.336z"></path>
                                <path d="M42.111,41.664c0.896-0.896,1.121-2.24,0.226-3.359c-1.345-2.017-20.16-18.369-20.16-18.369 c-0.896-0.896-2.24-1.119-2.688-0.447c-0.447,0.447-0.224,1.791,0.448,2.688c0,0,12.768,15.681,18.368,20.161 c1.12,0.672,2.465,0.672,3.36-0.227L42.111,41.664z"></path>
                                <path d="M64.96,0H6.72C2.911,0,0,2.912,0,6.72v58.239c0,3.809,2.911,6.721,6.72,6.721h58.24c3.808,0,6.72-2.912,6.72-6.721V6.72 C71.68,2.912,68.768,0,64.96,0z M25.088,4.704c1.344,0,2.688,1.12,2.688,2.688c0,1.567-1.12,2.688-2.688,2.688 c-1.345,0-2.688-1.12-2.688-2.688S23.52,4.704,25.088,4.704z M17.472,4.704c1.344,0,2.688,1.12,2.688,2.688 c0,1.567-1.119,2.688-2.688,2.688c-1.569,0-2.688-1.12-2.688-2.688C14.783,5.824,16.128,4.704,17.472,4.704z M10.08,4.704 c1.344,0,2.688,1.12,2.688,2.688c0,1.567-1.12,2.688-2.688,2.688S7.392,8.96,7.392,7.392S8.736,4.704,10.08,4.704z M63.84,59.359 c0,2.466-2.017,4.48-4.48,4.48H12.32c-2.464,0-4.479-2.016-4.479-4.48V19.04c0-2.464,2.016-4.479,4.479-4.479h19.04 c4.256,0,4.48,0,4.48-2.24c0-2.912,2.016-4.479,4.479-4.479h19.041c2.465,0,4.479,2.016,4.479,4.479L63.84,59.359L63.84,59.359z"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <div className="font-bold text-slate-900 text-base">
                        Enterprise Solutions
                      </div>
                    </div>
                    <ul className="space-y-4 text-sm text-slate-600 font-normal">
                      <li>
                        <Link
                          href="/services/salesforce-consulting"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight
                            size={14}
                            className=" group-hover/item:text-primary w-5 h-5"
                          />
                          Salesforce Consulting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/microsoft-dynamics-365"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight
                            size={14}
                            className=" group-hover/item:text-primary w-5 h-5"
                          />
                          Microsoft Dynamics 365
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/oracle-erp"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight
                            size={14}
                            className=" group-hover/item:text-primary w-5 h-5"
                          />
                          Oracle ERP & Cloud
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/sap-implementation"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight
                            size={14}
                            className=" group-hover/item:text-primary w-5 h-5"
                          />
                          SAP Implementation
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Data & Engineering Services */}
                  <div className="space-y-4">
                    <div className="bg-[#D1F2D9] p-3 h-[60px] w-[290px]  rounded-lg flex items-center gap-3">
                      <svg
                        width="44px"
                        height="44px"
                        viewBox="-6.72 -6.72 37.44 37.44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0">
                          <rect
                            x="-6.72"
                            y="-6.72"
                            width="37.44"
                            height="37.44"
                            rx="18.72"
                            fill="#ffffff"
                          ></rect>
                        </g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M9 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V12"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M15 4L13 6L15 8"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M19 4L21 6L19 8"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M12 16V20"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M8 20H16"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                      <div className="font-bold text-slate-900 text-base">
                        Data Solutions
                      </div>
                    </div>
                    <ul className="space-y-4 text-sm text-slate-600 font-normal">
                      <li>
                        <Link
                          href="/services/microsoft-fabric"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight
                            size={14}
                            className=" group-hover/item:text-primary w-5 h-5"
                          />
                          Microsoft Fabric
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/data-engineering"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight
                            size={14}
                            className=" group-hover/item:text-primary w-5 h-5"
                          />
                          Data Engineering
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/custom-ai-solutions"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight
                            size={14}
                            className=" group-hover/item:text-primary w-5 h-5"
                          />
                          Custom AI Solutions
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/*  web Services */}
                  <div className="space-y-4">
                    <div className="bg-[#D1F2EC] p-3 h-[60px] w-[290px]  rounded-lg flex items-center gap-3">
                      <svg
                        width="44px"
                        height="44px"
                        viewBox="-6.72 -6.72 37.44 37.44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0">
                          <rect
                            x="-6.72"
                            y="-6.72"
                            width="37.44"
                            height="37.44"
                            rx="18.72"
                            fill="#ffffff"
                          ></rect>
                        </g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M9 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V12"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M15 4L13 6L15 8"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M19 4L21 6L19 8"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M12 16V20"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M8 20H16"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                      <div className="font-bold text-slate-900 text-base">
                        Development Solutions
                      </div>
                    </div>
                    <ul className="space-y-4 text-sm text-slate-600 font-normal">
                      <li>
                        <Link
                          href="/services/web-development"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight
                            size={14}
                            className=" group-hover/item:text-primary w-5 h-5"
                          />
                          Web & App Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/mobile-app-development"
                          className="hover:text-sky-700 transition-all flex items-center gap-2 group/item text-[16px] text-black"
                        >
                          <ChevronRight
                            size={14}
                            className=" group-hover/item:text-primary w-5 h-5"
                          />
                          Mobile App Development
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Link
                href="/careers"
                className="hover:text-sky-700 transition-colors sm:text-xs  lg:text-[16px]"
              >
                CAREERS
              </Link>
              {/* <Link
                href="/blogs"
                className="hover:text-sky-700 transition-colors sm:text-xs  lg:text-[16px]"
              >
                BLOG
              </Link> */}
              <Link
                href="/contact-us"
                className="hover:text-sky-700 transition-colors sm:text-xs  lg:text-[16px]"
              >
                CONTACT
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              {/* <Link
                href="/brochure"
                className="flex items-center gap-1 bg-primary text-white px-8 pr-7 py-4 lg:h-[68px] lg:max-w-[208px]   rounded-full text-[12px] font-bold tracking-widest btn-hover-effect group border-2 border-white hover:border-primary shadow-lg"
              >
                <span className="sm:text-[12px] lg:text-[18px]">BROCHURE</span>
                <span className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-white">
                  {" "}
                  <GoArrowUpRight
                    size={21}
                    className="group-hover:rotate-45  stroke-[0.5] text-primary  transition-transform duration-500"
                  />
                </span>
              </Link> */}
            </div>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-800 pr-5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Absolute Positioning for proper flow) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute  top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl max-h-[calc(100vh-100px)] overflow-y-auto">
          <div className="flex flex-col p-4 font-bold text-base text-slate-800">
            <Link
              href="/about-us"
              className="py-4 border-b border-slate-100 active:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              COMPANY
            </Link>

            <button
              className="flex items-center justify-between py-4 border-b border-slate-100 active:bg-slate-50"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              SERVICES
              <ChevronDown
                size={18}
                className={`transform transition-transform ${
                  isServicesOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="bg-slate-50/80 p-5 space-y-6 border-b border-slate-100">
                <div>
                  <div className="font-bold text-primary text-xs tracking-widest uppercase mb-3">
                    Enterprise Solutions
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="/services/salesforce-consulting"
                      className="block text-slate-600 hover:text-primary font-normal text-[15px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Salesforce Consulting
                    </Link>
                    <Link
                      href="/services/microsoft-dynamics-365"
                      className="block text-slate-600 hover:text-primary font-normal text-[15px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Microsoft Dynamics 365
                    </Link>
                    <Link
                      href="/services/oracle-erp"
                      className="block text-slate-600 hover:text-primary font-normal text-[15px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Oracle ERP & Cloud
                    </Link>
                    <Link
                      href="/services/sap-implementation"
                      className="block text-slate-600 hover:text-primary font-normal text-[15px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      SAP Implementation
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="font-bold text-primary text-xs tracking-widest uppercase mb-3">
                    Data Solutions
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="/services/microsoft-fabric"
                      className="block text-slate-600 hover:text-primary font-normal text-[15px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Microsoft Fabric
                    </Link>
                    <Link
                      href="/services/data-engineering"
                      className="block text-slate-600 hover:text-primary font-normal text-[15px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Data Engineering
                    </Link>
                    <Link
                      href="/services/custom-ai-solutions"
                      className="block text-slate-600 hover:text-primary font-normal text-[15px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Custom AI Solutions
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="font-bold text-primary text-xs tracking-widest uppercase mb-3">
                    Specialized Solutions
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="/services/servicenow-implementation"
                      className="block text-slate-600 hover:text-primary font-normal text-[15px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      ServiceNow Implementation
                    </Link>
                    <Link
                      href="/services/jira-implementation"
                      className="block text-slate-600 hover:text-primary font-normal text-[15px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Jira Implementation
                    </Link>
                    <Link
                      href="/services/digital-marketing"
                      className="block text-slate-600 hover:text-primary font-normal text-[15px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Digital Marketing
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="font-bold text-primary text-xs tracking-widest uppercase mb-3">
                    Development Solutions
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="/services/web-development"
                      className="block text-slate-600 hover:text-primary font-normal text-[15px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Web & App Development
                    </Link>
                    <Link
                      href="/services/mobile-app-development"
                      className="block text-slate-600 hover:text-primary font-normal text-[15px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Mobile App Development
                    </Link>
                  </div>
                </div>
              </div>
            )}

            <Link
              href="/careers"
              className="py-4 border-b border-slate-100 active:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CAREERS
            </Link>
            <Link
              href="/blogs"
              className="py-4 border-b border-slate-100 active:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BLOG
            </Link>
            <Link
              href="/contact-us"
              className="py-4 border-b border-slate-100 active:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
