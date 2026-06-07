import React from 'react';
import { ArrowRight, Download, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Decorative Glow Spheres */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-indigo-600/20 glow-blur animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600/15 glow-blur animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Terminal Tag */}
        <div className="inline-flex items-center space-x-2 bg-slate-900/80 border border-slate-800 rounded-full px-4 py-1.5 mb-6 text-sm text-indigo-400">
          <Terminal className="w-4 h-4" />
          <span className="font-mono">console.log("¡Hola, mundo!");</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Soy <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">José Luis Rodríguez</span>,
          <br className="hidden sm:inline" /> Full-Stack Developer
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Construyendo soluciones escalables, desde el backend hasta interfaces dinámicas. Apasionado por la eficiencia y la arquitectura de software.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#proyectos"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.5)] transition-all duration-300"
          >
            Ver Proyectos
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="/cv.html?print=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-slate-800 text-base font-semibold rounded-xl text-slate-300 bg-slate-900/50 hover:bg-slate-900 hover:text-white hover:border-slate-700 transition-all duration-300 backdrop-blur-sm"
          >
            Descargar CV
            <Download className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>

      {/* Slide down arrow indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#sobre-mi" className="text-slate-500 hover:text-white transition-colors" aria-label="Desplazarse hacia abajo">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
