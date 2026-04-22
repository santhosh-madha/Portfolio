import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';

const ResumeSection = () => {
  const resumeLink = "https://drive.google.com/drive/folders/196tKZa2_WyOPF8R863YXDoHcbdGlnsHc?usp=sharing";

  return (
    <section id="resume" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-8">
            <FileText size={32} />
          </div>
          <h2 className="text-4xl font-extrabold mb-6">Full Vitae & Resume</h2>
          <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
            Deep dive into my full academic and professional history. 
            Download the latest version of my CV for detailed project descriptions and technical certifications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform group"
            >
              Download PDF Resume <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
          
          <p className="mt-8 text-sm text-gray-400 font-medium uppercase tracking-[0.2em]">
            Last Updated: April 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
