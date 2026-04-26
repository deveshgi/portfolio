import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Achievements } from "@/sections/Achievements";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

// import CaseStudy from "@/pages/CaseStudy";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/case-study/:slug" element={<CaseStudy />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
