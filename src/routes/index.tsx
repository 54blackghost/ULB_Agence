import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/ulb/Nav";
import { Hero } from "@/components/ulb/Hero";
import { About } from "@/components/ulb/About";
import { Services } from "@/components/ulb/Services";
import { Marketplace } from "@/components/ulb/Marketplace";
import { Portfolio } from "@/components/ulb/Portfolio";
import { Stats } from "@/components/ulb/Stats";
import { Testimonials } from "@/components/ulb/Testimonials";
import { Contact } from "@/components/ulb/Contact";
import { Footer } from "@/components/ulb/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ULB Agence — Build Visibility. Build Influence." },
      { name: "description", content: "ULB Agence is a creative tech agency helping African startups, creators and brands grow through design, media, AI and digital visibility." },
      { property: "og:title", content: "ULB Agence — African Creative Tech Agency" },
      { property: "og:description", content: "Branding, web, mobile, AI, marketing and content production for the next generation of African brands." },
    ],
  }),
});

function Index() {
  return (
    <main className="dark min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Marketplace />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
