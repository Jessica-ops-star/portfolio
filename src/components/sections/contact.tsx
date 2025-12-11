import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/ui/section";
import { portfolioData } from "@/lib/data";

export default function Contact() {
  return (
    <Section id="contact" className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            {portfolioData.contact.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a question, a project idea, or just want to connect? Feel free to reach out.
          </p>
        </div>
        <div className="mx-auto w-full max-w-xl">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
