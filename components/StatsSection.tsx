import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, CheckCircle } from "lucide-react";
import { Language } from "../types";
import { t } from "../data/translations";

interface StatsSectionProps {
  lang: Language;
}

const StatsSection: React.FC<StatsSectionProps> = ({ lang }) => {
  return (
    <section className="py-10 border-y border-slate-200 bg-white/90 backdrop-blur-sm relative z-20 shadow-sm">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { icon: ShieldCheck, label: t.stats.warranty[lang], value: "100%" },
          { icon: Clock, label: t.stats.service[lang], value: "24/7" },
          { icon: Award, label: t.stats.projects[lang], value: "30+" },
          { icon: CheckCircle, label: t.stats.clients[lang], value: "50+" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center space-y-2 group"
          >
            <div className="bg-blue-50 p-3 rounded-full group-hover:bg-blue-100 transition-colors">
              <stat.icon className="w-8 h-8 text-blue-600" />
            </div>
            <span className="text-3xl font-bold text-slate-900">
              {stat.value}
            </span>
            <span className="text-sm text-slate-600">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
