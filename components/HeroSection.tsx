import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, CheckCircle } from "lucide-react";
import HeroScene from "./HeroScene";
import { Language } from "../types";
import { t } from "../data/translations";

interface HeroSectionProps {
  lang: Language;
}

const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const isRTL = lang === "ar";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50"
    >
      <HeroScene />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-[1rem] md:mt-0 md:w-3/5 space-y-6 text-center md:text-start pt-20 pointer-events-auto"
        >
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold text-sm mb-2 backdrop-blur-md shadow-sm">
            <span className="flex items-center gap-2 uppercase tracking-wide">
              <Zap size={16} />
              {t.hero.badge[lang]}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 drop-shadow-sm">
            {t.hero.title[lang]} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 animate-pulse-slow">
              {t.hero.titleHighlight[lang]}
            </span>
            <br />
            {t.hero.titleEnd[lang]}
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-700 max-w-lg mx-auto md:mx-0 font-light leading-relaxed drop-shadow-sm border-l-4 rtl:border-l-0 rtl:border-r-4 border-blue-500 pl-4 rtl:pl-0 rtl:pr-4 bg-white/60 backdrop-blur-sm rounded-r-lg rtl:rounded-r-none rtl:rounded-l-lg py-3">
            {t.hero.desc[lang]}
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full py-4">
            {[
              t.hero.features.one,
              t.hero.features.two,
              t.hero.features.three,
              t.hero.features.four,
              t.hero.features.five,
              t.hero.features.six,
              t.hero.features.seven,
              t.hero.features.eight,
              t.hero.features.nine,
              t.hero.features.ten,
              t.hero.features.eleven,
            ].map((feature: any, i: number) => (
              <div
                key={i}
                className="flex items-center space-x-2 rtl:space-x-reverse text-slate-700 bg-white/70 p-2 rounded backdrop-blur-sm border border-slate-200 shadow-sm"
              >
                <CheckCircle className="text-blue-600 w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-semibold">{feature[lang]}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20 flex items-center justify-center"
            >
              {t.hero.ctaProject[lang]}{" "}
              <ArrowRight
                className={`ml-2 w-5 h-5 ${
                  isRTL ? "rotate-180 mr-2 ml-0" : ""
                }`}
              />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-medium rounded-lg transition-all backdrop-blur-sm bg-white/50"
            >
              {t.hero.ctaOffer[lang]}
            </a>
          </div>
        </motion.div>

        <div className="md:w-2/5 h-full"></div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
