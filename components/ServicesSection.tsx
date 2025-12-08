import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { t } from '../data/translations';
import { services } from '../data/content';

interface ServicesSectionProps {
  lang: Language;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ lang }) => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wider uppercase mb-2 text-sm">{t.services.subtitle[lang]}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">{t.services.title[lang]}</h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all shadow-md hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/5 border border-blue-100 group-hover:border-blue-200">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title[lang]}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">{service.description[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;