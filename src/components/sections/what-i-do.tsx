"use client";

import { portfolioData } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Code, Smartphone, BrainCircuit, Lightbulb } from "lucide-react";

const iconMap = {
  "Web Development": Code,
  "App Prototyping": Smartphone,
  "AI & Tech Exploration": BrainCircuit,
  "Problem Solving": Lightbulb,
};

export default function WhatIDo() {
  return (
    <Section id="what-i-do" className="bg-card/20 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            What I Do
          </h2>
          <p className="mt-4 text-muted-foreground">
            Exploring technology and building cool things.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto mt-12 w-full max-w-sm md:max-w-2xl lg:max-w-4xl"
        >
          <CarouselContent>
            {portfolioData.whatIDo.map((service, index) => {
              const Icon = iconMap[service.title as keyof typeof iconMap] || Lightbulb;
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="group h-full transform-gpu bg-background/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-background/80 hover:shadow-2xl hover:shadow-primary/20">
                      <CardHeader className="p-0">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="font-headline text-lg">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 pt-4">
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Section>
  );
}
