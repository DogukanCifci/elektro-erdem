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
      de: "Meisterbetrieb & Engineering",
      en: "Master Electrician & Engineering",
      ar: "كهربائي رئيسي وهندسة",
    },
    title: {
      tr: "Profesyonel",
      de: "Ihr Meisterbetrieb für",
      en: "Professional",
      ar: "حلول",
    },
    titleHighlight: {
      tr: "Elektrik Hizmetleri",
      de: "Elektrotechnik",
      en: "Electrical Services",
      ar: "كهربائية",
    },
    titleEnd: {
      tr: "Ve Mühendislik",
      de: "in Stuttgart",
      en: "& Engineering",
      ar: "احترافية في شتوتغارت",
    },
    desc: {
      tr: "Bireysel ve kurumsal projeleriniz için sertifikalı elektrik tesisatı, akıllı ev sistemleri ve arıza bakım hizmetleri.",
      de: "Zertifizierte Elektroinstallationen, Smart-Home-Systeme und Wartungsdienste für Ihre privaten und gewerblichen Projekte.",
      en: "Certified electrical installations, smart home systems, and maintenance services for your residential and commercial projects.",
      ar: "تركيبات كهربائية معتمدة، أنظمة المنازل الذكية، وخدمات الصيانة لمشاريعك السكنية والتجارية.",
    },
    ctaProject: {
      tr: "Projelerimiz",
      de: "Unsere Projekte",
      en: "Our Projects",
      ar: "مشاريعنا",
    },
    ctaOffer: {
      tr: "Hemen Teklif Al",
      de: "Angebot anfordern",
      en: "Get a Quote",
      ar: "اطلب عرض سعر",
    },
    features: {
      one: {
        tr: "Elektrik Tesisatı",
        de: "Elektroinstallation",
        en: "Electrical Installation",
        ar: "التركيبات الكهربائية",
      },
      two: {
        tr: "Akıllı Ev (KNX)",
        de: "Smart Home (KNX)",
        en: "Smart Home (KNX)",
        ar: "المنزل الذكي (KNX)",
      },
      three: {
        tr: "7/24 Acil Servis",
        de: "24/7 Notdienst",
        en: "24/7 Emergency Service",
        ar: "خدمة طوارئ 24/7",
      },
      four: {
        tr: "Endüstriyel Çözümler",
        de: "Industrielösungen",
        en: "Industrial Solutions",
        ar: "حلول صناعية",
      },
      five: {
        tr: "Elektrik Tesisatları",
        de: "Elektroinstallationen",
        en: "Electrical Installations",
        ar: "التركيبات الكهربائية",
      },
      six: {
        tr: "Servis / Müşteri Hizmeti",
        de: "Service/Kundendienst",
        en: "Service / Customer Support",
        ar: "خدمة العملاء",
      },
      seven: {
        tr: "Akıllı Ev",
        de: "Smart Home",
        en: "Smart Home",
        ar: "المنزل الذكي",
      },
      eight: {
        tr: "E-Mobilite",
        de: "E-Mobilität",
        en: "E-Mobility",
        ar: "التنقل الكهربائي",
      },
      nine: {
        tr: "Planlama ve Danışmanlık",
        de: "Planung und Beratung",
        en: "Planning and Consulting",
        ar: "التخطيط والاستشارات",
      },
      ten: {
        tr: "Tesisat Kontrolü",
        de: "Installationskontrolle",
        en: "Installation Inspection",
        ar: "فحص التركيبات",
      },
      eleven: {
        tr: "Fotovoltaik",
        de: "Photovoltaik",
        en: "Photovoltaics",
        ar: "الطاقة الضوئية",
      },
    },
  },
  stats: {
    warranty: {
      tr: "Garantili İşçilik",
      de: "Meistergarantie",
      en: "Warranty",
      ar: "ضمان الجودة",
    },
    service: {
      tr: "Hızlı Servis",
      de: "Schneller Service",
      en: "Fast Service",
      ar: "خدمة سريعة",
    },
    projects: {
      tr: "Tamamlanan Proje",
      de: "Abgeschlossene Projekte",
      en: "Projects Done",
      ar: "مشروع مكتمل",
    },
    clients: {
      tr: "Mutlu Müşteri",
      de: "Zufriedene Kunden",
      en: "Happy Clients",
      ar: "عميل سعيد",
    },
  },
  services: {
    subtitle: {
      tr: "Hizmetlerimiz",
      de: "Unsere Leistungen",
      en: "Our Services",
      ar: "خدماتنا",
    },
    title: {
      tr: "Elektrik İhtiyaçlarınız İçin Profesyonel Çözümler",
      de: "Professionelle Lösungen für Ihren Strombedarf",
      en: "Professional Solutions for Your Electrical Needs",
      ar: "حلول احترافية لاحتياجاتك الكهربائية",
    },
  },
  projects: {
    subtitle: {
      tr: "Referanslarımız",
      de: "Referenzen",
      en: "References",
      ar: "المراجع",
    },
    title: {
      tr: "Tamamlanan Projeler",
      de: "Abgeschlossene Projekte",
      en: "Completed Projects",
      ar: "المشاريع المنجزة",
    },
    desc: {
      tr: "Detayları incelemek ve teknik şemaları görüntülemek için projelere tıklayın.",
      de: "Klicken Sie auf die Projekte, um Details zu sehen und technische Pläne anzuzeigen.",
      en: "Click on projects to view details and technical schematics.",
      ar: "اضغط على المشاريع لعرض التفاصيل والمخططات الفنية.",
    },
    filterAll: { tr: "Tümü", de: "Alle", en: "All", ar: "الكل" },
    filterRes: { tr: "Konut", de: "Wohnbau", en: "Residential", ar: "سكني" },
    filterCom: { tr: "Ticari", de: "Gewerbe", en: "Commercial", ar: "تجاري" },
    filterInd: {
      tr: "Endüstri",
      de: "Industrie",
      en: "Industrial",
      ar: "صناعي",
    },
    filterAuto: {
      tr: "Otomasyon",
      de: "Automation",
      en: "Automation",
      ar: "أتمتة",
    },
    sortNew: { tr: "En Yeni", de: "Neueste", en: "Newest", ar: "الأحدث" },
    sortOld: { tr: "En Eski", de: "Älteste", en: "Oldest", ar: "الأقدم" },
    loadMore: {
      tr: "Daha Fazla Proje",
      de: "Mehr Projekte",
      en: "Load More",
      ar: "تحميل المزيد",
    },
  },
  testimonials: {
    subtitle: {
      tr: "Müşteri Yorumları",
      de: "Kundenbewertungen",
      en: "Testimonials",
      ar: "آراء العملاء",
    },
    title: {
      tr: "Güvenilir Çözüm Ortağınız",
      de: "Ihr zuverlässiger Partner",
      en: "Your Reliable Partner",
      ar: "شريكك الموثوق",
    },
  },
  contact: {
    subtitle: { tr: "İletişim", de: "Kontakt", en: "Contact", ar: "اتصل بنا" },
    title: {
      tr: "Projenizi Başlatalım",
      de: "Starten wir Ihr Projekt",
      en: "Let's Start Your Project",
      ar: "لنبدأ مشروعك",
    },
    desc: {
      tr: "Elektrik tesisatı, aydınlatma veya proje danışmanlığı için bize ulaşın.",
      de: "Kontaktieren Sie uns für Elektroinstallationen, Beleuchtung oder Projektberatung.",
      en: "Contact us for electrical installation, lighting, or project consulting.",
      ar: "اتصل بنا للتركيبات الكهربائية، الإضاءة، أو استشارات المشاريع.",
    },
    addressTitle: {
      tr: "Ofis Adresi",
      de: "Büroadresse",
      en: "Office Address",
      ar: "عنوان المكتب",
    },
    address: {
      tr: "Königstraße 123, 70173 Stuttgart",
      de: "Königstraße 123, 70173 Stuttgart",
      en: "Königstraße 123, 70173 Stuttgart",
      ar: "Königstraße 123, 70173 شتوتغارت",
    },
    phoneTitle: {
      tr: "Telefon & WhatsApp",
      de: "Telefon & WhatsApp",
      en: "Phone & WhatsApp",
      ar: "الهاتف والواتساب",
    },
    phoneDesc: {
      tr: "7/24 Acil Destek Hattı",
      de: "24/7 Notfall-Hotline",
      en: "24/7 Emergency Hotline",
      ar: "خط الطوارئ 24/7",
    },
    emailTitle: {
      tr: "E-posta",
      de: "E-Mail",
      en: "Email",
      ar: "البريد الإلكتروني",
    },
    form: {
      title: {
        tr: "İletişim Formu",
        de: "Kontaktformular",
        en: "Contact Form",
        ar: "نموذج الاتصال",
      },
      name: {
        tr: "Adınız Soyadınız",
        de: "Ihr Name",
        en: "Full Name",
        ar: "الاسم الكامل",
      },
      phone: { tr: "Telefon", de: "Telefon", en: "Phone", ar: "الهاتف" },
      email: {
        tr: "E-posta",
        de: "E-Mail",
        en: "Email",
        ar: "البريد الإلكتروني",
      },
      subject: { tr: "Konu", de: "Betreff", en: "Subject", ar: "الموضوع" },
      message: {
        tr: "Mesajınız",
        de: "Ihre Nachricht",
        en: "Your Message",
        ar: "رسالتك",
      },
      submit: {
        tr: "Mesajı Gönder",
        de: "Nachricht senden",
        en: "Send Message",
        ar: "إرسال الرسالة",
      },
      sending: {
        tr: "Gönderiliyor...",
        de: "Senden...",
        en: "Sending...",
        ar: "جاري الإرسال...",
      },
      success: {
        tr: "Başarıyla Gönderildi!",
        de: "Erfolgreich gesendet!",
        en: "Sent Successfully!",
        ar: "تم الإرسال بنجاح!",
      },
      options: {
        offer: {
          tr: "Teklif Almak İstiyorum",
          de: "Ich möchte ein Angebot",
          en: "I want a quote",
          ar: "أريد عرض سعر",
        },
        fault: {
          tr: "Arıza Bildirimi",
          de: "Störungsmeldung",
          en: "Report a fault",
          ar: "الإبلاغ عن عطل",
        },
        consult: {
          tr: "Danışmanlık",
          de: "Beratung",
          en: "Consultation",
          ar: "استشارة",
        },
        other: { tr: "Diğer", de: "Sonstiges", en: "Other", ar: "أخرى" },
      },
    },
  },
  modal: {
    gallery: { tr: "Galeri", de: "Galerie", en: "Gallery", ar: "المعرض" },
    date: {
      tr: "Teslim Tarihi",
      de: "Fertigstellung",
      en: "Completion Date",
      ar: "تاريخ الإنجاز",
    },
    location: { tr: "Konum", de: "Standort", en: "Location", ar: "الموقع" },
    specs: {
      tr: "Teknik Özellikler & Bileşenler",
      de: "Technische Daten & Komponenten",
      en: "Tech Specs & Components",
      ar: "المواصفات الفنية والمكونات",
    },
    tech: {
      tr: "Kullanılan Teknolojiler",
      de: "Verwendete Technologien",
      en: "Technologies Used",
      ar: "التقنيات المستخدمة",
    },
  },
  footer: {
    about: {
      tr: "Hakkımızda",
      de: "Über uns",
      en: "About Us",
      ar: "معلومات عنا",
    },
    aboutDesc: {
      tr: "Stuttgart bölgesinde 10+ yıldır güvenilir elektrik hizmetleri sunan, uzman kadrosuyla müşteri memnuniyetini ön planda tutan lider elektrik firması.",
      de: "Ein führendes Elektrounternehmen, das seit über 10 Jahren zuverlässige Elektroservices in der Region Stuttgart anbietet und die Kundenzufriedenheit mit seinem Expertenteam priorisiert.",
      en: "A leading electrical company providing reliable services in the Stuttgart region for over 10 years, prioritizing customer satisfaction with expert staff.",
      ar: "شركة كهرباء رائدة تقدم خدمات موثوقة في منطقة شتوتغارت لأكثر من 10 سنوات، مع إعطاء الأولوية لرضا العملاء بفضل فريق من الخبراء.",
    },
    services: {
      tr: "Hizmetler",
      de: "Leistungen",
      en: "Services",
      ar: "الخدمات",
    },
    links: {
      tr: "Hızlı Bağlantılar",
      de: "Quick Links",
      en: "Quick Links",
      ar: "روابط سريعة",
    },
    contact: { tr: "İletişim", de: "Kontakt", en: "Contact", ar: "اتصل بنا" },
    rights: {
      tr: "Tüm hakları saklıdır.",
      de: "Alle Rechte vorbehalten.",
      en: "All rights reserved.",
      ar: "جميع الحقوق محفوظة.",
    },
  },
};
