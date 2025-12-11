import { portfolioData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

export default function Skills() {
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

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h3 className="text-center font-headline text-2xl font-semibold text-primary mb-6">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioData.skills.technical.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-center font-headline text-2xl font-semibold text-primary mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioData.skills.soft.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
