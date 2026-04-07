import Image from "next/image";

const tools = [
  { name: "Python", icon: "/img/Home/tools/python.svg" },
  { name: "PHP", icon: "/img/Home/tools/php.svg" },
  { name: "Angular", icon: "/img/Home/tools/angular.svg" },
  { name: "React JS", icon: "/img/Home/tools/react.svg" },
  { name: "Javascript", icon: "/img/Home/tools/js.svg" },
  { name: "Laravel", icon: "/img/Home/tools/laravel.svg" },
  { name: "VS Code", icon: "/img/Home/tools/vscode.svg" },
  { name: "Java", icon: "/img/Home/tools/java.svg" },
  { name: "Mongo DB", icon: "/img/Home/tools/mongodb.svg" },
  { name: "Adobe XD", icon: "/img/Home/tools/xd.svg" },
  { name: "Node JS", icon: "/img/Home/tools/nodejs.svg" },
  { name: "Firebase", icon: "/img/Home/tools/firebase.svg" },
  { name: "MySQL", icon: "/img/Home/tools/mysql.svg" },
  { name: "Microsoft .Net", icon: "/img/Home/tools/microsoftnet.svg" },
  { name: "HTML", icon: "/img/Home/tools/html.svg" },
  { name: "Tailwind CSS", icon: "/img/Home/tools/tailwind.svg" },
  { name: "Bootstrap", icon: "/img/Home/tools/bootstrap.svg" },
  { name: "Adobe illustrator", icon: "/img/Home/tools/adobe-illutrator.svg" },
];

export default function Tools() {
  return (
    <section className="relative py-12 text-white font-sans">
      <div className=" w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#51BAE9] font-medium text-lg block mb-2">
            Editors & Languages
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-4xl mx-auto leading-normal">
            We've 70+ of your favorite languages And then integrated them with
            40+ editors.
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="flex flex-wrap justify-center  gap-4 md:gap-0">
          <div className="grid w-[97%] xl:w-[97%] lg:w-full gap-5 p-4 xs:grid-cols-2 md:xs:grid-cols-4  lg:grid-cols-7 xl:grid-cols-7">
            {tools.slice(0, 7).map((tool, idx) => (
              <div
                key={idx}
                className=" flex flex-col p-2 lg:pr-10 space-y-3 pt-5 transition-all duration-500 bg-white rounded-[30px] lg:p-4 lg:flex-row lg:space-y-0 lg:space-x-4 items-center bg-[linear-gradient(311deg,_#3C4446_0%,_#202D2C_100%)]"
              >
                <div className="w-20 h-20 relative flex items-center justify-center">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-white text-sm md:text-base">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
          <div className="grid xl:w-[90%] lg:w-[94  %] w-[97%] gap-5 p-4 xs:grid-cols-2 md:xs:grid-cols-4  lg:grid-cols-6">
            {tools.slice(7, 13).map((tool, idx) => (
              <div
                key={idx}
                className=" flex flex-col p-2 lg:pr-10 space-y-3 pt-5 transition-all duration-500 bg-white rounded-[30px] lg:p-4 lg:flex-row lg:space-y-0 lg:space-x-4 items-center bg-[linear-gradient(311deg,_#3C4446_0%,_#202D2C_100%)]"
              >
                <div className="w-20 h-20 relative flex items-center justify-center">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-white text-sm md:text-base">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
          <div className="grid xl:w-[80%] lg:w-[90%]  w-[97%] gap-5 p-4 xs:grid-cols-2 md:xs:grid-cols-4  lg:grid-cols-5">
            {tools.slice(13).map((tool, idx) => (
              <div
                key={idx}
                className=" flex flex-col p-2 lg:pr-10 space-y-3 pt-5 transition-all duration-500 bg-white rounded-[30px] lg:p-4 lg:flex-row lg:space-y-0 lg:space-x-4 items-center bg-[linear-gradient(311deg,_#3C4446_0%,_#202D2C_100%)]"
              >
                <div className="w-20 h-20 relative flex items-center justify-center">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-white text-sm md:text-base">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/img/Home/tools/banner-tool.svg"
        alt="background"
        fill
        priority
        className="object-cover object-center -z-10"
      />
    </section>
  );
}
