const clients = [
    { name: "Client 1", logo: "🚀" },
    { name: "Client 2", logo: "💡" },
    { name: "Client 3", logo: "🛠️" },
    { name: "Client 4", logo: "📦" },
    { name: "Client 5", logo: "🌐" },
    { name: "Client 6", logo: "📊" },
];

export default function EsteemedClients() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">ESTEEMED CLIENTS</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Trusted by global brands</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Together, we embark on a journey where your goals align with our expertise, leading to innovative solutions and exceptional results.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {clients.map((client, idx) => (
                        <div key={idx} className="bg-white h-32 rounded-3xl flex items-center justify-center p-8 border border-slate-100 grayscale hover:grayscale-0 hover:shadow-xl hover:border-transparent transition-all duration-500">
                            <span className="text-4xl">{client.logo}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
