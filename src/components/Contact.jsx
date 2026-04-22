import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, ArrowUp, GraduationCap } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-white border-t border-gray-50 pt-16 pb-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-extrabold mb-6">Let's Connect</h2>
            <p className="text-gray-500 text-[17px] leading-relaxed">
              I am always open to discussing research collaborations, AI opportunities, or technical challenges. 
              Feel free to reach out via email or connect with me on professional platforms.
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <a 
              href="mailto:smadha@buffalo.edu" 
              className="group flex items-center gap-4 text-black hover:text-[#818cf8] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#818cf8]/10">
                <Mail size={18} />
              </div>
              <span className="font-bold tracking-tight">smadha@buffalo.edu</span>
            </a>
            
            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <span className="font-medium">Buffalo, New York</span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400 text-sm font-medium">
            © 2026 Santhosh Reddy Madha • Built with React & Academic Precision
          </p>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="https://scholar.google.com/citations?user=ZDOys8UAAAAJ&hl=en&authuser=6" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-black transition-all" title="Google Scholar">
                <GraduationCap size={22} />
              </a>
              <a href="https://github.com/santhosh-madha" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-black transition-all">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/santhosh-madha/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-black transition-all">
                <FaLinkedin size={22} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors text-xs font-bold uppercase tracking-widest group"
            >
              Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
