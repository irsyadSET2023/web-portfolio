export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      familiarized: [
        "Python",
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Express.js",
        "Laravel",
        "NestJs",
        "NextJs",
        "HTML",
        "CSS",
        "TailwindCSS",
      ],
      learning: ["Golang", "Vue", "Flask", "FastAPI"],
    },
    {
      title: "Cloud Platforms & Infrastructure",
      familiarized: ["AWS EC2", "Digital Ocean Droplet", "Vercel"],
      learning: ["Google Cloud Platform"],
    },
    {
      title: "DevOps & Containerization",
      familiarized: ["Docker", "Git", "GitHub Actions", "CI/CD"],
      learning: ["Jenkins", "GitLab CI", "Docker Compose", "Kubernetes"],
    },
    {
      title: "CDN & Security",
      familiarized: ["Cloudflare", "SSL/TLS", "CORS", "Authentication"],
      learning: ["OAuth 2.0", "JWT", "Rate Limiting", "DDoS Protection"],
    },
    {
      title: "Web Servers & Reverse Proxies",
      familiarized: ["Nginx"],
      learning: ["Apache"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-primary">
                {category.title}
              </h3>

              {/* Familiarized Section */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-2"></div>
                  Familiarized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.familiarized.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-xs font-medium border border-green-200 dark:border-green-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning Section */}
              <div>
                <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                  Learning
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.learning.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
