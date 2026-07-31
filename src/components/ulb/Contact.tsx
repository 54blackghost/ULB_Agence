import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send, Facebook, Music2 } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative glass-strong rounded-3xl p-8 sm:p-10 overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/25 blur-[80px]" />
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Get in touch</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
              Let's build your <span className="text-gradient">next move.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us about your project. We reply within 24 hours.
            </p>

            <div className="mt-8 space-y-3">
              <a href="tel:+237678994026" className="flex items-center gap-3 glass rounded-xl p-4 hover:bg-white/5 transition">
                <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center"><Phone size={18} /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Call</p>
                  <p className="text-sm font-medium">+237 678 994 026</p>
                </div>
              </a>
              <a href="mailto:ulbgroup8@gmail.com" className="flex items-center gap-3 glass rounded-xl p-4 hover:bg-white/5 transition">
                <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center"><Mail size={18} /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">ulbgroup8@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/237678994026" target="_blank" rel="noreferrer"
                 className="flex items-center gap-3 rounded-xl p-4 bg-primary text-primary-foreground glow-orange-sm hover:scale-[1.01] transition">
                <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 grid place-items-center"><MessageCircle size={18} /></div>
                <div>
                  <p className="text-xs opacity-80">Chat instantly</p>
                  <p className="text-sm font-semibold">WhatsApp us now</p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61556011924688" className="h-10 w-10 grid place-items-center rounded-full glass hover:text-primary transition"><Facebook size={16} /></a>
              <a aria-label="TikTok" href="https://www.tiktok.com/@ulb_agence" className="h-10 w-10 grid place-items-center rounded-full glass hover:text-primary transition"><Music2 size={16} /></a>
              <a aria-label="WhatsApp" href="https://wa.me/237678994026" className="h-10 w-10 grid place-items-center rounded-full glass hover:text-primary transition"><MessageCircle size={16} /></a>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:ulbgroup8@gmail.com"; }}
            className="glass rounded-3xl p-8 sm:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground">Full name</label>
                <input required className="mt-1.5 w-full h-11 rounded-xl bg-input/40 border border-border px-4 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Email</label>
                <input required type="email" className="mt-1.5 w-full h-11 rounded-xl bg-input/40 border border-border px-4 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition" placeholder="you@brand.com" />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Project type</label>
              <input className="mt-1.5 w-full h-11 rounded-xl bg-input/40 border border-border px-4 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition" placeholder="Branding, Website, App, AI…" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Tell us about your project</label>
              <textarea required rows={5} className="mt-1.5 w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition resize-none" placeholder="What are you building?" />
            </div>
            <button type="submit" className="group w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground glow-orange-sm hover:scale-[1.01] transition">
              Send Message <Send size={15} className="group-hover:translate-x-0.5 transition" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
