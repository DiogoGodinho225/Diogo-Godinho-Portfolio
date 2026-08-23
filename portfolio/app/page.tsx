import { Suspense } from "react";
import About from "./components/about";

export default function Home() {
  return (
    <Suspense>
      <div className="home-container">
          <About />
      </div>
    </Suspense>
  );
}
