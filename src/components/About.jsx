import React from 'react';
import { User, Cpu, BookOpen, Layers } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Sobre Mí</h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text & Quick Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 font-display">
              Apasionado por la tecnología y el desarrollo eficiente
            </h3>
            <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
              Estudiante de Ingeniería en Sistemas con 2 años de trayectoria en desarrollo Full-Stack, enfocado en la creación de herramientas tecnológicas de alto impacto para la gestión corporativa. Comprometido con la innovación constante, me dedico a materializar proyectos de vanguardia dentro del sector de las criptofinanzas, aplicando conocimientos en Solidity y redes Blockchain para fortalecer la infraestructura de billeteras electrónicas. Destaco por mi habilidad para resolver desafíos técnicos y por mi versatilidad operativa en la administración de sistemas y redes.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              A lo largo de mi trayectoria, he enfocado mis esfuerzos en diseñar y estructurar tanto arquitecturas de backend eficientes como interfaces front-end fluidas, asegurando siempre altos estándares de escalabilidad y mantenibilidad.
            </p>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-900/40 border border-slate-900 rounded-xl hover:border-slate-800 transition-colors">
                <Cpu className="w-6 h-6 text-indigo-400 mb-2" />
                <h4 className="text-sm font-semibold text-slate-200">Arquitectura</h4>
                <p className="text-xs text-slate-500">Diseño limpio y escalable</p>
              </div>
              <div className="p-4 bg-slate-900/40 border border-slate-900 rounded-xl hover:border-slate-800 transition-colors">
                <Layers className="w-6 h-6 text-purple-400 mb-2" />
                <h4 className="text-sm font-semibold text-slate-200">Full-Stack</h4>
                <p className="text-xs text-slate-500">Soluciones de inicio a fin</p>
              </div>
            </div>
          </div>

          {/* Interactive Graphic / Terminal Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm">
              {/* Header */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs text-slate-500">jose@developer-pc:~</span>
                <div className="w-10"></div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4 text-slate-300">
                <div>
                  <span className="text-emerald-400">jose@developer-pc</span>:<span className="text-indigo-400">~</span>$ cat info.json
                </div>
                <div className="pl-4 text-slate-400">
                  {`{`}
                  <div className="pl-4">
                    <span className="text-pink-400">"rol"</span>: <span className="text-amber-300">"Full-Stack Developer"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-pink-400">"experiencia"</span>: <span className="text-amber-300">"~2 Años"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-pink-400">"entornos"</span>: <span className="text-amber-300">["GNU/Linux", "Docker"]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-pink-400">"enfoques"</span>: <span className="text-amber-300">["Clean Code", "Design Patterns"]</span>
                  </div>
                  {`}`}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-400">jose@developer-pc</span>:<span className="text-indigo-400">~</span>$ <span className="w-2 h-4 bg-slate-400 animate-pulse inline-block"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
