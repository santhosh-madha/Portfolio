import React, { useState } from 'react';
import { FileText, GraduationCap, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About me', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  const resumeLink = "https://drive.google.com/drive/folders/196tKZa2_WyOPF8R863YXDoHcbdGlnsHc?usp=sharing";

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container px-6 py-4 flex flex-row justify-between items-center relative">
        
        {/* Left Side: Identity */}
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 rounded-full bg-[#82d1d1]"></div>
          <div className="flex items-baseline gap-4">
            <a href="#" className="text-[20px] font-extrabold tracking-tight text-black hover:opacity-70 transition-opacity">
              Santhosh
            </a>
            <span className="text-[13px] text-gray-500 font-normal hidden sm:block">
              AI Researcher & Engineer
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-[13px] font-bold text-gray-400 hover:text-black transition-all uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 border-l border-gray-100 pl-8">
            <a 
              href={resumeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-black text-black border-2 border-black/10 px-5 py-2 rounded-full hover:bg-black hover:text-white hover:border-black transition-all group uppercase tracking-widest"
            >
              Resume <FileText size={14} className="group-hover:scale-110 transition-transform" />
            </a>
            <div className="flex items-center gap-5">
              <a href="https://scholar.google.com/citations?user=ZDOys8UAAAAJ&hl=en&authuser=6" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-black transition-colors" title="Google Scholar">
                <GraduationCap size={22} />
              </a>
              <a href="https://github.com/santhosh-madha" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-black transition-colors">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/santhosh-madha/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-black transition-colors">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile slide-down Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 lg:hidden overflow-hidden shadow-xl"
            >
              <div className="flex flex-col p-8 gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-lg font-bold text-gray-500 hover:text-black transition-all uppercase tracking-widest"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-6 border-t border-gray-50 flex flex-col gap-6">
                  <a 
                    href={resumeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-3 text-sm font-black text-white bg-black px-6 py-4 rounded-xl uppercase tracking-widest"
                  >
                    Download Resume <FileText size={18} />
                  </a>
                  <div className="flex items-center justify-center gap-10 pt-4">
                    <a href="https://scholar.google.com/citations?user=ZDOys8UAAAAJ&hl=en&authuser=6" className="text-gray-400 hover:text-black scale-125">
                      <GraduationCap size={24} />
                    </a>
                    <a href="https://github.com/santhosh-madha" className="text-gray-400 hover:text-black scale-125">
                      <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/santhosh-madha/" className="text-gray-400 hover:text-black scale-125">
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
