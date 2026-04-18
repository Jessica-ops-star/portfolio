"use client";

import { portfolioData } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Code, Smartphone, BrainCircuit, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  "Web Development": Code,
  "App Prototyping": Smartphone,
  "Problem Solving": Lightbulb,
  "AI & Tech Exploration": BrainCircuit,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function WhatIDo() {
  return (
    <Section id="what-i-do" className="bg-background/40 py-24 sm:py-32 border-y border-border/10">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary"
          >
            Services & Expertise
          </motion.div>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl text-glow">
            What I Do
          </h2>
          <p className="max-w-[800px] text-lg text-muted-foreground">
            Transforming concepts into functional solutions. From fast web platforms to intelligent AI integrations.
          </p>
        </div>

        {/* Feature Cards Grid Instead of Carousel */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {portfolioData.whatIDo.map((service, index) => {
            const Icon = iconMap[service.title as keyof typeof iconMap] || Lightbulb;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col h-full bg-card/20 border border-border/40 rounded-2xl p-8 hover:bg-card/40 transition-colors duration-300"
              >
                {/* Subtle top-left gradient highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="font-headline text-xl font-bold mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>

                {/* Animated SaaS landing page underline */}
                <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
