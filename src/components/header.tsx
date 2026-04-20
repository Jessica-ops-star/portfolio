"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "What I Do", href: "#what-i-do" },
  { name: "My Projects", href: "#projects" },
  { name: "Core Competencies", href: "#skills" },
  { name: "Hackathon", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Internship", href: "#internship" },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string, isMobile: boolean = false) => {
    e.preventDefault();
    setActiveItem(name);
    if (isMobile) setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const buffer = 150; // Distance from top to trigger highlight
      let current = navItems[0].name;

      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section top is above the buffer, it's a candidate
          if (rect.top <= buffer) {
            current = item.name;
          }
        }
      }
      setActiveItem(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl transition-all duration-300 ${isScrolled ? 'rounded-full border border-white/10 bg-background/50 backdrop-blur-lg' : 'rounded-none'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center text-xl font-bold">
           <span>Jessica B</span>
        </Link>
        
        <nav className="hidden flex-1 items-center justify-end rounded-full px-3 py-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.name)}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground ${activeItem === item.name ? 'bg-primary/80 text-primary-foreground' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
            <Button asChild className="hidden md:flex" variant="primary">
            <Link href="#contact">Contact Me</Link>
            </Button>
            
            <div className="md:hidden">
              {mounted && (
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <div className="flex flex-col space-y-4 pt-8">
                      {navItems.map((item) => (
                        <SheetClose asChild key={item.name}>
                          <Link
                            href={item.href}
                            className="text-lg font-medium"
                            onClick={(e) => handleNavClick(e, item.href, item.name, true)}
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                      ))}
                      <Button asChild className="mt-4" variant="primary">
                        <Link href="#contact">Contact Me</Link>
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              )}
            </div>
        </div>
      </div>
    </header>
  );
}
