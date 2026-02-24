import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Creativity",
    desc: "Unleashing innovative ideas and solutions through imaginative thinking.",
  },
  {
    title: "Innovative Thinking",
    desc: "Generating novel ideas and solutions through creative and unconventional thinking.",
  },
  {
    title: "Rapid Solutions",
    desc: "Delivering quick and effective answers or resolutions.",
  },
  {
    title: "Top-Notch Support",
    desc: "Providing exceptional and reliable assistance or service.",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 px-5 sm:px-4 lg:py-14 overflow-hidden font-sans bg-[#0c1015]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/Home/background-banner.svg"
          alt="Background"
          fill
          className="object-cover opacity-100" // Assuming the SVG includes the dark gradient/tones
          priority
        />
      </div>

      <div className="container relative z-10 2xl:max-w-[1536px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 xl:grid 2xl:grid-cols-[1fr_400px]">

          {/* Left Content */}
          <div className="flex-1 w-full text-left">
            <div className="mb-12">
              <span className="text-[#51BAE9] font-medium text-lg block mb-3">
                What Makes us Different?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[25px] font-bold text-white leading-tight max-w-3xl">
                We offer solutions to simplify our software solutions for our clients.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
              {/* Feature 1 */}
              <div className="py-8 md:pr-8 border-b border-white md:border-r">
                <FeatureItem feature={features[0]} />
              </div>
              {/* Feature 2 */}
              <div className="py-8 md:pl-8 border-b border-white ">
                <FeatureItem feature={features[1]} />
              </div>
              {/* Feature 3 */}
              <div className="pt-8 pb-8 md:pb-0 md:pr-8 border-b md:border-b-0 border-white md:border-r">
                <FeatureItem feature={features[2]} />
              </div>
              {/* Feature 4 */}
              <div className="pt-8 md:pl-8">
                <FeatureItem feature={features[3]} />
              </div>
            </div>
          </div>

          {/* Right Content - Robot Image */}
          <div className="flex-1 relative flex justify-center items-center w-full">
            <div className="relative w-full max-w-[400px]">
              <Image
                src="/img/Home/makeus.svg"
                alt="AI Robot"
                width={1000}
                height={1000}
                className="w-full h-full animate-float-slow drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureItem({ feature }: { feature: { title: string; desc: string } }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor" className="h-6 w-6 text-[#9CE0FF]"><path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path></svg></span>
        <h4 className="text-white font-bold text-lg">{feature.title}</h4>
      </div>
      <p className="text-slate-200 text-sm leading-relaxed ">
        {feature.desc}
      </p>
    </div>
  );
}
