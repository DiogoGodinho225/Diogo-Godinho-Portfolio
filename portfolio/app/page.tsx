import { Suspense } from "react";
import About from "./components/about"
import Education from "./components/education"
import Experience from "./components/experience";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <Suspense>
      <div className="home-container">
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />  
          <Contact />
      </div>
    </Suspense>
  );
}
