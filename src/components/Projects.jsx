import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projectList = [
    {
      title: 'Desarrollador Odoo - Sistema de Gestión Universitario (UNERG)',
      description: 'Desarrollo de módulos personalizados en Python y XML para la administración académica. Gestión de bases de datos PostgreSQL y control de versiones mediante GitHub.',
      tags: ['Odoo', 'Python', 'XML', 'PostgreSQL', 'GitHub'],
      githubUrl: 'https://github.com/Elpuma20',
      demoUrl: '',
      imageAlt: 'UNERG Academic System'
    },
    {
      title: 'Desarrollador Full-Stack - Proyecto BDEC',
      description: 'Diseño de una plataforma para la gestión de empleos comunitarios. Implementación de lógica de negocio en el backend y arquitecturas frontend escalables para el manejo de datos.',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'CSS'],
      githubUrl: 'https://github.com/Elpuma20',
      demoUrl: '',
      imageAlt: 'BDEC Platform'
    },
    {
      title: 'Desarrollador Frontend - Dashboard "CEO"',
      description: 'Creación de una Single Page Application (SPA) para la visualización de operaciones en tiempo real. Integración de REST APIs y optimización de la interfaz de usuario para entornos corporativos.',
      tags: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Elpuma20',
      demoUrl: '',
      imageAlt: 'CEO Dashboard'
    },
    {
      title: 'Desarrollador Independiente - Aplicaciones Web',
      description: 'Creación de herramientas con React, TypeScript y Vite, incluyendo sistemas de gestión de tareas y prototipos de billeteras electrónicas.',
      tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Elpuma20',
      demoUrl: '',
      imageAlt: 'Web Applications'
    }
  ];

  return (
    <section id="proyectos" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Proyectos</h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Una selección de mis trabajos y roles clave en el desarrollo de software.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              imageAlt={project.imageAlt}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
