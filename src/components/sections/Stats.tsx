const stats = [
  {
    id: 1,
    value: "100+",
    label: "Global brands trust as digital-tech partner",
    bg: "bg-[#e5f7ff]",
  }, // Blueish
  {
    id: 2,
    value: "50+",
    label: "Experience-rich eCommerce sites built",
    bg: "bg-[#fcedda]",
  }, // Peach
  {
    id: 3,
    value: "100+",
    label: "Personnel working directly",
    bg: "bg-[#e7fce7]",
  }, // Greenish
  {
    id: 4,
    value: "100+",
    label: "Apps Delivered Successfully",
    bg: "bg-[#feddf5]",
  }, // Pinkish
];

export default function Stats() {
  return (
    <section className="py-20 pb-23 bg-white flex  flex-col gap-4 pb-0">
      <div className="container 2xl:max-w-[1536px] w-full">
        <div className="text-center  flex mb-12">
          <h3 className="font-bold  relative  text-xl sm:text-xl lg:text-2xl mb-4 px-6 max-w-[78%]  mx-auto w-full text-justify lg:text-center">
            Partner with Portnext Innovation to unlock tailored, scalable
            solutions that drive innovation and efficiency for your
            enterprise—trust our expertise to elevate your business.
            <span className="text-[30px] absolute left-2 top-0 md:text-[40px] leading-tight">
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"></path>
                </g>
              </svg>
            </span>
            <span className="text-[30px] md:text-[40px] ml-1 mt-2 absolute">
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                </g>
              </svg>
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`${stat.bg} p-4  rounded-3xl h-[150px] relative`}
            >
              <div className="bg-white left-[10%]  top-12 absolute rounded-2xl w-[80%] h-[180px] flex flex-col items-center justify-center p-6 text-center  !drop-shadow-[0_9px_9px_rgba(164,199,254,0.20)]">
                <div className="text-4xl font-extrabold text-[#111] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-600 leading-relaxed max-w-[150px]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#F2F6FB] lg:h-32 h-16"></div>
    </section>
  );
}
