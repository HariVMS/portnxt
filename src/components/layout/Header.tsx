"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Twitter, ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm font-sans">
            {/* Top Bar */}
            <div className="bg-[#111] text-white py-2 text-xs md:text-sm">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-6">
                        <a href="tel:+919667949121" className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Phone size={14} className="text-primary" />
                            <span>+91 96679 49121</span>
                        </a>
                        <a href="mailto:sales@makelinkit.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Mail size={14} className="text-primary" />
                            <span>sales@makelinkit.com</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <a href="#" className="hover:text-primary transition-colors"><Facebook size={14} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter size={14} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Instagram size={14} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={14} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Youtube size={14} /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container bg-white relative">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/img/Home/makelink-innovation-logo.webp"
                            alt="Makelink Innovation"
                            width={180}
                            height={50}
                            className="h-10 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8 font-bold text-[13px] tracking-wide text-slate-800 uppercase">
                        <Link href="/about-us" className="hover:text-primary transition-colors">COMPANY</Link>

                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-primary transition-colors py-4">
                                SERVICES
                                <ChevronDown size={14} />
                            </button>

                            {/* Mega Menu Dropdown */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white shadow-xl border-t-4 border-primary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 rounded-b-xl p-8 grid grid-cols-3 gap-8">

                                {/* Other Services */}
                                <div className="space-y-4">
                                    <div className="bg-secondary-pink/30 p-3 rounded-lg flex items-center gap-3">
                                        <div className="font-bold text-slate-900 text-sm">Other Services</div>
                                    </div>
                                    <ul className="space-y-2 text-sm text-slate-600 font-normal normal-case">
                                        <li><Link href="/services/ui-ux-graphic-design" className="hover:text-primary hover:tracking-wide transition-all">UI/UX Graphic Design</Link></li>
                                        <li><Link href="/services/cloud" className="hover:text-primary hover:tracking-wide transition-all">Cloud Solutions</Link></li>
                                        <li><Link href="/services/block-chain" className="hover:text-primary hover:tracking-wide transition-all">Blockchain Development</Link></li>
                                        <li><Link href="/services/devops" className="hover:text-primary hover:tracking-wide transition-all">DevOps Services</Link></li>
                                        <li><Link href="/services/salesforce" className="hover:text-primary hover:tracking-wide transition-all">Salesforce</Link></li>
                                    </ul>
                                </div>

                                {/* Development Services */}
                                <div className="space-y-4">
                                    <div className="bg-secondary-green p-3 rounded-lg flex items-center gap-3">
                                        <div className="font-bold text-slate-900 text-sm">Development Services</div>
                                    </div>
                                    <ul className="space-y-2 text-sm text-slate-600 font-normal normal-case">
                                        <li><Link href="/services/web-development" className="hover:text-primary hover:tracking-wide transition-all">Web Development</Link></li>
                                        <li><Link href="/services/mobile-app-development" className="hover:text-primary hover:tracking-wide transition-all">Mobile App Development</Link></li>
                                        <li><Link href="/services/ai-development" className="hover:text-primary hover:tracking-wide transition-all">AI Development</Link></li>
                                        <li><Link href="/services/erp-development" className="hover:text-primary hover:tracking-wide transition-all">ERP Development</Link></li>
                                        <li><Link href="/services/crm-development" className="hover:text-primary hover:tracking-wide transition-all">CRM Development</Link></li>
                                        <li><Link href="/services/iot-development" className="hover:text-primary hover:tracking-wide transition-all">IoT Development</Link></li>
                                    </ul>
                                </div>

                                {/* Digital Marketing */}
                                <div className="space-y-4">
                                    <div className="bg-secondary-purple/30 p-3 rounded-lg flex items-center gap-3">
                                        <div className="font-bold text-slate-900 text-sm">Digital Marketing</div>
                                    </div>
                                    <ul className="space-y-2 text-sm text-slate-600 font-normal normal-case">
                                        <li><Link href="/services/search-engine-optimization" className="hover:text-primary hover:tracking-wide transition-all">SEO Optimization</Link></li>
                                        <li><Link href="/services/social-media-marketing" className="hover:text-primary hover:tracking-wide transition-all">Social Media Marketing</Link></li>
                                        <li><Link href="/services/pay-per-click" className="hover:text-primary hover:tracking-wide transition-all">Pay Per Click (PPC)</Link></li>
                                        <li><Link href="/services/content-marketing" className="hover:text-primary hover:tracking-wide transition-all">Content Marketing</Link></li>
                                        <li><Link href="/services/email-marketing" className="hover:text-primary hover:tracking-wide transition-all">Email Marketing</Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <Link href="/careers" className="hover:text-primary transition-colors">CAREERS</Link>
                        <Link href="/blogs" className="hover:text-primary transition-colors">BLOG</Link>
                        <Link href="/contact-us" className="hover:text-primary transition-colors">CONTACT</Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/brochure"
                            className="flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full text-[12px] font-bold tracking-widest btn-hover-effect group border-2 border-transparent hover:border-primary shadow-lg"
                        >
                            BROCHURE
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
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

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-slate-100 max-h-[80vh] overflow-y-auto">
                    <div className="flex flex-col p-4 font-bold text-sm text-slate-800">
                        <Link href="/about-us" className="py-3 border-b border-slate-50">COMPANY</Link>

                        <button
                            className="flex items-center justify-between py-3 border-b border-slate-50"
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                            SERVICES
                            <ChevronDown size={14} className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isServicesOpen && (
                            <div className="bg-slate-50 p-4 space-y-4">
                                <div className="font-bold text-primary text-xs uppercase">Development</div>
                                <Link href="/services/web-development" className="block text-slate-600 font-normal py-1">Web Development</Link>
                                <Link href="/services/mobile-app-development" className="block text-slate-600 font-normal py-1">App Development</Link>

                                <div className="font-bold text-primary text-xs uppercase mt-2">Marketing</div>
                                <Link href="/services/search-engine-optimization" className="block text-slate-600 font-normal py-1">SEO</Link>
                            </div>
                        )}

                        <Link href="/careers" className="py-3 border-b border-slate-50">CAREERS</Link>
                        <Link href="/blogs" className="py-3 border-b border-slate-50">BLOG</Link>
                        <Link href="/contact-us" className="py-3 border-b border-slate-50">CONTACT</Link>
                    </div>
                </div>
            )}
        </header>
    );
}
