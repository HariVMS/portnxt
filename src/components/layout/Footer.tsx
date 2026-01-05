import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#111] text-slate-400 text-sm">
            {/* Main Footer Content */}
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                    {/* Column 1: Quick Menu */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Quick Menu</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
                            <li><Link href="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Development Service */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Development Service</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Mobile App Dev</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">AI & ML</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">IoT Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Digital Marketing */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Digital Marketing</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Social Media Marketing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">PPC Advertising</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Content Marketing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Email Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Industries */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Industries</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-primary transition-colors">Healthcare</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Finance</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Education</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Real Estate</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Retail</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-primary shrink-0" />
                                <span>123 Innovation Drive, Tech Park, India</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>+91 96679 49121</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>sales@makelinkit.com</span>
                            </li>
                        </ul>
                        <div className="flex gap-3 mt-6">
                            <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Facebook size={16} /></a>
                            <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Twitter size={16} /></a>
                            <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Instagram size={16} /></a>
                            <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Linkedin size={16} /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 py-6">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        © 2025 <span className="text-white font-bold">Makelink Innovation</span>. All Rights Reserved.
                    </div>
                    <div className="flex gap-6">
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
