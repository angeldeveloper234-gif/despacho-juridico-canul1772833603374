import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Contact() {
    const { contactInfo } = config;

    return (
        <section id="contact" className="relative py-32 bg-[#0F1216]">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <h2 className="text-5xl font-display text-white mb-12">
                            Contacto <span className="text-[#D4AF37]">Directo</span>
                        </h2>

                        <div className="space-y-8 mb-16">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-[#D4AF37] mt-1" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-sm mb-2 font-bold">Dirección</h4>
                                    <p className="text-zinc-400">{contactInfo.address}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-[#D4AF37] mt-1" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-sm mb-2 font-bold">Teléfono</h4>
                                    <p className="text-zinc-400">{contactInfo.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-[#D4AF37] mt-1" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-sm mb-2 font-bold">Email</h4>
                                    <p className="text-zinc-400">{contactInfo.email}</p>
                                </div>
                            </div>
                        </div>

                        <Button
                            className="w-full bg-white text-black hover:bg-[#D4AF37] rounded-none py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300"
                            onClick={() => window.open(`https://wa.me/${contactInfo.phone.replace('+', '')}`, '_blank')}
                        >
                            ENVIAR WHATSAPP
                        </Button>
                    </div>

                    {/* Map Visual */}
                    <div className="h-[500px] w-full bg-zinc-900 relative overflow-hidden grayscale invert contrast-125 brightness-75 border border-white/5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.7!2d-88.2!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiTiA4OMKwMTInMDAuMCJX!5e0!3m2!1ses!2smx!4v1600000000000!5m2!1ses!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}