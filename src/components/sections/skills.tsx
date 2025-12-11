import { portfolioData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Code, Database, MessageSquare, Languages, Award, BrainCircuit } from "lucide-react";

const iconMap = {
  Programming: Code,
  Database: Database,
  "Soft Skills": MessageSquare,
  Languages: Languages,
  Certificates: Award,
  Tools: BrainCircuit,
};

export default function Skills() {
  const allSkills = portfolioData.skills.flatMap(category => category.items);

  return (
    <Section id="skills" className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow">
          My Skills
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          The technologies and skills I use to bring ideas to life.
        </p>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {allSkills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-base px-4 py-2">
            {skill}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
