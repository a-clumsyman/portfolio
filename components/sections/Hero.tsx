"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParticleBackground } from "@/components/ui/particle-background";
import { SocialLinks } from "@/components/sections/hero/social-links";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <ParticleBackground />

      <div className="relative z-10 text-center px-4">
        <AnimatedText
          text="Hi, I'm Chanakya B"
          className="block text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
          delay={200}
        />
        <AnimatedText
          text="Full Stack Developer"
          className="block text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6"
          delay={400}
        />
        <AnimatedText
          text="I craft exceptional digital experiences with modern technologies."
          className="block text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-2"
          delay={600}
        />
        <AnimatedText
          text="Specialized in building robust and scalable web applications."
          className="block text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          delay={800}
        />

        <div className="flex gap-4 justify-center opacity-0 animate-[fadeIn_1s_ease-in_forwards_1s]">
          <Button size="lg" className="group" asChild>
            <a href="#contact">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/chanakyaBevaraResume.pdf" target="_blank">
              View Resume
            </Link>
          </Button>
        </div>

        <div className="opacity-0 animate-[fadeIn_1s_ease-in_forwards_1.2s]">
          <SocialLinks />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-in_forwards_1.4s]">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-scroll mx-auto" />
        </div>
      </div>
    </section>
  );
}
