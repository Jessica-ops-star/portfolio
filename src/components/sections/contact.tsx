import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/ui/section";
import { portfolioData } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Linkedin, Mail, Github } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow">
            Let's create something amazing together.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a question, a project idea, or just want to connect? Feel free to reach out.
          </p>
          <div className="mt-8 flex justify-center gap-2 lg:justify-start">
            <Button asChild variant="ghost" size="icon">
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-primary">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href={`mailto:${portfolioData.socials.email}`} aria-label="Email"
                className="text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xl">
          <Card className="p-8 bg-card/50 card-glow">
            <ContactForm />
          </Card>
        </div>
      </div>
    </Section>
  );
}
