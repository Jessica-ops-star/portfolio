import { portfolioData } from "@/lib/data";
import { Linkedin, Twitter, Dribbble, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {portfolioData.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon">
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href={portfolioData.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href={portfolioData.socials.dribbble} target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
              <Dribbble className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href={portfolioData.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
