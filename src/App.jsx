import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-deep text-main overflow-x-hidden">
      {/* Background elements */}
      <div className="bg-glow glow-1 opacity-20"></div>
      <div className="bg-glow glow-2 opacity-10"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Research />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <Contact />
    </div>
  );
}

export default App;
