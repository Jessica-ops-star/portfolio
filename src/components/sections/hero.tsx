import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, FileDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const avatarImage = getPlaceholderImage("avatar");

  return (
    <section id="home" className="container mx-auto flex min-h-[calc(100dvh-4rem)] items-center px-4">
      <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="font-headline text-lg font-medium text-primary">
            {portfolioData.role}
          </p>
          <h1 className="mt-2 font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I'm {portfolioData.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:mx-0">
            {portfolioData.hero.intro}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <Button asChild size="lg">
              <Link href="#projects">My Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
               {/* This should point to the actual CV file path */}
              <a href="/jessica_b_cv.pdf" download>
                <FileDown className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href={`mailto:${portfolioData.socials.email}`} aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-primary">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="order-1 flex justify-center md:order-2">
          {avatarImage && (
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl"></div>
              <Image
                src={avatarImage.imageUrl}
                alt={avatarImage.description}
                data-ai-hint={avatarImage.imageHint}
                width={400}
                height={400}
                priority
                className={cn(
                  "relative aspect-square rounded-full border-4 border-primary object-cover shadow-2xl shadow-primary/40"
                )}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
