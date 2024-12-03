"use client";

import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "JavaScript",
      "React.js",
      "Angular 9",
      "Next.js",
      "TailwindCSS",
      "HTML5",
      "CSS3",
      "JSON",
      "ChatGPT",
      "GitHub Copilot",
      "DALL-E",
      "MidJourney",
      "VS Code",
      "Postman",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Core Java",
      "J2EE (Servlets, JSP, JDBC)",
      "Python",
      "Spring Boot",
      "Microservices Architecture",
      "MongoDB",
      "Oracle",
      "SQL",
      "PL/SQL",
      "RESTful APIs",
      "Open API",
      "Tomcat",
    ],
  },
  {
    title: "DevOps",
    skills: [
      "Azure Web Services Cloud",
      "Docker",
      "Vercel",
      "Git",
      "Docker Desktop",
      "JIRA",
    ],
  },
  {
    title: "Others",
    skills: [
      "Windows NT/2000/XP",
      "Linux",
      "Hugging Face Transformers",
      "V0.dev",
      "SQL Developer",
      "Eclipse",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <FadeIn key={index} delay={index * 200} direction="up">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
