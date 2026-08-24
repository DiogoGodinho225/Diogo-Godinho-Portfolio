import { Suspense } from "react";
import About from "./components/about"
import Education from "./components/education"

export default function Home() {
  return (
    <Suspense>
      <div className="home-container">
          <About />
          <Education />
      </div>
    </Suspense>
  );
}
