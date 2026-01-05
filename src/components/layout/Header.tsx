import Link from "next/link";
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight, Twitter } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
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
                        <span className="hidden md:inline text-gray-400">Follow Us:</span>
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
            <div className="container bg-white">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="text-3xl font-bold text-primary">M</div>
                        <div className="flex flex-col leading-none">
                            <span className="font-bold text-lg text-slate-800 group-hover:text-primary transition-colors">Makelink</span>
                            <span className="text-[10px] tracking-wider text-slate-500 font-medium">INNOVATION PVT. LTD.</span>
                        </div>
                    </Link>

                    {/* Nav Links */}
                    <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
                        <Link href="/" className="text-primary">COMPANY</Link>
                        <Link href="/services" className="hover:text-primary transition-colors">SERVICES</Link>
                        <Link href="/careers" className="hover:text-primary transition-colors">CAREERS</Link>
                        <Link href="/blog" className="hover:text-primary transition-colors">BLOG</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">CONTACT</Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/brochure"
                            className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wide hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
                        >
                            BROCHURE
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle (Simplified for now) */}
                    <button className="lg:hidden text-slate-800">
                        {/* Icon placeholder */}
                        Currently Hidden
                    </button>
                </div>
            </div>
        </header>
    );
}
