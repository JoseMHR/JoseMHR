/**
 * José Manuel Heredia Reyes — Interactive CV Application
 * Features:
 * - Full Bilingual Switcher (ES / EN) with LocalStorage persistence
 * - Dynamic Experience Years Calculator (currentYear - 2008)
 * - Interactive Constellation Particle Canvas Background
 * - Timeline Category Filtering
 * - Print / PDF Trigger
 */

// 1. Dynamic Experience Calculator
const START_YEAR = 2008;
const currentYear = new Date().getFullYear();
const expYears = currentYear - START_YEAR;

// 2. Bilingual Dictionary
const translations = {
  es: {
    nav: {
      about: "Sobre Mí",
      experience: "Experiencia",
      skills: "Habilidades",
      education: "Formación",
      projects: "Proyectos",
      contact: "Contacto"
    },
    hero: {
      role: "Senior Backend Architect & Java Specialist · Lead Software Engineer",
      status: "En activo · Globant",
      pillCompany: "🏢 Globant (Actualidad)",
      pillLocation: "📍 Madrid / Málaga / Remoto (España)",
      pillEdu: "🎓 Ing. Informática & Máster INFTEL (UMA)",
      pillExp: `⚡ +${expYears} años de experiencia`,
      pillLang: "🌐 Inglés B1/B2 · Español Nativo",
      btnEmail: "Contactar por Email",
      btnLinkedIn: "Perfil de LinkedIn",
      btnGitHub: "GitHub (@JoseMHR)",
      btnPrint: "Imprimir / Descargar CV"
    },
    summary: {
      tag: "Perfil Profesional",
      title: "Resumen Ejecutivo",
      p1: `<strong>Ingeniero Informático de Sistemas y Máster de Postgrado INFTEL</strong> por la Universidad de Málaga con más de <strong>${expYears} años de experiencia sólida</strong> en el diseño, desarrollo, despliegue y liderazgo de arquitecturas backend empresariales de alta disponibilidad, concurrencia y criticidad operativa.`,
      p2: `Especializado en el <strong>ecosistema Java moderno (Java 8, 17 y 21)</strong>, frameworks <strong>Spring / Spring Boot</strong>, diseño de microservicios resilientes bajo <strong>Arquitectura Hexagonal</strong>, especificación y contratos <strong>ApiFirst</strong>, mensajería reactiva con <strong>Apache Kafka</strong> y entornos de nube híbrida (<strong>Azure, OpenShift, AWS</strong>).`,
      p3: `Amplio recorrido profesional liderando desarrollos de misión crítica en grandes multinacionales y sectores de alta exigencia: <strong>Banca & Fintech</strong> (ING, BNP Paribas / Cetelem), <strong>Retail global & E-Commerce</strong> (Inditex / Plexus), <strong>Consultoría y Arquitectura Core</strong> (Globant), <strong>Asegurador</strong> (A.M.A. Seguros), <strong>Medios de Comunicación</strong> (RTVE, Atresmedia) y <strong>Sector Público</strong> (Ayuntamiento de Málaga, UMA). Experiencia contrastada como <strong>Scrum Master</strong>, gestionando equipos multidisciplinares, refactorizaciones estratégicas de sistemas legados hacia microservicios y mentoría técnica.`,
      metricExp: "Años de Trayectoria",
      metricCore: "Especialidad Core",
      metricArch: "Arquitectura Limpia",
      metricClients: "Grandes Clientes Liderados"
    },
    timeline: {
      tag: "Carrera Profesional",
      title: "Experiencia Laboral",
      filters: {
        all: "Todas",
        globant: "Globant",
        inditex: "Inditex",
        banca: "Banca (ING / BNP)",
        medios: "Medios & Seguros"
      },
      globant: {
        role: "Analista y Desarrollo de Aplicaciones — Arquitectura Core",
        company: "Globant · Jornada completa · Remoto",
        date: "Ene. 2025 — Actualidad",
        b1: "<strong>Diseño y desarrollo de arquitectura backend core:</strong> Creación de soluciones base estandarizadas, robustas y altamente escalables para su posterior despliegue, adaptación y extensión en los distintos países del grupo corporativo.",
        b2: "Definición de directrices de desarrollo, gobierno de APIs bajo enfoque ApiFirst y patrones de resiliencia en microservicios cloud.",
        b3: "Alineamiento con equipos internacionales para la gobernanza del código y buenas prácticas de ingeniería de software."
      },
      inditex: {
        role: "Desarrollador Senior Backend en Inditex",
        company: "Plexus Tech · Inditex · Jornada completa · Remoto",
        date: "Ene. 2023 — Jul. 2025 (2 años 7 meses)",
        b1: "Análisis y desarrollo integral de microservicios backend desde la toma de requisitos hasta su subida a producción en plataformas corporativas de Inditex.",
        b2: "<strong>Migraciones estratégicas:</strong> Transformación y modernización de servicios legados en NodeJS a Java 17 bajo <strong>Arquitectura Hexagonal</strong> y contratos <strong>ApiFirst</strong>.",
        b3: "Gestión de guardias críticas de alta disponibilidad y soporte continuo para picos de tráfico en eventos masivos de retail (Rebajas, Black Friday).",
        b4: "Implementación de pipelines de integración y entrega continua (CI/CD) con SonarQube, GitHub Actions, OpenShift y Azure."
      },
      banca: {
        role: "Analista de Desarrollo Senior — Banca & Finanzas",
        company: "Sopra Steria · Proyectos BNP Paribas / Cetelem e ING · Madrid / Remoto",
        date: "Ene. 2020 — Ene. 2023 (3 años 1 mes)",
        pBnpTitle: "BNP Paribas / Cetelem (Sept. 2021 — Ene. 2023 · 1 año 5 meses):",
        bBnp1: "Análisis, diseño e implementación de aplicaciones middleware y servicios financieros de alta concurrencia.",
        bBnp2: "Desarrollo de módulos bancarios con Java 8, Spring Boot, bases de datos Oracle SQL y frontends Angular/JS.",
        bBnp3: "Gestión de despliegues automatizados mediante Jenkins y metodologías GitFlow.",
        pIngTitle: "ING Bank (Ene. 2020 — Sept. 2021 · 1 año 9 meses):",
        bIng1: "Desarrollo de microservicios middleware en Java bajo <strong>Arquitectura Hexagonal</strong> para sistemas bancarios transaccionales.",
        bIng2: "Optimización de consultas y persistencia con MyBatis y despliegues en infraestructura Azure."
      },
      ama: {
        role: "Analista Desarrollador",
        company: "A.M.A. Seguros · Madrid",
        date: "Nov. 2018 — Ene. 2020 (1 año 3 meses)",
        b1: "Análisis y desarrollo integral de aplicaciones corporativas aseguradoras utilizando Vaadin 8, MyBatis, Java 8 y Spring Boot.",
        b2: "Abarcamiento del ciclo de vida del software completo: diseño, desarrollo, pruebas, optimización y puesta en producción.",
        b3: "Optimización y refactorización de rendimiento de aplicaciones existentes sobre JBoss, Tomcat, DB2 y MySQL."
      },
      a3media: {
        role: "Analista de Programación en A3Media",
        company: "atSistemas · Atresmedia · Madrid",
        date: "Nov. 2017 — Oct. 2018 (1 año)",
        b1: "Desarrollo de diferentes aplicaciones y servicios para la plataforma audiovisual de Atresmedia con Spring Boot y Java GWT.",
        b2: "Arquitectura basada en microservicios en Amazon Web Services (AWS), Jenkins, bases de datos SQL y MongoDB."
      },
      rtve: {
        role: "Desarrollador Senior & Scrum Master en RTVE",
        company: "Everis Spain / 80 Soluciones · RTVE · Madrid",
        date: "Sept. 2015 — Nov. 2017 (2 años 3 meses)",
        b1: "Desarrollos evolutivos tanto en NodeJS como en Java Spring (migración de APIs de contenidos informativos, módulos de backend).",
        b2: "<strong>Desarrollo de múltiples infografías y especiales interactivos de alta concurrencia nacional:</strong> Eurovisión, Lotería de Navidad, Premios Oscar, Mapas de Juegos Olímpicos (JJOO).",
        b3: "Mantenimiento y gestión de despliegues multiplataforma de todos los proyectos digitales de RTVE.",
        b4: "Formador técnico y rol de <strong>Scrum Master</strong> para el equipo junior de mantenimiento."
      },
      malaga: {
        role: "Ingeniero de Software — Obras, Servicios y Sector Público",
        company: "Ingenia · Ayto. de Málaga · Universidad de Málaga · Intendia",
        date: "Jun. 2013 — Sept. 2015 (2 años 3 meses)",
        b1: "<strong>Ingenia (2015):</strong> Desarrollo frontend web con Javascript y Drupal-PHP para entidad bancaria suiza.",
        b2: "<strong>Ayuntamiento de Málaga (2014-2015):</strong> Scrum Master y coordinación de equipo de 4 personas. Análisis y desarrollo desde cero de plataforma para gestión de licitaciones públicas del Ayuntamiento.",
        b3: "<strong>Universidad de Málaga (2014):</strong> Desarrollo desde cero de aplicación móvil Android nativa y aplicación web en Java para la gestión académica de profesores y estudiantes.",
        b4: "<strong>Intendia (2013-2014):</strong> Mantenimiento y evolutivos en Java (GWT, GWTP) para geolocalización de flotas de vehículos en tiempo real. Apps móviles iOS y Android con PhoneGap."
      },
      early: {
        role: "Primeras Experiencias: Freelance, Becas y Prácticas",
        company: "NMobe · DK-Innovations · Arrow / RSI · Coritel / Arelance · UMA",
        date: "2011 — 2014",
        b1: "Desarrollo frontend web en NMobe (6 meses) y gestión de CMS Drupal en DK-Innovations (6 meses).",
        b2: "Beca formativa COBOL en Arrow / RSI (2 meses).",
        b3: "Desarrollo de aplicaciones móviles Android para Gym Kuro-Obi (1 año) y UMA Deportes (6 meses).",
        b4: "Prácticas de consultoría SAP en Coritel / Arelance (2 meses)."
      }
    },
    skills: {
      tag: "Competencias Técnicas",
      title: "Habilidades y Stack Tecnológico",
      catBackend: "Backend & Arquitectura Java",
      catCloud: "Cloud, DevOps & Contenedores",
      catData: "Bases de Datos & Mensajería",
      catMethod: "Metodologías & Control de Versiones",
      catFrontend: "Frontend, Móvil & Otros Lenguajes",
      catLanguages: "Idiomas",
      langDesc: "<strong>Español:</strong> Nativo.<br><strong>Inglés:</strong> Nivel Intermedio Profesional (B1/B2).<br><span style='color: var(--text-muted); font-size: 0.85rem;'>Avanzado en lectura técnica, documentación y especificación de requisitos / Fluido en comunicación profesional y técnica.</span>"
    },
    education: {
      tag: "Formación Académica",
      title: "Estudios y Certificaciones",
      masterTitle: "Máster de Postgrado INFTEL",
      masterInst: "Universidad de Málaga (UMA)",
      masterDesc: "Especialidad en <strong>'Informática aplicada a las tecnologías móviles y web'</strong>. Formación avanzada en desarrollo móvil nativo, arquitecturas web distribuidas, patrones de diseño empresarial y computación en la nube.",
      degreeTitle: "Ingeniería Informática de Sistemas",
      degreeInst: "Universidad de Málaga (UMA)",
      degreeDesc: "Grado en Ingeniería Informática. Formación profunda en algoritmia, estructuras de datos, sistemas operativos, arquitectura de computadores, ingeniería del software y bases de datos relacionales.<br><em style='color: var(--text-muted); font-size: 0.85rem; display: block; margin-top: 0.4rem;'>Actividades: Presidente y Tesorero del Consejo de Estudiantes de Ingeniería Informática; Judo, Karate y Kobudo en UMA.</em>",
      certTitle: "Formación Continua y Certificaciones",
      certInst: "Entidades Oficiales & Plataformas de Especialización",
      certP1: "Cursos presenciales y especializados impartidos por: <strong>Sopra Steria</strong>, <strong>atSistemas</strong>, <strong>Arrow</strong>, <strong>RSI</strong>, <strong>Grupo Arelance</strong>, <strong>Universidad de Cambridge</strong> y <strong>Universidad de Málaga</strong>.",
      certP2: "Certificaciones en plataformas técnicas: <strong>Udemy</strong>, <strong>Coursera</strong>, <strong>MiriadaX</strong>, <strong>Udacity</strong>, <strong>edX</strong> y <strong>OpenWebinars</strong>.",
      certBtn: "Ver Lista Verificada en LinkedIn ↗"
    },
    projects: {
      tag: "Proyectos Personales & Transmedia",
      title: "Ecosistema Tecnológico y Creativo",
      tgmTitle: "⚔️ Taos Game Maker",
      tgmSub: "Motor RPG Táctico & Web Studio Suite para Godot 4",
      tgmDesc: "Framework desacoplado 100% de código abierto para crear RPGs 2D/3D con combate táctico ATB, mazmorras en primera persona, mapamundi y suite web de más de 45 herramientas visuales no-code.",
      tgmDocBtn: "Documentación Web ↗",
      lazarusTitle: "📖 La Saga Lázaro (The Lazarus Saga)",
      lazarusSub: "Universo Literario de Fantasía Oscura publicado en Amazon",
      lazarusDesc: "Saga de novelas de fantasía y cosmología publicadas mundialmente en Amazon en español e inglés. Universo transmedia que sirve de trasfondo narrativo para desarrollos interactivos.",
      lazarusWebBtn: "Web Oficial ↗",
      lazarusAmzBtn: "Ver en Amazon ↗",
      personalTitle: "🌐 Taos Personal Portal",
      personalSub: "Hub Central de Proyectos y Aplicaciones",
      personalDesc: "Plataforma unificada desplegada en GitHub Pages que agrupa herramientas personales, aplicaciones de planificación y diarios de viaje.",
      personalBtn: "Explorar Portal ↗"
    },
    contact: {
      tag: "Contacto Directo",
      title: "¿Interesado en mi perfil? Hablemos",
      desc: "Disponible para intercambiar ideas sobre arquitecturas backend, ingeniería de software en Java/Spring, liderazgo técnico o proyectos de alta escala.",
      btnLinkedIn: "Conectar en LinkedIn"
    },
    footer: {
      rights: `© ${currentYear} José Manuel Heredia Reyes · Valdemoro (Madrid) / Málaga, España`,
      toTop: "↑ Volver arriba"
    }
  },

  en: {
    nav: {
      about: "About Me",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      role: "Senior Backend Architect & Java Specialist · Lead Software Engineer",
      status: "Active · Globant",
      pillCompany: "🏢 Globant (Present)",
      pillLocation: "📍 Madrid / Málaga / Remote (Spain)",
      pillEdu: "🎓 M.Sc. INFTEL & Computer Engineer (UMA)",
      pillExp: `⚡ +${expYears} Years of Experience`,
      pillLang: "🌐 English B1/B2 · Native Spanish",
      btnEmail: "Email Me",
      btnLinkedIn: "LinkedIn Profile",
      btnGitHub: "GitHub (@JoseMHR)",
      btnPrint: "Print / Save CV as PDF"
    },
    summary: {
      tag: "Professional Profile",
      title: "Executive Summary",
      p1: `<strong>Computer Systems Software Engineer and Master of Science INFTEL</strong> graduate from Universidad de Málaga with over <strong>${expYears} years of proven expertise</strong> in designing, building, deploying, and leading high-availability, high-concurrency, mission-critical enterprise backend architectures.`,
      p2: `Specialized in modern <strong>Java ecosystem (Java 8, 17, and 21)</strong>, <strong>Spring / Spring Boot</strong> frameworks, resilient microservices under <strong>Hexagonal Architecture (Ports & Adapters)</strong>, contract-driven <strong>ApiFirst</strong> specifications, reactive messaging with <strong>Apache Kafka</strong>, and hybrid cloud environments (<strong>Azure, OpenShift, AWS</strong>).`,
      p3: `Extensive background delivering mission-critical projects for tier-1 enterprises across demanding industries: <strong>Banking & Fintech</strong> (ING Bank, BNP Paribas / Cetelem), <strong>Global Retail & E-Commerce</strong> (Inditex / Plexus), <strong>Consulting & Core Architecture</strong> (Globant), <strong>Insurance</strong> (A.M.A. Seguros), <strong>Broadcast Media</strong> (RTVE, Atresmedia), and <strong>Public Sector</strong> (Málaga City Council, UMA). Proven track record as <strong>Scrum Master</strong> leading cross-functional engineering teams, modernizing legacy systems toward distributed microservices, and providing technical mentorship.`,
      metricExp: "Years of Experience",
      metricCore: "Core Expertise",
      metricArch: "Clean Architecture",
      metricClients: "Major Enterprise Clients"
    },
    timeline: {
      tag: "Career Trajectory",
      title: "Work Experience",
      filters: {
        all: "All",
        globant: "Globant",
        inditex: "Inditex",
        banca: "Banking (ING / BNP)",
        medios: "Media & Insurance"
      },
      globant: {
        role: "Software Application Analyst — Core Backend Architecture",
        company: "Globant · Full-time · Remote",
        date: "Jan. 2025 — Present",
        b1: "<strong>Design and implementation of core backend architecture:</strong> Engineering standardized, resilient, and horizontally scalable foundational solutions for international deployment, localization, and extension across group subsidiaries.",
        b2: "Definition of engineering guidelines, API governance following ApiFirst principles, and cloud-native microservice resilience patterns.",
        b3: "Cross-collaboration with distributed global engineering teams ensuring architectural governance and code quality standards."
      },
      inditex: {
        role: "Senior Backend Engineer at Inditex",
        company: "Plexus Tech · Inditex · Full-time · Remote",
        date: "Jan. 2023 — Jul. 2025 (2 yrs 7 mos)",
        b1: "End-to-end backend microservice analysis and development from technical discovery to production release across Inditex corporate platforms.",
        b2: "<strong>Strategic Migrations:</strong> Re-architecting and modernizing legacy NodeJS backend services into Java 17 under <strong>Hexagonal Architecture</strong> and <strong>ApiFirst</strong> contracts.",
        b3: "High-availability on-call incident resolution and continuous operational support during massive global retail flash-sales (Black Friday, seasonal sales).",
        b4: "Continuous Integration & Deployment (CI/CD) pipelines using SonarQube, GitHub Actions, OpenShift, and Microsoft Azure."
      },
      banca: {
        role: "Senior Software Analyst — Banking & Financial Services",
        company: "Sopra Steria · BNP Paribas / Cetelem & ING Projects · Madrid / Remote",
        date: "Jan. 2020 — Jan. 2023 (3 yrs 1 mo)",
        pBnpTitle: "BNP Paribas / Cetelem (Sept. 2021 — Jan. 2023 · 1 yr 5 mos):",
        bBnp1: "Architecture, design, and implementation of high-throughput financial middleware and core credit management services.",
        bBnp2: "Engineered banking modules using Java 8, Spring Boot, Oracle SQL databases, and Angular/JavaScript frontends.",
        bBnp3: "Automated continuous delivery and deployment pipelines via Jenkins and GitFlow branching strategies.",
        pIngTitle: "ING Bank (Jan. 2020 — Sept. 2021 · 1 yr 9 mos):",
        bIng1: "Engineered transactional middleware microservices in Java leveraging <strong>Hexagonal Architecture</strong> for digital banking systems.",
        bIng2: "Database persistence optimization with MyBatis and scalable deployments within Microsoft Azure infrastructure."
      },
      ama: {
        role: "Analyst Developer",
        company: "A.M.A. Seguros · Madrid",
        date: "Nov. 2018 — Jan. 2020 (1 yr 3 mos)",
        b1: "Full lifecycle design and development of insurance enterprise applications utilizing Vaadin 8, MyBatis, Java 8, and Spring Boot.",
        b2: "Comprehensive Software Development Life Cycle (SDLC) ownership: architecture, implementation, automated testing, optimization, and rollout.",
        b3: "Performance profiling and refactoring of legacy systems hosted on JBoss, Apache Tomcat, IBM DB2, and MySQL."
      },
      a3media: {
        role: "Software Programming Analyst at Atresmedia",
        company: "atSistemas · Atresmedia · Madrid",
        date: "Nov. 2017 — Oct. 2018 (1 yr)",
        b1: "Engineered core broadcast and media asset management platforms using Spring Boot and Java GWT hosted on AWS.",
        b2: "Microservice-oriented architecture running on Amazon Web Services (AWS), Jenkins pipelines, relational SQL databases, and MongoDB."
      },
      rtve: {
        role: "Senior Software Engineer & Scrum Master at RTVE",
        company: "Everis Spain / 80 Soluciones · RTVE · Madrid",
        date: "Sept. 2015 — Nov. 2017 (2 yrs 3 mos)",
        b1: "Feature engineering and API migrations across both Java Spring and NodeJS backend services for national broadcasting platforms.",
        b2: "<strong>Engineered high-concurrency national live interactive specials & infographics:</strong> Eurovision Song Contest, National Christmas Lottery, Academy Awards, Olympic Games interactive maps.",
        b3: "Multiplatform deployment automation and operational maintenance across RTVE digital digital media services.",
        b4: "Technical mentor and certified <strong>Scrum Master</strong> guiding the junior operations and maintenance engineering squad."
      },
      malaga: {
        role: "Software Engineer — Public Sector & Enterprise Solutions",
        company: "Ingenia · Málaga City Hall · Universidad de Málaga · Intendia",
        date: "Jun. 2013 — Sept. 2015 (2 yrs 3 mos)",
        b1: "<strong>Ingenia (2015):</strong> Frontend web engineering with JavaScript and Drupal-PHP for Swiss banking client.",
        b2: "<strong>Málaga City Council (2014-2015):</strong> Scrum Master leading a 4-person engineering squad. Green-field development of municipal public tender management platform.",
        b3: "<strong>Universidad de Málaga (2014):</strong> From-scratch design of native Android mobile app and Java web platform for faculty and student academic management.",
        b4: "<strong>Intendia (2013-2014):</strong> Vehicle fleet real-time GPS geolocation platform in Java (GWT/GWTP) and iOS/Android mobile clients with PhoneGap."
      },
      early: {
        role: "Early Engineering: Freelance, Grants & Internships",
        company: "NMobe · DK-Innovations · Arrow / RSI · Coritel / Arelance · UMA",
        date: "2011 — 2014",
        b1: "Frontend web development at NMobe (6 mos) and CMS Drupal engineering at DK-Innovations (6 mos).",
        b2: "COBOL training fellowship at Arrow / RSI (2 mos).",
        b3: "Native Android application development for Gym Kuro-Obi (1 yr) and UMA Sports Service (6 mos).",
        b4: "Enterprise SAP consulting internship at Coritel / Arelance (2 mos)."
      }
    },
    skills: {
      tag: "Technical Stack",
      title: "Core Skills & Technology Matrix",
      catBackend: "Backend & Java Architecture",
      catCloud: "Cloud, DevOps & Containers",
      catData: "Databases & Messaging",
      catMethod: "Methodologies & Version Control",
      catFrontend: "Frontend, Mobile & Polyglot Languages",
      catLanguages: "Languages",
      langDesc: "<strong>Spanish:</strong> Native.<br><strong>English:</strong> Professional Working Proficiency (B1/B2).<br><span style='color: var(--text-muted); font-size: 0.85rem;'>Advanced technical reading, documentation & API specifications / Fluent professional communication.</span>"
    },
    education: {
      tag: "Academic Background",
      title: "Education & Certifications",
      masterTitle: "Master of Science INFTEL",
      masterInst: "Universidad de Málaga (UMA)",
      masterDesc: "Specialization in <strong>'Applied Computer Science for Mobile and Web Technologies'</strong>. Advanced coursework in distributed web architectures, enterprise design patterns, cloud computing, and native mobile development.",
      degreeTitle: "B.S. in Computer Systems Engineering",
      degreeInst: "Universidad de Málaga (UMA)",
      degreeDesc: "Engineering Degree in Computer Science. Rigorous foundations in algorithms, data structures, operating systems, software engineering, and database management.<br><em style='color: var(--text-muted); font-size: 0.85rem; display: block; margin-top: 0.4rem;'>Activities: President & Treasurer of the Student Council of Computer Engineering; Judo, Karate, and Kobudo at UMA.</em>",
      certTitle: "Continuous Professional Learning & Certifications",
      certInst: "Official Entities & Specialized Learning Platforms",
      certP1: "Classroom and executive training from: <strong>Sopra Steria</strong>, <strong>atSistemas</strong>, <strong>Arrow</strong>, <strong>RSI</strong>, <strong>Grupo Arelance</strong>, <strong>University of Cambridge</strong>, and <strong>Universidad de Málaga</strong>.",
      certP2: "Verified technical certificates across: <strong>Udemy</strong>, <strong>Coursera</strong>, <strong>MiriadaX</strong>, <strong>Udacity</strong>, <strong>edX</strong>, and <strong>OpenWebinars</strong>.",
      certBtn: "View Verified List on LinkedIn ↗"
    },
    projects: {
      tag: "Personal & Transmedia Endeavors",
      title: "Technology & Creative Ecosystem",
      tgmTitle: "⚔️ Taos Game Maker",
      tgmSub: "Turnkey Tactical RPG Framework & Web Studio for Godot 4",
      tgmDesc: "100% free and open-source modular framework for creating hybrid 2D/3D Tactical RPGs with ATB combat, first-person grid dungeons, overworld map, and 45+ visual web studio tools.",
      tgmDocBtn: "Documentation Hub ↗",
      lazarusTitle: "📖 The Lazarus Saga (La Saga Lázaro)",
      lazarusSub: "Dark Fantasy Literary Universe published on Amazon",
      lazarusDesc: "Epic fantasy novel series published worldwide on Amazon in Spanish and English. A deep transmedia narrative world serving as the lore foundation for interactive game frameworks.",
      lazarusWebBtn: "Official Website ↗",
      lazarusAmzBtn: "View on Amazon ↗",
      personalTitle: "🌐 Taos Personal Portal",
      personalSub: "Central Hub for Personal Tools & Planners",
      personalDesc: "Unified web portal hosted on GitHub Pages aggregating personal utilities, physiotherapy planners, interactive puzzle solvers, and travel journals.",
      personalBtn: "Explore Portal ↗"
    },
    contact: {
      tag: "Direct Contact",
      title: "Interested in My Profile? Let's Talk",
      desc: "Available to discuss backend architectures, Java/Spring engineering, technical leadership, or high-scale distributed systems.",
      btnLinkedIn: "Connect on LinkedIn"
    },
    footer: {
      rights: `© ${currentYear} José Manuel Heredia Reyes · Valdemoro (Madrid) / Málaga, Spain`,
      toTop: "↑ Back to top"
    }
  }
};

// Current language (defaults to 'es' or saved preference)
let currentLang = localStorage.getItem('cv_lang') || 'es';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('cv_lang', lang);

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  const t = translations[lang];

  // Helper for safe text setting
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
  };

  const setHtml = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  // 1. Navigation
  setText('nav-about', t.nav.about);
  setText('nav-experience', t.nav.experience);
  setText('nav-skills', t.nav.skills);
  setText('nav-education', t.nav.education);
  setText('nav-projects', t.nav.projects);
  setText('nav-contact', t.nav.contact);

  // 2. Hero
  setText('hero-role', t.hero.role);
  setText('hero-status', t.hero.status);
  setText('pill-company', t.hero.pillCompany);
  setText('pill-location', t.hero.pillLocation);
  setText('pill-edu', t.hero.pillEdu);
  setText('pill-exp', t.hero.pillExp);
  setText('pill-lang', t.hero.pillLang);
  setText('btn-hero-email', t.hero.btnEmail);
  setText('btn-hero-linkedin', t.hero.btnLinkedIn);
  setText('btn-hero-print', t.hero.btnPrint);

  // 3. Summary
  setText('summary-tag', t.summary.tag);
  setText('summary-title', t.summary.title);
  setHtml('summary-p1', t.summary.p1);
  setHtml('summary-p2', t.summary.p2);
  setHtml('summary-p3', t.summary.p3);
  setText('metric-exp-val', `+${expYears}`);
  setText('metric-exp-lbl', t.summary.metricExp);
  setText('metric-core-lbl', t.summary.metricCore);
  setText('metric-arch-lbl', t.summary.metricArch);
  setText('metric-clients-lbl', t.summary.metricClients);

  // 4. Timeline
  setText('timeline-tag', t.timeline.tag);
  setText('timeline-title', t.timeline.title);
  setText('filter-all', t.timeline.filters.all);
  setText('filter-globant', t.timeline.filters.globant);
  setText('filter-inditex', t.timeline.filters.inditex);
  setText('filter-banca', t.timeline.filters.banca);
  setText('filter-medios', t.timeline.filters.medios);

  // Globant
  setText('globant-role', t.timeline.globant.role);
  setText('globant-company', t.timeline.globant.company);
  setText('globant-date', t.timeline.globant.date);
  setHtml('globant-b1', t.timeline.globant.b1);
  setHtml('globant-b2', t.timeline.globant.b2);
  setHtml('globant-b3', t.timeline.globant.b3);

  // Inditex
  setText('inditex-role', t.timeline.inditex.role);
  setText('inditex-company', t.timeline.inditex.company);
  setText('inditex-date', t.timeline.inditex.date);
  setHtml('inditex-b1', t.timeline.inditex.b1);
  setHtml('inditex-b2', t.timeline.inditex.b2);
  setHtml('inditex-b3', t.timeline.inditex.b3);
  setHtml('inditex-b4', t.timeline.inditex.b4);

  // Banca
  setText('banca-role', t.timeline.banca.role);
  setText('banca-company', t.timeline.banca.company);
  setText('banca-date', t.timeline.banca.date);
  setText('bnp-title', t.timeline.banca.pBnpTitle);
  setHtml('bnp-b1', t.timeline.banca.bBnp1);
  setHtml('bnp-b2', t.timeline.banca.bBnp2);
  setHtml('bnp-b3', t.timeline.banca.bBnp3);
  setText('ing-title', t.timeline.banca.pIngTitle);
  setHtml('ing-b1', t.timeline.banca.bIng1);
  setHtml('ing-b2', t.timeline.banca.bIng2);

  // AMA
  setText('ama-role', t.timeline.ama.role);
  setText('ama-company', t.timeline.ama.company);
  setText('ama-date', t.timeline.ama.date);
  setHtml('ama-b1', t.timeline.ama.b1);
  setHtml('ama-b2', t.timeline.ama.b2);
  setHtml('ama-b3', t.timeline.ama.b3);

  // A3Media
  setText('a3media-role', t.timeline.a3media.role);
  setText('a3media-company', t.timeline.a3media.company);
  setText('a3media-date', t.timeline.a3media.date);
  setHtml('a3media-b1', t.timeline.a3media.b1);
  setHtml('a3media-b2', t.timeline.a3media.b2);

  // RTVE
  setText('rtve-role', t.timeline.rtve.role);
  setText('rtve-company', t.timeline.rtve.company);
  setText('rtve-date', t.timeline.rtve.date);
  setHtml('rtve-b1', t.timeline.rtve.b1);
  setHtml('rtve-b2', t.timeline.rtve.b2);
  setHtml('rtve-b3', t.timeline.rtve.b3);
  setHtml('rtve-b4', t.timeline.rtve.b4);

  // Málaga
  setText('malaga-role', t.timeline.malaga.role);
  setText('malaga-company', t.timeline.malaga.company);
  setText('malaga-date', t.timeline.malaga.date);
  setHtml('malaga-b1', t.timeline.malaga.b1);
  setHtml('malaga-b2', t.timeline.malaga.b2);
  setHtml('malaga-b3', t.timeline.malaga.b3);
  setHtml('malaga-b4', t.timeline.malaga.b4);

  // Early
  setText('early-role', t.timeline.early.role);
  setText('early-company', t.timeline.early.company);
  setText('early-date', t.timeline.early.date);
  setHtml('early-b1', t.timeline.early.b1);
  setHtml('early-b2', t.timeline.early.b2);
  setHtml('early-b3', t.timeline.early.b3);
  setHtml('early-b4', t.timeline.early.b4);

  // 5. Skills
  setText('skills-tag', t.skills.tag);
  setText('skills-title', t.skills.title);
  setText('skill-cat-backend', t.skills.catBackend);
  setText('skill-cat-cloud', t.skills.catCloud);
  setText('skill-cat-data', t.skills.catData);
  setText('skill-cat-method', t.skills.catMethod);
  setText('skill-cat-frontend', t.skills.catFrontend);
  setText('skill-cat-languages', t.skills.catLanguages);
  setHtml('skill-desc-languages', t.skills.langDesc);

  // 6. Education
  setText('edu-tag', t.education.tag);
  setText('edu-title', t.education.title);
  setText('master-title', t.education.masterTitle);
  setText('master-inst', t.education.masterInst);
  setHtml('master-desc', t.education.masterDesc);
  setText('degree-title', t.education.degreeTitle);
  setText('degree-inst', t.education.degreeInst);
  setHtml('degree-desc', t.education.degreeDesc);
  setText('cert-title', t.education.certTitle);
  setText('cert-inst', t.education.certInst);
  setHtml('cert-p1', t.education.certP1);
  setHtml('cert-p2', t.education.certP2);
  setText('cert-btn', t.education.certBtn);

  // 7. Projects
  setText('projects-tag', t.projects.tag);
  setText('projects-title', t.projects.title);
  setText('tgm-title', t.projects.tgmTitle);
  setText('tgm-sub', t.projects.tgmSub);
  setText('tgm-desc', t.projects.tgmDesc);
  setText('tgm-doc-btn', t.projects.tgmDocBtn);
  setText('lazarus-title', t.projects.lazarusTitle);
  setText('lazarus-sub', t.projects.lazarusSub);
  setText('lazarus-desc', t.projects.lazarusDesc);
  setText('lazarus-web-btn', t.projects.lazarusWebBtn);
  setText('lazarus-amz-btn', t.projects.lazarusAmzBtn);
  setText('personal-title', t.projects.personalTitle);
  setText('personal-sub', t.projects.personalSub);
  setText('personal-desc', t.projects.personalDesc);
  setText('personal-btn', t.projects.personalBtn);

  // 8. Contact
  setText('contact-tag', t.contact.tag);
  setText('contact-title', t.contact.title);
  setText('contact-desc', t.contact.desc);
  setText('btn-contact-linkedin', t.contact.btnLinkedIn);

  // 9. Footer
  setText('footer-rights', t.footer.rights);
  setText('footer-totop', t.footer.toTop);
}

// 3. Timeline Filter Function
function filterTimeline(category, button) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  const items = document.querySelectorAll('.timeline-item');
  items.forEach(item => {
    if (category === 'all' || item.getAttribute('data-category') === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// 4. Interactive Constellation Canvas Background
function initConstellationBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const numParticles = Math.min(Math.floor((width * height) / 16000), 75);
  const particles = [];
  const maxDistance = 140;

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 1,
      color: Math.random() > 0.4 ? 'rgba(56, 189, 248, ' : 'rgba(99, 102, 241, '
    });
  }

  let mouse = { x: null, y: null };
  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      else if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      else if (p.y > height) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.7)';
      ctx.fill();

      // Connect to mouse
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.35 * (1 - dist / 180)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Connect neighboring particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const alpha = 0.22 * (1 - dist / maxDistance);
          ctx.strokeStyle = p.color + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initConstellationBackground();
});
