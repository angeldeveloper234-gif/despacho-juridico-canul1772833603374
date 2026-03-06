export const config = {
    // Brand Configuration
    branding: {
        name: "Despacho Jurídico Canul & Asociados",
        slogan: "Justicia y Respaldo Legal en Quintana Roo",
        logo: "CANUL & ASOCIADOS",
    },

    // Unique Client ID for this Landing Page
    landingClientId: "59137a2e-90fd-487c-a5f1-06701a19fb5a",

    // --- EXTERNAL SERVICES ---
    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL || "",
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
    },

    analytics: {
        webhookUrl: import.meta.env.VITE_SPEED_WEBHOOK || "",
    },

    // External Links
    bookingUrl: "#contact",
    paymentLink: "#",
    googleMapsReviewUrl: "#",

    // Contact Info
    contactInfo: {
        phone: "+529831073906",
        address: "Av. Bugambilias 604, 77027 Chetumal, Q.R.",
        facebook: "https://www.facebook.com/despacho.juridico.canul.yasociados",
        email: "contacto@despachocanul.com"
    },

    // Dynamic Content (Architecture of Persuasion)
    dynamicContent: {
        city: "Chetumal",
        localAnchor: "Av. Bugambilias 604",
        stats: {
            casesWon: 850,
            experienceYears: 15,
            recoveredAmount: "10.5" // In millions
        },
        specialization: {
            title: "Familiar y Civil",
            pain: "Conflictos Legales",
            ego: "Tranquilidad Familiar",
            hook: "Defensa Sólida"
        },
        roadmap: [
            { step: "01", title: "Diagnóstico", desc: "Análisis profundo de su situación legal en Chetumal." },
            { step: "02", title: "Estrategia", desc: "Diseño de ruta jurídica personalizada y efectiva." },
            { step: "03", title: "Resolución", desc: "Ejecución legal firme para proteger sus intereses." }
        ],
        pricing: {
            basic: "Consulta Inicial",
            comprehensive: "Representación",
            retainer: "Iguala Mensual"
        }
    },

    // Testimonials (Adapted for Context)
    testimonials: [
        {
            name: "María E. González",
            role: "Cliente Verificada",
            text: "Gracias al Lic. Canul pude resolver mi divorcio de manera justa y rápida. Excelente atención en Chetumal.",
            tags: ["Derecho Familiar", "Eficiencia"]
        },
        {
            name: "Roberto Méndez",
            role: "Empresario Local",
            text: "Nos han apoyado con contratos y litigios civiles con resultados impecables. Muy recomendados.",
            tags: ["Litigio Civil", "Confianza"]
        },
        {
            name: "Ana P. Torres",
            role: "Cliente Verificada",
            text: "Atención humana y profesional en un momento muy difícil para mi familia. Se siente el respaldo.",
            tags: ["Trato Humano", "Resultados"]
        }
    ],

    // Demo User Data
    demoUser: {
        name: "Cliente",
        email: "cliente@ejemplo.com",
        whatsapp: "+529831073906"
    },
};