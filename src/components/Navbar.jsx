import React from 'react';
import { FileText, GraduationCap } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const navLinks = [
    { name: 'About me', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  const resumeLink = "https://drive.google.com/drive/folders/196tKZa2_WyOPF8R863YXDoHcbdGlnsHc?usp=sharing";

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container px-6 py-6 flex flex-col lg:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Identity */}
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 rounded-full bg-[#82d1d1]"></div>
          <div className="flex items-baseline gap-4">
            <a href="#" className="text-[20px] font-extrabold tracking-tight text-black hover:opacity-70 transition-opacity">
              Santhosh
            </a>
            <span className="text-[13px] text-gray-500 font-normal hidden xl:block">
              AI Researcher & Engineer
            </span>
          </div>
        </div>

        {/* Right Side: Navigation & Actions */}
        <div className="flex flex-wrap justify-center items-center gap-10">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-[14px] font-bold text-gray-400 hover:text-black transition-all uppercase tracking-widest"
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
              className="flex items-center gap-2 text-[12px] font-black text-black border-2 border-black/10 px-6 py-2.5 rounded-full hover:bg-black hover:text-white hover:border-black transition-all group uppercase tracking-widest"
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
      </div>
    </nav>
  );
};

export default Navbar;
