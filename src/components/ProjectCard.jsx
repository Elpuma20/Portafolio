import React from 'react';
import { ExternalLink, Monitor } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
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

export default function ProjectCard({ title, description, tags, githubUrl, demoUrl, imageAlt }) {
  return (
    <div className="group bg-slate-900/40 border border-slate-900 hover:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
      
      {/* Mock Image Area / Placeholder with dynamic styling */}
      <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center border-b border-slate-900 overflow-hidden">
        {/* Subtle grid pattern / gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:16px_16px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
        
        {/* Icon representation inside the placeholder */}
        <div className="relative z-10 text-center transform group-hover:scale-110 transition-transform duration-300">
          <Monitor className="w-12 h-12 text-indigo-500/50 mx-auto mb-2" />
          <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">{imageAlt || 'Vista Previa'}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs font-mono font-medium text-indigo-400 bg-indigo-950/45 px-2.5 py-0.5 rounded-full border border-indigo-900/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Footer Actions */}
        <div className="flex items-center space-x-4 pt-4 border-t border-slate-900">
          {githubUrl && (
            <a
              href={githubUrl}
              className="inline-flex items-center text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-4.5 h-4.5 mr-1.5" />
              Código
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4.5 h-4.5 mr-1.5" />
              Demo En Vivo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
