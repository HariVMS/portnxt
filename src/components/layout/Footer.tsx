import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#111111] text-[#999] text-sm font-sans pt-20 pb-10 relative">
            {/* Main Footer Content */}
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Column 1: Quick Menu */}
                    <div>
                        <h4 className="text-white font-[800] mb-8 text-[18px] tracking-wide uppercase">Quick Menu</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about-us" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> About Us</Link></li>
                            <li><Link href="/portfolio" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> Portfolio</Link></li>
                            <li><Link href="/team" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> Our Team</Link></li>
                            <li><Link href="/online-course" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> Online Course</Link></li>
                            <li><Link href="/partners" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> Partners</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Development Service */}
                    <div>
                        <h4 className="text-white font-[800] mb-8 text-[18px] tracking-wide uppercase">Development</h4>
                        <ul className="space-y-4">
                            <li><Link href="/services/web-development" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> Web Development</Link></li>
                            <li><Link href="/services/mobile-app-development" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> Mobile App Dev</Link></li>
                            <li><Link href="/services/cloud" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> Cloud Solutions</Link></li>
                            <li><Link href="/services/ai-development" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> AI & ML</Link></li>
                            <li><Link href="/services/iot-development" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> IoT Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Digital Marketing */}
                    <div>
                        <h4 className="text-white font-[800] mb-8 text-[18px] tracking-wide uppercase">Marketing</h4>
                        <ul className="space-y-4">
                            <li><Link href="/services/search-engine-optimization" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> SEO Optimization</Link></li>
                            <li><Link href="/services/social-media-marketing" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> SMM</Link></li>
                            <li><Link href="/services/pay-per-click" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> PPC Advertising</Link></li>
                            <li><Link href="/services/content-marketing" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> Content Marketing</Link></li>
                            <li><Link href="/services/email-marketing" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> Email Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Industries */}
                    <div>
                        <h4 className="text-white font-[800] mb-8 text-[18px] tracking-wide uppercase">Industries</h4>
                        <ul className="space-y-4">
                            <li><Link href="/industries/healthcare" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> Healthcare</Link></li>
                            <li><Link href="/industries/finance" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> Finance</Link></li>
                            <li><Link href="/industries/education" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> Education</Link></li>
                            <li><Link href="/industries/real-estate" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> Real Estate</Link></li>
                            <li><Link href="/industries/retail" className="hover:text-primary transition-colors flex items-center gap-2 text-[15px] font-medium"><span className="text-primary text-xs">■</span> Retail</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Contact Info */}
                    <div>
                        <h4 className="text-white font-[800] mb-8 text-[18px] tracking-wide uppercase">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded bg-[#222] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <MapPin size={18} />
                                </div>
                                <div className="flex-1">
                                    <div className="text-white font-bold mb-1">Our Location</div>
                                    <div className="leading-snug">Makelink Innovation, Delhi, India</div>
                                </div>
                            </li>
                            <li className="flex gap-4 group cursor-pointer">
                                <a href="tel:+919667949121" className="w-10 h-10 rounded bg-[#222] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Phone size={18} />
                                </a>
                                <div className="flex-1">
                                    <div className="text-white font-bold mb-1">Phone Number</div>
                                    <div className="leading-snug">+91 96679 49121</div>
                                </div>
                            </li>
                            <li className="flex gap-4 group cursor-pointer">
                                <a href="mailto:sales@makelinkit.com" className="w-10 h-10 rounded bg-[#222] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Mail size={18} />
                                </a>
                                <div className="flex-1">
                                    <div className="text-white font-bold mb-1">Email Address</div>
                                    <div className="leading-snug">sales@makelinkit.com</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 mt-16 pt-8">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-[15px]">
                        Copyright © 2025 <span className="text-white font-bold">Makelink Innovation</span>. All Rights Reserved.
                    </div>
                    <div className="flex gap-3">
                        <a href="#" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center hover:bg-facebook hover:text-white transition-all"><Facebook size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center hover:bg-twitter hover:text-white transition-all"><Twitter size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center hover:bg-instagram hover:text-white transition-all"><Instagram size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center hover:bg-linkedin hover:text-white transition-all"><Linkedin size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center hover:bg-youtube hover:text-white transition-all"><Youtube size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
