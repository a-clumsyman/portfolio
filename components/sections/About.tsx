"use client";

import { FadeIn } from "@/components/ui/fade-in";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
        </FadeIn>
        <div className="space-y-4 text-lg text-muted-foreground">
          <FadeIn delay={200}>
            <p>
              Hi, I’m a passionate Full Stack Developer who loves turning ideas
              into meaningful, functional, and user-friendly digital
              experiences. Whether it’s crafting an engaging user interface or
              building a robust backend system, I thrive on creating solutions
              that make an impact.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <p>
              What excites me most is the intersection of creativity and
              logic—solving complex problems while ensuring everything looks and
              feels right for the user.
            </p>
          </FadeIn>
          <FadeIn delay={600}>
            <p>
              When I’m not at my desk, I love brainstorming new ideas, learning
              something fresh, or simply enjoying a good cup of coffee.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
