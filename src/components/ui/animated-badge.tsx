import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Star } from "lucide-react";

interface AnimatedBadgeProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedBadge({ children, className }: AnimatedBadgeProps) {
  return (
    <div
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary/20",
        className
      )}
    >
      <div className="absolute -inset-px rounded-full bg-gradient-to-r from-primary/50 via-purple-500 to-pink-500/50 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"></div>
      <Star className="relative h-4 w-4 text-primary/80" />
      <span className="relative">{children}</span>
    </div>
  );
}
