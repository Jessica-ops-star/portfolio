"use client";

import { portfolioData } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

export default function Internship() {
  return (
    <Section id="internship" className="container mx-auto px-4 py-24 border-t border-border/10">
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow">
          Experience
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
          A track record of my professional internships and hands-on industry roles.
        </p>
      </div>

      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 flex justify-center w-full max-w-4xl mx-auto"
      >
        <Dialog>
          <DialogTrigger asChild>
            <motion.div 
               variants={itemVariants}
               whileHover={{ y: -4, scale: 1.01 }}
           className="group w-full relative bg-card/20 border border-border/40 rounded-[28px] overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-card/40 hover:shadow-[0_10px_40px_-15px_rgba(168,85,247,0.2)] hover:border-primary/20"
        >
          {/* Subtle gradient wash across the panel on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-10 cursor-pointer">
            
            <div className="flex items-start md:items-center gap-6">
              <div className="hidden md:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-500">
                <Briefcase className="h-7 w-7 text-primary" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="md:hidden flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-foreground tracking-tight">
                    {portfolioData.internship.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary/60" />
                  <span className="text-sm font-medium">{portfolioData.internship.duration}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0 flex items-center gap-2 text-sm font-medium text-primary/70 group-hover:text-primary transition-colors">
               <span>View Details</span>
               <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>

          </div>
          </motion.div>
        </DialogTrigger>
        <DialogContent className="max-w-4xl border-white/10 bg-background/90 backdrop-blur-2xl p-6">
          <DialogHeader>
            <DialogTitle className="font-headline text-3xl font-bold text-glow">
               {portfolioData.internship.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex gap-4 items-center text-muted-foreground bg-white/5 p-4 rounded-xl">
              <Calendar className="w-5 h-5 text-primary" />
              <div className="flex flex-col sm:flex-row sm:gap-8 font-medium">
                <span><strong className="text-foreground">Start Date:</strong> 08/12/2025</span>
                <span><strong className="text-foreground">End Date:</strong> 19/01/2026</span>
              </div>
            </div>
            
            <div className="relative w-full h-[50dvh] bg-white/5 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
              <Image 
                src="https://www.image2url.com/r2/default/images/1776494372614-d2c5d0ae-6540-44d0-b115-f2e60fd6775c.png" 
                alt="Internship Completion Certificate" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
        </DialogContent>
       </Dialog>
      </motion.div>
    </Section>
  );
}
