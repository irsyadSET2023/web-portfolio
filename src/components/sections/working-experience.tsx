export const WorkingExperience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Itools Sdn Bhd",
      period: "July 2025 - Present",
      location: "Cyberjaya, Selangor",
      description: [
        "Led migration of expatriate administration system (Expatnova 2.0) from CodeIgniter to Laravel as the main backend developer",
        "Designed and implemented scalable backend architecture in Laravel, ensuring maintainability and clean coding practices",
        "Spearheaded frontend architecture in Next.js with TypeScript, defining clear boundaries between server and client components",
        "Architected state management strategy and established coding standards to guide junior developers",
        "Balanced responsibilities between backend development and frontend architectural oversight for end-to-end system cohesion",
      ],
      technologies: [
        "Laravel",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "MySQL",
        "React",
      ],
    },
    {
      title: "Lead Developer",
      company: "Sudo127 Sdn Bhd",
      period: "March 2024 - August 2025",
      location: "Cyberjaya, Selangor",
      description: [
        "Led development of Tickethub platform with robust client-side state management using Zustand with persistence capabilities",
        "Developed scalable backend architecture using Next.js API routes and Express.js, following RESTful principles",
        "Implemented clean architecture patterns with separate layers for controllers, services, and data access",
        "Built Redis caching layer for frequently accessed data and optimized queries with Prisma ORM",
        "Implemented rate limiting, request throttling, and Zod schema validation for API endpoints",
      ],
      technologies: [
        "Next.js",
        "Express.js",
        "TypeScript",
        "Zustand",
        "Redis",
        "Prisma",
        "Zod",
      ],
    },
    {
      title: "Software Engineer",
      company: "Todak Digitech",
      period: "August 2024 - June 2025",
      location: "Cyberjaya, Selangor",
      description: [
        "Led backend development for Todak Arena (Tournament Organizer Software), architecting robust solutions for scalable product offerings",
        "Engineered high-performance database schemas optimized for complex queries and data integrity",
        "Designed comprehensive RESTful API ecosystem with best practices for authentication and security",
        "Developed secure admin dashboards with role-based access controls and advanced analytical capabilities",
        "Led development of Majilis Sama Hadis end-to-end registration, payment, and attendance system with seamless integration",
      ],
      technologies: [
        "NestJS",
        "PostgreSQL",
        "TypeScript",
        "Redis",
        "JWT",
        "Docker",
      ],
    },
    {
      title: "Backend Developer",
      company: "Invoke Solutions",
      period: "July 2023 - August 2024",
      location: "Sungai Besi, Kuala Lumpur",
      description: [
        "Maintained and developed APIs for Adnexio Jobs & Edu (Job Application and E-Learning Platform)",
        "Created new API endpoints for Applicant Tracking System integration with optimized schema tables",
        "Developed features for Adnexio HR (Human Resource Management System) including Upskilling and ATS modules",
        "Served as sole backend developer for Parliament Ticketing system managing aids and complaints",
        "Collaborated with Analytics Team to develop data transfer endpoints supporting data-driven decision-making",
      ],
      technologies: [
        "NestJS",
        "PostgreSQL",
        "MySQL",
        "TypeScript",
        "Express.js",
        "Redis",
      ],
    },
    {
      title: "Research Officer",
      company: "MIMOS Berhad",
      period: "June 2022 - June 2023",
      location: "Bukit Jalil, Kuala Lumpur",
      description: [
        "Collected high-frequency data using Digitizer Card and developed data preprocessing modules in Python",
        "Conducted research on Non-Intrusive Appliance Load Monitoring (NIALM) algorithms",
        "Trained Machine Learning models using extracted features with Python Scikit-learn",
        "Developed Python-based sensor performance simulator using Flask with IoT ThingsBoard monitoring dashboard",
        "Authored research papers and produced detailed reports for internal evaluation and marketing strategy",
      ],
      technologies: [
        "Python",
        "Flask",
        "MATLAB",
        "Scikit-learn",
        "IoT ThingsBoard",
        "Jupyter Notebook",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Working Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey from nuclear engineering to software
            development, bringing analytical thinking and problem-solving skills
            to every project.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {experience.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {experience.company}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted-foreground text-sm">
                    <div className="flex items-center space-x-2 mb-1 sm:mb-0">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium">{experience.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <ul className="space-y-3">
                  {experience.description.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start space-x-3 text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-foreground mb-3">
                  Technologies Used:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Timeline Summary */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-primary">
              Career Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <div className="text-sm text-muted-foreground">
                  Years of Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">8+</div>
                <div className="text-sm text-muted-foreground">
                  Major Projects Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">4</div>
                <div className="text-sm text-muted-foreground">
                  Companies Worked With
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
