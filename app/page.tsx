import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AboutMe } from "@/components/sections/AboutMe";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <ContactForm />
      <Footer />
    </main>
  );
}
