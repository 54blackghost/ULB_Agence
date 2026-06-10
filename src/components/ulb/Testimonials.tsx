import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";

const reviews = [
  { img: t1, name: "Daniel Okafor", role: "Founder, Nova Wallet", text: "ULB rebuilt our entire brand and shipped a beautiful app in 6 weeks. Our signups tripled in the first month." },
  { img: t2, name: "Amina Diallo", role: "CMO, Kweli Media", text: "The most reliable creative partner we've ever worked with. Strategy, design, content — all top tier." },
  { img: t3, name: "Joel Mbeki", role: "CEO, Bantu Labs", text: "They treat our product like their own. Cinematic videos, sharp UI, and conversion-focused thinking throughout." },
  { img: t1, name: "Samuel Adeyemi", role: "Creator, 250K+", text: "I went from chaotic posting to a real content engine. My deals doubled within 90 days." },
];

export function Testimonials() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Trusted by founders, <span className="text-gradient">loved by creators.</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-6 animate-marquee w-max">
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="glass rounded-2xl p-6 w-[360px] shrink-0">
              <Quote size={22} className="text-primary mb-3" />
              <p className="text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={r.img} loading="lazy" alt={r.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/40" />
                <div>
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
