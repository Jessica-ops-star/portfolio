"use client";

import { portfolioData } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

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

export default function Achievements() {
  return (
    <Section id="achievements" className="container mx-auto px-4 py-24">
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow">
          Hackathons & Achievements
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
          A timeline of my competitive programming journey, hackathon participations, and key milestones.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto mt-12">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/40 -translate-x-1/2"></div>
        
        {/* Glow behind the line to make it pop slightly */}
        <div className="absolute left-4 md:left-1/2 top-1/4 bottom-1/4 w-px bg-primary/20 blur-[2px] -translate-x-1/2"></div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {portfolioData.achievements.map((achievement, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={cn(
                  "relative flex items-center group",
                  "md:justify-between",
                  // on mobile everything aligns left. on md, they alternate sides.
                )}
              >
                {/* PC View - Left Column */}
                <div className={cn(
                  "hidden md:block w-[42%]",
                  isEven ? "text-right" : "invisible"
                )}>
                  <div className={cn(
                    "inline-block bg-card/40 border border-border/50 p-6 rounded-2xl transition-all duration-300",
                    "group-hover:bg-primary/5 group-hover:border-primary/30 group-hover:-translate-y-1",
                    "shadow-sm group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                  )}>
                    <p className="font-semibold text-lg text-foreground tracking-tight">{achievement}</p>
                  </div>
                </div>

                {/* PC View - Right Column */}
                <div className={cn(
                  "hidden md:block w-[42%]",
                  !isEven ? "text-left" : "invisible"
                )}>
                  <div className={cn(
                    "inline-block bg-card/40 border border-border/50 p-6 rounded-2xl transition-all duration-300",
                    "group-hover:bg-primary/5 group-hover:border-primary/30 group-hover:-translate-y-1",
                    "shadow-sm group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                  )}>
                    <p className="font-semibold text-lg text-foreground tracking-tight">{achievement}</p>
                  </div>
                </div>

                {/* Mobile View Card (always right of line) */}
                <div className="md:hidden w-full pl-12 pr-4">
                  <div className="bg-card/40 border border-border/50 p-5 rounded-xl transition-all duration-300 group-hover:bg-primary/5 group-hover:border-primary/30">
                     <p className="font-semibold text-base text-foreground tracking-tight">{achievement}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center -translate-x-1/2 z-10 transition-all duration-500 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(168,85,247,0.8)] group-hover:scale-110">
                  <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* End Node */}
        <div className="absolute left-4 md:left-1/2 -bottom-4 w-4 h-4 rounded-full bg-border/40 -translate-x-1/2 flex items-center justify-center">
            <Trophy className="w-3 h-3 text-muted-foreground/50 absolute top-6" />
        </div>
      </div>
    </Section>
  );
}
