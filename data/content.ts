import { ServiceItem, ProjectItem, TestimonialItem } from '../types';
import { Activity, Lightbulb, Wrench, Home, Building2, Factory, Cpu } from 'lucide-react';

export const services: ServiceItem[] = [
  {
    id: 1,
    title: { tr: 'Elektrik Tesisatı', de: 'Elektroinstallation', en: 'Electrical Installation', ar: 'التركيبات الكهربائية' },
    description: { 
      tr: 'Ev ve iş yerleri için sıfırdan anahtar teslim elektrik tesisatı döşeme ve yenileme işlemleri.',
      de: 'Schlüsselfertige Elektroinstallationen und Renovierungen für Wohn- und Gewerbeobjekte.',
      en: 'Turnkey electrical installations and renovations for homes and businesses from scratch.',
      ar: 'تركيبات كهربائية وتجديدات تسليم مفتاح للمنازل والشركات من الصفر.'
    },
    icon: Activity
  },
  {
    id: 2,
    title: { tr: 'Aydınlatma Sistemleri', de: 'Beleuchtungssysteme', en: 'Lighting Systems', ar: 'أنظمة الإضاءة' },
    description: {
      tr: 'Modern LED aydınlatma, spot ışıklar ve bahçe aydınlatma çözümleri ile mekanlarınızı canlandırın.',
      de: 'Beleben Sie Ihre Räume mit moderner LED-Beleuchtung, Strahlern und Gartenbeleuchtungslösungen.',
      en: 'Revitalize your spaces with modern LED lighting, spotlights, and garden lighting solutions.',
      ar: 'جدد مساحاتك بإضاءة LED حديثة، وأضواء كاشفة، وحلول إضاءة الحدائق.'
    },
    icon: Lightbulb
  },
  {
    id: 3,
    title: { tr: 'Arıza & Bakım', de: 'Störungsdienst & Wartung', en: 'Fault & Maintenance', ar: 'الأعطال والصيانة' },
    description: {
      tr: '7/24 acil arıza servisi. Priz, sigorta, kaçak akım rölesi değişim ve onarımları.',
      de: '24/7 Notdienst. Austausch und Reparatur von Steckdosen, Sicherungen und FI-Schaltern.',
      en: '24/7 emergency service. Replacement and repair of sockets, fuses, and residual current relays.',
      ar: 'خدمة طوارئ 24/7. استبدال وإصلاح المقابس والمصهرات ومرحلات التيار المتبقي.'
    },
    icon: Wrench
  },
  {
    id: 4,
    title: { tr: 'Akıllı Ev Sistemleri', de: 'Smart Home Systeme', en: 'Smart Home Systems', ar: 'أنظمة المنازل الذكية' },
    description: {
      tr: 'Telefonunuzdan kontrol edebileceğiniz otomasyon sistemleri kurulumu.',
      de: 'Installation von Automatisierungssystemen, die Sie über Ihr Smartphone steuern können.',
      en: 'Installation of automation systems that you can control from your phone.',
      ar: 'تركيب أنظمة الأتمتة التي يمكنك التحكم فيها من هاتفك.'
    },
    icon: Home
  }
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: { tr: 'Lüks Villa Akıllı Aydınlatma', de: 'Smart Lighting Luxusvilla', en: 'Luxury Villa Smart Lighting', ar: 'إضاءة ذكية لفيلا فاخرة' },
    category: 'residential',
    categoryLabel: { tr: 'Konut', de: 'Wohnbau', en: 'Residential', ar: 'سكني' },
    description: {
      tr: 'Stuttgart Killesberg\'de 3 katlı villa için komple akıllı aydınlatma ve elektrik altyapısı.',
      de: 'Komplette intelligente Beleuchtung und elektrische Infrastruktur für eine 3-stöckige Villa am Stuttgarter Killesberg.',
      en: 'Complete smart lighting and electrical infrastructure for a 3-story villa in Stuttgart Killesberg.',
      ar: 'بنية تحتية كهربائية وإضاءة ذكية كاملة لفيلا من 3 طوابق في شتوتغارت كيلسبيرغ.'
    },
    fullDescription: {
      tr: 'Bu projede modern mimariye uygun, gizli LED aydınlatma sistemleri ve KNX tabanlı akıllı ev otomasyonu uygulandı. Kullanıcılar tablet ve telefon üzerinden tüm evin ışıklarını, perdelerini ve iklimlendirmesini kontrol edebilir hale getirildi. Ayrıca bahçe aydınlatmasında IP68 sertifikalı armatürler kullanıldı.',
      de: 'In diesem Projekt wurden verdeckte LED-Beleuchtungssysteme und eine KNX-basierte Smart-Home-Automation implementiert, die zur modernen Architektur passen. Die Bewohner können alle Lichter, Jalousien und die Klimatisierung über Tablets und Smartphones steuern. Zudem wurden im Garten IP68-zertifizierte Leuchten verwendet.',
      en: 'This project implemented concealed LED lighting systems and KNX-based smart home automation suitable for modern architecture. Residents can control all lights, blinds, and climate via tablets and phones. IP68 certified fixtures were used for garden lighting.',
      ar: 'نفذ هذا المشروع أنظمة إضاءة LED مخفية وأتمتة منزلية ذكية تعتمد على KNX مناسبة للعمارة الحديثة. يمكن للمقيمين التحكم في جميع الأضواء والستائر والمناخ عبر الأجهزة اللوحية والهواتف. تم استخدام تركيبات معتمدة IP68 لإضاءة الحديقة.'
    },
    thumbnailUrl: 'https://picsum.photos/id/48/800/600',
    gallery: ['https://picsum.photos/id/48/800/600', 'https://picsum.photos/id/364/800/600', 'https://picsum.photos/id/164/800/600'],
    completionDate: { tr: 'Haziran 2024', de: 'Juni 2024', en: 'June 2024', ar: 'يونيو 2024' },
    dateValue: '2024-06',
    location: 'Stuttgart, Killesberg',
    technicalSpecs: [
      { label: { tr: 'Ana Sigorta', de: 'Hauptsicherung', en: 'Main Fuse', ar: 'المصهر الرئيسي' }, value: 'Siemens 5SY4 3x63A (Type C)' },
      { label: { tr: 'Kablo Tipi', de: 'Kabeltyp', en: 'Cable Type', ar: 'نوع الكابل' }, value: 'NYM-J / NHXMH (Halogen Free)' },
      { label: { tr: 'Otomasyon', de: 'Automation', en: 'Automation', ar: 'الأتمتة' }, value: 'KNX TP1 Standard' },
      { label: { tr: 'Koruma Sınıfı', de: 'Schutzart', en: 'Protection Class', ar: 'فئة الحماية' }, value: 'IP65 (Ext) / IP20 (Int)' },
      { label: { tr: 'Standartlar', de: 'Normen', en: 'Standards', ar: 'المعايير' }, value: 'DIN VDE 0100-600' }
    ]
  },
  {
    id: 2,
    title: { tr: 'Plaza Ofis Data Altyapısı', de: 'Bürogebäude Dateninfrastruktur', en: 'Plaza Office Data Infrastructure', ar: 'البنية التحتية لبيانات مكتب بلازا' },
    category: 'commercial',
    categoryLabel: { tr: 'Ticari', de: 'Gewerbe', en: 'Commercial', ar: 'تجاري' },
    description: {
      tr: 'Mitte bölgesinde 1200m² ofis alanı için yapısal kablolama ve elektrik panosu kurulumu.',
      de: 'Strukturierte Verkabelung und Schaltschrankinstallation für 1200m² Bürofläche in Stuttgart-Mitte.',
      en: 'Structured cabling and distribution panel installation for 1200m² office space in Stuttgart-Mitte.',
      ar: 'تركيب الكابلات الهيكلية ولوحة التوزيع لمساحة مكتبية تبلغ 1200 متر مربع في وسط شتوتغارت.'
    },
    fullDescription: {
      tr: 'Açık ofis düzenine sahip çalışma alanında, her masaya özel data ve ups hattı çekildi. Yangına dayanıklı halojen free kablolar kullanılarak güvenlik standartları en üst düzeye çıkarıldı. Ana server odası için özel iklimlendirme ve güç yedekleme sistemleri devreye alındı.',
      de: 'Im Großraumbüro wurden für jeden Arbeitsplatz spezielle Daten- und USV-Leitungen verlegt. Durch die Verwendung von feuerbeständigen, halogenfreien Kabeln wurden höchste Sicherheitsstandards erfüllt. Für den Serverraum wurden spezielle Klimatisierungs- und Stromversorgungssysteme installiert.',
      en: 'Dedicated data and UPS lines were installed for each desk in the open-plan office. Fire-resistant halogen-free cables were used to maximize safety standards. Special climate control and power backup systems were commissioned for the main server room.',
      ar: 'تم تركيب خطوط بيانات و UPS مخصصة لكل مكتب في المكتب المفتوح. تم استخدام كابلات خالية من الهالوجين ومقاومة للحريق لزيادة معايير السلامة. تم تشغيل أنظمة خاصة للتحكم في المناخ والنسخ الاحتياطي للطاقة لغرفة الخادم الرئيسية.'
    },
    thumbnailUrl: 'https://picsum.photos/id/60/800/600',
    gallery: ['https://picsum.photos/id/60/800/600', 'https://picsum.photos/id/1/800/600'],
    completionDate: { tr: 'Eylül 2023', de: 'September 2023', en: 'September 2023', ar: 'سبتمبر 2023' },
    dateValue: '2023-09',
    location: 'Stuttgart, Mitte',
    technicalSpecs: [
      { label: { tr: 'UPS Kapasitesi', de: 'USV-Kapazität', en: 'UPS Capacity', ar: 'سعة UPS' }, value: 'Eaton 30 kVA Online Double Conv.' },
      { label: { tr: 'Data Kablosu', de: 'Datenkabel', en: 'Data Cable', ar: 'كابل البيانات' }, value: 'CAT7 S/FTP Duplex' },
      { label: { tr: 'Anahtar/Priz', de: 'Schalter/Steckdosen', en: 'Switch/Socket', ar: 'مفتاح/مقبس' }, value: 'Gira E2 Anthracite' },
      { label: { tr: 'Güvenlik', de: 'Sicherheit', en: 'Safety', ar: 'الأمان' }, value: 'AFDD (Arc Fault Detection)' }
    ]
  },
  {
    id: 3,
    title: { tr: 'Fabrika Güç Dağıtım Panosu', de: 'Industrie-Verteilerschrank', en: 'Factory Power Distribution Panel', ar: 'لوحة توزيع الطاقة للمصنع' },
    category: 'industrial',
    categoryLabel: { tr: 'Endüstriyel', de: 'Industrie', en: 'Industrial', ar: 'صناعي' },
    description: {
      tr: 'Sindelfingen\'de otomotiv yan sanayi fabrikası için ana dağıtım ve kompanzasyon panosu montajı.',
      de: 'Montage von Hauptverteiler- und Kompensationsschränken für einen Automobilzulieferer in Sindelfingen.',
      en: 'Installation of main distribution and compensation panels for an automotive supplier factory in Sindelfingen.',
      ar: 'تركيب لوحات التوزيع الرئيسية والتعويض لمصنع مورد للسيارات في زيندلفينجن.'
    },
    fullDescription: {
      tr: 'Yüksek enerji tüketimi olan makineler için özel korumalı şalterler ve reaktif güç kontrol röleleri kullanılarak enerji verimliliği sağlandı. Termal kamera kontrolleri ile tüm bağlantı noktaları test edildi ve onaylandı.',
      de: 'Für Maschinen mit hohem Energieverbrauch wurden spezielle Schutzschalter und Blindleistungsregler eingesetzt, um die Energieeffizienz zu gewährleisten. Alle Anschlusspunkte wurden mittels Wärmebildkamera geprüft und abgenommen.',
      en: 'Energy efficiency was achieved using specially protected switches and reactive power control relays for high-energy consumption machines. All connection points were tested and approved via thermal camera inspections.',
      ar: 'تم تحقيق كفاءة الطاقة باستخدام مفاتيح محمية خصيصًا ومرحلات التحكم في الطاقة التفاعلية للآلات ذات الاستهلاك العالي للطاقة. تم اختبار جميع نقاط الاتصال واعتمادها عبر فحوصات الكاميرا الحرارية.'
    },
    thumbnailUrl: 'https://picsum.photos/id/134/800/600',
    gallery: ['https://picsum.photos/id/134/800/600'],
    completionDate: { tr: 'Ocak 2024', de: 'Januar 2024', en: 'January 2024', ar: 'يناير 2024' },
    dateValue: '2024-01',
    location: 'Sindelfingen',
    technicalSpecs: [
      { label: { tr: 'MCCB Şalter', de: 'MCCB-Schalter', en: 'MCCB Switch', ar: 'مفتاح MCCB' }, value: 'Siemens 3VA 630A' },
      { label: { tr: 'Kompanzasyon', de: 'Kompensation', en: 'Compensation', ar: 'التعويض' }, value: 'Janitza ProData 12 Steps' },
      { label: { tr: 'Bara Sistemi', de: 'Sammelschienensystem', en: 'Busbar System', ar: 'نظام القضبان' }, value: 'Cu 40x10mm (1200A)' },
      { label: { tr: 'Topraklama', de: 'Erdungswiderstand', en: 'Earthing', ar: 'التأريض' }, value: '< 2 Ohm (TN-S System)' }
    ]
  },
  {
    id: 4,
    title: { tr: 'Restoran Ambiyans Aydınlatma', de: 'Restaurant Ambientebeleuchtung', en: 'Restaurant Ambience Lighting', ar: 'إضاءة أجواء المطعم' },
    category: 'commercial',
    categoryLabel: { tr: 'Ticari', de: 'Gewerbe', en: 'Commercial', ar: 'تجاري' },
    description: {
      tr: 'Esslingen tarihi merkezde bir restoran için dim edilebilir rustik aydınlatma tasarımı.',
      de: 'Dimmbares, rustikales Beleuchtungsdesign für ein Restaurant in der Altstadt von Esslingen.',
      en: 'Dimmable rustic lighting design for a restaurant in the historic center of Esslingen.',
      ar: 'تصميم إضاءة ريفية قابلة للتعتيم لمطعم في المركز التاريخي لمدينة إسلينغن.'
    },
    fullDescription: {
      tr: 'Mekanın atmosferine uygun sıcak renkli filament ampuller ve özel tasarım avizeler kullanıldı. Her masa grubu için ayrı ayrı kontrol edilebilen zone sistemi kuruldu. Mutfak bölümünde ise yüksek lümenli çalışma ışıkları tercih edildi.',
      de: 'Passend zur Atmosphäre wurden warmweiße Filamentlampen und speziell angefertigte Kronleuchter verwendet. Für jede Tischgruppe wurde ein separat steuerbares Zonensystem eingerichtet. In der Küche kamen Arbeitsleuchten mit hohem Lichtstrom zum Einsatz.',
      en: 'Warm-colored filament bulbs and custom-designed chandeliers were used to match the venue\'s atmosphere. A separately controllable zone system was set up for each table group. High-lumen work lights were chosen for the kitchen area.',
      ar: 'تم استخدام مصابيح بفتيل دافئة اللون وثريات مصممة خصيصًا لتناسب جو المكان. تم إعداد نظام مناطق قابل للتحكم بشكل منفصل لكل مجموعة طاولات. تم اختيار مصابيح عمل عالية اللومن لمنطقة المطبخ.'
    },
    thumbnailUrl: 'https://picsum.photos/id/431/800/600',
    gallery: ['https://picsum.photos/id/431/800/600', 'https://picsum.photos/id/225/800/600'],
    completionDate: { tr: 'Mart 2024', de: 'März 2024', en: 'March 2024', ar: 'مارس 2024' },
    dateValue: '2024-03',
    location: 'Esslingen am Neckar',
    technicalSpecs: [
      { label: { tr: 'Dimmer Sistemi', de: 'Dimmer-System', en: 'Dimmer System', ar: 'نظام التعتيم' }, value: 'Gira System 3000 Bluetooth' },
      { label: { tr: 'Toplam Yük', de: 'Gesamtlast', en: 'Total Load', ar: 'الحمل الإجمالي' }, value: '12kW / 3-Phase' },
      { label: { tr: 'LED Sürücü', de: 'LED-Treiber', en: 'LED Driver', ar: 'مشغل LED' }, value: 'Tridonic DALI' },
      { label: { tr: 'Acil Aydınlatma', de: 'Notbeleuchtung', en: 'Emergency Lighting', ar: 'إضاءة الطوارئ' }, value: '3h Reserve (DIN EN 1838)' }
    ]
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: 'Thomas Müller',
    role: { tr: 'Villa Sahibi', de: 'Hausbesitzer', en: 'Villa Owner', ar: 'صاحب فيلا' },
    comment: {
      tr: 'İşçilik kalitesi mükemmel. Tam zamanında teslim ettiler ve her şey kusursuz çalışıyor. Kesinlikle tavsiye ederim.',
      de: 'Die Verarbeitungsqualität ist ausgezeichnet. Sie haben pünktlich geliefert und alles funktioniert einwandfrei. Absolut empfehlenswert.',
      en: 'The workmanship quality is excellent. They delivered on time and everything works flawlessly. Highly recommended.',
      ar: 'جودة التصنيع ممتازة. سلموا في الوقت المحدد وكل شيء يعمل بشكل لا تشوبه شائبة. ينصح به بشدة.'
    },
    avatar: 'https://picsum.photos/id/1005/100/100'
  },
  {
    id: 2,
    name: 'Sarah Weber',
    role: { tr: 'İşletme Müdürü', de: 'Betriebsleiterin', en: 'Operations Manager', ar: 'مدير العمليات' },
    comment: {
      tr: 'Ofisimizin tüm elektrik altyapısını yenilediler. Profesyonel ve temiz çalıştılar. Teşekkürler ElektroPro.',
      de: 'Sie haben unsere gesamte Büroelektrik erneuert. Sie arbeiteten professionell und sauber. Danke ElektroPro.',
      en: 'They renewed the entire electrical infrastructure of our office. They worked professionally and cleanly. Thanks ElektroPro.',
      ar: 'قاموا بتجديد البنية التحتية الكهربائية الكاملة لمكتبنا. عملوا باحترافية ونظافة. شكراً ElektroPro.'
    },
    avatar: 'https://picsum.photos/id/1011/100/100'
  },
  {
    id: 3,
    name: 'Michael Schmidt',
    role: { tr: 'Müteahhit', de: 'Bauunternehmer', en: 'Contractor', ar: 'مقاول' },
    comment: {
      tr: 'Projelerimizde güvenle çalıştığımız tek elektrik firması. Alman standartlarına tam uyum sağlıyorlar.',
      de: 'Die einzige Elektrofirma, mit der wir bei unseren Projekten vertrauensvoll zusammenarbeiten. Sie entsprechen voll den deutschen Standards.',
      en: 'The only electrical company we work with confidently in our projects. They fully comply with German standards.',
      ar: 'شركة الكهرباء الوحيدة التي نعمل معها بثقة في مشاريعنا. يمتثلون تمامًا للمعايير الألمانية.'
    },
    avatar: 'https://picsum.photos/id/1027/100/100'
  }
];

export const categoryIcons = {
  residential: Home,
  commercial: Building2,
  industrial: Factory,
  automation: Cpu
};