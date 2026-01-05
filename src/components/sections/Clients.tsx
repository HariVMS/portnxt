export default function Clients() {
    // Placeholder structure for clients
    const clients = Array(10).fill(null).map((_, i) => ({ id: i, name: `Client ${i + 1}` }));

    return (
        <section className="py-16 bg-white border-b border-slate-100">
            <div className="container">
                <div className="text-center mb-8">
                    <span className="text-sm font-bold text-slate-400 tracking-widest uppercase">Trusted by leading companies</span>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {clients.map((client) => (
                        <div key={client.id} className="h-12 w-32 bg-slate-100 rounded flex items-center justify-center font-bold text-slate-300">
                            {/* Ideally use <Image> here with actual logos */}
                            LOGO {client.id + 1}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
