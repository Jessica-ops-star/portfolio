import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export default function About() {
  const avatarImage = getPlaceholderImage("avatar-about");
  return (
    <Section id="about" className="container mx-auto px-4">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="flex justify-center items-center lg:col-span-2">
          {avatarImage && (
             <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]">
             <Image
               src={avatarImage.imageUrl}
               alt={avatarImage.description}
               data-ai-hint={avatarImage.imageHint}
               width={350}
               height={350}
               className={cn(
                 "relative aspect-square object-cover rounded-full"
               )}
             />
           </div>
          )}
        </div>
        <div className="md:col-span-1 lg:col-span-3">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground whitespace-pre-wrap">
            {portfolioData.about}
          </p>
        </div>
      </div>
    </Section>
  );
}
