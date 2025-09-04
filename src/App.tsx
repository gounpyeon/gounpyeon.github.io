import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Research from './components/Research';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Contact from './components/Contact';
import { initScrollAnimations } from './utils/animations';

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div ref={appRef} className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}

export default App;