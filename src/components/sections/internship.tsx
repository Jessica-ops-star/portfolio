import { portfolioData } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Internship() {
  return (
    <Section id="internship" className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow">
          Internship
        </h2>
        <p className="mt-4 text-muted-foreground">
          My professional work experience.
        </p>
      </div>
      <div className="mt-12 flex justify-center">
        <Card className="max-w-md bg-card/50 card-glow">
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-primary"/>
                    <span className="font-headline text-xl">AI for Sustainability</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{portfolioData.internship.title}</p>
                <p className="text-sm text-muted-foreground">{portfolioData.internship.duration}</p>
            </CardContent>
        </Card>
      </div>
    </Section>
  );
}
