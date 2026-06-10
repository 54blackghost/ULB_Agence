import { motion } from "framer-motion";
import { ArrowUpRight, Palette, Globe, Smartphone, Layout, Sparkles, Share2, Video, Image as ImageIcon, Megaphone, Search, Users } from "lucide-react";

const services = [
  { icon: Palette, title: "Branding & Identity", desc: "Logo systems, brand books, visual languages that earn trust." },
  { icon: Globe, title: "Website Development", desc: "Fast, SEO-ready sites built on modern stacks." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native-feeling iOS & Android products users love." },
  { icon: Sparkles, title: "AI Solutions", desc: "Custom AI agents, automations and integrations." },
  { icon: Share2, title: "Social Media Management", desc: "Full-funnel strategy + daily content operations." },
  { icon: Video, title: "Video Editing", desc: "Cinematic edits, reels, ads and brand films." },
  { icon: ImageIcon, title: "Graphic Design", desc: "Pitch decks, posters, packaging and campaigns." },
  { icon: Megaphone, title: "Advertising & Marketing", desc: "Performance-driven Meta, Google & TikTok ads." },
  { icon: Users, title: "Community Management", desc: "Build loyal audiences across Discord, WhatsApp & more." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Everything you need to <span className="text-gradient">grow</span> — under one roof.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            A senior team of designers, engineers and strategists working as your in-house creative force.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.a
              href="#contact"
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group relative glass rounded-2xl p-6 hover:bg-white/[0.05] transition overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-3xl transition" />
              <div className="relative flex items-start justify-between">
                <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary grid place-items-center ring-1 ring-primary/30 group-hover:scale-110 transition">
                  <s.icon size={20} />
                </div>
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="relative mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
