import React from 'react';
import { Mail, Send } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In a real application, form processing would happen here
    alert('¡Mensaje enviado! (Esto es una demostración)');
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-indigo-900/10 glow-blur"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Contacto</h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            ¿Tienes alguna propuesta o quieres colaborar en un proyecto? ¡Hablemos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Quick info and social buttons */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white font-display">Ponte en contacto</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                Puedes comunicarte conmigo a través de mi correo electrónico o conectando conmigo en mis redes profesionales. Siempre estoy abierto a discutir nuevas tecnologías, ideas de proyectos o integraciones interesantes.
              </p>
            </div>

            <div className="space-y-4">
              {/* Mail */}
              <a
                href="mailto:joseluisrodri540@gmail.com"
                className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/50 border border-slate-900 hover:border-slate-800 hover:bg-slate-900 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-indigo-950 text-indigo-400 group-hover:bg-indigo-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300">Correo Electrónico</h4>
                  <p className="text-xs text-slate-500">joseluisrodri540@gmail.com</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Elpuma20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/50 border border-slate-900 hover:border-slate-800 hover:bg-slate-900 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-slate-950 text-slate-400 group-hover:bg-slate-800 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300">GitHub</h4>
                  <p className="text-xs text-slate-500">github.com/Elpuma20</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/50 border border-slate-900 hover:border-slate-800 hover:bg-slate-900 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-indigo-950 text-indigo-400 group-hover:bg-indigo-900 transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300">LinkedIn</h4>
                  <p className="text-xs text-slate-500">linkedin.com/in/jose</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/20 border border-slate-900 p-8 rounded-2xl">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Tu nombre completo"
                  className="w-full bg-slate-950 border border-slate-900 rounded-xl px-4 py-3 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="ejemplo@correo.com"
                  className="w-full bg-slate-950 border border-slate-900 rounded-xl px-4 py-3 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  placeholder="Describe brevemente tu idea o consulta..."
                  className="w-full bg-slate-950 border border-slate-900 rounded-xl px-4 py-3 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 transition-colors duration-250 cursor-pointer"
              >
                Enviar Mensaje
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
