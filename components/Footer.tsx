import React from "react";
import {
  Zap,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Language } from "../types";
import { t } from "../data/translations";
import { services } from "../data/content";

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isRTL = lang === "ar";

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <img
                src="https://github.com/user-attachments/assets/d2d46cd1-e86e-41f6-bd46-f3fb7e994048"
                alt=""
                width={80}
                className="rounded-2xl"
              />
              <span className="text-2xl font-bold text-white tracking-wide">
                Elektro<span className="text-blue-500">Erdem</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.footer.aboutDesc[lang]}
            </p>
            {/* <div className="flex space-x-4 rtl:space-x-reverse">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-blue-600 rounded-full mr-3 rtl:mr-0 rtl:ml-3"></span>
              {t.footer.links[lang]}
            </h4>
            <ul className="space-y-3">
              {["home", "services", "projects", "testimonials", "contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link}`}
                      className="text-slate-400 hover:text-blue-500 transition-colors flex items-center text-sm capitalize"
                    >
                      <ChevronRight
                        size={14}
                        className={`mr-1 text-slate-600 ${
                          isRTL ? "rotate-180 ml-1 mr-0" : ""
                        }`}
                      />
                      {/* @ts-ignore */}
                      {t[link === "home" ? "hero" : link]?.title?.[lang] ||
                        t.footer.contact[lang]}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-blue-600 rounded-full mr-3 rtl:mr-0 rtl:ml-3"></span>
              {t.footer.services[lang]}
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-blue-500 transition-colors flex items-center text-sm"
                  >
                    <ChevronRight
                      size={14}
                      className={`mr-1 text-slate-600 ${
                        isRTL ? "rotate-180 ml-1 mr-0" : ""
                      }`}
                    />
                    {service.title[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-blue-600 rounded-full mr-3 rtl:mr-0 rtl:ml-3"></span>
              {t.footer.contact[lang]}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">
                  Brigachstr. 14, 70376
                  <br />
                  Stuttgart, Germany
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-slate-400 font-mono" dir="ltr">
                  +49 176 210 25291
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-slate-400">info@elektroerdem.de</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col items-center text-sm text-slate-500">
          <div className="text-center">
            &copy; 2026 ElektroErdem. {t.footer.rights[lang]}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
