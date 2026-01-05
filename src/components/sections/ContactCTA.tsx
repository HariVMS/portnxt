import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function ContactCTA() {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="container relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                    Let's Talk About Your <br />
                    <span className="text-primary">Business's Requirements</span>
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto mb-10 text-lg">
                    Have a project in mind? We'd love to hear from you. Get in touch with us to discuss your goals and how we can help you achieve them.
                </p>

                <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-primary hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1"
                >
                    <PhoneCall size={20} />
                    GET A CALLBACK
                </Link>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </section>
    );
}
