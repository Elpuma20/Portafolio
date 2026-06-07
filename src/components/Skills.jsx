import React from 'react';
import { Layout, Server, Settings, Globe, Database, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Back-end',
      icon: <Server className="w-6 h-6 text-purple-400" />,
      skills: ['Python', 'FastAPI', 'Flask', 'Node.js (Express)', 'Solidity'],
      description: 'Creación de servicios, lógica de negocio robusta, APIs y contratos inteligentes.',
      color: 'from-purple-500/10 to-pink-500/5',
      borderColor: 'group-hover:border-purple-500/50'
    },
    {
      title: 'Front-end',
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      skills: ['JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3 (TailwindCSS, Bootstrap)', 'Astro', 'Svelte', 'Vite'],
      description: 'Desarrollo de interfaces de usuario modernas, interactivas, responsivas y veloces.',
      color: 'from-indigo-500/10 to-blue-500/5',
      borderColor: 'group-hover:border-indigo-500/50'
    },
    {
      title: 'Base de Datos',
      icon: <Database className="w-6 h-6 text-blue-400" />,
      skills: ['PostgreSQL', 'MySQL', 'SQLite'],
      description: 'Diseño, optimización y gestión de bases de datos relacionales.',
      color: 'from-blue-500/10 to-cyan-500/5',
      borderColor: 'group-hover:border-blue-500/50'
    },
    {
      title: 'Sistemas y DevOps',
      icon: <Cpu className="w-6 h-6 text-rose-400" />,
      skills: ['Admin Linux (Arch Linux)', 'Windows', 'Docker', 'Bash scripting'],
      description: 'Configuración de entornos, administración de sistemas y despliegue de contenedores.',
      color: 'from-rose-500/10 to-orange-500/5',
      borderColor: 'group-hover:border-rose-500/50'
    },
    {
      title: 'Herramientas y Entorno',
      icon: <Settings className="w-6 h-6 text-amber-400" />,
      skills: ['Git & GitHub', 'VS Code', 'Google Cloud Storage (GCS)'],
      description: 'Control de versiones, almacenamiento en la nube y optimización del flujo de desarrollo.',
      color: 'from-amber-500/10 to-yellow-500/5',
      borderColor: 'group-hover:border-amber-500/50'
    },
    {
      title: 'Especialización en ERP',
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      skills: ['Odoo ERP', 'Módulos en Odoo (Python, XML)'],
      description: 'Desarrollo, personalización e integración de flujos de negocio sobre Odoo.',
      color: 'from-emerald-500/10 to-teal-500/5',
      borderColor: 'group-hover:border-emerald-500/50'
    }
  ];

  return (
    <section id="habilidades" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background glow decorator */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-indigo-900/10 glow-blur"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Habilidades</h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Mi conjunto de herramientas tecnológicas, optimizado para construir aplicaciones del mundo real de extremo a extremo.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`group relative rounded-2xl border border-slate-900 bg-gradient-to-br ${category.color} p-8 hover:bg-slate-900/55 transition-all duration-300 ${category.borderColor}`}
            >
              {/* Top Row: Icon + Title */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100 font-display">{category.title}</h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800 group-hover:border-slate-700/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
