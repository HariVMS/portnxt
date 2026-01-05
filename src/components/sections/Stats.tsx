export default function Stats() {
    const stats = [
        { number: "100+", label: "Projects Completed", bg: "bg-blue-500" },
        { number: "50+", label: "Happy Clients", bg: "bg-orange-500" },
        { number: "10+", label: "Years Experience", bg: "bg-green-500" },
        { number: "24/7", label: "Support Available", bg: "bg-pink-500" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className={`${stat.bg} rounded-2xl p-8 text-white text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg`}
                        >
                            <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.number}</div>
                            <div className="text-lg font-medium opacity-90">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
