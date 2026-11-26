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
      role: "Senior Backend Architect & Java Specialist · Software Engineer",
      status: "En activo · Globant",
      pillCompany: "🏢 Globant · Santander (Actualidad)",
      pillAi: "🤖 Herramientas de IA · Devin & Claude",
      pillProjects: "🚀 Proyectos propios: Taos Game Maker & La Saga Lázaro ↓",
      pillLocation: "📍 Madrid / Málaga / Remoto (España)",
      pillEdu: "🎓 Ing. de Software & Máster INFTEL (UMA)",
      pillExp: `⚡ +${expYears} años de experiencia`,
      pillLang: "🌐 Inglés B2 · Español Nativo",
      btnEmail: "Contactar por Email",
      btnLinkedIn: "Perfil de LinkedIn",
      btnGitHub: "GitHub (@JoseMHR)",
      btnPrint: "Descargar CV (PDF)",
      cvPdfPath: "assets/docs/CV_Jose_Manuel_Heredia_Reyes.pdf",
      cvPdfName: "CV_Jose_Manuel_Heredia_Reyes.pdf"
    },
    summary: {
      tag: "Perfil Profesional",
      title: "Resumen Ejecutivo",
      p1: `Llevo desarrollando software desde 2008 (+18 años de experiencia), con base fullstack y especialización en arquitectura backend y ecosistema Java. Estudié Ingeniería de Software y el Máster INFTEL en la Universidad de Málaga, y a lo largo de mi carrera he pasado por todo el espectro: desde mantener y modernizar sistemas en Java 6 hasta diseñar microservicios distribuidos en Java 21.`,
      p2: `Actualmente trabajo en Globant para Banco Santander en el equipo de arquitectura core backend, construyendo componentes base y estándares ApiFirst que luego adoptan distintas entidades del grupo. En el día a día también integro herramientas de IA como Devin y Claude para automatizar tareas reales: migraciones a Java 21, generación de contratos OpenAPI y suites de pruebas.`,
      p3: ``,
      metricExp: "Años de Trayectoria",
      metricCoreVal: "Java & Spring",
      metricCoreLbl: "Especialidad Core",
      metricArchVal: "Hexagonal / Microservicios",
      metricArchLbl: "Arquitectura Limpia & DDD",
      metricAiVal: "Devin & Claude",
      metricAiLbl: "Herramientas & Automatización"
    },
    timeline: {
      tag: "Carrera Profesional",
      title: "Experiencia Laboral",
      filters: {
        all: "Todas",
        globant: "Globant (Santander)",
        inditex: "Inditex",
        banca: "Banca (ING / BNP)",
        medios: "Medios & Seguros",
        publico: "Sector Público & Consultoría",
        inicial: "Trayectoria Inicial"
      },
      globant: {
        role: "Software Application Analyst en Santander — Core Backend Architecture",
        company: "Globant · Jornada completa · Remoto",
        date: "Ene. 2025 — Actualidad",
        b1: "<strong>Arquitectura Core Santander:</strong> Diseño y desarrollo de componentes base y servicios comunes para su despliegue y adaptación en las diferentes entidades del banco a nivel internacional.",
        b2: "<strong>Automatización con IA:</strong> Uso de <strong>Devin AI y Claude</strong> para agilizar migraciones a Java 21, generación de contratos OpenAPI y creación de pruebas automáticas.",
        b3: "<strong>Estándares y calidad de código:</strong> Definición de pautas de arquitectura, diseño de APIs con enfoque <strong>ApiFirst</strong> y microservicios robustos en la nube, coordinando buenas prácticas con equipos internacionales."
      },
      inditex: {
        role: "Desarrollador Senior Backend en Inditex",
        company: "Plexus Tech · Jornada completa · Remoto",
        date: "Ene. 2023 — Ene. 2025 (2 años)",
        b1: "Análisis y desarrollo integral de microservicios backend desde la toma de requisitos hasta su subida a producción en plataformas corporativas de Inditex.",
        b2: "<strong>Arquitectura Hexagonal & ApiFirst:</strong> Desarrollo y modernización de servicios backend en Java 17 bajo principios DDD, contratos OpenAPI y alta disponibilidad.",
        b3: "Gestión de guardias críticas de alta disponibilidad y soporte continuo para picos de tráfico en eventos masivos de retail.",
        b4: "Implementación de pipelines de integración y entrega continua (CI/CD) con SonarQube, GitHub Actions, OpenShift y Azure."
      },
      banca: {
        role: "Analista de Desarrollo Senior en BNP Paribas e ING Bank",
        company: "Sopra Steria · Madrid / Remoto",
        date: "Ene. 2020 — Ene. 2023 (3 años)",
        pBnpTitle: "BNP Paribas / Cetelem (Sept. 2021 — Ene. 2023 · 1 año 5 meses):",
        bBnp1: "Análisis, diseño e implementación de middleware financiero y servicios de crédito de alta concurrencia.",
        bBnp2: "Desarrollo de módulos bancarios con Java 8, Spring Boot, bases de datos Oracle SQL y frontends Angular/JS.",
        bBnp3: "Gestión de despliegues automatizados mediante Jenkins y metodologías GitFlow.",
        pIngTitle: "ING Bank (Ene. 2020 — Sept. 2021 · 1 año 9 meses):",
        bIng1: "Desarrollo de microservicios middleware en Java bajo <strong>Arquitectura Hexagonal</strong> para sistemas bancarios transaccionales.",
        bIng2: "Optimización de consultas y persistencia con MyBatis y despliegues en infraestructura Azure."
      },
      ama: {
        role: "Analista Desarrollador en A.M.A. Seguros",
        company: "A.M.A. Seguros · Madrid",
        date: "Nov. 2018 — Ene. 2020 (1 año 3 meses)",
        b1: "Análisis y desarrollo integral de aplicaciones corporativas aseguradoras utilizando Vaadin 8, MyBatis, Java 8 y Spring Boot.",
        b2: "Responsabilidad integral del ciclo de vida del software: diseño, desarrollo, pruebas, optimización y puesta en producción.",
        b3: "Optimización y refactorización de rendimiento de aplicaciones existentes sobre JBoss, Tomcat, DB2 y MySQL."
      },
      a3media: {
        role: "Analista de Programación en Atresmedia",
        company: "atSistemas · Madrid",
        date: "Nov. 2017 — Nov. 2018 (1 año)",
        b1: "Análisis y desarrollo integral de aplicaciones y microservicios con Spring Boot y Java GWT, abarcando todo el ciclo de vida del proyecto.",
        b2: "Implementación de arquitecturas cloud en Amazon Web Services (AWS), despliegues con Jenkins, servidores WebLogic y persistencia con MongoDB, Hibernate y SQL."
      },
      rtve: {
        role: "Analista Desarrollador & Scrum Master en RTVE",
        company: "Everis Spain / 80 Soluciones · Pozuelo de Alarcón, Madrid",
        date: "Sept. 2015 — Nov. 2017 (2 años 3 meses)",
        b1: "Desarrollos backend y evolutivos en Java Spring y NodeJS (migración de APIs y nuevos módulos para portales y servicios de RTVE).",
        b2: "Desarrollo de múltiples infografías interactivas y mapas de datos de gran cobertura nacional e internacional (Eurovisión, Lotería de Navidad, Premios Óscar, Juegos Olímpicos).",
        b3: "Mantenimiento y gestión integral de despliegues de proyectos corporativos de RTVE (Spring, NodeJS, ElasticSearch, Oracle SQL).",
        b4: "Formador técnico y rol de Scrum Master para el nuevo equipo junior de desarrollo y mantenimiento."
      },
      malaga: {
        role: "Ingeniero de Software en Sector Público y Consultoría",
        company: "Ayto. de Málaga, UMA, Ingenia e Intendia · Málaga",
        date: "Jun. 2013 — Sept. 2015 (2 años 4 meses)",
        b1: "<strong>Ingenia (Jun. 2015 — Sept. 2015):</strong> Desarrollo frontend de aplicación web corporativa con JavaScript y Drupal-PHP para entidad bancaria suiza.",
        b2: "<strong>Ayuntamiento de Málaga (Nov. 2014 — Jun. 2015):</strong> Scrum Master coordinando equipo de 4 personas. Análisis de requisitos y desarrollo desde cero de aplicaciones en Java y Spring para la gestión de licitaciones municipales.",
        b3: "<strong>Universidad de Málaga (Feb. 2014 — Dic. 2014):</strong> Desarrollo desde cero de aplicación móvil Android nativa y plataforma web en Java para la gestión académica de profesorado y estudiantes (compaginado en sus últimos dos meses con el inicio en el Ayuntamiento de Málaga).",
        b4: "<strong>Intendia (Jun. 2013 — Feb. 2014):</strong> Mantenimiento y evolutivos en Java con GWT y GWTP para plataforma de geolocalización de flotas de vehículos. Desarrollo móvil híbrido en PhoneGap para iOS y Android."
      },
      early: {
        role: "Desarrollador de Software & Analista Técnico Junior",
        company: "Pymes, Becas y Proyectos de Software · Málaga",
        date: "2008 — Jun. 2013 (~5 años)",
        b1: "Desarrollos frontend y web: NMobe (Frontend, 6 meses) y DK-Innovations (Drupal CMS, 6 meses).",
        b2: "Desarrollo de aplicaciones móviles Android nativas para centros deportivos (Gym Kuro-Obi, UMA Deportes) e iniciativas independientes.",
        b3: "Becas de formación y prácticas tecnológicas: Arrow / RSI (Beca COBOL bancario), Coritel / Arelance (Prácticas SAP).",
        b4: "Desarrollos freelance y proyectos de software en Java, C/C++, Android nativo y plataformas web LAMP para empresas andaluzas."
      }
    },
    skills: {
      tag: "Competencias Técnicas",
      title: "Habilidades y Stack Tecnológico",
      catAi: "🤖 Inteligencia Artificial & Automatización",
      catBackend: "Backend & Arquitectura Java",
      catCloud: "Cloud, DevOps & Contenedores",
      catData: "Bases de Datos & Mensajería",
      catMethod: "Metodologías & Control de Versiones",
      catFrontend: "Fullstack, Móvil & Modernización Legacy",
      catLanguages: "Idiomas",
      langDesc: "<strong>Español:</strong> Nativo.<br><strong>Inglés:</strong> Nivel Profesional (B2).<br><span style='color: var(--text-muted); font-size: 0.85rem;'>Avanzado en lectura técnica, documentación y especificación de requisitos / Fluido en comunicación profesional y técnica.</span>"
    },
    education: {
      tag: "Formación Académica & Acreditaciones",
      title: "Estudios y Certificaciones",
      masterTitle: "Máster de Postgrado INFTEL",
      masterInst: "Universidad de Málaga (UMA) · 2012 — 2014",
      masterDesc: "Máster de postgrado enfocado en desarrollo de software avanzado, arquitecturas web y tecnologías móviles.",
      degreeTitle: "Ingeniería de Software",
      degreeInst: "Universidad de Málaga (UMA) · 2004 — 2011",
      degreeDesc: "Titulación universitaria superior en arquitectura de software, algoritmia, sistemas distribuidos y redes.",
      certsHeading: "Certificaciones & Formación Continua",
      scrumBadge: "Metodologías Ágiles",
      scrumTitle: "Certificación Oficial Scrum Master",
      scrumInst: "European Scrum · 2017",
      scrumDesc: "Certificación oficial en metodologías ágiles Scrum y gestión de entregas en equipos de ingeniería.",
      scrumBtn: "Ver Credencial en LinkedIn ↗",
      langBadge: "Competencia Lingüística",
      langTitle: "Certificación de Inglés (B2)",
      langInst: "University of Cambridge · ESOL Examinations",
      langDesc: "Certificación internacional de nivel profesional: fluidez en comunicación técnica y documentación en inglés.",
      langBtn: "Ver Credencial en LinkedIn ↗",
      coursesBadge: "Aprendizaje Continuo",
      coursesTitle: "+80 Cursos Técnicos Certificados",
      coursesInst: "Udemy · Coursera · edX · OpenWebinars",
      coursesDesc: "Más de 80 cursos acreditados en microservicios, cloud (AWS, Azure), Kafka, Java moderno (17/21) e IA.",
      coursesBtn: "Ver Todas en LinkedIn ↗"
    },
    projects: {
      tag: "Innovación & Creación Propia",
      title: "Proyectos Destacados",
      tgmTitle: "Taos Game Maker Engine",
      tgmSub: "Framework Modular para Godot 4 · Creador y Lead Developer",
      tgmDesc: "Framework data-driven modular para Godot 4 desacoplado mediante esquemas JSON, con un estudio web local de más de 45 herramientas visuales (Python / Vue 3). Diseñado para crear RPGs tácticos con combate por turnos, diálogos e inventario con total control técnico.",
      tgmStoreBtn: "Godot Asset Store ↗",
      tgmDocBtn: "Ver Documentación & Web ↗",
      tgmGhBtn: "Repositorio GitHub ↗",
      gameTitle: "Ecos de la Verdad (Echoes of Truth)",
      gameSub: "Videojuego JRPG Táctico · Diseñador, Guionista y Programador",
      gameDesc: "JRPG táctico por turnos y exploración en cuadrícula en primera persona ambientado en el universo de la Saga Lázaro. Desarrollado como showcase completo del motor Taos Game Maker. Disponible oficialmente en Google Play Store para dispositivos Android, y en Itch.io para jugar en PC, Windows, macOS y Linux.",
      gamePlayStoreBtn: "Google Play Store (Android) ↗",
      gameItchBtn: "Jugar en Itch.io (PC / Mac) ↗",
      gameTrailerBtn: "Ver Tráiler Oficial ↗",
      lazarusTitle: "La Saga Lázaro (The Lazarus Saga)",
      lazarusSub: "Universo Literario de Fantasía Oscura · Autor & Creador de IP",
      lazarusDesc: "Dos novelas publicadas tanto por la editorial española Adarve como en Amazon en español e inglés (Saga Lázaro: El Secreto de Lázaro y La Senda de Lázaro), que dan origen al universo, lore y trasfondo narrativo de Echoes of Truth.",
      lazarusWebBtn: "Web Oficial del Universo ↗",
      lazarusWebUrl: "https://josemhr.github.io/SagaLazaro/",
      lazarusAmz1Btn: "Libro 1 (ES) ↗",
      lazarusAmz1Url: "https://www.amazon.es/dp/B0HLSQKMR1",
      lazarusAmz2Btn: "Libro 2 (ES) ↗",
      lazarusAmz2Url: "https://www.amazon.es/dp/B0HLSTMRWC"
    },
    contact: {
      tag: "Contacto Directo",
      title: "¿Hablamos?",
      desc: "Si quieres comentar algo sobre arquitectura Java/Spring, algún proyecto técnico o una propuesta, escríbeme directamente.",
      btnLinkedIn: "Conectar en LinkedIn"
    },
    footer: {
      rights: `© ${currentYear} José Manuel Heredia Reyes · Madrid / Málaga, España`,
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
      role: "Senior Backend Architect & Java Specialist · Software Engineer",
      status: "Active · Globant",
      pillCompany: "🏢 Globant · Santander (Present)",
      pillAi: "🤖 AI Tools · Devin & Claude",
      pillProjects: "🚀 Personal Projects: Taos Game Maker & The Lazarus Saga ↓",
      pillLocation: "📍 Madrid / Málaga / Remote (Spain)",
      pillEdu: "🎓 Software Engineer & Master INFTEL (UMA)",
      pillExp: `⚡ +${expYears} Years of Experience`,
      pillLang: "🌐 English B2 · Native Spanish",
      btnEmail: "Email Me",
      btnLinkedIn: "LinkedIn Profile",
      btnGitHub: "GitHub (@JoseMHR)",
      btnPrint: "Download CV (PDF)",
      cvPdfPath: "assets/docs/CV_Jose_Manuel_Heredia_Reyes_EN.pdf",
      cvPdfName: "CV_Jose_Manuel_Heredia_Reyes_EN.pdf"
    },
    summary: {
      tag: "Professional Profile",
      title: "Executive Summary",
      p1: `I have been developing software since 2008 (+18 years of experience), with a fullstack foundation and specialization in backend architecture and the Java ecosystem. I studied Software Engineering and the INFTEL Master's degree at Universidad de Málaga, and throughout my career I have worked across the entire spectrum: from maintaining and modernizing legacy systems in Java 6 to designing distributed microservices in Java 21.`,
      p2: `I currently work at Globant for Banco Santander in the core backend architecture team, building foundational components and ApiFirst standards adopted across the group's global entities. Day to day, I also integrate AI tools like Devin and Claude to automate real engineering tasks: Java 21 migrations, OpenAPI contract generation, and automated test suites.`,
      p3: ``,
      metricExp: "Years of Experience",
      metricCoreVal: "Java & Spring",
      metricCoreLbl: "Core Specialization",
      metricArchVal: "Hexagonal / Microservices",
      metricArchLbl: "Clean Architecture & DDD",
      metricAiVal: "Devin & Claude",
      metricAiLbl: "Tools & Automation"
    },
    timeline: {
      tag: "Career Trajectory",
      title: "Work Experience",
      filters: {
        all: "All",
        globant: "Globant (Santander)",
        inditex: "Inditex",
        banca: "Banking (ING / BNP)",
        medios: "Media & Insurance",
        publico: "Public Sector & Consulting",
        inicial: "Early Career"
      },
      globant: {
        role: "Software Application Analyst at Santander — Core Backend Architecture",
        company: "Globant · Full-time · Remote",
        date: "Jan. 2025 — Present",
        b1: "<strong>Santander Core Architecture:</strong> Design and engineering of foundational components and common services for international deployment and localization across Banco Santander entities.",
        b2: "<strong>AI-Assisted Automation:</strong> Leveraging <strong>Devin AI and Claude</strong> to streamline Java 21 migrations, OpenAPI contract generation, and automated test suites.",
        b3: "<strong>Standards & Code Quality:</strong> Defining architecture guidelines, <strong>ApiFirst</strong> API design, and robust cloud microservices, aligning software best practices across global teams."
      },
      inditex: {
        role: "Senior Backend Engineer at Inditex",
        company: "Plexus Tech · Full-time · Remote",
        date: "Jan. 2023 — Jan. 2025 (2 yrs)",
        b1: "End-to-end backend microservice analysis and development from technical discovery to production release across Inditex corporate platforms.",
        b2: "<strong>Hexagonal Architecture & ApiFirst:</strong> Modernizing and developing backend microservices in Java 17 under DDD principles, OpenAPI contracts, and high availability.",
        b3: "High-availability on-call incident resolution and continuous operational support during massive retail traffic peaks.",
        b4: "Continuous Integration & Deployment (CI/CD) pipelines using SonarQube, GitHub Actions, OpenShift, and Microsoft Azure."
      },
      banca: {
        role: "Senior Software Analyst at BNP Paribas & ING Bank",
        company: "Sopra Steria · Madrid / Remote",
        date: "Jan. 2020 — Jan. 2023 (3 yrs)",
        pBnpTitle: "BNP Paribas / Cetelem (Sept. 2021 — Jan. 2023 · 1 yr 5 mos):",
        bBnp1: "Architecture, design, and implementation of high-concurrency financial middleware and credit management services.",
        bBnp2: "Engineered banking modules using Java 8, Spring Boot, Oracle SQL databases, and Angular/JavaScript frontends.",
        bBnp3: "Automated continuous delivery and deployment pipelines via Jenkins and GitFlow branching strategies.",
        pIngTitle: "ING Bank (Jan. 2020 — Sept. 2021 · 1 yr 9 mos):",
        bIng1: "Engineered transactional middleware microservices in Java leveraging <strong>Hexagonal Architecture</strong> for digital banking systems.",
        bIng2: "Database persistence optimization with MyBatis and scalable deployments within Microsoft Azure infrastructure."
      },
      ama: {
        role: "Software Analyst & Developer at A.M.A. Seguros",
        company: "A.M.A. Seguros · Madrid",
        date: "Nov. 2018 — Jan. 2020 (1 yr 3 mos)",
        b1: "Full lifecycle design and development of insurance enterprise applications utilizing Vaadin 8, MyBatis, Java 8, and Spring Boot.",
        b2: "Comprehensive Software Development Life Cycle (SDLC) ownership: architecture, implementation, automated testing, optimization, and rollout.",
        b3: "Performance profiling and refactoring of legacy systems hosted on JBoss, Apache Tomcat, IBM DB2, and MySQL."
      },
      a3media: {
        role: "Software Programming Analyst at Atresmedia",
        company: "atSistemas · Madrid",
        date: "Nov. 2017 — Nov. 2018 (1 yr)",
        b1: "End-to-end analysis and development of applications and microservices with Spring Boot and Java GWT, spanning the entire project lifecycle.",
        b2: "Cloud architecture implementation on Amazon Web Services (AWS), CI/CD deployments with Jenkins, WebLogic application servers, and persistence using MongoDB, Hibernate, and SQL."
      },
      rtve: {
        role: "Software Analyst & Scrum Master at RTVE",
        company: "Everis Spain / 80 Soluciones · Pozuelo de Alarcón, Madrid",
        date: "Sep. 2015 — Nov. 2017 (2 yrs 3 mos)",
        b1: "Backend engineering and evolutive development in Java Spring and NodeJS (API migration and new modules for RTVE digital platforms and web services).",
        b2: "Design and development of multiple high-visibility interactive infographics and national data maps (Eurovision Song Contest, Spanish Christmas Lottery, Academy Awards / Oscars, Olympic Games).",
        b3: "Full lifecycle maintenance and deployment management of RTVE corporate projects (Spring, NodeJS, ElasticSearch, Oracle SQL).",
        b4: "Technical trainer and Scrum Master for the incoming junior software development and maintenance team."
      },
      malaga: {
        role: "Software Engineer at Public Sector & Tech Consulting",
        company: "Málaga City Council, UMA, Ingenia & Intendia · Málaga",
        date: "Jun. 2013 — Sep. 2015 (2 yrs 4 mos)",
        b1: "<strong>Ingenia (Jun. 2015 — Sep. 2015):</strong> Frontend engineering of corporate web applications utilizing JavaScript and Drupal-PHP for a Swiss private banking entity.",
        b2: "<strong>Málaga City Council (Nov. 2014 — Jun. 2015):</strong> Scrum Master coordinating a 4-developer engineering team. Requirements analysis and greenfield development of Java / Spring applications for municipal public procurement management.",
        b3: "<strong>Universidad de Málaga (Feb. 2014 — Dec. 2014):</strong> Greenfield development of native Android mobile application and Java web management platform for faculty and students (overlapped in its final two months with the start at Málaga City Council).",
        b4: "<strong>Intendia (Jun. 2013 — Feb. 2014):</strong> Maintenance and evolutive engineering in Java with GWT and GWTP for a vehicle fleet geolocation platform. Cross-platform mobile development with PhoneGap (iOS/Android)."
      },
      early: {
        role: "Software Developer & Junior Technical Analyst",
        company: "SMBs, Fellowships & Software Projects · Málaga",
        date: "2008 — Jun. 2013 (~5 yrs)",
        b1: "Frontend and web engineering: NMobe (Frontend developer, 6 mos) and DK-Innovations (Drupal CMS developer, 6 mos).",
        b2: "Native Android mobile applications for sports centers (Gym Kuro-Obi, UMA Sports) and independent mobile initiatives.",
        b3: "Technical training scholarships and corporate internships: Arrow / RSI (Core banking COBOL scholarship), Coritel / Arelance (Enterprise SAP internship).",
        b4: "Freelance consulting and software solutions in Java, C/C++, native Android, and LAMP web platforms for Andalusian enterprises."
      }
    },
    skills: {
      tag: "Technical Stack",
      title: "Core Skills & Technology Matrix",
      catAi: "🤖 Artificial Intelligence & Automation",
      catBackend: "Backend & Java Architecture",
      catCloud: "Cloud, DevOps & Containers",
      catData: "Databases & Messaging",
      catMethod: "Methodologies & Version Control",
      catFrontend: "Fullstack, Mobile & Legacy Modernization",
      catLanguages: "Languages",
      langDesc: "<strong>Spanish:</strong> Native.<br><strong>English:</strong> Professional Level (B2).<br><span style='color: var(--text-muted); font-size: 0.85rem;'>Advanced technical reading, documentation & API specifications / Fluent professional communication.</span>"
    },
    education: {
      tag: "Academic Background & Accreditations",
      title: "Education & Certifications",
      masterTitle: "Master of Science INFTEL",
      masterInst: "Universidad de Málaga (UMA) · 2012 — 2014",
      masterDesc: "Master's degree focused on advanced software engineering, web architectures, and mobile technologies.",
      degreeTitle: "Software Engineer",
      degreeInst: "Universidad de Málaga (UMA) · 2004 — 2011",
      degreeDesc: "University degree in software architecture, algorithm design, distributed systems, and computer networks.",
      certsHeading: "Certifications & Continuous Learning",
      scrumBadge: "Agile Frameworks",
      scrumTitle: "Official Scrum Master Certification",
      scrumInst: "European Scrum · 2017",
      scrumDesc: "Official certification in Scrum agile methodologies and continuous delivery across engineering teams.",
      scrumBtn: "View Credential on LinkedIn ↗",
      langBadge: "Language Proficiency",
      langTitle: "Official English Certification (B2)",
      langInst: "University of Cambridge · ESOL Examinations",
      langDesc: "International professional certification: fluent technical communication and documentation in English.",
      langBtn: "View Credential on LinkedIn ↗",
      coursesBadge: "Lifelong Learning",
      coursesTitle: "+80 Verified Technical Courses",
      coursesInst: "Udemy · Coursera · edX · OpenWebinars",
      coursesDesc: "Over 80 accredited courses covering microservices, cloud (AWS, Azure), Kafka, modern Java (17/21), and AI.",
      coursesBtn: "View All on LinkedIn ↗"
    },
    projects: {
      tag: "Innovation & Personal Creation",
      title: "Featured Projects",
      tgmTitle: "Taos Game Maker Engine",
      tgmSub: "Modular Framework for Godot 4 · Creator & Lead Developer",
      tgmDesc: "Modular data-driven framework for Godot 4 decoupled through JSON schemas, featuring a local web studio suite of 45+ visual tools (Python / Vue 3). Designed for tactical turn-based RPGs with dialogue and inventory systems and full engineering control.",
      tgmStoreBtn: "Godot Asset Store ↗",
      tgmDocBtn: "View Documentation & Web ↗",
      tgmGhBtn: "GitHub Repository ↗",
      gameTitle: "Echoes of Truth (Ecos de la Verdad)",
      gameSub: "Tactical JRPG Video Game · Designer, Writer & Programmer",
      gameDesc: "Turn-based tactical JRPG and first-person grid crawler set in The Lazarus Saga universe, developed as the full flagship showcase for Taos Game Maker. Officially available on Google Play Store for Android devices, and on Itch.io for PC, Windows, macOS, and Linux.",
      gamePlayStoreBtn: "Google Play Store (Android) ↗",
      gameItchBtn: "Play on Itch.io (PC / Mac) ↗",
      gameTrailerBtn: "Watch Official Trailer ↗",
      lazarusTitle: "The Lazarus Saga (La Saga Lázaro)",
      lazarusSub: "Dark Fantasy Literary Universe · Author & IP Creator",
      lazarusDesc: "Two novels published by Spanish publishing house Editorial Adarve and on Amazon in Spanish and English (The Lazarus Saga: The Secret of Lazarus and The Path of Lazarus), establishing the universe, lore, and narrative worldbuilding behind Echoes of Truth.",
      lazarusWebBtn: "Official Website ↗",
      lazarusWebUrl: "https://josemhr.github.io/SagaLazaro/?lang=en",
      lazarusAmz1Btn: "Book 1 (EN) ↗",
      lazarusAmz1Url: "https://www.amazon.com/dp/B0HMFQVSF2",
      lazarusAmz2Btn: "Book 2 (EN) ↗",
      lazarusAmz2Url: "https://www.amazon.com/dp/B0HMF7GWZD"
    },
    contact: {
      tag: "Direct Contact",
      title: "Let's Talk",
      desc: "If you'd like to discuss Java/Spring architecture, a technical project, or an opportunity, feel free to reach out directly.",
      btnLinkedIn: "Connect on LinkedIn"
    },
    footer: {
      rights: `© ${currentYear} José Manuel Heredia Reyes · Madrid / Málaga, Spain`,
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

  // Update dynamic experience years
  document.querySelectorAll('.dyn-exp').forEach(el => {
    el.textContent = expYears;
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
  setText('pill-ai', t.hero.pillAi);
  setText('pill-projects', t.hero.pillProjects);
  setText('pill-location', t.hero.pillLocation);
  setText('pill-edu', t.hero.pillEdu);
  setText('pill-exp', t.hero.pillExp);
  setText('pill-lang', t.hero.pillLang);
  setText('btn-hero-email', t.hero.btnEmail);
  setText('btn-hero-linkedin', t.hero.btnLinkedIn);
  const printBtn = document.getElementById('btn-hero-print');
  if (printBtn) {
    setHtml('btn-hero-print', `<span>📥</span> ${t.hero.btnPrint}`);
    if (t.hero.cvPdfPath) {
      printBtn.setAttribute('href', t.hero.cvPdfPath);
      printBtn.setAttribute('download', t.hero.cvPdfName);
    }
  }

  // 3. Summary
  setText('summary-tag', t.summary.tag);
  setText('summary-title', t.summary.title);
  setHtml('summary-p1', t.summary.p1);
  setHtml('summary-p2', t.summary.p2);
  setText('metric-exp-val', `+${expYears}`);
  setText('metric-exp-lbl', t.summary.metricExp);
  setText('metric-core-val', t.summary.metricCoreVal);
  setText('metric-core-lbl', t.summary.metricCoreLbl);
  setText('metric-arch-val', t.summary.metricArchVal);
  setText('metric-arch-lbl', t.summary.metricArchLbl);
  setText('metric-ai-val', t.summary.metricAiVal);
  setText('metric-ai-lbl', t.summary.metricAiLbl);

  // 4. Timeline
  setText('timeline-tag', t.timeline.tag);
  setText('timeline-title', t.timeline.title);
  setText('filter-all', t.timeline.filters.all);
  setText('filter-globant', t.timeline.filters.globant);
  setText('filter-inditex', t.timeline.filters.inditex);
  setText('filter-banca', t.timeline.filters.banca);
  setText('filter-medios', t.timeline.filters.medios);
  setText('filter-publico', t.timeline.filters.publico);
  setText('filter-inicial', t.timeline.filters.inicial);

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
  setText('skill-cat-ai', t.skills.catAi);
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
  setText('certs-heading-text', t.education.certsHeading);
  setText('scrum-badge', t.education.scrumBadge);
  setText('scrum-title', t.education.scrumTitle);
  setText('scrum-inst', t.education.scrumInst);
  setHtml('scrum-desc', t.education.scrumDesc);
  setText('scrum-btn', t.education.scrumBtn);
  setText('cambridge-badge', t.education.langBadge);
  setText('cambridge-title', t.education.langTitle);
  setText('cambridge-inst', t.education.langInst);
  setHtml('cambridge-desc', t.education.langDesc);
  setText('cambridge-btn', t.education.langBtn);
  setText('courses-badge', t.education.coursesBadge);
  setText('courses-title', t.education.coursesTitle);
  setText('courses-inst', t.education.coursesInst);
  setHtml('courses-desc', t.education.coursesDesc);
  setText('courses-btn', t.education.coursesBtn);

  // 7. Projects
  setText('projects-tag', t.projects.tag);
  setText('projects-title', t.projects.title);
  // Engine
  setText('tgm-title', t.projects.tgmTitle);
  setText('tgm-sub', t.projects.tgmSub);
  setText('tgm-desc', t.projects.tgmDesc);
  setHtml('tgm-store-btn', `<span>🏪</span> ${t.projects.tgmStoreBtn}`);
  setHtml('tgm-doc-btn', `<span>🌐</span> ${t.projects.tgmDocBtn}`);
  setHtml('tgm-gh-btn', `<span>🐙</span> ${t.projects.tgmGhBtn}`);
  // Game
  setText('game-title', t.projects.gameTitle);
  setText('game-sub', t.projects.gameSub);
  setText('game-desc', t.projects.gameDesc);
  setHtml('game-playstore-btn', `<span>📱</span> ${t.projects.gamePlayStoreBtn}`);
  setHtml('game-itch-btn', `<span>🎮</span> ${t.projects.gameItchBtn}`);
  setHtml('game-trailer-btn', `<span>🎬</span> ${t.projects.gameTrailerBtn}`);
  // Books
  setText('lazarus-title', t.projects.lazarusTitle);
  setText('lazarus-sub', t.projects.lazarusSub);
  setText('lazarus-desc', t.projects.lazarusDesc);
  const lazarusWeb = document.getElementById('lazarus-web-btn');
  if (lazarusWeb) {
    lazarusWeb.href = t.projects.lazarusWebUrl;
    lazarusWeb.innerHTML = `<span>📖</span> ${t.projects.lazarusWebBtn}`;
  }
  const lazarusAmz1 = document.getElementById('lazarus-amz-1-btn');
  if (lazarusAmz1) {
    lazarusAmz1.href = t.projects.lazarusAmz1Url;
    lazarusAmz1.innerHTML = `<span>📦</span> ${t.projects.lazarusAmz1Btn}`;
  }
  const lazarusAmz2 = document.getElementById('lazarus-amz-2-btn');
  if (lazarusAmz2) {
    lazarusAmz2.href = t.projects.lazarusAmz2Url;
    lazarusAmz2.innerHTML = `<span>📦</span> ${t.projects.lazarusAmz2Btn}`;
  }

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

// 4. Interactive Constellation Canvas Background with Parallax & Glow
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

  const numParticles = Math.min(Math.floor((width * height) / 13000), 85);
  const particles = [];
  const maxDistance = 145;

  for (let i = 0; i < numParticles; i++) {
    const isSpecial = Math.random() > 0.82;
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      radius: isSpecial ? Math.random() * 2 + 2.4 : Math.random() * 1.5 + 1.2,
      baseRadius: isSpecial ? 3 : 1.5,
      isSpecial: isSpecial,
      pulse: Math.random() * Math.PI,
      color: Math.random() > 0.45 ? 'rgba(56, 189, 248, ' : 'rgba(168, 85, 247, '
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

      if (p.x < -10) p.x = width + 10;
      else if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      else if (p.y > height + 10) p.y = -10;

      p.pulse += 0.03;
      const currentRadius = p.radius + Math.sin(p.pulse) * 0.35;

      // Draw particle with glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(currentRadius, 0.8), 0, Math.PI * 2);
      ctx.fillStyle = p.color + (p.isSpecial ? '0.92)' : '0.65)');
      if (p.isSpecial) {
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#38bdf8';
      } else {
        ctx.shadowBlur = 0;
      }
      ctx.fill();

      // Connect to mouse with interactive glow beam
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 190) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          const alpha = 0.42 * (1 - dist / 190);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 1.1;
          ctx.stroke();

          // Gentle mouse magnetic repulsion
          p.x -= (dx / dist) * 0.35;
          p.y -= (dy / dist) * 0.35;
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
          const alpha = 0.25 * (1 - dist / maxDistance);
          ctx.strokeStyle = p.color + alpha + ')';
          ctx.lineWidth = 0.85;
          ctx.shadowBlur = 0;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// 5. Dynamic Navbar Scroll Spy & Active State Tracking
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = [
    document.getElementById('resumen'),
    document.getElementById('experiencia'),
    document.getElementById('habilidades'),
    document.getElementById('educacion'),
    document.getElementById('proyectos'),
    document.getElementById('contacto')
  ].filter(Boolean);

  function updateActiveNav() {
    const scrollPos = window.scrollY + 140;

    let currentSectionId = '';
    
    // If at top in hero area, don't force section active
    if (window.scrollY < 260) {
      currentSectionId = '';
    } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 80) {
      currentSectionId = 'contacto';
    } else {
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = section.getAttribute('id');
        }
      });
    }

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (currentSectionId && href === `#${currentSectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initConstellationBackground();
  initScrollSpy();
});
