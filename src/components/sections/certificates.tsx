import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Award } from "lucide-react";

export default function Certificates() {
  return (
    <Section id="certificates" className="container mx-auto bg-card/20 py-24 sm:py-32">
       <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Certificates
        </h2>
        <p className="mt-4 text-muted-foreground">
          A collection of my certifications and learning milestones.
        </p>
      </div>
      <div className="mt-12">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioData.certificates.map((cert, index) => (
            <li key={index} className="flex">
              <Card className="w-full transition-all hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <Award className="h-8 w-8 text-primary" />
                  <p className="mt-4 font-semibold">{cert.title}</p>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
