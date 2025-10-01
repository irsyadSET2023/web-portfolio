export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, skills, and passion for creating
            digital experiences.
          </p>
        </div>

        <div className="space-y-16">
          {/* Main About Content */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
                Hello! I'm Irsyad
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <p>
                  I'm a passionate software engineer specializing in backend
                  development with extensive full-stack capabilities. My journey
                  in software development started several years ago, and I've
                  been constantly learning and evolving with the rapidly
                  changing tech landscape.
                </p>
                <p>
                  I specialize in building robust, scalable backend systems and
                  APIs, while also handling full-stack development when needed.
                  I believe in writing clean, maintainable code and architecting
                  systems that can handle growth and complexity with ease.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  My approach combines deep backend expertise with full-stack
                  versatility, ensuring that I can handle everything from
                  database design and server architecture to frontend
                  integration and user experience optimization.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new backend
                  technologies, optimizing system performance, contributing to
                  open-source projects, or sharing knowledge with the developer
                  community.
                </p>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Support Available
                </div>
              </div>
            </div>
          </div>

          {/* What I Do */}
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl md:text-2xl font-semibold mb-8 text-center">
              What I Do
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold mb-1">Backend Development</h5>
                    <p className="text-sm text-muted-foreground">
                      Specialized in building scalable server-side applications,
                      databases, and system architecture
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold mb-1">
                      Full-Stack Development
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      End-to-end application development covering both backend
                      systems and frontend interfaces
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
