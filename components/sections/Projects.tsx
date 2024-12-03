"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "LinkBender",
    description:
      "Channels: Web, Open API. Environment: Vercel-hosted platform, Node.js backend, modern web browsers.",
    technologies: [
      "React.js",
      "Node.js",
      "Python (for AI integrations)",
      "TailwindCSS",
      "Retrieval-Augmented Generation (RAG) system",
      "OpenAI API",
      "MongoDB",
    ],
    liveUrl: "https://linkbender.vercel.app/",
    githubUrl: undefined,
  },
  {
    title: "Prepaid Cards",
    description:
      "Clients: Eurobase (Allpay, Weswap). Channels: Web, Open API. Role: Programmer. Designation: Software Engineer.",
    technologies: [
      "JAVA/J2EE",
      "Spring Boot",
      "Microservices",
      "Spring Data JPA",
      "Angular 9",
      "Docker",
      "Oracle",
      "Azure Web Services Cloud",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    title: "PADSS Implementation",
    description:
      "Played a crucial role in implementing PADSS standards, enhancing data security in payment processing.",
    technologies: [
      "JAVA/J2EE",
      "Spring Boot",
      "Microservices",
      "Spring Data JPA",
      "Docker",
      "Oracle",
      "Azure Web Services Cloud",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    title: "SmartCart eCommerce Solution",
    description:
      "Led the development of an AI-driven 'SmartCart' feature, increasing average cart value by 15%.",
    technologies: [
      "React.js",
      "Redux",
      "JavaScript",
      "RESTful APIs",
      "HTML5",
      "CSS3",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    title: "Enhance42 Website Development",
    description:
      "Designed and developed the Enhance42 website with a focus on UX/UI integration and responsive design.",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Git",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <FadeIn
            key={index}
            delay={index * 200}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <Card className="overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-0">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
