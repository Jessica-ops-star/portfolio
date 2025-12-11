import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import WhatIDo from "@/components/sections/what-i-do";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Achievements from "@/components/sections/achievements";
import Certifications from "@/components/sections/certifications";
import Internship from "@/components/sections/internship";
import Footer from "@/components/footer";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <WhatIDo />
        <Projects />
        <Skills />
        <Achievements />
        <Certifications />
        <Internship />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
