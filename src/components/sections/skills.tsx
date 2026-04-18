"use client";

import { portfolioData } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Code2, PenTool, Database, Terminal, Cpu, Users, Target, Zap, Layout, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

// Map exact skills from data.ts to suitable icons
const skillIconMap: Record<string, React.ElementType> = {
  // Technical
  "Java": Cpu,
  "Python": Terminal,
  "C": Code2,
  "MySQL": Database,
  "Figma": PenTool, 
  "React": Monitor,
  // Soft
  "Communication": Users,
  "Teamwork": Users,
  "Problem Solving": Target,
  "Adaptability": Zap,
  "Leadership": Layout,
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

const SkillCard = ({ skill, isTechnical = true }: { skill: string, isTechnical?: boolean }) => {
  const Icon = skillIconMap[skill] || (isTechnical ? Code2 : Users);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        "group relative flex flex-col items-center justify-center p-6",
        "bg-card/30 border border-border/50 rounded-xl",
        "hover:bg-card/60 transition-colors duration-300",
        "hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]", // Soft structured glow, not overpowering
        isTechnical ? "hover:border-primary/40" : "hover:border-accent/40"
      )}
    >
      <div className={cn(
        "mb-4 p-3 rounded-lg transition-colors duration-300",
        isTechnical 
          ? "bg-primary/10 text-primary group-hover:bg-primary/20" 
          : "bg-accent/10 text-accent group-hover:bg-accent/20"
      )}>
        <Icon className="w-6 h-6" />
      </div>
      <span className="font-headline font-semibold text-foreground tracking-tight text-center">
        {skill}
      </span>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <Section id="skills" className="container mx-auto px-4 py-24">
      <div className="flex flex-col gap-16">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow inline-block">
            Core Competencies
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            A structured breakdown of my technical repertoire and foundational soft skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Technical Grid */}
          <div className="flex flex-col">
            <h3 className="font-headline text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary/50"></span>
              Technical Arsenal
            </h3>
            <motion.div 
               variants={sectionVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {portfolioData.skills.technical.map((skill, index) => (
                <SkillCard key={index} skill={skill} isTechnical={true} />
              ))}
            </motion.div>
          </div>

          {/* Soft Skills Grid */}
          <div className="flex flex-col">
            <h3 className="font-headline text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-accent/50"></span>
              Professional Traits
            </h3>
            <motion.div 
               variants={sectionVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {portfolioData.skills.soft.map((skill, index) => (
                <SkillCard key={index} skill={skill} isTechnical={false} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
