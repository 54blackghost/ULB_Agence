import { motion } from "framer-motion";
import p1 from "/src/assets/port-1.jpg";
import p2 from "/src/assets/port-2.jpg";
import p3 from "/src/assets/port-3.jpg";
import p4 from "/src/assets/port-4.jpg";
import p5 from "/src/assets/port-5.jpg";
import p6 from "/src/assets/port-6.jpg";

const items = [
  { img: p2, title: "Sahara Analytics", tag: "SaaS Dashboard", span: "lg:col-span-2 lg:row-span-2" },
  { img: p1, title: "Nova Wallet", tag: "Mobile App" },
  { img: p3, title: "Hichracy Studio", tag: "Brand Identity" },
  { img: p4, title: "Mwangaza Reels", tag: "Video Campaign", span: "lg:col-span-2" },
  { img: p5, title: "Bantu Labs", tag: "Web Platform" },
  { img: p6, title: "Kweli Social", tag: "Content Pack" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Selected Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Brands & products we've <span className="text-gradient">shipped.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[180px] gap-4">
          {items.map((it, i) => (
            <motion.a
              href="#contact"
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface ${it.span ?? ""}`}
            >
              <img src={it.img} loading="lazy" alt={it.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 group-hover:opacity-95 transition" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] uppercase tracking-wider text-primary">{it.tag}</p>
                <h3 className="font-display text-lg font-semibold">{it.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
