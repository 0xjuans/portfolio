import movingPetsProjectImage from "../assets/img/projects/movingpets.png";
import ignuxLabProjectImage from "../assets/img/projects/ignuxlab.png";
import creaWebLabProjectImage from "../assets/img/projects/creaweblab.png";
import fucofufiProjectImage from "../assets/img/projects/fucofufi.png";
import cvFileUrl from "../assets/cv/cv_JuanSebastianQuinto.pdf?url";
import cvIconUrl from "../assets/cv-icon.svg?url";

export const portfolioConfig = {
	fullName: "Juan Sebastian Quinto",
	professionalSummary:
		"Desarrollador Full Stack con +2 años de experiencia. Estudiante de Ingeniería de Sistemas y Tecnólogo en Análisis y Desarrollo de Sistemas de Información de Bogotá, Colombia.",
	experienceSectionTitle: "Experiencia Profesional",
	experiences: [
		{
			role: "Desarrollador Jr",
			company: "TECSER & CLOUD",
			workMode: "Tiempo Completo",
			location: "Bogota, Colombia",
			dateRange: "Febrero 2026 - Actual",
			achievements: [
				"Desarrollé una librería de componentes reutilizables en Angular y Tailwind, estandarizando la interfaz de usuario y acelerando el tiempo de desarrollo de nuevas funcionalidades en un 30%.",
				"Optimicé el rendimiento del backend mediante la implementación de caché y el ajuste de consultas en Spring Data JPA, logrando una reducción del 45% en los tiempos de respuesta de las APIs críticas.",
				"Implementé un sistema de autenticación y autorización robusto con Spring Security y JWT, garantizando el acceso seguro y segmentado para usuarios internos y externos según su rol.",
				"Refactoricé la lógica de negocio en la capa de servicios de Java, aplicando principios SOLID para mejorar la mantenibilidad del código y facilitar la escalabilidad del sistema a largo plazo."
			]
		},
		{
			role: "Desarrollador Full Stack",
			company: "Aprendizaje Interactivo",
			workMode: "Tiempo Completo",
			location: "Bogotá, Colombia",
			dateRange: "Marzo 2024 - Presente",
			achievements: [
				"Colaboré en el desarrollo de una plataforma tipo bootcamp para el Ministerio TIC de Colombia.",
				"Implementé prácticas de arquitectura de información y optimización de experiencia de usuario.",
				"Lideré la mejora del rendimiento web de la Plataforma principal.",
				"Construí la página web corporativa con enfoque en UX/UI.",
				"Implementé Ship/Show/Ask como estrategia de trabajo en GitHub.",
				"Desarrollé dashboards interactivos en Power BI para análisis de datos."
			]
		},
		{
			role: "Analista De Sistemas TI",
			company: "Servioptica",
			workMode: "Tiempo Completo",
			location: "Funza, Colombia",
			dateRange: "Oct 2022 - Abr 2023",
			achievements: [
				"Realicé análisis de requerimientos y alineación de soluciones.",
				"Elaboré documentación técnica detallada.",
				"Capacité usuarios finales y facilité adopción de herramientas.",
				"Investigué nuevas tecnologías y tendencias.",
				"Desarrollé y mantuve sistemas críticos.",
				"Implementé prácticas de monitoreo y seguridad."
			]
		}
	],
	educationSectionTitle: "Formación Académica",
	education: [
		{
			degree: "Ingeniería De Sistemas",
			institution: "UNIVERSIDAD LIBRE",
			dateRange: "Enero 2023-Actual"
		},
		{
			degree: "Tecnólogo en Análisis y Desarrollo",
			institution: "SENA",
			dateRange: "Enero 2021-Abril 2023"
		}
	],
	complementaryEducationTitle: "Complementary Education",
	complementaryEducationProvider: "Cursos de Platzi y Udemy en múltiples áreas",
	complementaryEducationCourses: [
		"Desarrollo web completo con HTML, CSS, JavaScript y frameworks",
		"Fundamentos de análisis de datos con Power BI y SQL",
		"Visualización de datos avanzada y creación de dashboards en Power BI",
		"Modelado de datos en Power BI para la toma de decisiones",
		"Introducción a la computación en la nube con AWS y Azure",
		"Automatización de procesos con Python",
		"Arquitectura de software y patrones de diseño",
		"Fundamentos de seguridad en aplicaciones web",
		"Principios de UX/UI para desarrolladores",
		"Optimización y rendimiento de aplicaciones web",
		"Control de versiones avanzado con Git y GitHub"
	],
	certificatesSectionTitle: "Certificados",
	certificatesFilterLabel: "Filtrar por:",
	certificates: [
		{
			category: "Programación",
			date: "26-01-2025",
			title: "ChatGPT: Optimización de Resultados",
			issuer: "Oracle + Alura Latam",
			imagePath:
				"Juan Sebastian Quinto - Curso ChatGPT_ optimizando la calidad de los resultados - Alura-1.webp"
		},
		{
			category: "Programación",
			date: "26-01-2025",
			title: "Git y GitHub: Control de Versiones",
			issuer: "Oracle + Alura Latam",
			imagePath: "Juan Sebastian Quinto - Curso Git y GitHub_ repositorio, commit y versiones - Alura-1.webp"
		},
		{
			category: "Programación",
			date: "26-01-2025",
			title: "Lógica: Funciones y Listas",
			issuer: "Oracle + Alura Latam",
			imagePath: "Juan Sebastian Quinto - Curso Lógica de programación_ explorar funciones y listas - Alura-1.webp"
		},
		{
			category: "Programación",
			date: "26-01-2025",
			title: "JavaScript: Programación Básica",
			issuer: "Oracle + Alura Latam",
			imagePath:
				"Juan Sebastian Quinto - Curso Lógica de programación_ sumérgete en la programación con JavaScript - Alura-1.webp"
		},
		{
			category: "Programación",
			date: "26-01-2025",
			title: "Challenge: Amigo Secreto",
			issuer: "Oracle + Alura Latam",
			imagePath:
				"Juan Sebastian Quinto - Curso Practicando Lógica de Programación_ Challenge Amigo secreto - Alura-1.webp"
		},
		{
			category: "Programación",
			date: "26-01-2025",
			title: "Formación JavaScript Completa",
			issuer: "Oracle + Alura Latam",
			imagePath: "Juan Sebastian Quinto - Formación Lógica de programación con JavaScript - Alura-1.webp"
		},
		{
			category: "Ciberseguridad",
			date: "29-09-2023",
			title: "Fundamentos de la ciberseguridad",
			issuer: "Google - Coursera",
			imagePath: "Cibersecurity/Fundamentos de la ciberseguridad.webp"
		},
		{
			category: "Ciberseguridad",
			date: "08-18-2024",
			title: "Activos, amenazas y vulnerabilidades",
			issuer: "Google - Coursera",
			imagePath: "Cibersecurity/Activos, amenazas y vulnerabilidades.webp"
		},
		{
			category: "Ciberseguridad",
			date: "11-03-2023",
			title: "Gestión de riesgos de seguridad",
			issuer: "Google - Coursera",
			imagePath: "Cibersecurity/Gestiona los riesgos de seguridad.webp"
		},
		{
			category: "Ciberseguridad",
			date: "06-06-2023",
			title: "Linux y SQL",
			issuer: "Google - Coursera",
			imagePath: "Cibersecurity/Linux y SQL.webp"
		},
		{
			category: "Ciberseguridad",
			date: "06-30-2024",
			title: "Redes y seguridad de redes",
			issuer: "Google - Coursera",
			imagePath: "Cibersecurity/Redes y seguridad de redes.webp"
		}
	],
	technologiesSectionTitle: "Tecnologías",
	technologies: [
		{
			category: "Frontend",
			items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React", "Tailwind"]
		},
		{
			category: "Backend",
			items: ["PHP", "Laravel", "Node.js", "Java", "Python"]
		},
		{
			category: "Databases",
			items: ["MySQL", "MongoDB", "PostgreSQL", "Power BI"]
		},
		{
			category: "Tools and Others",
			items: ["Git", "GitHub", "Docker", "VS Code", "AWS", "Agile/Scrum"]
		}
	],
	projectsSectionTitle: "Proyectos",
	projects: [
		{
			name: "Moving Pets Colombia",
			description:
				"Sitio web corporativo para una empresa de transporte profesional de mascotas, con secciones de servicios, proceso, beneficios, galería y contacto.",
			stack: ["Astro", "JavaScript", "CSS"],
			imageUrl: movingPetsProjectImage.src,
			previewMode: "iframe",
			projectUrl: "https://www.movingpetscol.online/"
		},
		{
			name: "IGNUXLab",
			description:
				"Sitio web corporativo para un laboratorio de innovación tecnológica, con presentación de soluciones, experiencia, noticias y canales de contacto.",
			stack: ["Astro", "JavaScript", "CSS"],
			imageUrl: ignuxLabProjectImage.src,
			previewMode: "iframe",
			projectUrl: "https://ignuxlab.com/"
		},
		{
			name: "CreaWebLab",
			description:
				"Sitio web profesional para una consultora tecnológica enfocada en desarrollo web a medida, automatizaciones, servicios digitales y captación de clientes.",
			stack: ["Astro", "JavaScript", "CSS"],
			imageUrl: creaWebLabProjectImage.src,
			previewMode: "iframe",
			projectUrl: "https://www.creaweblab.net/"
		},
		{
			name: "FUCOFUFI",
			description:
				"Sitio institucional para una fundación sin ánimo de lucro, con presentación de misión, visión, objetivos, enfoque social y canales de contacto.",
			stack: ["Astro", "JavaScript", "CSS"],
			imageUrl: fucofufiProjectImage.src,
			previewMode: "iframe",
			projectUrl: "https://www.fucofufi.org/"
		}
	],
	contactEmail: "juans.quintoh@hotmail.com",
	socialLinks: [
		{
			id: "linkedin",
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/juan-quinto/",
			icon: "https://svgl.app/library/linkedin.svg"
		},
		{
			id: "github",
			label: "GitHub",
			href: "https://github.com/0xjuans",
			icon: "https://svgl.app/library/github_light.svg"
		},
		{
			id: "cv",
			label: "Ver CV",
			href: cvFileUrl,
			icon: cvIconUrl
		}
	],
	english: {
		professionalSummary:
			"Full Stack Developer with 2+ years of experience. Systems Engineering student and Technologist in Analysis and Development of Information Systems based in Bogotá, Colombia.",
		contactLinkLabel: "Contact me",
		portfolioEyebrow: "Professional portfolio",
		heroTitlePrefix: "Hi, I'm",
		experienceEyebrow: "Career path",
		experienceSectionTitle: "Professional Experience",
		experiences: [
			{
				role: "Junior Developer",
				workMode: "Full Time",
				location: "Bogota, Colombia",
				dateRange: "February 2026 - Present",
				achievements: [
					"Developed a reusable component library with Angular and Tailwind, standardizing the user interface and reducing new feature development time by 30%.",
					"Optimized backend performance by implementing caching and tuning Spring Data JPA queries, reducing critical API response times by 45%.",
					"Implemented a robust authentication and authorization system with Spring Security and JWT, ensuring secure role-based access for internal and external users.",
					"Refactored Java service-layer business logic using SOLID principles to improve maintainability and long-term scalability."
				]
			},
			{
				role: "Full Stack Developer",
				workMode: "Full Time",
				location: "Bogotá, Colombia",
				dateRange: "March 2024 - Present",
				achievements: [
					"Contributed to the development of a bootcamp-style platform for Colombia's Ministry of ICT.",
					"Implemented information architecture practices and user experience improvements.",
					"Led performance improvements for the main platform.",
					"Built the corporate website with a UX/UI-focused approach.",
					"Implemented Ship/Show/Ask as a GitHub workflow strategy.",
					"Developed interactive Power BI dashboards for data analysis."
				]
			},
			{
				role: "IT Systems Analyst",
				workMode: "Full Time",
				location: "Funza, Colombia",
				dateRange: "Oct 2022 - Apr 2023",
				achievements: [
					"Performed requirements analysis and solution alignment.",
					"Prepared detailed technical documentation.",
					"Trained end users and supported tool adoption.",
					"Researched new technologies and industry trends.",
					"Developed and maintained critical systems.",
					"Implemented monitoring and security practices."
				]
			}
		],
		educationEyebrow: "Education",
		educationSectionTitle: "Academic Background",
		educationKicker: "Academic path",
		education: [
			{
				degree: "Systems Engineering",
				dateRange: "January 2023 - Present"
			},
			{
				degree: "Technologist in Analysis and Development",
				dateRange: "January 2021 - April 2023"
			}
		],
		complementaryEducationEyebrow: "Continuous specialization",
		complementaryEducationTitle: "Complementary Education",
		complementaryEducationProvider: "Platzi and Udemy courses across multiple areas",
		complementaryEducationCourses: [
			"Complete web development with HTML, CSS, JavaScript and frameworks",
			"Data analysis fundamentals with Power BI and SQL",
			"Advanced data visualization and dashboard creation in Power BI",
			"Data modeling in Power BI for decision-making",
			"Introduction to cloud computing with AWS and Azure",
			"Process automation with Python",
			"Software architecture and design patterns",
			"Web application security fundamentals",
			"UX/UI principles for developers",
			"Application optimization and performance",
			"Advanced version control with Git and GitHub"
		],
		certificatesEyebrow: "Achievements",
		certificatesSectionTitle: "Certificates",
		certificatesIntro: "Curated collection of technical training in software development and cybersecurity.",
		certificatesFilterLabel: "Filter by:",
		certificateFilters: {
			Todos: "All",
			Programación: "Programming",
			Ciberseguridad: "Cybersecurity"
		},
		certificateUnavailableLabel: "Image unavailable",
		certificateActionLabel: "View certificate",
		certificates: [
			{ category: "Programming", title: "ChatGPT: Result Optimization" },
			{ category: "Programming", title: "Git and GitHub: Version Control" },
			{ category: "Programming", title: "Logic: Functions and Lists" },
			{ category: "Programming", title: "JavaScript: Basic Programming" },
			{ category: "Programming", title: "Challenge: Secret Friend" },
			{ category: "Programming", title: "Complete JavaScript Training" },
			{ category: "Cybersecurity", title: "Foundations of Cybersecurity" },
			{ category: "Cybersecurity", title: "Assets, Threats, and Vulnerabilities" },
			{ category: "Cybersecurity", title: "Security Risk Management" },
			{ category: "Cybersecurity", title: "Linux and SQL" },
			{ category: "Cybersecurity", title: "Networks and Network Security" }
		],
		technologiesSectionTitle: "Technologies",
		technologyCategories: {
			Frontend: "Frontend",
			Backend: "Backend",
			Databases: "Databases",
			"Tools and Others": "Tools and Others"
		},
		projectsSectionTitle: "Projects",
		projectsCarouselLabel: "Featured projects",
		projectsControlsLabel: "Project carousel controls",
		previousProjectLabel: "Previous project",
		nextProjectLabel: "Next project",
		projectPreviewAltPrefix: "Project preview:",
		livePreviewTitlePrefix: "Live preview of",
		projectOrdinalLabel: "Project",
		viewProjectLabel: "View project",
		codeLabel: "Code",
		viewProjectDotPrefix: "View",
		projects: [
			{
				description:
					"Corporate website for a professional pet transportation company, featuring services, process, benefits, gallery and contact sections."
			},
			{
				description:
					"Corporate website for a technology innovation lab, presenting solutions, experience, news and contact channels."
			},
			{
				description:
					"Professional website for a technology consultancy focused on custom web development, automation, digital services and client acquisition."
			},
			{
				description:
					"Institutional website for a nonprofit foundation, presenting its mission, vision, objectives, social impact focus and contact channels."
			}
		],
		socialLinks: {
			cv: "View CV"
		},
		backToTopLabel: "Back to top"
	}
} as const;
