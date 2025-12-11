"use client";

import Link from "next/link";
import { Menu, Code } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "What I Do", href: "#what-i-do" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl transition-all duration-300 ${isScrolled ? 'rounded-full border border-white/10 bg-background/50 backdrop-blur-lg' : 'rounded-none'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 border border-primary/30 text-primary">
             <Code className="h-6 w-6" />
           </div>
           <span className="hidden sm:inline">Jessica B.</span>
        </Link>
        
        <nav className="hidden items-center justify-center rounded-full bg-white/5 px-3 py-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
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
                          onClick={() => setIsMobileMenuOpen(false)}
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
            </div>
        </div>
      </div>
    </header>
  );
}
