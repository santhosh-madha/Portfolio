import React from 'react';
import { Mail, Phone, GraduationCap, ArrowUp } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="section-padding bg-slate-50 pb-12 border-t border-slate-100">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-text-main">Let's <span className="gradient-text">Collaborate</span></h2>
            <p className="text-text-muted text-lg mb-8 max-w-md">
              Currently pursuing my Master's at UB and looking for opportunities to apply AI for real-world impact.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:s.madha0203@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center group-hover:bg-accent-primary/5 group-hover:border-accent-primary/20 transition-all shadow-sm">
                  <Mail className="group-hover:text-accent-primary text-text-muted" size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-text-dim uppercase tracking-[0.2em] font-bold">Email</p>
                  <p className="text-text-main font-bold hover:text-accent-primary transition-colors">s.madha0203@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="glass-card p-10 text-center bg-white border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-text-main">Connect on Social</h3>
              <div className="flex justify-center gap-4 mb-10">
                <a href="https://www.linkedin.com/in/santhosh-madha/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-xl glass-card bg-slate-50 flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary transition-all hover:-translate-y-1">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/santhosh-madha" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-xl glass-card bg-slate-50 flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary transition-all hover:-translate-y-1">
                  <FaGithub size={24} />
                </a>
                <a href="https://scholar.google.com/citations?user=ZDOys8UAAAAJ" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-xl glass-card bg-slate-50 flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary transition-all hover:-translate-y-1">
                  <GraduationCap size={24} />
                </a>
              </div>
              <p className="text-text-muted text-sm italic font-medium">"Turning data into intelligence, one model at a time."</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-slate-200">
          <p className="text-text-dim text-xs font-bold uppercase tracking-wider mb-4 md:mb-0">
            © {new Date().getFullYear()} Santhosh Reddy Madha. Built with React & AI.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-text-dim hover:text-accent-primary transition-colors text-xs font-bold uppercase tracking-widest group"
          >
            Back to top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
