import { Header } from "./components/sections/header";
import { Hero } from "./components/sections/hero";
import { About } from "./components/sections/about";
import { Skills } from "./components/sections/skills";
import { WorkingExperience } from "./components/sections/working-experience";
import { Projects } from "./components/sections/projects";
import { Contact } from "./components/sections/contact";
import { Footer } from "./components/sections/footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkingExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
