import React from "react";
import { motion } from "framer-motion";
import { Language } from "../types";
import { t } from "../data/translations";
import { testimonials } from "../data/content";

interface TestimonialsSectionProps {
  lang: Language;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wider uppercase mb-2 text-sm">
            {t.testimonials.subtitle[lang]}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">
            {t.testimonials.title[lang]}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-slate-200 relative hover:border-slate-300 transition-colors shadow-md"
            >
              <div className="absolute -top-4 left-8 rtl:left-auto rtl:right-8 text-6xl text-blue-500 opacity-20 font-serif">
                "
              </div>
              <p className="text-slate-600 mb-6 relative z-10 italic text-lg leading-relaxed">
                {item.comment[lang]}
              </p>
              <div className="flex items-center mt-auto border-t border-slate-100 pt-6">
                {/* <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-blue-200 mr-4 rtl:mr-0 rtl:ml-4" /> */}
                <div>
                  <h5 className="text-slate-900 font-bold">{item.name}</h5>
                  <span className="text-sm text-slate-500">
                    {item.role[lang]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
