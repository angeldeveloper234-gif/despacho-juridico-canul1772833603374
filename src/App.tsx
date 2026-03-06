import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Feedback } from "./pages/Feedback";
import { UserProvider, useUser } from "@/context/UserContext";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { config } from "@/config";
import { StickyCallBar } from "@/components/features/StickyCallBar";
import LegalBotWidget from "@/components/LegalBotWidget";

import { useMemo } from "react";

function ChatbotManager() {
    const { name, email, clientId } = useUser();
    const query = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : "");

    const metadata = useMemo(() => ({
        clientId,
        source: query.get("utm_source") || "direct",
        medium: query.get("utm_medium") || "organic",
        campaign: query.get("utm_campaign") || "none",
        user_name: name || undefined,
        user_email: email || undefined,
        origin: "landing_page"
    }), [clientId, name, email]);

    return (
        <LegalBotWidget
            botId={config.landingClientId}
            metadata={metadata}
            supabaseUrl={config.supabase.url}
            supabaseKey={config.supabase.anonKey}
        />
    );
}

function App() {
    return (
        <UserProvider>
            <Router>
                <div className="relative min-h-screen bg-[#0F1216] overflow-x-hidden">
                    <div className="noise-bg" />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/feedback" element={<Feedback />} />
                    </Routes>
                    <Footer />
                    <ChatbotManager />
                    <StickyCallBar />
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;