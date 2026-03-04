import React, { useState } from "react";
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
import { Language, ProjectItem } from "../types";
import { t } from "../data/translations";
import { services, projects } from "../data/content";

interface FooterProps {
  lang: Language;
  onOpenProject: (project: ProjectItem) => void;
}

const Footer: React.FC<FooterProps> = ({ lang, onOpenProject }) => {
  const [activeLegal, setActiveLegal] = useState<
    "impressum" | "privacy" | null
  >(null);

  return (
    <>
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
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
                  Elektro Erdem
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
                {projects.map((project) => (
                  <li key={project.id}>
                    <button
                      onClick={() => onOpenProject(project)}
                      className="text-slate-400 hover:text-blue-500 transition-colors flex items-center text-sm text-left w-full"
                    >
                      <ChevronRight size={14} className="mr-1 text-slate-600" />
                      {project.title[lang]}
                    </button>
                  </li>
                ))}
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
                      <ChevronRight size={14} className="mr-1 text-slate-600" />
                      {service.title[lang]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:order-5">
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
                  <a
                    href="tel:+4917621025291"
                    className="text-slate-400 hover:text-blue-500 transition-colors font-mono"
                    dir="ltr"
                  >
                    +49 176 210 252 91
                  </a>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <a
                    href="mailto:info@elektroerdem.de"
                    className="text-slate-400 hover:text-blue-500 transition-colors"
                  >
                    info@elektroerdem.de
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:order-4">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                <span className="w-1 h-6 bg-blue-600 rounded-full mr-3 rtl:mr-0 rtl:ml-3"></span>
                {t.footer.legal[lang]}
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setActiveLegal("impressum")}
                    className="text-slate-400 hover:text-blue-500 transition-colors flex items-center text-sm text-left w-full"
                  >
                    <ChevronRight size={14} className="mr-1 text-slate-600" />
                    {t.footer.impressum[lang]}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveLegal("privacy")}
                    className="text-slate-400 hover:text-blue-500 transition-colors flex items-center text-sm text-left w-full"
                  >
                    <ChevronRight size={14} className="mr-1 text-slate-600" />
                    {t.footer.privacy[lang]}
                  </button>
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

      {activeLegal && (
        <div
          className="fixed inset-0 z-[80] bg-slate-900/80 backdrop-blur-sm p-4 flex items-center justify-center"
          onClick={() => setActiveLegal(null)}
        >
          <div
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 md:p-8 text-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">
                {activeLegal === "impressum"
                  ? "Impressum"
                  : "Datenschutzerklärung"}
              </h3>
              <button
                onClick={() => setActiveLegal(null)}
                className="text-sm px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100"
              >
                Schließen
              </button>
            </div>

            {activeLegal === "impressum" ? (
              <div className="space-y-4 text-sm leading-relaxed">
                <p className="font-semibold">Angaben gemäß § 5 TMG</p>
                <p>
                  Elektro Erdem
                  <br />
                  Inhaber: Emre Erdem
                </p>
                <p>
                  Adresse:
                  <br />
                  Brigachstr. 14
                  <br />
                  70376 Stuttgart
                  <br />
                  Deutschland
                </p>
                <p>
                  Kontakt:
                  <br />
                  Telefon: +49 176 210 252 91
                  <br />
                  E-Mail: info@elektroerdem.de
                </p>
                <p>
                  Umsatzsteuer-ID gemäß §27a Umsatzsteuergesetz: DE [USt-ID]
                </p>
                <p>
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                  <br />
                  Emre Erdem
                  <br />
                  Adresse wie oben
                </p>
                <p>
                  Berufsbezeichnung: Elektriker / Elektrotechniker
                  <br />
                  Verliehen in: Deutschland
                </p>
                <p>Zuständige Handwerkskammer: [Name der Handwerkskammer]</p>
                <p>
                  Berufsrechtliche Regelungen: Handwerksordnung (HwO)
                  <br />
                  Einsehbar unter:{" "}
                  <a
                    href="https://www.gesetze-im-internet.de"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 underline"
                  >
                    https://www.gesetze-im-internet.de
                  </a>
                </p>
                <p className="font-semibold">Haftung für Inhalte</p>
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                  erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                  der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
                <p className="font-semibold">Haftung für Links</p>
                <p>
                  Unsere Website enthält Links zu externen Websites Dritter. Auf
                  deren Inhalte haben wir keinen Einfluss und übernehmen dafür
                  keine Gewähr.
                </p>
                <p className="font-semibold">Urheberrecht</p>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-sm leading-relaxed">
                <p className="font-semibold">Allgemeine Hinweise</p>
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges
                  Anliegen. Wir behandeln Ihre personenbezogenen Daten
                  vertraulich und entsprechend der gesetzlichen
                  Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p>
                  Die Nutzung unserer Website ist in der Regel ohne Angabe
                  personenbezogener Daten möglich. Soweit auf unseren Seiten
                  personenbezogene Daten erhoben werden (z.B. Name,
                  E-Mail-Adresse oder Telefonnummer), erfolgt dies stets auf
                  freiwilliger Basis.
                </p>
                <p className="font-semibold">Verantwortliche Stelle</p>
                <p>
                  Elektro Erdem
                  <br />
                  Inhaber: Emre Erdem
                  <br />
                  Brigachstr. 14
                  <br />
                  70376 Stuttgart
                  <br />
                  Deutschland
                  <br />
                  Telefon: +49 176 210 252 91
                  <br />
                  E-Mail: info@elektroerdem.de
                </p>
                <p className="font-semibold">
                  Erhebung und Speicherung personenbezogener Daten beim Besuch
                  der Website
                </p>
                <p>
                  Beim Aufrufen unserer Website werden durch den
                  Hosting-Provider automatisch Informationen erfasst und in
                  sogenannten Server-Logfiles gespeichert.
                </p>
                <p>
                  Erfasst werden können: IP-Adresse, Datum und Uhrzeit der
                  Anfrage, Browsertyp und Browserversion, verwendetes
                  Betriebssystem, Referrer URL, Hostname des zugreifenden
                  Rechners.
                </p>
                <p>
                  Diese Daten werden ausschließlich zur Sicherstellung eines
                  störungsfreien Betriebs der Website sowie zur Verbesserung
                  unseres Angebots ausgewertet. Rechtsgrundlage hierfür ist Art.
                  6 Abs. 1 lit. f DSGVO.
                </p>
                <p className="font-semibold">Kontaktaufnahme</p>
                <p>
                  Wenn Sie uns per E-Mail oder über ein Kontaktformular
                  kontaktieren, werden Ihre Angaben aus der Anfrage inklusive
                  der von Ihnen angegebenen Kontaktdaten zum Zwecke der
                  Bearbeitung Ihrer Anfrage gespeichert.
                </p>
                <p>
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die
                  Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO.
                </p>
                <p className="font-semibold">Cookies</p>
                <p>
                  Unsere Website verwendet sogenannte Cookies. Cookies richten
                  auf Ihrem Endgerät keinen Schaden an und enthalten keine
                  Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher,
                  effektiver und sicherer zu machen. Sie können Ihren Browser so
                  einstellen, dass Sie über das Setzen von Cookies informiert
                  werden und Cookies nur im Einzelfall erlauben oder generell
                  ausschließen.
                </p>
                <p className="font-semibold">SSL- bzw. TLS-Verschlüsselung</p>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                  Übertragung vertraulicher Inhalte eine SSL- bzw.
                  TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                  Sie daran, dass die Adresszeile des Browsers von "http://" auf
                  "https://" wechselt.
                </p>
                <p className="font-semibold">Ihre Rechte</p>
                <p>
                  Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
                  Löschung, Einschränkung der Verarbeitung, Widerspruch gegen
                  die Verarbeitung sowie Datenübertragbarkeit. Darüber hinaus
                  steht Ihnen ein Beschwerderecht bei der zuständigen
                  Aufsichtsbehörde zu.
                </p>
                <p className="font-semibold">Speicherdauer</p>
                <p>
                  Ihre personenbezogenen Daten verbleiben bei uns, bis der Zweck
                  für die Datenverarbeitung entfällt oder Sie die Löschung
                  verlangen, sofern keine gesetzlichen Aufbewahrungspflichten
                  bestehen.
                </p>
                <p className="font-semibold">Widerspruch gegen Werbe-E-Mails</p>
                <p>
                  Der Nutzung von im Impressum veröffentlichten Kontaktdaten zur
                  Übersendung von nicht ausdrücklich angeforderter Werbung wird
                  hiermit widersprochen.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
