import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function StickyCallBar() {
    const { contactInfo } = config;
    const cleanPhone = contactInfo.phone.replace(/[^0-9]/g, '');

    return (
        <div id="sticky-call-bar" className="fixed bottom-0 left-0 right-0 z-40 bg-[#0F1216] border-t border-zinc-800 p-4 pb-safe flex gap-4 md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.5)]">
            <Button
                className="flex-1 bg-green-600 hover:bg-green-700 text-white border-none shadow-lg shadow-green-500/20 rounded-none uppercase tracking-wider font-bold text-xs"
                onClick={() => window.open(`https://wa.me/${cleanPhone}`, '_blank')}
            >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
            </Button>
            <Button
                className="flex-1 bg-[#D4AF37] hover:bg-[#b5952f] text-black border-none shadow-lg shadow-[#D4AF37]/20 rounded-none uppercase tracking-wider font-bold text-xs"
                onClick={() => window.location.href = `tel:${cleanPhone}`}
            >
                <Phone className="w-4 h-4 mr-2" />
                Llamar
            </Button>
        </div>
    );
}