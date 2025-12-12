import React, { useState, useEffect } from "react";
import { Zap, Menu, X, Phone, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "../types";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = {
    tr: {
      home: "Ana Sayfa",
      services: "Hizmetler",
      projects: "Projeler",
      testimonials: "Referanslar",
      contact: "İletişim",
      call: "Hemen Ara",
    },
    de: {
      home: "Startseite",
      services: "Leistungen",
      projects: "Projekte",
      testimonials: "Referenzen",
      contact: "Kontakt",
      call: "Anrufen",
    },
    en: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      testimonials: "Testimonials",
      contact: "Contact",
      call: "Call Now",
    },
    ar: {
      home: "الرئيسية",
      services: "الخدمات",
      projects: "المشاريع",
      testimonials: "المراجع",
      contact: "اتصل بنا",
      call: "اتصل الآن",
    },
  };

  const navLinks = [
    { name: t[lang].home, href: "#home" },
    { name: t[lang].services, href: "#services" },
    { name: t[lang].projects, href: "#projects" },
    { name: t[lang].testimonials, href: "#testimonials" },
    { name: t[lang].contact, href: "#contact" },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" },
    // { code: "tr", label: "Türkçe" },
    // { code: 'ar', label: 'العربية' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center space-x-2 group rtl:space-x-reverse"
        >
          {/* <img
            src="https://github.com/user-attachments/assets/4e443d0c-c560-4a15-92bc-35319edf4c0e"
            alt="logo"
            width={80}
            className="rounded-[1.75rem]"
          /> */}
          <img
            src="https://github.com/user-attachments/assets/d2d46cd1-e86e-41f6-bd46-f3fb7e994048"
            width={80}
            className="rounded-2xl"
          />
          <span
            className={`text-2xl font-bold tracking-wide transition-colors ${
              isScrolled ? "text-slate-900" : "text-slate-900"
            }`}
          >
            Elektro<span className="text-blue-600">Erdem</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full ${
                isScrolled
                  ? "text-slate-600 hover:text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center space-x-2 border-l border-slate-300 pl-6 ml-6 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-6 rtl:mr-6 rtl:space-x-reverse">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 transition-colors border rounded-md px-2 py-1 text-slate-600 border-slate-300 hover:bg-slate-100"
              >
                <Globe size={16} />
                <span className="text-xs font-bold uppercase">{lang}</span>
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 rtl:right-auto rtl:left-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg py-1 w-32">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left rtl:text-right px-4 py-2 text-sm hover:bg-slate-50 ${
                        lang === l.code
                          ? "text-blue-600 font-bold"
                          : "text-slate-700"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <a
            href="#contact"
            className="flex items-center space-x-2 rtl:space-x-reverse bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-bold transition-transform hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            <Phone size={16} />
            <span dir="ltr">+49 176 210 25291</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden rtl:space-x-reverse">
          <button
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="border rounded-md px-2 py-1 text-slate-800 border-slate-300"
          >
            <span className="text-xs font-bold uppercase">{lang}</span>
          </button>
          <button
            className="text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-4 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg text-slate-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="w-full text-center bg-blue-600 text-white py-3 rounded-lg font-bold shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t[lang].call}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
