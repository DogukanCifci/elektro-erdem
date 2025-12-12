import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  FileText,
  Layers,
} from "lucide-react";
import { ProjectItem, Language } from "../types";
import { t } from "../data/translations";

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
  lang: Language;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  lang,
}) => {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const isRTL = lang === "ar";

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGalleryIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGalleryIndex(
      (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 30 }}
        className="bg-white w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Media Section (Left/Top) */}
        <div className="lg:w-3/5 bg-slate-900 relative flex flex-col h-[40vh] lg:h-auto group">
          <div className="flex-1 relative overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={galleryIndex}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                src={project.gallery[galleryIndex]}
                alt={project.title[lang]}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className={`absolute ${
                    isRTL ? "right-4" : "left-4"
                  } top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white p-3 rounded-full transition-all z-20 backdrop-blur-sm border border-white/20 hover:border-blue-500 opacity-0 group-hover:opacity-100`}
                >
                  <ChevronLeft
                    size={24}
                    className={isRTL ? "rotate-180" : ""}
                  />
                </button>
                <button
                  onClick={nextImage}
                  className={`absolute ${
                    isRTL ? "left-4" : "right-4"
                  } top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white p-3 rounded-full transition-all z-20 backdrop-blur-sm border border-white/20 hover:border-blue-500 opacity-0 group-hover:opacity-100`}
                >
                  <ChevronRight
                    size={24}
                    className={isRTL ? "rotate-180" : ""}
                  />
                </button>
              </>
            )}
          </div>

          {project.gallery.length > 1 && (
            <div className="h-24 bg-slate-900 border-t border-slate-800 flex items-center px-6 space-x-3 rtl:space-x-reverse overflow-x-auto z-20 custom-scrollbar">
              {project.gallery.map((img, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setGalleryIndex(idx);
                  }}
                  className={`h-16 w-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all relative group/thumb ${
                    idx === galleryIndex
                      ? "border-blue-500 ring-2 ring-blue-500/20 opacity-100"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <motion.img
                    src={img}
                    className="w-full h-full object-cover"
                    alt=""
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          )}
        </div>

        {/* Info Section (Right/Bottom) */}
        <div className="lg:w-2/5 p-8 flex flex-col overflow-y-auto bg-slate-50 custom-scrollbar border-l border-slate-200">
          <div className="flex justify-between items-start mb-6">
            <div className="flex flex-col">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md border border-blue-200 uppercase tracking-wider mb-2 w-max">
                {project.categoryLabel[lang]}
              </span>
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                {project.title[lang]}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-200 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-slate-200">
            <div className="flex items-center text-slate-700 text-sm bg-white px-3 py-2 rounded-lg border border-slate-200">
              <Calendar className="w-4 h-4 mx-2 text-blue-600" />
              <span>{project.completionDate[lang]}</span>
            </div>
            <div className="flex items-center text-slate-700 text-sm bg-white px-3 py-2 rounded-lg border border-slate-200">
              <MapPin className="w-4 h-4 mx-2 text-blue-600" />
              <span>{project.location}</span>
            </div>
          </div>

          <div className="prose prose-sm mb-8">
            <p className="text-slate-600 leading-relaxed text-base">
              {project.fullDescription[lang]}
            </p>
          </div>

          {/* Technical Specs Table */}
          {project.technicalSpecs && (
            <div className="mb-8">
              <h4 className="text-slate-800 font-bold mb-4 flex items-center text-sm uppercase tracking-wider">
                <FileText className="w-4 h-4 mx-2 text-blue-600" />
                {t.modal.specs[lang]}
              </h4>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-sm text-start">
                  <tbody>
                    {project.technicalSpecs.map((spec, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-4 py-3 text-slate-500 font-mono uppercase text-xs w-2/5 border-r border-slate-100 bg-slate-50/50">
                          {spec.label[lang]}
                        </td>
                        <td className="px-4 py-3 text-slate-700 font-medium">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="mt-auto">
            <h4 className="text-slate-800 font-semibold mb-3 flex items-center text-xs text-slate-500 uppercase">
              <Layers className="w-3 h-3 mx-2" />
              {t.modal.tech[lang]}
            </h4>
            <div className="flex flex-wrap gap-2">
              {["DIN VDE", "ISO 9001", "KNX Certified", "CE"].map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-white text-slate-600 px-3 py-1 rounded-full border border-slate-200 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
