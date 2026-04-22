import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-200 shadow-md transition-all duration-300">
      <div className="container h-20 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight shrink-0 flex items-center gap-2">
          <span className="text-text-main">Santhosh</span>
          <span className="text-accent-primary">.AI</span>
        </a>
  
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 h-full">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-text-muted hover:text-accent-primary transition-colors h-full flex items-center border-b-2 border-transparent hover:border-accent-primary pt-1"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-5 ml-6 pl-6 border-l border-slate-100 h-8">
            <a href="https://github.com/santhosh-madha" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent-primary transition-all hover:scale-110">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/santhosh-madha/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent-primary transition-all hover:scale-110">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
  
        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-text-main hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 py-8 px-6 flex flex-col gap-5 animate-fadeIn shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-bold text-text-main hover:text-accent-primary transition-colors border-l-4 border-transparent hover:border-accent-primary pl-4"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-8 mt-6 pt-6 border-t border-slate-100">
            <a href="https://github.com/santhosh-madha" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent-primary"><FaGithub size={28} /></a>
            <a href="https://www.linkedin.com/in/santhosh-madha/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent-primary"><FaLinkedin size={28} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
