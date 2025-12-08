import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ArrowUpDown, MapPin, ArrowRight } from 'lucide-react';
import { Language, ProjectItem } from '../types';
import { t } from '../data/translations';
import { projects, categoryIcons } from '../data/content';

interface ProjectsSectionProps {
  lang: Language;
  onOpenProject: (project: ProjectItem) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang, onOpenProject }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'residential' | 'commercial' | 'industrial' | 'automation'>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const filteredProjects = useMemo(() => {
    let result = [...projects];
    if (filterCategory !== 'all') {
      result = result.filter(p => p.category === filterCategory);
    }
    result.sort((a, b) => {
      if (sortOrder === 'newest') {
        return b.dateValue.localeCompare(a.dateValue);
      } else {
        return a.dateValue.localeCompare(b.dateValue);
      }
    });
    return result;
  }, [filterCategory, sortOrder]);

  return (
    <section id="projects" className="py-24 bg-slate-100 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-3xl pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div>
            <h2 className="text-blue-600 font-semibold tracking-wider uppercase mb-2 text-sm">{t.projects.subtitle[lang]}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900">{t.projects.title[lang]}</h3>
          </div>
          <div className="hidden md:block">
              <p className="text-slate-600 max-w-sm text-end">
                  {t.projects.desc[lang]}
              </p>
          </div>
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
           <div className="flex flex-wrap gap-2 justify-center md:justify-start">
             <span className="flex items-center text-slate-500 mx-2 text-sm"><Filter size={16} className="mx-1"/> Filter:</span>
             {[
               { id: 'all', label: t.projects.filterAll[lang] },
               { id: 'residential', label: t.projects.filterRes[lang] },
               { id: 'commercial', label: t.projects.filterCom[lang] },
               { id: 'industrial', label: t.projects.filterInd[lang] },
               { id: 'automation', label: t.projects.filterAuto[lang] },
             ].map((cat) => (
               <button
                 key={cat.id}
                 // @ts-ignore
                 onClick={() => setFilterCategory(cat.id)}
                 className={`px-3 py-1.5 rounded-lg text-sm transition-colors border ${
                   filterCategory === cat.id 
                     ? 'bg-blue-600 text-white border-blue-600 font-bold' 
                     : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-400'
                 }`}
               >
                 {cat.label}
               </button>
             ))}
           </div>
           
           <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="flex items-center text-slate-500 text-sm"><ArrowUpDown size={16} className="mx-1"/> Sort:</span>
              <select 
                className="bg-slate-50 text-slate-700 border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-blue-600"
                // @ts-ignore
                value={sortOrder}
                // @ts-ignore
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="newest">{t.projects.sortNew[lang]}</option>
                <option value="oldest">{t.projects.sortOld[lang]}</option>
              </select>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
          {filteredProjects.map((project, index) => {
            const Icon = categoryIcons[project.category];
            return (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenProject(project)}
              className="group relative overflow-hidden rounded-3xl cursor-pointer border border-slate-200 hover:border-blue-400 shadow-lg bg-white"
            >
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img 
                  src={project.thumbnailUrl} 
                  alt={project.title[lang]} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500"></div>
                
                {/* Category Icon Badge */}
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 bg-white/95 backdrop-blur px-3 py-2 rounded-lg border border-slate-200 flex items-center space-x-2 rtl:space-x-reverse shadow-md">
                  <Icon className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 text-xs font-bold uppercase tracking-wide">{project.categoryLabel[lang]}</span>
                </div>
                
                {/* Click indicator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 text-white rounded-full p-4 shadow-lg scale-50 group-hover:scale-100">
                  <ArrowRight size={24} className={lang === 'ar' ? 'rotate-180' : ''} />
                </div>
              </div>

              <div className="p-6 md:p-8 bg-white border-t border-slate-100">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {project.title[lang]}
                  </h4>
                </div>
                <p className="text-slate-600 line-clamp-2 mb-4 text-sm">
                  {project.description[lang]}
                </p>
                <div className="flex items-center text-sm text-slate-500">
                  <MapPin size={14} className="mx-1" /> {project.location}
                  <span className="mx-2">•</span>
                  <span className="text-slate-600">{project.completionDate[lang]}</span>
                </div>
              </div>
            </motion.div>
            );
          })}
          </AnimatePresence>
        </div>
        
        <div className="mt-12 text-center">
           <button className="px-8 py-3 rounded-full border border-slate-300 text-slate-600 hover:text-white hover:bg-slate-900 transition-all font-medium">
              {t.projects.loadMore[lang]}
           </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;