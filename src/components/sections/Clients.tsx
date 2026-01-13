import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const clients = [
  "aanand.webp",
  "AggrwalUdyogLogo.webp",
  "karify.webp",
  "aanand.webp",
  "AggrwalUdyogLogo.webp",
  "karify.webp",
  "aanand.webp",
  "AggrwalUdyogLogo.webp",
  "karify.webp",
  "aanand.webp",
  "AggrwalUdyogLogo.webp",
];

export default function Clients() {
  return (
    <section className="py-12 bg-white">
      <div className="container 2xl:max-w-[1536px]">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center text-center pb-5">
          <h2 className="font-bold text-xl sm:text-3xl md:text-3xl mb-2 lg:mb-4 !font-brandon">
            Esteem Clients
          </h2>
          <span className="font-medium text-[16px] lg:text-[17px] px-4 leading-[1.4] !font-brandon ">
            Together, we embark on a journey where your goals align with our
            expertise, leading to innovative solutions and exceptional results.
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {clients.map((client, index) => (
            <div
              key={index}
              className=" lg:p-7 p-4 border border-[#cadeff] group drop-shadow-[0_9px_9px_rgba(164,199,254,0.20)] rounded-2xl duration-500 transition "
            >
              <Image
                src={`/img/Home/${client}`}
                alt="Client Logo"
                width={120}
                height={60}
                className="h-16 w-full  object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
              />
            </div>
          ))}

          {/* View More Button as the last item */}
          <div className="flex items-center justify-center h-30">
            <Link
              href="/portfolio"
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-[10px] text-xs font-bold hover:bg-blue-700 transition-colors shadow"
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
