"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "up" | "left" | "right" | "scale";
  stagger?: boolean;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className,
  animation = "up",
  stagger = false,
  delay = 0,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  const animClass =
    animation === "left"
      ? "reveal-left"
      : animation === "right"
      ? "reveal-right"
      : animation === "scale"
      ? "reveal-scale"
      : "reveal";

  return (
    <div
      ref={ref}
      className={cn(
        animClass,
        stagger && "reveal-stagger",
        isVisible && "visible",
        className
      )}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
