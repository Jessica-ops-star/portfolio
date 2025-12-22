
"use client";

import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Section } from "@/components/ui/section";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Award, BookOpenCheck } from "lucide-react";

type CertificateItem = {
  name: string;
  imageId: string;
};

const CertificateButton = ({ cert, icon: Icon }: { cert: CertificateItem, icon: React.ElementType }) => {
  const certImage = getPlaceholderImage(cert.imageId);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary/20">
          <div className="absolute -inset-px rounded-full bg-gradient-to-r from-primary/50 via-purple-500 to-pink-500/50 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"></div>
          <Icon className="relative h-4 w-4 text-primary/80" />
          <span className="relative">{cert.name}</span>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{cert.name}</DialogTitle>
        </DialogHeader>
        {certImage && (
          <div className="relative mt-4 h-auto w-full aspect-[4/3]">
            <Image
              src={certImage.imageUrl}
              alt={`Certificate for ${cert.name}`}
              data-ai-hint={certImage.imageHint}
              fill
              className="object-contain"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};


export default function Certifications() {
  return (
    <Section id="certifications" className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow">
            Certifications
          </h2>
          <p className="mt-4 text-muted-foreground">
            My professional certifications and credentials.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {portfolioData.certifications.map((cert, index) => (
               <CertificateButton key={`cert-${index}`} cert={cert} icon={Award} />
            ))}
          </div>
        </div>

        <div className="text-center">
           <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow">
            Certificates
          </h2>
          <p className="mt-4 text-muted-foreground">
            A collection of my completed courses.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {portfolioData.courses.map((course, index) => (
              <CertificateButton key={`course-${index}`} cert={course} icon={BookOpenCheck} />
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
