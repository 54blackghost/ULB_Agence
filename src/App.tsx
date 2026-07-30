
import './App.css'
import { About } from './components/ulb/About'
import { Contact } from './components/ulb/Contact'
import { Footer } from './components/ulb/Footer'
import { Hero } from './components/ulb/Hero'
import { Marketplace } from './components/ulb/Marketplace'
import { Nav } from './components/ulb/Nav'
import { Portfolio } from './components/ulb/Portfolio'
import { Services } from './components/ulb/Services'
import { Stats } from './components/ulb/Stats'
import { Testimonials } from './components/ulb/Testimonials'

function App() {
  

  return (
    <>
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
    </>
  )
}

export default App
