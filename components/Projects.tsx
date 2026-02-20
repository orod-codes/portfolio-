
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectModal from './ProjectModal';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories = ['All', 'Web', 'Security', 'Tools'];
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter text-slate-900 dark:text-white">Case Studies</h2>
            <p className="text-slate-500 dark:text-gray-500 font-medium">Archived intelligence from 100+ successful deployments.</p>
          </div>
          
          <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-full border border-slate-200 dark:border-white/10">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black transition-all uppercase tracking-widest ${filter === cat ? 'bg-slate-900 dark:bg-white text-white dark:text-black shadow-xl' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => {
            const previewImage = project.images?.[0] || project.image;
            return (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/5] glass rounded-[2.5rem] overflow-hidden mb-8 border border-slate-100 dark:border-white/5 bg-white/50 dark:bg-white/5">
                  <img
                    src={previewImage}
                    alt={project.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 dark:from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/20 backdrop-blur-md px-3 py-1 rounded-full mb-4 inline-block border border-white/20 text-white">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-black mb-2 text-white">{project.title}</h3>
                  </div>
                  <div className="absolute top-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border-white/20 group-hover:rotate-45 text-white">
                    <i className="fas fa-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
