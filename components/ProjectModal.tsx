
import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      <div 
        className="absolute inset-0 bg-black/90 dark:bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto border border-white/10">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 bg-white dark:bg-white rounded-full flex items-center justify-center text-black shadow-xl z-20 hover:scale-110 transition-transform"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <div className="grid md:grid-cols-2">
          <div className="h-64 md:h-full">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-12">
            <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-white/10 rounded-full text-xs font-black uppercase tracking-widest mb-4 text-slate-900 dark:text-white">
              {project.category}
            </div>
            <h2 className="text-4xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white">{project.title}</h2>
            <p className="text-slate-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              {project.description}
            </p>

            {project.features && (
              <div className="mb-8">
                <h4 className="text-sm font-black uppercase tracking-widest mb-4 border-b pb-2 text-slate-900 dark:text-white border-slate-200 dark:border-white/10">Key Features</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {project.features.map(f => (
                    <li key={f} className="flex items-center text-slate-500 dark:text-gray-400">
                      <i className="fas fa-check-circle text-slate-900 dark:text-white mr-3"></i>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.techStack && (
              <div className="mb-8">
                <h4 className="text-sm font-black uppercase tracking-widest mb-4 border-b pb-2 text-slate-900 dark:text-white border-slate-200 dark:border-white/10">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(t => (
                    <span key={t} className="px-4 py-2 bg-slate-50 dark:bg-white/5 rounded-xl text-xs font-bold border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button className="bg-slate-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-all uppercase tracking-widest text-xs">
                Live Demo
              </button>
              <button className="border-2 border-slate-900 dark:border-white px-8 py-3 rounded-full font-bold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all uppercase tracking-widest text-xs text-slate-900 dark:text-white">
                Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
