import { motion } from "framer-motion";
import { Target, Eye, Globe2 } from "lucide-react";

const pillars = [
  { icon: Target, title: "Mission", text: "Empower African businesses, creators and startups with world-class digital tools that drive visibility, influence and measurable growth." },
  { icon: Eye, title: "Vision", text: "Become the leading creative tech partner for the African creator economy — building the brands that will define the next decade." },
  { icon: Globe2, title: "African Innovation", text: "We blend continental culture with global craft. Our work speaks Lagos, Nairobi, Douala — and ships to the world." },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">About ULB Agence</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              A creative tech agency built for <span className="text-gradient">African ambition.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              We're a multidisciplinary studio online focused on helping African businesses, startups and creators
              build the visibility, influence and digital infrastructure they need to compete globally.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From a clean line of code to a viral campaign, from a logo mark to a full product launch —
              we treat every project like a launchpad. Less noise, more signal.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:bg-white/[0.04] transition group"
              >
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary grid place-items-center ring-1 ring-primary/30 group-hover:scale-110 transition">
                    <p.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
