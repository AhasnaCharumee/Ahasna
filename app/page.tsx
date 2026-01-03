"use client";

import Hero from "@/components/hero";
import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import About from "@/components/about";
import Projects from "@/components/project";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/loading-screen";
import FadeInSection from "@/components/fade-in-section";
import ChatWidget from "@/components/chat-widget";
export default function Home() {
    const [activeSection, setActiveSection] = useState("home")
    const [isLoading, setIsLoading] = useState(true)

     useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <main>

      <LoadingScreen isLoading={isLoading} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <FadeInSection delay={0}>
        <Hero setActiveSection={setActiveSection} />
      </FadeInSection>

      <FadeInSection delay={200}>
        <About />
      </FadeInSection>

      <FadeInSection delay={400}>
        <Projects />
      </FadeInSection>

      <FadeInSection delay={600}>
        <Skills />
      </FadeInSection>

      <FadeInSection delay={800}>
        <Contact />
      </FadeInSection>

      <FadeInSection delay={1000}>
        <Footer />
      </FadeInSection>

      <ChatWidget />
    </main>
  );
}
