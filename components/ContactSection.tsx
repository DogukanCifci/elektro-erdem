import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Language } from "../types";
import { t } from "../data/translations";

interface ContactSectionProps {
  lang: Language;
}

const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const formData = new FormData(e.target);
    formData.append("access_key", "8ad89098-4cd5-4824-87ff-02e5dceeb54b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setFormStatus("success");
      e.target.reset();
    } else {
      setFormStatus("idle");
      console.error(result);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 sticky top-24"
          >
            <div>
              <h2 className="text-blue-600 font-semibold tracking-wider uppercase mb-2 text-sm">
                {t.contact.subtitle[lang]}
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                {t.contact.title[lang]}
              </h3>
              <p className="text-slate-600 mb-8 text-lg">
                {t.contact.desc[lang]}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 rtl:space-x-reverse p-4 rounded-xl hover:bg-slate-200 transition-colors border border-transparent hover:border-slate-300">
                <div className="bg-slate-200 p-3 rounded-lg text-blue-600 shadow-inner">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">
                    {t.contact.addressTitle[lang]}
                  </h4>
                  <p className="text-slate-600">{t.contact.address[lang]}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse p-4 rounded-xl hover:bg-slate-200 transition-colors border border-transparent hover:border-slate-300">
                <div className="bg-slate-200 p-3 rounded-lg text-blue-600 shadow-inner">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">
                    {t.contact.phoneTitle[lang]}
                  </h4>
                  <a
                    href="tel:+4917621025291"
                    className="text-slate-700 text-lg font-mono mt-1"
                  >
                    +49 176 210 25291
                  </a>
                  <p className="text-slate-500 text-sm">
                    {t.contact.phoneDesc[lang]}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse p-4 rounded-xl hover:bg-slate-200 transition-colors border border-transparent hover:border-slate-300">
                <div className="bg-slate-200 p-3 rounded-lg text-blue-600 shadow-inner">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">
                    {t.contact.emailTitle[lang]}
                  </h4>
                  <a
                    href="mailto:info@elektroerdem.de"
                    className="text-slate-600"
                  >
                    info@elektroerdem.de
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-300 mt-8 shadow-xl relative group">
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
              <iframe
                title="Google Maps Stuttgart"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.8773150509423!2d9.217161694869322!3d48.822402229314214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c542969635c3%3A0xfd67c13d48956868!2sBrigachstra%C3%9Fe%2014%2C%2070376%20Stuttgart!5e0!3m2!1str!2sde!4v1765566974316!5m2!1str!2sde"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%)" }}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none"></div>

            <h4 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">
              {t.contact.form.title[lang]}
            </h4>
            {/* <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">{t.contact.form.name[lang]}</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder-slate-400"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">{t.contact.form.phone[lang]}</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder-slate-400"
                    placeholder="+49 ..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">{t.contact.form.email[lang]}</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder-slate-400"
                  placeholder="mail@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">{t.contact.form.subject[lang]}</label>
                <select className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all appearance-none cursor-pointer">
                  <option>{t.contact.form.options.offer[lang]}</option>
                  <option>{t.contact.form.options.fault[lang]}</option>
                  <option>{t.contact.form.options.consult[lang]}</option>
                  <option>{t.contact.form.options.other[lang]}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">{t.contact.form.message[lang]}</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-none placeholder-slate-400"
                  placeholder="..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={formStatus !== 'idle'}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform active:scale-95 shadow-lg ${
                  formStatus === 'success' 
                    ? 'bg-green-600 text-white shadow-green-900/20' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-900/20'
                }`}
              >
                {formStatus === 'idle' && t.contact.form.submit[lang]}
                {formStatus === 'sending' && (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t.contact.form.sending[lang]}
                    </span>
                )}
                {formStatus === 'success' && t.contact.form.success[lang]}
              </button>
            </form> */}

            <form
              onSubmit={handleSubmitForm}
              className="space-y-6 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    {t.contact.form.name[lang]}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder-slate-400"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    {t.contact.form.phone[lang]}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder-slate-400"
                    placeholder="+49 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  {t.contact.form.email[lang]}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder-slate-400"
                  placeholder="mail@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  {t.contact.form.subject[lang]}
                </label>
                <select
                  name="subject"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all appearance-none cursor-pointer"
                >
                  <option>{t.contact.form.options.offer[lang]}</option>
                  <option>{t.contact.form.options.fault[lang]}</option>
                  <option>{t.contact.form.options.consult[lang]}</option>
                  <option>{t.contact.form.options.other[lang]}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  {t.contact.form.message[lang]}
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-none placeholder-slate-400"
                  placeholder="..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus !== "idle"}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform active:scale-95 shadow-lg ${
                  formStatus === "success"
                    ? "bg-green-600 text-white shadow-green-900/20"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-900/20"
                }`}
              >
                {formStatus === "idle" && t.contact.form.submit[lang]}
                {formStatus === "sending" && (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {t.contact.form.sending[lang]}
                  </span>
                )}
                {formStatus === "success" && t.contact.form.success[lang]}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
