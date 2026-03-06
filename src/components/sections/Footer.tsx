import { config } from "@/config";

export function Footer() {
    const { branding } = config;

    return (
        <footer className="bg-[#0F1216] text-white pt-24 pb-12 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-center mb-24 text-center">
                    <h2 className="text-[8vw] leading-none font-display font-bold text-white/5 select-none tracking-tighter uppercase">
                        CANUL & ASOCIADOS
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
                    <div className="mb-8 md:mb-0">
                        <p className="text-zinc-500 text-sm font-sans uppercase tracking-[0.2em]">
                            © {new Date().getFullYear()} {branding.name}.
                            <br />
                            <span className="text-[10px] opacity-50">Todos los derechos reservados.</span>
                        </p>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="text-zinc-500 hover:text-[#D4AF37] text-[10px] uppercase tracking-widest transition-colors font-bold">Aviso de Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}