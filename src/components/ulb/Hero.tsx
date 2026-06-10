import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Brush, Film, Code2, Megaphone, Camera } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const floatingCards = [
  { icon: Sparkles, label: "AI", x: "8%", y: "18%", delay: 0 },
  { icon: Brush, label: "Branding", x: "78%", y: "12%", delay: 0.4 },
  { icon: Film, label: "Media", x: "85%", y: "55%", delay: 0.8 },
  { icon: Code2, label: "Web Dev", x: "4%", y: "62%", delay: 1.2 },
  { icon: Megaphone, label: "Marketing", x: "12%", y: "82%", delay: 1.6 },
  { icon: Camera, label: "Content", x: "82%", y: "85%", delay: 2.0 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-24">
      {/* background layers */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" width={1920} height={1280} className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        <div className="absolute inset-0 bg-grid radial-fade opacity-60" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/20 blur-[140px]" />
      </div>

      {/* floating cards (desktop only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {floatingCards.map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + c.delay * 0.1, duration: 0.8 }}
            style={{ left: c.x, top: c.y }}
            className="absolute"
          >
            <div className="animate-float glass rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-elevated"
              style={{ animationDelay: `${c.delay}s` }}>
              <div className="h-9 w-9 rounded-xl bg-primary/15 text-primary grid place-items-center ring-1 ring-primary/30">
                <c.icon size={18} />
              </div>
              <span className="text-sm font-medium">{c.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          African Creative Tech Agency · Est. 2024
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight"
        >
          Build <span className="text-gradient">Visibility.</span>
          <br />
          Build <span className="text-gradient">Influence.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-7 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          ULB Agence helps startups, creators, businesses and brands grow through
          technology, media, design and digital visibility.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#contact" className="group inline-flex items-center gap-2 h-12 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground glow-orange-sm hover:scale-[1.02] transition">
            Start a Project <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 h-12 rounded-full glass-strong px-6 text-sm font-medium hover:bg-white/10 transition">
            Explore Services
          </a>
        </motion.div>

        {/* logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-20"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">Trusted by ambitious teams across Africa</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-muted-foreground/70 font-display font-semibold">
            {["NOVA", "Kweli", "Sahara+", "Bantu Labs", "Yango", "Mwangaza"].map((n) => (
              <span key={n} className="text-base hover:text-foreground transition">{n}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
