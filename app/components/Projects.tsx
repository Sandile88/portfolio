"use client"
import React from "react";

interface ProjectTypes {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
}

interface ProjectCardProps {
  project: ProjectTypes;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="rounded-lg bg-white p-6 border transition-transform hover:scale-105">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h2>
      <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Tech Stack:</h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-md bg-gray-200 px-4 py-2 text-center text-gray-800 transition-colors hover:bg-gray-300"
        >
          Github
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-md bg-gray-200 px-4 py-2 text-center text-gray-800 transition-colors hover:bg-gray-300"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

const projects: ProjectTypes[] = [
  {
    id: 1,
    title: "Decentralized Password Manager",
    description: "A blockchain-based password manager that securely stores and manages passwords using smart contracts and decentralized technology.",
    techStack: ["Solidity", "Web3.js", "MetaMask", "Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/",
    demoUrl: "https://github.com/",
  },
  {
    id: 2,
    title: "Healthcare Management Application",
    description: "A microservices-based healthcare management application designed to streamline patient information, appointment scheduling, doctor information, and medication tracking.",
    techStack: ["Java", "Spring Boot", "Microservices", "REST API"],
    githubUrl: "https://github.com/",
    demoUrl: "https://github.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <p className="text-center text-lg text-gray-600">Browse My Recent</p>
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-800">Projects</h1>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/YourGitHubUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;