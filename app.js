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
      pillCompany: "🏢 Globant · Santander (Actualidad)",
      pillAi: "🤖 AI Vanguard · Devin & Claude Agents",
      pillLocation: "📍 Madrid / Málaga / Remoto (España)",
      pillEdu: "🎓 Ing. de Software & Máster INFTEL (UMA)",
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
      p1: `<strong>Ingeniero de Software y Máster de Postgrado INFTEL</strong> por la Universidad de Málaga con más de <strong>${expYears} años de trayectoria continuada</strong> (en activo desde 2008), forjada sobre una base sólida en desarrollo fullstack (tecnologías mobile nativas, web frontend y backend) y una profunda experiencia práctica modernizando y refactorizando sistemas legados hacia arquitecturas empresariales de vanguardia.`,
      p2: `Especializado en el <strong>ecosistema Java (desde Java 6 y 7 legacy hasta Java 8, 17 y 21)</strong>, frameworks <strong>Spring / Spring Boot</strong>, microservicios resilientes bajo <strong>Arquitectura Hexagonal</strong>, especificación y contratos <strong>ApiFirst</strong>, mensajería reactiva con <strong>Apache Kafka</strong> y entornos de nube híbrida (<strong>Azure, OpenShift, AWS</strong>).`,
      p3: `Posicionado a la <strong>vanguardia de la ingeniería de software aumentada por Inteligencia Artificial</strong>, integrando agentes autónomos como <strong>Devin AI</strong> y <strong>Claude</strong> mediante <em>workflows</em>, <em>skills</em> especializadas y pipelines agénticos para acelerar el desarrollo con máxima velocidad y excelencia técnica. Amplio recorrido liderando desarrollos de misión crítica en grandes multinacionales: <strong>Banca & Fintech</strong> (Santander con Globant, ING con Sopra Steria, BNP Paribas / Cetelem con Sopra Steria), <strong>Retail global & E-Commerce</strong> (Inditex con Plexus), <strong>Asegurador</strong> (A.M.A. Seguros), <strong>Medios de Comunicación</strong> (RTVE con Everis, Atresmedia con atSistemas) y <strong>Sector Público</strong> (Ayuntamiento de Málaga, UMA). Certificado como <strong>Scrum Master</strong>.`,
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
        globant: "Globant (Santander)",
        inditex: "Inditex",
        banca: "Banca (ING / BNP)",
        medios: "Medios & Seguros"
      },
      globant: {
        role: "Software Application Analyst — Core Backend Architecture & AI Vanguard",
        company: "Globant · Banco Santander · Jornada completa · Remoto",
        date: "Ene. 2025 — Actualidad",
        b1: "<strong>Arquitectura Core Backend:</strong> Diseño e ingeniería de soluciones base estandarizadas, robustas y altamente escalables para su posterior despliegue, adaptación y extensión en los distintos países del grupo corporativo Santander.",
        b2: "<strong>Vanguardia en Ingeniería Aumentada por IA (AI-Driven Development):</strong> Adopción pionera y liderazgo en la integración de flujos de desarrollo con agentes autónomos de IA (<strong>Devin AI, Claude</strong>), diseñando <em>workflows</em> personalizados, <em>skills</em> modulares y pipelines agénticos para acelerar el desarrollo, refactorización y entrega de software con máxima eficiencia.",
        b3: "<strong>Gobernanza enterprise y patrones de resiliencia:</strong> Definición de directrices de desarrollo, especificación y gobierno de contratos bajo enfoque <strong>ApiFirst</strong>, patrones de resiliencia en microservicios cloud y alineamiento con equipos internacionales para la gobernanza del código y buenas prácticas de ingeniería de software."
      },
      inditex: {
        role: "Desarrollador Senior Backend en Inditex",
        company: "Plexus Tech (para Inditex) · Jornada completa · Remoto",
        date: "Ene. 2023 — Jul. 2025 (2 años 7 meses)",
        b1: "Análisis y desarrollo integral de microservicios backend desde la toma de requisitos hasta su subida a producción en plataformas corporativas de Inditex.",
        b2: "<strong>Migraciones estratégicas:</strong> Transformación y modernización de servicios legados en NodeJS a Java 17 bajo <strong>Arquitectura Hexagonal</strong> y contratos <strong>ApiFirst</strong>.",
        b3: "Gestión de guardias críticas de alta disponibilidad y soporte continuo para picos de tráfico en eventos masivos de retail (Rebajas, Black Friday).",
        b4: "Implementación de pipelines de integración y entrega continua (CI/CD) con SonarQube, GitHub Actions, OpenShift y Azure."
      },
      banca: {
        role: "Analista de Desarrollo Senior — Banca & Finanzas",
        company: "Sopra Steria · Proyectos ING Bank y BNP Paribas / Cetelem (con Sopra Steria) · Madrid / Remoto",
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
        company: "atSistemas (para Atresmedia) · Madrid",
        date: "Jul. 2018 — Nov. 2018 (5 meses)",
        b1: "Análisis y desarrollo de microservicios con Spring Boot y Java 8 para plataformas digitales de Atresmedia.",
        b2: "Implementación de arquitecturas cloud nativas en Amazon Web Services (AWS) integradas con Docker y Kubernetes."
      },
      rtve: {
        role: "Analista Desarrollador Senior — RTVE",
        company: "Corporación RTVE (con 80 Soluciones / Everis Spain) · Pozuelo de Alarcón, Madrid",
        date: "Ene. 2016 — Jul. 2018 (2 años 7 meses)",
        b1: "<strong>Scrum Master & Analista Técnico:</strong> Liderazgo técnico y gestión ágil de proyectos clave para RTVE, incluyendo <em>RTVE Play / RTVE a la Carta</em>, Archivo Histórico de RTVE y rediseño de portales web corporativos.",
        b2: "Migración integral del sistema de persistencia y consultas hacia motor de búsqueda distribuido <strong>ElasticSearch</strong>, acelerando radicalmente la recuperación de contenidos multimedia.",
        b3: "Desarrollo backend en Java (J2EE), Spring Framework, Hibernate, JMS, Maven y servicios REST/SOAP.",
        b4: "Implementación de pasarelas con CMS Adobe Day CQ5 (AEM), caching con Squid/Varnish y bases de datos Oracle."
      },
      malaga: {
        role: "Ingeniero de Software",
        company: "Ayuntamiento de Málaga (CENEC) · Málaga",
        date: "Ene. 2015 — Ene. 2016 (1 año 1 mes)",
        b1: "Desarrollo y mantenimiento de aplicaciones web internas y de atención al ciudadano en Java con Spring Framework e Hibernate.",
        b2: "Creación de componentes ricos de interfaz con Vaadin 7 y maquetación responsive en HTML5/CSS3.",
        b3: "Modelado de bases de datos relacionales en MySQL y control de versiones con Git/SVN.",
        b4: "Impartición de formación técnica especializada en desarrollo Java y Spring a personal municipal."
      },
      early: {
        role: "Desarrollador de Software & Analista Técnico Junior",
        company: "Diversas Entidades · UMA, Pymes y Proyectos Propios · Málaga",
        date: "2008 — 2014 (~6 años)",
        b1: "Desarrollo de proyectos de software en C/C++, Java, Android nativo y plataformas web LAMP.",
        b2: "Participación en proyectos académicos y de investigación en la Universidad de Málaga vinculados al Máster INFTEL.",
        b3: "Consultoría y desarrollo freelance de soluciones informáticas a medida para empresas andaluzas.",
        b4: "Bases de datos relacionales, administración de servidores Linux y arquitecturas de red."
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
      langDesc: "<strong>Español:</strong> Nativo.<br><strong>Inglés:</strong> Nivel Intermedio Profesional (B1/B2).<br><span style='color: var(--text-muted); font-size: 0.85rem;'>Avanzado en lectura técnica, documentación y especificación de requisitos / Fluido en comunicación profesional y técnica.</span>"
    },
    education: {
      tag: "Formación Académica",
      title: "Estudios y Certificaciones",
      masterTitle: "Máster de Postgrado INFTEL",
      masterInst: "Universidad de Málaga (UMA) · 2011 — 2012",
      masterDesc: "Especialidad en <strong>'Informática aplicada a las tecnologías móviles y web'</strong>. Formación avanzada en desarrollo móvil nativo, arquitecturas web distribuidas, patrones de diseño empresarial y computación en la nube.",
      degreeTitle: "Ingeniería de Software / Informática de Sistemas",
      degreeInst: "Universidad de Málaga (UMA) · 2004 — 2011",
      degreeDesc: "Formación universitaria integral en ingeniería del software, diseño y arquitectura de sistemas, algoritmia avanzada, estructuras de datos, concurrencia, sistemas operativos y redes telemáticas.<br><em style='color: var(--text-muted); font-size: 0.85rem; display: block; margin-top: 0.4rem;'>Actividades: Presidente y Tesorero del Consejo de Estudiantes de Ingeniería Informática; Judo, Karate y Kobudo en UMA.</em>",
      certTitle: "Certificación Oficial Scrum Master & Formación Continua",
      certInst: "European Scrum (2017) & Entidades Oficiales",
      certP1: "Acreditación profesional oficial en marcos de trabajo ágiles (Scrum, Kanban), facilitación de ceremonias, resolución de impedimentos y optimización de flujos de entrega continua en equipos de ingeniería.",
      certP2: "<strong>Certificación de Idioma:</strong> Nivel B1/B2 de Inglés acreditado por la Universidad de Cambridge. Formación continua certificada en plataformas técnicas (Udemy, Coursera, edX, OpenWebinars).",
      certBtn: "Ver Credenciales en LinkedIn ↗"
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
      role: "Senior Backend Architect & Java Specialist · Lead Software Engineer",
      status: "Active · Globant",
      pillCompany: "🏢 Globant · Santander (Present)",
      pillAi: "🤖 AI Vanguard · Devin & Claude Agents",
      pillLocation: "📍 Madrid / Málaga / Remote (Spain)",
      pillEdu: "🎓 Software Engineer & Master INFTEL (UMA)",
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
      p1: `<strong>Software Engineer and Master of Science INFTEL</strong> graduate from Universidad de Málaga with over <strong>${expYears} years of continuous professional trajectory</strong> (active since 2008), grounded in versatile fullstack foundations (native mobile, web frontend, and backend engineering) with extensive experience modernizing and refactoring legacy systems into modern high-scale architectures.`,
      p2: `Specialized across the <strong>Java ecosystem (from Java 6 & 7 legacy to modern Java 8, 17, and 21)</strong>, <strong>Spring / Spring Boot</strong> frameworks, resilient microservices under <strong>Hexagonal Architecture (Ports & Adapters)</strong>, contract-driven <strong>ApiFirst</strong> specifications, reactive streaming with <strong>Apache Kafka</strong>, and hybrid cloud environments (<strong>Azure, OpenShift, AWS</strong>).`,
      p3: `Positioned at the <strong>vanguard of AI-augmented software engineering</strong>, integrating next-generation autonomous agents like <strong>Devin AI</strong> and <strong>Claude</strong> through specialized <em>workflows</em>, domain <em>skills</em>, and agentic pipelines to accelerate mission-critical delivery with peak architectural velocity and rigor. Extensive background leading tier-1 distributed projects: <strong>Banking & Fintech</strong> (Santander with Globant, ING with Sopra Steria, BNP Paribas / Cetelem with Sopra Steria), <strong>Global Retail & E-Commerce</strong> (Inditex with Plexus), <strong>Insurance</strong> (A.M.A. Seguros), <strong>Broadcast Media</strong> (RTVE with Everis, Atresmedia with atSistemas), and <strong>Public Sector</strong> (Málaga City Council, UMA). Certified <strong>Scrum Master</strong>.`,
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
        globant: "Globant (Santander)",
        inditex: "Inditex",
        banca: "Banking (ING / BNP)",
        medios: "Media & Insurance"
      },
      globant: {
        role: "Software Application Analyst — Core Backend Architecture & AI Vanguard",
        company: "Globant · Banco Santander · Full-time · Remote",
        date: "Jan. 2025 — Present",
        b1: "<strong>Core Backend Architecture:</strong> Architecture and engineering of standardized, robust, and highly scalable foundational solutions for international deployment, localization, and extension across Banco Santander's global entities.",
        b2: "<strong>Vanguard in AI-Augmented Engineering (AI-Driven Development):</strong> Pioneering the adoption and integration of next-generation autonomous AI agents (<strong>Devin AI, Claude</strong>), architecting customized <em>workflows</em>, modular domain <em>skills</em>, and multi-agent pipelines to accelerate feature delivery, modernizations, and mission-critical code generation with peak velocity.",
        b3: "<strong>Enterprise Governance & Resilience Patterns:</strong> Defining development guidelines, <strong>ApiFirst</strong> contract governance and specifications, cloud microservices resilience patterns, and aligning global engineering squads under software craftsmanship best practices."
      },
      inditex: {
        role: "Senior Backend Engineer at Inditex",
        company: "Plexus Tech (for Inditex) · Full-time · Remote",
        date: "Jan. 2023 — Jul. 2025 (2 yrs 7 mos)",
        b1: "End-to-end backend microservice analysis and development from technical discovery to production release across Inditex corporate platforms.",
        b2: "<strong>Strategic Migrations:</strong> Re-architecting and modernizing legacy NodeJS backend services into Java 17 under <strong>Hexagonal Architecture</strong> and <strong>ApiFirst</strong> contracts.",
        b3: "High-availability on-call incident resolution and continuous operational support during massive global retail flash-sales (Black Friday, seasonal sales).",
        b4: "Continuous Integration & Deployment (CI/CD) pipelines using SonarQube, GitHub Actions, OpenShift, and Microsoft Azure."
      },
      banca: {
        role: "Senior Software Analyst — Banking & Financial Services",
        company: "Sopra Steria · Projects for ING Bank & BNP Paribas / Cetelem (with Sopra Steria) · Madrid / Remote",
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
        company: "atSistemas (for Atresmedia) · Madrid",
        date: "Jul. 2018 — Nov. 2018 (5 mos)",
        b1: "Analysis and development of microservices with Spring Boot and Java 8 for Atresmedia digital broadcasting platforms.",
        b2: "Cloud-native architectures on Amazon Web Services (AWS) integrated with Docker and Kubernetes."
      },
      rtve: {
        role: "Senior Software Analyst & Scrum Master — RTVE",
        company: "Corporación RTVE (with 80 Soluciones / Everis Spain) · Pozuelo de Alarcón, Madrid",
        date: "Jan. 2016 — Jul. 2018 (2 yrs 7 mos)",
        b1: "<strong>Scrum Master & Technical Analyst:</strong> Technical leadership and agile management of critical projects for RTVE, including <em>RTVE Play / RTVE a la Carta</em>, RTVE Historical Archive, and corporate digital portal redesigns.",
        b2: "Complete migration of the persistence and query layer to distributed <strong>ElasticSearch</strong>, dramatically accelerating multimedia content retrieval.",
        b3: "Backend development in Java (J2EE), Spring Framework, Hibernate, JMS, Maven, and REST/SOAP services.",
        b4: "Integration gateways with CMS Adobe Day CQ5 (AEM), caching with Squid/Varnish, and Oracle relational databases."
      },
      malaga: {
        role: "Software Engineer",
        company: "Málaga City Council (CENEC) · Málaga",
        date: "Jan. 2015 — Jan. 2016 (1 yr 1 mo)",
        b1: "Design and maintenance of internal and citizen-facing enterprise web applications in Java with Spring Framework and Hibernate.",
        b2: "Rich interactive UI component development with Vaadin 7 and responsive layout in HTML5/CSS3.",
        b3: "Relational data modeling in MySQL and version control management with Git/SVN.",
        b4: "Delivery of advanced technical training in Java and Spring ecosystem to municipal engineering staff."
      },
      early: {
        role: "Software Developer & Junior Technical Analyst",
        company: "Various Entities · UMA, SMBs & Proprietary Initiatives · Málaga",
        date: "2008 — 2014 (~6 yrs)",
        b1: "Software engineering projects across C/C++, Java, native Android, and LAMP web platforms.",
        b2: "Participation in academic and applied research initiatives at Universidad de Málaga linked to the INFTEL Master of Science program.",
        b3: "Freelance technical consulting and bespoke software engineering for regional enterprises.",
        b4: "Relational database modeling, Linux server administration, and network architecture configuration."
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
      langDesc: "<strong>Spanish:</strong> Native.<br><strong>English:</strong> Professional Working Proficiency (B1/B2).<br><span style='color: var(--text-muted); font-size: 0.85rem;'>Advanced technical reading, documentation & API specifications / Fluent professional communication.</span>"
    },
    education: {
      tag: "Academic Background",
      title: "Education & Certifications",
      masterTitle: "Master of Science INFTEL",
      masterInst: "Universidad de Málaga (UMA) · 2011 — 2012",
      masterDesc: "Specialization in <strong>'Applied Computer Science for Mobile and Web Technologies'</strong>. Advanced coursework in distributed web architectures, enterprise design patterns, cloud computing, and native mobile development.",
      degreeTitle: "Software Engineer",
      degreeInst: "Universidad de Málaga (UMA) · 2004 — 2011",
      degreeDesc: "Comprehensive university degree in software engineering, system architecture, advanced algorithms, concurrent programming, distributed systems, operating systems, and computer networks.<br><em style='color: var(--text-muted); font-size: 0.85rem; display: block; margin-top: 0.4rem;'>Activities: President & Treasurer of the Student Council of Computer Engineering; Judo, Karate, and Kobudo at UMA.</em>",
      certTitle: "Official Scrum Master Certification & Continuous Learning",
      certInst: "European Scrum (2017) & Official Institutions",
      certP1: "Official professional certification in agile frameworks (Scrum, Kanban), ceremony facilitation, impedance removal, and continuous delivery optimization in engineering squads.",
      certP2: "<strong>Language Certification:</strong> English B1/B2 verified by Cambridge University. Verified technical certificates across continuous learning platforms (Udemy, Coursera, edX, OpenWebinars).",
      certBtn: "View Verified List on LinkedIn ↗"
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
