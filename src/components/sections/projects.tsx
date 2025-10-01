export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Expatnova 2.0",
      description:
        "Led migration of expatriate administration system from CodeIgniter to Laravel. Designed backend architecture and spearheaded frontend architecture in Next.js with TypeScript, establishing state management strategies and coding standards.",
      image: "src/assets/xpatnova.png",
      technologies: ["Laravel", "Next.js", "TypeScript", "PostgreSQL", "React"],
      featured: true,
      company: "Itools Sdn Bhd",
      status: "Confidential",
    },
    {
      id: 2,
      title: "Tickethub",
      description:
        "Event ticketing platform with robust state management using Zustand, scalable backend with Next.js API routes and Express.js, Redis caching, Prisma ORM optimization, and comprehensive request validation.",
      image: "src/assets/tickethub.png",
      technologies: [
        "Next.js",
        "Express.js",
        "TypeScript",
        "Zustand",
        "Redis",
        "Prisma",
        "Zod",
      ],
      featured: true,
      company: "Sudo127 Sdn Bhd",
      status: "Confidential",
    },
    {
      id: 3,
      title: "Todak Arena",
      description:
        "Tournament organizer software with high-performance database schemas, comprehensive RESTful API ecosystem, secure admin dashboards with RBAC, and advanced analytics. Led database migration and system integration.",
      image: "src/assets/todak-arena.png",
      technologies: [
        "NestJS",
        "PostgreSQL",
        "TypeScript",
        "Redis",
        "JWT",
        "Docker",
      ],
      featured: true,
      company: "Todak Digitech",
      status: "Confidential",
    },
    {
      id: 4,
      title: "Majilis Sama Hadis",
      description:
        "End-to-end registration, payment, and attendance system with secure payment integration, real-time attendance tracking, and optimized database performance for large-scale event management.",
      image: "src/assets/majilis-sama-hadis.png",
      technologies: [
        "NestJS",
        "PostgreSQL",
        "TypeScript",
        "Redis",
        "Payment Gateway",
      ],
      featured: false,
      company: "Todak Digitech",
      status: "Confidential",
    },
    {
      id: 5,
      title: "MyBarber",
      description:
        "Uber-like platform for booking barbers with scheduling APIs, payment integration, user management, and optimized database queries. Contributed to backend development and API documentation.",
      image: "src/assets/my-barber.png",
      technologies: ["NestJS", "PostgreSQL", "TypeScript", "Redis"],
      featured: false,
      company: "Todak Digitech",
      status: "Confidential",
    },
    {
      id: 6,
      title: "Adnexio Jobs & Edu",
      description:
        "Job application and e-learning platform with Applicant Tracking System integration, optimized schema design, and analytics endpoints for data-driven insights.",
      image: "src/assets/logo_adnexio.webp",
      technologies: ["NestJS", "PostgreSQL", "TypeScript", "Express.js"],
      featured: false,
      company: "Invoke Solutions",
      status: "Confidential",
    },
    {
      id: 7,
      title: "Adnexio HR",
      description:
        "Human Resource Management System with Upskilling Module and ATS Module. Developed API endpoints aligned with business objectives and integrated with analytics platform.",
      image: "src/assets/logo_adnexio.webp",
      technologies: ["NestJS", "PostgreSQL", "TypeScript", "Redis"],
      featured: false,
      company: "Invoke Solutions",
      status: "Confidential",
    },
    {
      id: 8,
      title: "Parliament Ticketing",
      description:
        "System for managing and centralizing aids and complaints from parliament residents. Served as sole backend developer, ensuring reliability, security, and seamless frontend integration.",
      image: "src/assets/logo_adnexio.webp",
      technologies: ["NestJS", "MySQL", "TypeScript", "Express.js"],
      featured: false,
      company: "Invoke Solutions",
      status: "Confidential",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world projects showcasing expertise in backend architecture,
            API development, and scalable system design across multiple
            industries.
          </p>
          <p className="text-sm text-muted-foreground mt-2 italic">
            Note: These are confidential company projects. Source code and live
            demos are not publicly available.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-b border-border overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                      {project.company}
                    </span>
                    <span className="text-xs px-2 py-1 rounded border border-amber-500/50 text-amber-600 dark:text-amber-400 bg-amber-500/10">
                      🔒 {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="w-full block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center font-medium hover:bg-primary/90 transition-colors"
                >
                  Ask Me About This Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {project.company}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-xs">🔒</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <a
                  href="#contact"
                  className="w-full block px-3 py-1.5 bg-primary text-primary-foreground rounded text-center text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Request Details
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Want to see more? Let's talk!
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
