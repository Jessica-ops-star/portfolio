import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <Section id="about" className="container mx-auto px-4">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {portfolioData.about}
          </p>
        </div>
        <Card className="flex flex-col justify-center bg-card/50">
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
    </Section>
  );
}
