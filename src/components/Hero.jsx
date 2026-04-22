import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Microscope, BookOpen, ExternalLink, FileText, Cpu } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const highlights = [
    { icon: <GraduationCap size={18} />, text: 'MS Data Science @ University at Buffalo' },
    { icon: <Microscope size={18} />, text: 'Research Assistant (Multimodal AI Systems)' },
    { icon: <BookOpen size={18} />, text: '3+ Publications in AI & ML' }
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/santhosh-madha', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/santhosh-madha/', label: 'LinkedIn' },
    { icon: <GraduationCap size={20} />, url: 'https://scholar.google.com/citations?user=ZDOys8UAAAAJ', label: 'Google Scholar' }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-80 pb-20">
      {/* Dynamic Background Effects */}
      <div className="bg-glow glow-1 animate-pulse"></div>
      <div className="bg-glow glow-2 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Substantial space buffer to separate the name from the header further */}
            <div className="h-32"></div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tighter text-text-main">
              Santhosh Reddy <span className="gradient-text">Madha</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
               <span className="text-xl md:text-2xl font-medium text-accent-primary">AI Engineer</span>
               <span className="text-xl md:text-2xl font-medium text-text-dim">|</span>
               <span className="text-xl md:text-2xl font-medium text-accent-secondary">Data Scientist</span>
               <span className="text-xl md:text-2xl font-medium text-text-dim">|</span>
               <span className="text-xl md:text-2xl font-medium text-accent-primary">Multimodal AI</span>
            </div>

            <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
              Building end-to-end AI systems and data-driven solutions by combining 
              <span className="text-accent-primary font-semibold"> machine learning</span>, 
              <span className="text-accent-primary font-semibold"> vision</span>, 
              <span className="text-accent-primary font-semibold"> language</span>, and 
              <span className="text-accent-primary font-semibold"> audio</span> for real-world applications.
            </p>

            {/* Highlights Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="badge"
                >
                  {item.icon}
                  {item.text}
                </motion.div>
              ))}
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex gap-4">
                <a 
                  href="https://drive.google.com/file/d/1HUM7A1tEyRWq4SAFu6hp0s3G5RwKDvhS/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  <FileText size={20} /> View Resume
                </a>
              </div>
              
              <div className="flex gap-4 h-full items-center">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-glass-border bg-white hover:bg-slate-50 hover:border-accent-primary transition-all text-text-muted hover:text-accent-primary shadow-sm"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration - Analytical Grid markers */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--glass-border) 1.5px, transparent 1.5px)', backgroundSize: '100px 100px' }}>
      </div>
      
    </section>
  );
};

export default Hero;
