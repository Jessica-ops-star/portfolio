"use client";

import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { motion } from "framer-motion";

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

export default function Projects() {
  return (
    <Section id="projects" className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow">
          My Projects
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          A few of the projects I've built to solve real-world problems.
        </p>
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto mt-12 w-full max-w-sm md:max-w-2xl lg:max-w-4xl"
        >
        <CarouselContent>
          {portfolioData.projects.map((project, index) => {
            const projectImage = getPlaceholderImage(project.image_id);
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div variants={itemVariants} className="p-1 h-full">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="group h-full flex flex-col cursor-pointer overflow-hidden bg-card/50 backdrop-blur-sm border-border transition-all duration-300 hover:border-primary/50 hover:shadow-2xl card-glow hover:card-glow">
                        <CardHeader className="p-0">
                          <div className="relative h-48 w-full overflow-hidden">
                            {projectImage && (
                              <Image
                                src={projectImage.imageUrl}
                                alt={project.title}
                                data-ai-hint={projectImage.imageHint}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 flex-grow flex flex-col">
                          <div className="mb-2">
                             <Badge variant="secondary">{project.tag}</Badge>
                          </div>
                          <CardTitle className="font-headline text-lg">{project.title}</CardTitle>
                          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-xl">
                      <DialogHeader>
                        <DialogTitle className="font-headline text-2xl">{project.title}</DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="max-h-[45vh] pr-4">
                        <DialogDescription asChild>
                          <div className="space-y-4 whitespace-pre-wrap">
                             <p className="text-base text-muted-foreground">{project.longDescription}</p>
                             <div className="flex flex-wrap gap-2">
                              {project.techStack?.map(tech => <Badge key={tech} variant="outline">{tech}</Badge>)}
                             </div>
                             {project.link && project.link !== "#" && (
                              <Button asChild variant="outline">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-4 w-4"/>
                                  View Project
                                </a>
                              </Button>
                             )}
                          </div>
                        </DialogDescription>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </motion.div>
    </Section>
  );
}
