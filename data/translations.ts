import { LocalizedString } from "../types";

interface Translations {
  [key: string]: {
    hero: {
      badge: LocalizedString;
      title: LocalizedString;
      titleHighlight: LocalizedString;
      titleEnd: LocalizedString;
      desc: LocalizedString;
      ctaProject: LocalizedString;
      ctaOffer: LocalizedString;
      features: {
        one: LocalizedString;
        two: LocalizedString;
        three: LocalizedString;
        four: LocalizedString;
      };
    };
    stats: {
      warranty: LocalizedString;
      service: LocalizedString;
      projects: LocalizedString;
      clients: LocalizedString;
    };
    services: {
      subtitle: LocalizedString;
      title: LocalizedString;
    };
    projects: {
      subtitle: LocalizedString;
      title: LocalizedString;
      desc: LocalizedString;
      filterAll: LocalizedString;
      filterRes: LocalizedString;
      filterCom: LocalizedString;
      filterInd: LocalizedString;
      filterAuto: LocalizedString;
      sortNew: LocalizedString;
      sortOld: LocalizedString;
      loadMore: LocalizedString;
    };
    testimonials: {
      subtitle: LocalizedString;
      title: LocalizedString;
    };
    contact: {
      subtitle: LocalizedString;
      title: LocalizedString;
      desc: LocalizedString;
      addressTitle: LocalizedString;
      address: LocalizedString;
      phoneTitle: LocalizedString;
      phoneDesc: LocalizedString;
      emailTitle: LocalizedString;
      form: {
        title: LocalizedString;
        name: LocalizedString;
        phone: LocalizedString;
        email: LocalizedString;
        subject: LocalizedString;
        message: LocalizedString;
        submit: LocalizedString;
        sending: LocalizedString;
        success: LocalizedString;
        privacyLine1: LocalizedString;
        privacyLine2: LocalizedString;
        options: {
          offer: LocalizedString;
          fault: LocalizedString;
          consult: LocalizedString;
          other: LocalizedString;
        };
      };
    };
    modal: {
      gallery: LocalizedString;
      date: LocalizedString;
      location: LocalizedString;
      specs: LocalizedString;
      tech: LocalizedString;
    };
    footer: {
      about: LocalizedString;
      aboutDesc: LocalizedString;
      services: LocalizedString;
      links: LocalizedString;
      contact: LocalizedString;
      rights: LocalizedString;
    };
  };
}

export const t: any = {
  hero: {
    badge: {
      tr: "Usta Elektrikçi & Mühendislik",
      de: "Wilkommen bei Elektro Erdem",
      en: "Welcome to Elektro Erdem",
    },
    title: {
      tr: "Profesyonel",
      de: "Ihr Meisterbetrieb für",
      en: "Professional",
    },
    titleHighlight: {
      tr: "Elektrik Hizmetleri",
      de: "Elektrotechnik",
      en: "Electrical Services",
    },
    titleEnd: {
      tr: "Stuttgart'ta",
      de: "in Stuttgart",
      en: "in Stuttgart",
    },
    desc: {
      tr: "Bireysel ve kurumsal projeleriniz için sertifikalı elektrik tesisatı, akıllı ev sistemleri ve arıza bakım hizmetleri.",
      de: "Für Privatkunden, Gewerbe und Industrie bieten wir maßgeschneiderte Lösungen rund um E-Mobilität, moderne Elektroinstallationen, Smart-Home-Systeme und Elektrokontrollen. Elektro Erdem steht für Qualität, Präzision und Vertrauen.",
      en: "For private customers, commercial businesses, and industry, we provide tailor-made solutions in the areas of e-mobility, modern electrical installations, smart home systems, and electrical inspections. Elektro Erdem stands for quality, precision, and trust.",
    },
    ctaProject: {
      tr: "Projelerimiz",
      de: "Unsere Projekte",
      en: "Our Projects",
    },
    ctaOffer: {
      tr: "Hemen Teklif Al",
      de: "Angebot anfordern",
      en: "Get a Quote",
    },
    features: {
      one: {
        tr: "Elektrik Tesisatı",
        de: "Elektroinstallation",
        en: "Electrical Installation",
      },
      two: {
        tr: "Akıllı Ev (KNX)",
        de: "Smart Home (KNX)",
        en: "Smart Home (KNX)",
      },
      three: {
        tr: "7/24 Acil Servis",
        de: "24/7 Notdienst",
        en: "24/7 Emergency Service",
      },
      four: {
        tr: "Endüstriyel Çözümler",
        de: "Industrielösungen",
        en: "Industrial Solutions",
      },
      five: {
        tr: "Elektrik Tesisatları",
        de: "Elektroinstallationen",
        en: "Electrical Installations",
      },
      six: {
        tr: "Servis / Müşteri Hizmeti",
        de: "Service/Kundendienst",
        en: "Service / Customer Support",
      },
      seven: {
        tr: "Akıllı Ev",
        de: "Smart Home",
        en: "Smart Home",
      },
      eight: {
        tr: "E-Mobilite",
        de: "E-Mobilität",
        en: "E-Mobility",
      },
      nine: {
        tr: "Planlama ve Danışmanlık",
        de: "Planung und Beratung",
        en: "Planning and Consulting",
      },
      ten: {
        tr: "Tesisat Kontrolü",
        de: "Installationskontrolle",
        en: "Installation Inspection",
      },
      eleven: {
        tr: "Fotovoltaik",
        de: "Photovoltaik",
        en: "Photovoltaics",
      },
    },
  },
  stats: {
    warranty: {
      tr: "Garantili İşçilik",
      de: "Meistergarantie",
      en: "Warranty",
    },
    service: {
      tr: "Hızlı Servis",
      de: "Schneller Service",
      en: "Fast Service",
    },
    projects: {
      tr: "Tamamlanan Proje",
      de: "Abgeschlossene Projekte",
      en: "Projects Done",
    },
    clients: {
      tr: "Mutlu Müşteri",
      de: "Zufriedene Kunden",
      en: "Happy Clients",
    },
  },
  services: {
    subtitle: {
      tr: "Hizmetlerimiz",
      de: "Unsere Leistungen",
      en: "Our Services",
    },
    title: {
      tr: "Elektrik İhtiyaçlarınız İçin Profesyonel Çözümler",
      de: "Professionelle Lösungen für Ihren Strombedarf",
      en: "Professional Solutions for Your Electrical Needs",
    },
  },
  projects: {
    subtitle: {
      tr: "Referanslarımız",
      de: "Referenzen",
      en: "References",
    },
    title: {
      tr: "Tamamlanan Projeler",
      de: "Abgeschlossene Projekte",
      en: "Completed Projects",
    },
    desc: {
      tr: "Detayları incelemek ve teknik şemaları görüntülemek için projelere tıklayın.",
      de: "Klicken Sie auf die Projekte, um Details zu sehen und technische Pläne anzuzeigen.",
      en: "Click on projects to view details and technical schematics.",
    },
    filterAll: { tr: "Tümü", de: "Alle", en: "All" },
    filterRes: { tr: "Konut", de: "Wohnbau", en: "Residential" },
    filterCom: { tr: "Ticari", de: "Gewerbe", en: "Commercial" },
    filterInd: {
      tr: "Endüstri",
      de: "Installation",
      en: "Installation",
    },
    filterAuto: {
      tr: "Otomasyon",
      de: "Automation",
      en: "Automation",
    },
    sortNew: { tr: "En Yeni", de: "Neueste", en: "Newest" },
    sortOld: { tr: "En Eski", de: "Älteste", en: "Oldest" },
    loadMore: {
      tr: "Daha Fazla Proje",
      de: "Mehr Projekte",
      en: "Load More",
    },
  },
  testimonials: {
    subtitle: {
      tr: "Müşteri Yorumları",
      de: "Kundenbewertungen",
      en: "Testimonials",
    },
    title: {
      tr: "Güvenilir Çözüm Ortağınız",
      de: "Ihr zuverlässiger Partner",
      en: "Your Reliable Partner",
    },
  },
  contact: {
    subtitle: { tr: "İletişim", de: "Kontakt", en: "Contact" },
    title: {
      tr: "Projenizi Başlatalım",
      de: "Starten wir Ihr Projekt",
      en: "Let's Start Your Project",
    },
    desc: {
      tr: "Elektrik tesisatı, aydınlatma veya proje danışmanlığı için bize ulaşın.",
      de: "Kontaktieren Sie uns für Elektroinstallationen, Beleuchtung oder Projektberatung.",
      en: "Contact us for electrical installation, lighting, or project consulting.",
    },
    addressTitle: {
      tr: "Ofis Adresi",
      de: "Büroadresse",
      en: "Office Address",
    },
    address: {
      tr: "Brigachstr. 14, 70376 Stuttgart",
      de: "Brigachstr. 14, 70376 Stuttgart",
      en: "Brigachstr. 14, 70376 Stuttgart",
    },
    phoneTitle: {
      tr: "Telefon & WhatsApp",
      de: "Telefon & WhatsApp",
      en: "Phone & WhatsApp",
    },
    phoneDesc: {
      tr: "7/24 Acil Destek Hattı",
      de: "24/7 Notfall-Hotline",
      en: "24/7 Emergency Hotline",
    },
    emailTitle: {
      tr: "E-posta",
      de: "E-Mail",
      en: "Email",
    },
    form: {
      title: {
        tr: "İletişim Formu",
        de: "Kontaktformular",
        en: "Contact Form",
      },
      name: {
        tr: "Adınız Soyadınız",
        de: "Ihr Name",
        en: "Full Name",
      },
      phone: { tr: "Telefon", de: "Telefon", en: "Phone" },
      email: {
        tr: "E-posta",
        de: "E-Mail",
        en: "Email",
      },
      subject: { tr: "Konu", de: "Betreff", en: "Subject" },
      message: {
        tr: "Mesajınız",
        de: "Ihre Nachricht",
        en: "Your Message",
      },
      submit: {
        tr: "Mesajı Gönder",
        de: "Nachricht senden",
        en: "Send Message",
      },
      sending: {
        tr: "Gönderiliyor...",
        de: "Senden...",
        en: "Sending...",
      },
      success: {
        tr: "Başarıyla Gönderildi!",
        de: "Erfolgreich gesendet!",
        en: "Sent Successfully!",
      },
      privacyLine1: {
        tr: "Gizlilik politikasını okudum ve bilgilendirildim.",
        de: "Ich habe die Datenschutzerklärung zur Kenntnis genommen.",
        en: "I have read and acknowledged the privacy policy.",
      },
      privacyLine2: {
        tr: "Bilgilerimin iletişim amacıyla saklanmasını kabul ediyorum.",
        de: "Ich stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert werden.",
        en: "I agree that my details may be stored for contact purposes.",
      },
      options: {
        offer: {
          tr: "Teklif Almak İstiyorum",
          de: "Ich möchte ein Angebot",
          en: "I want a quote",
        },
        fault: {
          tr: "Arıza Bildirimi",
          de: "Störungsmeldung",
          en: "Report a fault",
        },
        consult: {
          tr: "Danışmanlık",
          de: "Beratung",
          en: "Consultation",
        },
        other: { tr: "Diğer", de: "Sonstiges", en: "Other" },
      },
    },
  },
  modal: {
    gallery: { tr: "Galeri", de: "Galerie", en: "Gallery" },
    date: {
      tr: "Teslim Tarihi",
      de: "Fertigstellung",
      en: "Completion Date",
    },
    location: { tr: "Konum", de: "Standort", en: "Location" },
    specs: {
      tr: "Teknik Özellikler & Bileşenler",
      de: "Technische Daten & Komponenten",
      en: "Tech Specs & Components",
    },
    tech: {
      tr: "Kullanılan Teknolojiler",
      de: "Verwendete Technologien",
      en: "Technologies Used",
    },
  },
  footer: {
    about: {
      tr: "Hakkımızda",
      de: "Über uns",
      en: "About Us",
    },
    aboutDesc: {
      tr: "Stuttgart bölgesinde 10+ yıldır güvenilir elektrik hizmetleri sunan, uzman kadrosuyla müşteri memnuniyetini ön planda tutan lider elektrik firması.",
      de: "Ein führendes Elektrounternehmen in der Region Stuttgart, das für zuverlässige Dienstleistungen steht und Kundenzufriedenheit durch qualifiziertes Fachpersonal in den Mittelpunkt stellt.",
      en: "A leading electrical company in the Stuttgart region, delivering reliable services with a strong focus on customer satisfaction and skilled professionals.",
    },
    services: {
      tr: "Hizmetler",
      de: "Leistungen",
      en: "Services",
    },
    links: {
      tr: "Hızlı Bağlantılar",
      de: "Quick Links",
      en: "Quick Links",
    },
    contact: { tr: "İletişim", de: "Kontakt", en: "Contact" },
    rights: {
      tr: "Tüm hakları saklıdır.",
      de: "Alle Rechte vorbehalten.",
      en: "All rights reserved.",
    },
  },
};
