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
  return (
    <Section id="skills" className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          My Skills
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          The technologies and skills I use to bring ideas to life.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.skills.map((skillCategory, index) => {
          const Icon = iconMap[skillCategory.category as keyof typeof iconMap] || Code;
          return (
            <Card key={index} className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="font-headline">{skillCategory.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
