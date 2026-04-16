export const portfolioConfig = {
	fullName: "Your Full Name",
	professionalSummary:
		"Full Stack Developer with 1+ years of experience. Systems Engineering student and Information Systems Analysis and Development Technologist from Bogota, Colombia.",
	experienceSectionTitle: "Professional Experience",
	experiences: [
		{
			role: "Full Stack Developer",
			company: "Your Company",
			workMode: "Full Time",
			location: "City, Country",
			dateRange: "2024 - Present",
			achievements: [
				"Describe a high-impact project and measurable outcome.",
				"Describe architecture, performance, or product improvements.",
				"Describe cross-team collaboration and delivery practices."
			]
		},
		{
			role: "Systems Analyst",
			company: "Previous Company",
			workMode: "Full Time",
			location: "City, Country",
			dateRange: "2022 - 2023",
			achievements: [
				"Describe requirements analysis and solution alignment.",
				"Describe documentation, onboarding, or support process impact.",
				"Describe monitoring, reliability, or security initiatives."
			]
		}
	],
	projectsSectionTitle: "Featured Projects",
	projects: [
		{
			name: "Project Name One",
			description: "Describe what this project solves and why it matters.",
			stack: ["Astro", "TypeScript", "Tailwind"],
			highlight: "Performance + UX",
			imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
			projectUrl: "https://example.com/project-one",
			sourceUrl: "https://github.com/your-github-username/project-one"
		},
		{
			name: "Project Name Two",
			description: "Describe your technical approach and main outcomes.",
			stack: ["React", "Node.js", "PostgreSQL"],
			highlight: "Product + Engineering",
			imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
			projectUrl: "https://example.com/project-two",
			sourceUrl: "https://github.com/your-github-username/project-two"
		},
		{
			name: "Project Name Three",
			description: "Describe impact, users, and relevant implementation details.",
			stack: ["Power BI", "DAX", "Data Modeling"],
			highlight: "Data + Insights",
			imageUrl: "https://images.unsplash.com/photo-1551281044-8b8e7f0f29aa?auto=format&fit=crop&w=1200&q=80",
			projectUrl: "https://example.com/project-three",
			sourceUrl: "https://github.com/your-github-username/project-three"
		}
	],
	contactEmail: "your.name@domain.com",
	socialLinks: [
		{
			id: "linkedin",
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/your-professional-profile",
			icon: "https://svgl.app/library/linkedin.svg"
		},
		{
			id: "github",
			label: "GitHub",
			href: "https://github.com/your-github-username",
			icon: "https://svgl.app/library/github_light.svg"
		},
		{
			id: "cv",
			label: "Ver CV",
			href: "https://drive.google.com/file/d/your-public-cv-id/view",
			icon: "https://svgl.app/library/drive.svg"
		}
	]
} as const;
