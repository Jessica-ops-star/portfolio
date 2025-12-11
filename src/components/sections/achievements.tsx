import { portfolioData } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { AnimatedBadge } from "@/components/ui/animated-badge";

export default function Achievements() {
  return (
    <Section id="achievements" className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Achievements
        </h2>
        <p className="mt-4 text-muted-foreground">
          Proud participant in multiple hackathons, turning ideas into reality.
        </p>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {portfolioData.achievements.map((achievement, index) => (
          <AnimatedBadge key={index}>{achievement}</AnimatedBadge>
        ))}
      </div>
    </Section>
  );
}
