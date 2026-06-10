import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) animate(count, to, { duration: 2, ease: "easeOut" });
  }, [inView, to, count]);

  return (
    <span className="inline-flex items-baseline">
      <motion.span ref={ref}>{rounded}</motion.span>
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

const stats = [
  { v: 80, s: "+", label: "Projects Completed" },
  { v: 5, s: "+", label: "Brands Helped" },
  { v: 2, s: "+", label: "Videos Produced" },
  { v: 2, s: "+", label: "Countries Reached" },
];

export function Stats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-primary/15 blur-[100px]" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
