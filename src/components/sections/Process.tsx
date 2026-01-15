import { ClipboardList, Search, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";
import Image from "next/image";


export default function Process() {
    return (
        <section className="py-12  bg-slate-50">
            <div className="container 2xl:max-w-[1536px] ">
                <div className="text-center mb-16">
                    <span className="font-bold text-xl sm:text-3xl lg:text-3xl mb-4 text-center">Development Process</span>
                </div>

                <div className="my-19 gap-8">
                    <Image src={'/img/Home/Development Process.webp'} alt="Development Process" height={1600} width={1600}
                        className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
}
