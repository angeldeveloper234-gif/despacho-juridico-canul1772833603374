import { motion } from "framer-motion";

export function Features() {
    const areas = [
        {
            id: "01",
            title: "Derecho Familiar",
            description: "Divorcios, pensiones y custodia. Soluciones empáticas para momentos difíciles.",
            icon: "⚖️"
        },
        {
            id: "02",
            title: "Litigio Civil",
            description: "Defensa de patrimonio, contratos y disputas civiles con estrategia firme.",
            icon: "🏛️"
        },
        {
            id: "03",
            title: "Defensa Penal",
            description: "Representación técnica y ética en procesos penales en Quintana Roo.",
            icon: "🛡️"
        }
    ];

    return (
        <section id="features" className="py-32 bg-[#0F1216] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-2xl">
                        <p className="text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase mb-4 font-bold">
                            Nuestra Experiencia
                        </p>
                        <h2 className="text-5xl md:text-7xl font-display text-white leading-tight">
                            Áreas de <span className="text-[#D4AF37] italic">Práctica</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                    {areas.map((area, index) => (
                        <motion.div
                            key={area.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative p-12 bg-[#0F1216] hover:bg-[#141414] transition-all duration-700"
                        >
                            <span className="font-mono text-[10px] text-[#D4AF37] mb-8 block opacity-50">SERVICIO {area.id}</span>

                            <h3 className="text-3xl font-display text-white mb-6 group-hover:text-[#D4AF37] transition-colors">
                                {area.title}
                            </h3>

                            <p className="text-zinc-500 font-sans font-light text-base leading-relaxed">
                                {area.description}
                            </p>

                            <div className="pt-8 mt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs text-white uppercase tracking-wider font-bold">Más Información &rarr;</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}