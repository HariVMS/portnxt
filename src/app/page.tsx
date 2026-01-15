import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import Industries from "@/components/sections/Industries";
import Tools from "@/components/sections/Tools";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Clients />
      <Features />
      <Stats />
      <Process />
      <Industries />
      <Tools />
      <ContactCTA />
    </main>
  );
}
