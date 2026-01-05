import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const clients = [
    "aanand.webp", "AggrwalUdyogLogo.webp", "karify.webp", "dofast.webp", "fasttrack.webp", "high_tech.webp",
    "ayurherbals.webp", "karefy.webp", "kzen.webp", "loomsolar.webp", "luxe.webp", "net_squad.webp",
    "radium_box.webp", "redon.webp", "savya.webp", "securico.webp", "travcorp.webp"
];

export default function Clients() {
    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Esteem Clients</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Together, we embark on a journey where your goals align with our expertise, leading to innovative solutions and exceptional results.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {clients.map((client, index) => (
                        <div key={index} className="flex items-center justify-center bg-white border border-slate-100/80 rounded-lg p-4 h-24 hover:shadow-md transition-shadow">
                            <Image
                                src={`/img/Home/${client}`}
                                alt="Client Logo"
                                width={120}
                                height={60}
                                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                            />
                        </div>
                    ))}

                    {/* View More Button as the last item */}
                    <div className="flex items-center justify-center h-24">
                        <Link
                            href="/portfolio"
                            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-blue-700 transition-colors shadow-lg"
                        >
                            View More
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
