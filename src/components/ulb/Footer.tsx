import { Facebook, MessageCircle, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-primary-glow grid place-items-center font-display font-bold text-primary-foreground">U</div>
              <span className="font-display text-lg font-semibold">ULB <span className="text-primary">Agence</span></span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Africa's creative tech agency. Helping brands, startups and creators build visibility and influence.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex max-w-sm gap-2">
              <input type="email" placeholder="Your email" className="flex-1 h-11 rounded-full bg-input/40 border border-border px-4 text-sm focus:outline-none focus:border-primary/60 transition" />
              <button className="h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90 transition">Subscribe</button>
            </form>
          </div>

          <FooterCol title="Services" links={["Branding", "Web Dev", "Mobile Apps", "UI/UX", "AI Solutions", "SEO"]} />
          <FooterCol title="Marketplace" links={["Design Packs", "Templates", "Video Services", "Branding Kits", "AI Tools"]} />
          <FooterCol title="Company" links={["About", "Work", "Contact", "Careers", "Press Kit"]} />
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ULB Agence. Crafted in Africa, built for the world.</p>
          <div className="flex items-center gap-3">
            <a aria-label="Facebook" href="#" className="h-9 w-9 grid place-items-center rounded-full glass hover:text-primary transition"><Facebook size={14} /></a>
            <a aria-label="TikTok" href="#" className="h-9 w-9 grid place-items-center rounded-full glass hover:text-primary transition"><Music2 size={14} /></a>
            <a aria-label="WhatsApp" href="https://wa.me/237678994026" className="h-9 w-9 grid place-items-center rounded-full glass hover:text-primary transition"><MessageCircle size={14} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="font-display font-semibold text-sm">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
