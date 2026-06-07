import React from 'react';
import { Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side Logo/Title */}
        <div className="flex items-center space-x-2 text-slate-400">
          <Code2 className="w-5 h-5 text-indigo-500" />
          <span className="font-display font-medium text-sm">José Luis Rodríguez | Full-Stack Portfolio</span>
        </div>

        {/* Center / Right Copyright */}
        <p className="text-slate-500 text-xs font-mono">
          &copy; {currentYear} José Luis Rodríguez. Diseñado con React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
