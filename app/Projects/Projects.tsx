import React from 'react';
import { ExternalLink, Code, Globe } from 'lucide-react';

function ProjectComp() {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and inventory management.",
      link: "https://github.com/username/ecommerce-platform",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      link: "https://github.com/username/task-manager",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 3,
      name: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern web design principles, smooth animations, and optimized performance across all devices.",
      link: "https://github.com/username/portfolio",
      icon: <ExternalLink className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Projects Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-white mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-8 transition-all duration-300 ease-out hover:scale-105 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r  from-black to-gray-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>

                {/* Project Name */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r  from-black to-gray-900 text-white font-medium hover:from-black hover:to-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black to-gray blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectComp;