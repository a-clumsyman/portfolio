"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Yellamachili Software Solutions",
    period: "APR-2024 - Present",
    description: ["Development of microservices architecture"],
    technologies: ["JAVA/J2EE", "Spring Boot", "Docker"],
  },
  {
    title: "React Developer",
    company: "e-warrenty",
    period: "MAR-2023 - APR 2024",
    description: ["Developed responsive web applications"],
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
      </FadeIn>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <FadeIn key={index} delay={index * 200}>
            <Card className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside mb-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
