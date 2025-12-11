import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <Section id="projects" className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          My Projects
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          A few of the projects I've built to solve real-world problems.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {portfolioData.projects.map((project, index) => {
          const projectImage = getPlaceholderImage(project.image_id);
          return (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-card/30 backdrop-blur-sm border-primary/20 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
            >
              <CardHeader>
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                  {projectImage && (
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      data-ai-hint={projectImage.imageHint}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardTitle className="flex items-center justify-between">
                  <span className="font-headline text-xl">{project.title}</span>
                  <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
