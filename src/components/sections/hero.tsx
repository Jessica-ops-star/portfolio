import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, FileDown, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const avatarImage = getPlaceholderImage("avatar-hero");

  return (
    <section id="home" className="relative container mx-auto flex min-h-[calc(100dvh-5rem)] items-center px-4">
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I'm {portfolioData.name}
          </h1>
          <h2 className="mt-2 font-headline text-3xl font-bold text-primary sm:text-4xl">
            {portfolioData.role}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0">
            {portfolioData.hero.intro}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Button asChild size="lg">
              <Link href="#projects">My Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/jessica_b_cv.pdf" download>
                <FileDown className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
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
        <div className="order-1 flex justify-center lg:order-2">
          {avatarImage && (
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl"></div>
              <Image
                src={avatarImage.imageUrl}
                alt={avatarImage.description}
                data-ai-hint={avatarImage.imageHint}
                width={450}
                height={450}
                priority
                className={cn(
                  "relative aspect-square object-contain"
                )}
              />
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link href="#about">
            <div className="h-10 w-10 rounded-full border border-primary/50 flex items-center justify-center animate-bounce">
                <ChevronDown className="h-6 w-6 text-primary" />
            </div>
        </Link>
      </div>
    </section>
  );
}
