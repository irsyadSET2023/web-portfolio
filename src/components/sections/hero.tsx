import { RotateWords } from "../reusable/rotate-words";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background to-secondary/20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hi, I'm Irsyad
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 space-y-2">
            <p className="font-medium">I am a</p>
            <div className="min-h-[1.5em] md:min-h-[2em] lg:min-h-[2.5em] flex items-center justify-center">
              <RotateWords
                words={[
                  "Nuclear Engineer Graduate",
                  "Software Engineer",
                  "Machine Learning Enthusiast",
                ]}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16">
          <a
            href="#projects"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 w-full sm:w-auto sm:min-w-[200px] text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 w-full sm:w-auto sm:min-w-[200px] text-center"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <a href="#about">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};
