import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import m1 from "@/assets/m1.jpg";
import m2 from "@/assets/m2.jpg";
import m3 from "@/assets/m3.jpg";
import m4 from "@/assets/m4.jpg";
import m5 from "@/assets/m5.jpg";
import m6 from "@/assets/m6.jpg";

const items = [
  { img: m1, cat: "Graphic Design", title: "Afro-Modern Poster Pack", desc: "30+ editable poster templates with bold African typography.", price: "$29" },
  { img: m2, cat: "Website Templates", title: "Startup Landing Kit", desc: "5 production-ready React + Tailwind templates.", price: "$79" },
  { img: m3, cat: "Video Editing", title: "Cinematic Reel Service", desc: "60-sec brand reel — color graded & delivered in 5 days.", price: "$149" },
  { img: m4, cat: "Branding Kits", title: "Founder Brand Identity", desc: "Logo system, palette, type and 20-page brand book.", price: "$249" },
  { img: m5, cat: "Social Media", title: "30-Day Content Pack", desc: "Instagram + TikTok templates for a full month of posts.", price: "$49" },
  { img: m6, cat: "AI Tools", title: "AI Brand Co-Pilot", desc: "Custom GPT trained on your brand voice & assets.", price: "$199" },
];

export function Marketplace() {
  return (
    <section id="marketplace" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Marketplace</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Ready-to-ship <span className="text-gradient">creative products.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Skip the wait. Buy battle-tested templates, services and kits — and launch this week.
            </p>
          </motion.div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <ShoppingBag size={16} /> View full store
          </a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group glass rounded-2xl overflow-hidden hover:bg-white/[0.05] transition flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface relative">
                <img src={it.img} loading="lazy" alt={it.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider glass-strong rounded-full px-2.5 py-1">{it.cat}</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground flex-1">{it.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-primary">{it.price}</span>
                  <a href="#contact" className="inline-flex h-9 items-center rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground hover:opacity-90 transition">
                    Order Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
