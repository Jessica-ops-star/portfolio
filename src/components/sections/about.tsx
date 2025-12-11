import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function About() {
  const avatarImage = getPlaceholderImage("avatar-about");
  return (
    <Section id="about" className="container mx-auto px-4">
      <div className="grid gap-12 md:grid-cols-3">
        <div className="flex justify-center md:col-span-1">
          {avatarImage && (
             <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
             <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl"></div>
             <Image
               src={avatarImage.imageUrl}
               alt={avatarImage.description}
               data-ai-hint={avatarImage.imageHint}
               width={300}
               height={300}
               className={cn(
                 "relative aspect-square object-contain animate-float"
               )}
             />
           </div>
          )}
        </div>
        <div className="md:col-span-2">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {portfolioData.about}
          </p>
          <Card className="mt-8 flex flex-col justify-center bg-card/50 shadow-2xl card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="font-headline text-2xl">Education</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold">{portfolioData.education.degree}</h3>
              <p className="text-muted-foreground">{portfolioData.education.college}</p>
              <p className="text-sm text-muted-foreground">{portfolioData.education.duration}</p>
              <p className="mt-2 text-sm">CGPA: {portfolioData.education.cgpa}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
