import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import { ProjectItem, Language } from "./types";

// --- APP COMPONENT ---
function App() {
  const [lang, setLang] = useState<Language>("de");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  // Handle RTL for Arabic
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    if (lang === "ar") {
      document.body.classList.add("font-arabic");
    } else {
      document.body.classList.remove("font-arabic");
    }
  }, [lang]);

  return (
    <div>
      <div className="bg-slate-50 text-slate-800 min-h-screen font-sans transition-colors duration-300">
        {/* Navigation */}
        <Navbar lang={lang} setLang={setLang} />

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
              lang={lang}
            />
          )}
        </AnimatePresence>

        {/* Main Sections */}
        <main>
          <HeroSection lang={lang} />

          <StatsSection lang={lang} />

          <ServicesSection lang={lang} />

          <ProjectsSection
            lang={lang}
            onOpenProject={(project) => setSelectedProject(project)}
          />

          <TestimonialsSection lang={lang} />

          <ContactSection lang={lang} />
        </main>

        {/* Footer */}
        <Footer lang={lang} />
      </div>
    </div>
  );
}

export default App;
