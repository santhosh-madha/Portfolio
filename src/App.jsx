import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Research from './components/Research';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <Research />
        <Projects />
        <Skills />
        <Education />
        <ResumeSection />
      </main>

      <Contact />
    </div>
  );
}

export default App;
