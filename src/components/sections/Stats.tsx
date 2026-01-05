const stats = [
    { id: 1, value: "100+", label: "Global brands trust as digital-tech partner", bg: "bg-[#e5f7ff]" }, // Blueish
    { id: 2, value: "50+", label: "Experience-rich eCommerce sites built", bg: "bg-[#fcedda]" }, // Peach
    { id: 3, value: "100+", label: "Personnel working directly", bg: "bg-[#e7fce7]" }, // Greenish
    { id: 4, value: "100+", label: "Apps Delivered Successfully", bg: "bg-[#feddf5]" }, // Pinkish
];

export default function Stats() {
    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold leading-relaxed max-w-4xl mx-auto">
                        <span className="text-[30px] md:text-[40px] leading-tight block mb-4">❝</span>
                        Partner with Portnext Innovation to unlock tailored, scalable solutions that drive innovation and efficiency for your enterprise—trust our expertise to elevate your business.
                        <span className="text-[30px] md:text-[40px] leading-tight block mt-2">❞</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className={`${stat.bg} p-4 rounded-3xl h-[220px] relative`}
                        >
                            <div className="bg-white rounded-2xl h-full flex flex-col items-center justify-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl font-extrabold text-[#111] mb-2">{stat.value}</div>
                                <div className="text-sm font-medium text-slate-600 leading-relaxed max-w-[150px]">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
