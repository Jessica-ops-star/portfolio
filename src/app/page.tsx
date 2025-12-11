'use client'
import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function App() {
  return (
    <div className="app-root">
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
      </main>
      {/* Add other sections (About, Projects, Contact) below if needed */}
    </div>
  );
}
