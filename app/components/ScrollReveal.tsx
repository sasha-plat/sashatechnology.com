"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Animation = "fade-up" | "fade-left" | "fade-right" | "scale-in" | "fade-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: number;
}

const animationConfigs: Record<Animation, gsap.TweenVars> = {
  "fade-up": { y: 60, opacity: 0 },
  "fade-left": { x: -60, opacity: 0 },
  "fade-right": { x: 60, opacity: 0 },
  "scale-in": { scale: 0.85, opacity: 0 },
  "fade-in": { opacity: 0 },
};

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  className = "",
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars = animationConfigs[animation];
    const targets = stagger > 0 ? el.children : el;

    gsap.set(targets, fromVars);

    gsap.to(targets, {
      ...Object.fromEntries(Object.keys(fromVars).map((k) => [k, k === "opacity" ? 1 : 0])),
      scale: 1,
      duration,
      delay,
      stagger: stagger > 0 ? stagger : undefined,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [animation, delay, duration, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
