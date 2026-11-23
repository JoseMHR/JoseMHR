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
      pillAi: "🤖 AI Vanguard · Devin & Claude Agents",
      pillLocation: "📍 Madrid / Málaga / Remoto (España)",
      pillEdu: "🎓 Ing. de Software & Máster INFTEL (UMA)",
      pillExp: `⚡ +${expYears} años de experiencia`,
      pillLang: "🌐 Inglés B2 · Español Nativo",
      btnEmail: "Contactar por Email",
      btnLinkedIn: "Perfil de LinkedIn",
      btnGitHub: "GitHub (@JoseMHR)",
      btnPrint: "Descargar CV (PDF)"
    },
    summary: {
      tag: "Perfil Profesional",
      title: "Resumen Ejecutivo",
      p1: `<strong>Ingeniero de Software y Máster de Postgrado INFTEL</strong> por la Universidad de Málaga con más de <strong>${expYears} años de trayectoria continuada</strong> (en activo desde 2008), forjada sobre una base sólida en desarrollo fullstack (tecnologías mobile nativas, web frontend y backend) y una profunda experiencia práctica modernizando y refactorizando sistemas legados hacia arquitecturas empresariales de vanguardia.`,
      p2: `Especializado en el <strong>ecosistema Java (desde Java 6 y 7 legacy hasta Java 8, 17 y 21)</strong>, frameworks <strong>Spring / Spring Boot</strong>, microservicios resilientes bajo <strong>Arquitectura Hexagonal</strong>, especificación y contratos <strong>ApiFirst</strong>, mensajería reactiva con <strong>Apache Kafka</strong> y entornos de nube híbrida (<strong>Azure, OpenShift, AWS</strong>).`,
      p3: `Posicionado a la <strong>vanguardia del desarrollo con Inteligencia Artificial</strong>, integrando agentes autónomos como <strong>Devin AI</strong> y <strong>Claude</strong> mediante <em>workflows</em>, <em>skills</em> especializadas y pipelines agénticos para acelerar el desarrollo con máxima velocidad y excelencia técnica.`,
      metricExp: "Años de Trayectoria",
      metricCoreVal: "Java & Spring",
      metricCoreLbl: "Especialidad Core",
      metricArchVal: "Hexagonal / Microservicios",
      metricArchLbl: "Arquitectura Limpia & DDD",
      metricAiVal: "Devin & Claude",
      metricAiLbl: "Workflows & Skills"
    },
    timeline: {
      tag: "Carrera Profesional",
      title: "Experiencia Laboral",
      filters: {
        all: "Todas",
        globant: "Globant (Santander)",
        inditex: "Inditex",
        banca: "Banca (ING / BNP)",
        medios: "Medios & Seguros"
      },
      globant: {
        role: "Software Application Analyst en Santander — Core Backend Architecture & AI Vanguard",
        company: "Globant · Jornada completa · Remoto",
        date: "Ene. 2025 — Actualidad",
        b1: "<strong>Arquitectura Core Backend:</strong> Diseño e ingeniería de soluciones base estandarizadas, robustas y altamente escalables para su posterior despliegue, adaptación y extensión en los distintos países del grupo corporativo Santander.",
        b2: "<strong>Vanguardia en Desarrollo con IA (AI-Driven Development):</strong> Adopción pionera y liderazgo en la integración de flujos de desarrollo con agentes autónomos de IA (<strong>Devin AI, Claude</strong>), diseñando <em>workflows</em> personalizados, <em>skills</em> modulares y pipelines agénticos para acelerar el desarrollo, refactorización y entrega de software con máxima eficiencia.",
        b3: "<strong>Gobernanza enterprise y patrones de resiliencia:</strong> Definición de directrices de desarrollo, especificación y gobierno de contratos bajo enfoque <strong>ApiFirst</strong>, patrones de resiliencia en microservicios cloud y alineamiento con equipos internacionales para la gobernanza del código y buenas prácticas de ingeniería de software."
      },
      inditex: {
        role: "Desarrollador Senior Backend en Inditex",
        company: "Plexus Tech · Jornada completa · Remoto",
        date: "Ene. 2023 — Ene. 2025 (2 años)",
        b1: "Análisis y desarrollo integral de microservicios backend desde la toma de requisitos hasta su subida a producción en plataformas corporativas de Inditex.",
        b2: "<strong>Arquitectura Hexagonal & ApiFirst:</strong> Desarrollo y modernización de servicios backend en Java 17 bajo principios DDD, contratos OpenAPI y alta disponibilidad.",
        b3: "Gestión de guardias críticas de alta disponibilidad y soporte continuo para picos de tráfico en eventos masivos de retail (Rebajas, Black Friday).",
        b4: "Implementación de pipelines de integración y entrega continua (CI/CD) con SonarQube, GitHub Actions, OpenShift y Azure."
      },
      banca: {
        role: "Analista de Desarrollo Senior en BNP Paribas e ING Bank",
        company: "Sopra Steria · Madrid / Remoto",
        date: "Ene. 2020 — Ene. 2023 (3 años)",
        pBnpTitle: "BNP Paribas / Cetelem (Sept. 2021 — Ene. 2023 · 1 año 5 meses):",
        bBnp1: "Análisis, diseño e implementación de aplicaciones middleware y servicios financieros de alta concurrencia.",
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
        b2: "Abarcamiento del ciclo de vida del software completo: diseño, desarrollo, pruebas, optimización y puesta en producción.",
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
        b3: "<strong>Universidad de Málaga (Feb. 2014 — Dic. 2014):</strong> Desarrollo desde cero de aplicación móvil Android nativa y plataforma web en Java para la gestión académica de profesorado y estudiantes.",
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
      catAi: "🤖 AI-Driven Engineering & Vanguardia Tecnológica",
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
      masterDesc: "Especialidad en <strong>'Informática aplicada a las tecnologías móviles y web'</strong>. Formación avanzada en desarrollo móvil nativo, arquitecturas web distribuidas, patrones de diseño empresarial y computación en la nube.",
      degreeTitle: "Ingeniería de Software",
      degreeInst: "Universidad de Málaga (UMA) · 2004 — 2011",
      degreeDesc: "Formación universitaria integral en ingeniería del software, diseño y arquitectura de sistemas, algoritmia avanzada, estructuras de datos, concurrencia, sistemas operativos y redes telemáticas.",
      certsHeading: "Certificaciones & Formación Continua",
      scrumBadge: "Metodologías Ágiles",
      scrumTitle: "Certificación Oficial Scrum Master",
      scrumInst: "European Scrum · 2017",
      scrumDesc: "Acreditación profesional oficial en gestión ágil de proyectos (Scrum, Kanban), facilitación de ceremonias, resolución de impedimentos y optimización del flujo de entrega continua en equipos de ingeniería.",
      scrumBtn: "Ver Credencial en LinkedIn ↗",
      langBadge: "Competencia Lingüística",
      langTitle: "Certificación de Inglés (B2)",
      langInst: "University of Cambridge · ESOL Examinations",
      langDesc: "Acreditación oficial internacional de nivel profesional y técnico en lengua inglesa: lectura avanzada de documentación, especificaciones de arquitectura y comunicación fluida en equipos multiculturales.",
      langBtn: "Ver Credencial en LinkedIn ↗",
      coursesBadge: "Aprendizaje Continuo",
      coursesTitle: "+80 Cursos Técnicos Certificados",
      coursesInst: "Udemy · Coursera · edX · OpenWebinars",
      coursesDesc: "Historial continuado de más de 80 especializaciones técnicas acreditadas: microservicios avanzados, cloud (AWS, Azure), mensajería reactiva con Kafka, Java moderno (17/21) y herramientas de Inteligencia Artificial.",
      coursesBtn: "Ver Todas en LinkedIn ↗"
    },
    projects: {
      tag: "Innovación & Creación Propia",
      title: "Proyectos Transmedia y Software",
      tgmTitle: "Taos Game Maker Engine",
      tgmSub: "Framework Modular para Godot 4 · Creador y Lead Developer",
      tgmDesc: "Framework de arquitectura avanzada y herramientas de nivel profesional para Godot Engine. Diseñado para acelerar la creación de videojuegos tácticos 2D y 3D con sistemas desacoplados de combate ATB, diálogos, inventario, eventos y una suite web con más de 45 herramientas visuales.",
      tgmDocBtn: "Ver Documentación & Web ↗",
      lazarusTitle: "La Saga Lázaro (The Lazarus Saga)",
      lazarusSub: "Universo Literario de Fantasía Oscura · Autor & Creador de IP",
      lazarusDesc: "Obra literaria y universo de novelas publicadas en España a través de Editorial Adarve ('La Leyenda de las Esferas') y mundialmente en Amazon (español e inglés), estableciendo las bases del universo transmedia Taos, fusionando cosmología, narrativa épica y filosofía con los videojuegos del ecosistema.",
      lazarusWebBtn: "Web Oficial del Universo ↗",
      lazarusAmzEsBtn: "Amazon (ES) ↗",
      lazarusAmzEnBtn: "Amazon (EN) ↗",
      lazarusInterviewBtn: "Entrevista Editorial Adarve ↗"
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
      role: "Senior Backend Architect & Java Specialist · Software Engineer",
      status: "Active · Globant",
      pillCompany: "🏢 Globant · Santander (Present)",
      pillAi: "🤖 AI Vanguard · Devin & Claude Agents",
      pillLocation: "📍 Madrid / Málaga / Remote (Spain)",
      pillEdu: "🎓 Software Engineer & Master INFTEL (UMA)",
      pillExp: `⚡ +${expYears} Years of Experience`,
      pillLang: "🌐 English B2 · Native Spanish",
      btnEmail: "Email Me",
      btnLinkedIn: "LinkedIn Profile",
      btnGitHub: "GitHub (@JoseMHR)",
      btnPrint: "Download CV (PDF)"
    },
    summary: {
      tag: "Professional Profile",
      title: "Executive Summary",
      p1: `<strong>Software Engineer and Master of Science INFTEL</strong> graduate from Universidad de Málaga with over <strong>${expYears} years of continuous professional trajectory</strong> (active since 2008), grounded in versatile fullstack foundations (native mobile, web frontend, and backend engineering) with extensive experience modernizing and refactoring legacy systems into modern high-scale architectures.`,
      p2: `Specialized across the <strong>Java ecosystem (from Java 6 & 7 legacy to modern Java 8, 17, and 21)</strong>, <strong>Spring / Spring Boot</strong> frameworks, resilient microservices under <strong>Hexagonal Architecture (Ports & Adapters)</strong>, contract-driven <strong>ApiFirst</strong> specifications, reactive streaming with <strong>Apache Kafka</strong>, and hybrid cloud environments (<strong>Azure, OpenShift, AWS</strong>).`,
      p3: `Positioned at the <strong>vanguard of AI-driven software engineering</strong>, integrating next-generation autonomous agents like <strong>Devin AI</strong> and <strong>Claude</strong> through specialized <em>workflows</em>, domain <em>skills</em>, and agentic pipelines to accelerate mission-critical delivery with peak velocity and architectural rigor.`,
      metricExp: "Years of Experience",
      metricCoreVal: "Java & Spring",
      metricCoreLbl: "Core Specialization",
      metricArchVal: "Hexagonal / Microservices",
      metricArchLbl: "Clean Architecture & DDD",
      metricAiVal: "Devin & Claude",
      metricAiLbl: "Workflows & Skills"
    },
    timeline: {
      tag: "Career Trajectory",
      title: "Work Experience",
      filters: {
        all: "All",
        globant: "Globant (Santander)",
        inditex: "Inditex",
        banca: "Banking (ING / BNP)",
        medios: "Media & Insurance"
      },
      globant: {
        role: "Software Application Analyst at Santander — Core Backend Architecture & AI Vanguard",
        company: "Globant · Full-time · Remote",
        date: "Jan. 2025 — Present",
        b1: "<strong>Core Backend Architecture:</strong> Architecture and engineering of standardized, robust, and highly scalable foundational solutions for international deployment, localization, and extension across Banco Santander's global entities.",
        b2: "<strong>Vanguard in AI-Driven Development:</strong> Pioneering the adoption and integration of next-generation autonomous AI agents (<strong>Devin AI, Claude</strong>), architecting customized <em>workflows</em>, modular domain <em>skills</em>, and multi-agent pipelines to accelerate feature delivery, modernizations, and mission-critical code generation with peak velocity.",
        b3: "<strong>Enterprise Governance & Resilience Patterns:</strong> Defining development guidelines, <strong>ApiFirst</strong> contract governance and specifications, cloud microservices resilience patterns, and aligning global engineering squads under software craftsmanship best practices."
      },
      inditex: {
        role: "Senior Backend Engineer at Inditex",
        company: "Plexus Tech · Full-time · Remote",
        date: "Jan. 2023 — Jan. 2025 (2 yrs)",
        b1: "End-to-end backend microservice analysis and development from technical discovery to production release across Inditex corporate platforms.",
        b2: "<strong>Hexagonal Architecture & ApiFirst:</strong> Modernizing and developing backend microservices in Java 17 under DDD principles, OpenAPI contracts, and high availability.",
        b3: "High-availability on-call incident resolution and continuous operational support during massive global retail flash-sales (Black Friday, seasonal sales).",
        b4: "Continuous Integration & Deployment (CI/CD) pipelines using SonarQube, GitHub Actions, OpenShift, and Microsoft Azure."
      },
      banca: {
        role: "Senior Software Analyst at BNP Paribas & ING Bank",
        company: "Sopra Steria · Madrid / Remote",
        date: "Jan. 2020 — Jan. 2023 (3 yrs)",
        pBnpTitle: "BNP Paribas / Cetelem (Sept. 2021 — Jan. 2023 · 1 yr 5 mos):",
        bBnp1: "Architecture, design, and implementation of high-throughput financial middleware and core credit management services.",
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
        b3: "<strong>Universidad de Málaga (Feb. 2014 — Dec. 2014):</strong> Greenfield development of native Android mobile application and Java web management platform for faculty and students.",
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
      catAi: "🤖 AI-Driven Engineering & Autonomous Agents",
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
      masterDesc: "Specialization in <strong>'Applied Computer Science for Mobile and Web Technologies'</strong>. Advanced coursework in distributed web architectures, enterprise design patterns, cloud computing, and native mobile development.",
      degreeTitle: "Software Engineer",
      degreeInst: "Universidad de Málaga (UMA) · 2004 — 2011",
      degreeDesc: "Comprehensive university degree in software engineering, system architecture, advanced algorithms, concurrent programming, distributed systems, operating systems, and computer networks.",
      certsHeading: "Certifications & Continuous Learning",
      scrumBadge: "Agile Frameworks",
      scrumTitle: "Official Scrum Master Certification",
      scrumInst: "European Scrum · 2017",
      scrumDesc: "Official professional credential in agile frameworks (Scrum, Kanban), ceremony facilitation, impedance removal, and continuous delivery optimization across engineering squads.",
      scrumBtn: "View Credential on LinkedIn ↗",
      langBadge: "Language Proficiency",
      langTitle: "Official English Certification (B2)",
      langInst: "University of Cambridge · ESOL Examinations",
      langDesc: "Official international credential verifying professional working proficiency in English: advanced technical documentation, API specifications, and fluent cross-border team collaboration.",
      langBtn: "View Credential on LinkedIn ↗",
      coursesBadge: "Lifelong Learning",
      coursesTitle: "+80 Verified Technical Courses",
      coursesInst: "Udemy · Coursera · edX · OpenWebinars",
      coursesDesc: "Continuous learning track with over 80 verified technical courses: cloud architectures (AWS, Azure), resilient microservices, reactive streaming with Kafka, modern Java (17/21), and AI-driven development.",
      coursesBtn: "View All on LinkedIn ↗"
    },
    projects: {
      tag: "Innovation & Personal Creation",
      title: "Transmedia & Software Projects",
      tgmTitle: "Taos Game Maker Engine",
      tgmSub: "Modular Framework for Godot 4 · Creator & Lead Developer",
      tgmDesc: "Advanced architectural framework and professional tooling suite for Godot Engine. Designed to accelerate hybrid 2D/3D Tactical RPG game development with decoupled ATB combat, dialogues, inventory, events, and a web studio suite with 45+ visual no-code tools.",
      tgmDocBtn: "View Documentation & Web ↗",
      lazarusTitle: "The Lazarus Saga (La Saga Lázaro)",
      lazarusSub: "Dark Fantasy Literary Universe · Author & IP Creator",
      lazarusDesc: "Dark fantasy literary universe and cosmology novels published in Spain through Editorial Adarve ('La Leyenda de las Esferas') and globally on Amazon (Spanish & English), establishing the narrative worldbuilding and philosophical lore inspiring the Taos game ecosystem.",
      lazarusWebBtn: "Official Universe Website ↗",
      lazarusAmzEsBtn: "Amazon (Spanish Ed.) ↗",
      lazarusAmzEnBtn: "Amazon (English Ed.) ↗",
      lazarusInterviewBtn: "Editorial Adarve Interview ↗"
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
  setText('pill-location', t.hero.pillLocation);
  setText('pill-edu', t.hero.pillEdu);
  setText('pill-exp', t.hero.pillExp);
  setText('pill-lang', t.hero.pillLang);
  setText('btn-hero-email', t.hero.btnEmail);
  setText('btn-hero-linkedin', t.hero.btnLinkedIn);
  setHtml('btn-hero-print', `<span>📥</span> ${t.hero.btnPrint}`);

  // 3. Summary
  setText('summary-tag', t.summary.tag);
  setText('summary-title', t.summary.title);
  setHtml('summary-p1', t.summary.p1);
  setHtml('summary-p2', t.summary.p2);
  setHtml('summary-p3', t.summary.p3);
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
  setText('tgm-title', t.projects.tgmTitle);
  setText('tgm-sub', t.projects.tgmSub);
  setText('tgm-desc', t.projects.tgmDesc);
  setHtml('tgm-doc-btn', `<span>🌐</span> ${t.projects.tgmDocBtn}`);
  setText('lazarus-title', t.projects.lazarusTitle);
  setText('lazarus-sub', t.projects.lazarusSub);
  setText('lazarus-desc', t.projects.lazarusDesc);
  setHtml('lazarus-web-btn', `<span>📖</span> ${t.projects.lazarusWebBtn}`);
  setHtml('lazarus-amz-es-btn', `<span>📦</span> ${t.projects.lazarusAmzEsBtn}`);
  setHtml('lazarus-amz-en-btn', `<span>📦</span> ${t.projects.lazarusAmzEnBtn}`);
  setHtml('lazarus-interview-btn', `<span>🎙️</span> ${t.projects.lazarusInterviewBtn}`);
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
