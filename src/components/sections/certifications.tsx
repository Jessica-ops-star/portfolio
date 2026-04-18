"use client";

import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { LuxuryCarousel } from "@/components/ui/luxury-carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Award, BookOpenCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type CertificateItem = {
  name: string;
  imageId: string;
};

const CertificateCard = ({ cert, icon: Icon, isPrimary }: { cert: CertificateItem, icon: React.ElementType, isPrimary: boolean }) => {
  const certImage = getPlaceholderImage(cert.imageId);
  return (
    <Dialog>
      {/* We stop propagation here so clicks inside Framer Motion drag don't fight native events */}
      <DialogTrigger asChild>
        <div 
           className="group flex flex-col h-full w-full cursor-pointer items-center justify-center p-8 text-center focus:outline-none"
           style={{ pointerEvents: "auto" }}
        >
          <div className={cn(
            "mb-6 flex items-center justify-center rounded-full transition-all duration-500",
            isPrimary ? "bg-primary/20 p-5 ring-1 ring-primary/40" 
                      : "bg-primary/10 p-4 ring-1 ring-primary/20"
          )}>
            <Icon className={cn(
              "text-primary transition-transform duration-500",
              isPrimary ? "h-8 w-8" : "h-6 w-6"
            )} />
          </div>
          
          <h3 className={cn(
            "font-headline font-semibold tracking-tight text-foreground transition-colors duration-300",
            isPrimary ? "text-xl" : "text-lg"
          )}>
            {cert.name}
          </h3>
          
          <p className="mt-4 text-sm text-muted-foreground/60">
            Click to view credential
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl border-white/10 bg-background/90 backdrop-blur-2xl">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl font-bold text-glow">{cert.name}</DialogTitle>
        </DialogHeader>
        {certImage && (
          <div className="relative mt-6 w-full h-[50dvh] rounded-lg overflow-hidden bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
            <Image
              src={certImage.imageUrl}
              alt={`Certificate for ${cert.name}`}
              data-ai-hint={certImage.imageHint}
              fill
              className="object-contain"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
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

export default function Certifications() {
  const certificationsNodes = portfolioData.certifications.map((cert, index) => (
    <motion.div key={`cert-${index}`} variants={itemVariants} className="h-full">
      <CertificateCard cert={cert} icon={Award} isPrimary={true} />
    </motion.div>
  ));

  const coursesNodes = portfolioData.courses.map((course, index) => (
    <motion.div key={`course-${index}`} variants={itemVariants} className="h-full">
      <CertificateCard cert={course} icon={BookOpenCheck} isPrimary={false} />
    </motion.div>
  ));

  return (
    <Section id="certifications" className="container mx-auto px-4 overflow-hidden py-24">
      <div className="flex flex-col gap-24">
        
        {/* Primary Certifications Carousel */}
        <motion.div 
           variants={sectionVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           className="text-center relative"
        >
          <div className="absolute left-1/2 top-1/2 -z-20 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl text-glow relative z-10">
            Certifications
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto relative z-10">
            My official professional certifications and high-level credentials.
          </p>
          
          <div className="mt-8 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24">
             <LuxuryCarousel items={certificationsNodes} type="certifications" />
          </div>
        </motion.div>

        {/* Secondary Courses Carousel */}
        <motion.div 
           variants={sectionVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           className="text-center relative"
        >
           <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow relative z-10">
            Courses & Achievements
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto relative z-10">
            A comprehensive track record of my completed educational courses and specialized training.
          </p>
          
          <div className="mt-8 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24">
            <LuxuryCarousel items={coursesNodes} type="courses" />
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
