import { portfolioData } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

export default function Education() {
  return (
    <Section id="education" className="bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow">
            Education
          </h2>
          <p className="mt-4 text-muted-foreground">My academic journey so far.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="flex flex-col justify-center bg-card/50 shadow-2xl card-glow hover:card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <School className="h-8 w-8 text-primary" />
                <span className="font-headline text-2xl">Schooling</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-lg">{portfolioData.education.schooling.school}</h3>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>X: {portfolioData.education.schooling.x_percentage}</li>
                <li>XII: {portfolioData.education.schooling.xii_percentage}</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="flex flex-col justify-center bg-card/50 shadow-2xl card-glow hover:card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="font-headline text-2xl">Higher Education</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-lg">{portfolioData.education.higherEducation.college}</h3>
              <p className="text-sm text-muted-foreground">{portfolioData.education.higherEducation.degree}</p>
              <p className="mt-2 text-base">CGPA: {portfolioData.education.higherEducation.cgpa}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
