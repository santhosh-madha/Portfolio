import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: "work",
      role: "Research Assistant",
      company: "University at Buffalo, SUNY",
      period: "Oct 2025 – Present",
      summary: "Working on AI-driven systems focused on real-world applications, with an emphasis on multimodal learning and efficient model design.",
      highlights: [
        "Developing machine learning models integrating multiple data modalities",
        "Designing scalable and efficient AI solutions for practical use cases",
        "Contributing to system-level design and end-to-end ML pipelines"
      ],
      focusAreas: ["Multimodal AI", "Computer Vision", "Machine Learning", "System Design"]
    },
    {
      type: "education",
      role: "Master of Science in Data Science",
      company: "University at Buffalo, SUNY",
      period: "Aug 2025 – Dec 2026",
      summary: "Advanced graduate studies focused on scalable data systems and machine learning theory.",
      highlights: ["GPA: Ongoing focus on advanced ML and Data Science pipelines."],
      focusAreas: ["Data Science", "Large Scale ML", "Big Data Pipelines"]
    },
    {
      type: "work",
      role: "Research Intern",
      company: "FLAME University",
      period: "Apr 2025 – Jun 2025",
      summary: "Conducted research in natural language processing for low-resource languages, focusing on data-driven modeling approaches.",
      highlights: [
        "Worked on dataset creation and preprocessing for NLP tasks",
        "Applied machine learning and deep learning techniques for text analysis",
        "Evaluated model performance and contributed to research outcomes"
      ],
      focusAreas: ["NLP", "Machine Learning", "Data Analysis"]
    },
    {
      type: "education",
      role: "Bachelor of Technology in CS (AI)",
      company: "Amrita Vishwa Vidyapeetham",
      period: "Aug 2021 – May 2025",
      summary: "Undergraduate degree with a specialization in Artificial Intelligence and Robotics.",
      highlights: ["Focused on AI foundations and computer vision projects."],
      focusAreas: ["Artificial Intelligence", "Foundations of CS", "Mathematics for ML"]
    }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-slate-50/50">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-text-main">Professional <span className="gradient-text">Journey</span></h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            A track record of leveraging AI and machine learning to solve complex problems 
            in both academic research and industry contexts.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto pl-8 md:pl-0">
          {/* Consistent Left-Aligned Timeline Line */}
          <div className="absolute left-0 md:left-[120px] top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row gap-8 md:gap-16"
              >
                {/* Date Column (Analytical Monospace) */}
                <div className="w-full md:w-[120px] pt-1 md:text-right">
                  <span className="text-accent-primary font-bold text-xs mono tracking-wider uppercase block">{exp.period}</span>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-[-32px] md:left-[120px] w-4 h-4 rounded-full bg-accent-primary border-4 border-white shadow-sm z-10 -translate-x-1/2 top-1 hidden md:block"></div>

                {/* Content Card */}
                <div className="flex-grow">
                  <div className="glass-card p-10 bg-white hover:bg-slate-50 border-slate-100 shadow-sm hover:shadow-md transition-all group relative">
                    {/* Role Indicator Icon */}
                    <div className="absolute -top-5 left-8 p-3 rounded-xl bg-white border border-slate-100 shadow-sm text-accent-primary group-hover:scale-110 transition-transform">
                      {exp.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                    </div>

                    <div className="flex flex-col mb-6">
                      <h3 className="text-2xl font-bold text-text-main group-hover:text-accent-primary transition-colors">{exp.role}</h3>
                      <p className="text-accent-secondary font-semibold text-base">{exp.company}</p>
                    </div>
                    
                    <p className="text-text-muted mb-8 text-sm leading-relaxed italic border-l-2 border-accent-primary/10 pl-4 py-1">
                      {exp.summary}
                    </p>

                    <ul className="space-y-4 mb-10">
                      {exp.highlights.map((item, hIndex) => (
                        <li key={hIndex} className="flex gap-4 text-[13px] text-text-muted group-hover:text-text-main transition-colors">
                          <CheckCircle2 size={18} className="text-accent-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-8 border-t border-slate-100">
                      {exp.focusAreas.map(area => (
                        <span key={area} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-text-dim uppercase tracking-widest hover:border-accent-primary hover:text-accent-primary transition-all">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
