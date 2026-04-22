import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Research Assistant",
      company: "University at Buffalo, SUNY",
      period: "Oct 2025 – Present",
      summary: "Working on AI-driven systems focused on real-world applications, with an emphasis on multimodal learning and efficient model design.",
      highlights: [
        "Developing machine learning models integrating multiple data modalities",
        "Designing scalable and efficient AI solutions for practical use cases",
        "Contributing to system-level design and end-to-end ML pipelines"
      ],
      focusAreas: ["Multimodal AI", "Machine Learning", "System Design"]
    },
    {
      role: "Research Intern",
      company: "FLAME University",
      period: "Apr 2025 – Jun 2025",
      summary: "Conducted research in natural language processing for low-resource languages, focusing on data-driven modeling approaches.",
      highlights: [
        "Worked on dataset creation and preprocessing for NLP tasks",
        "Applied machine learning and deep learning techniques for text analysis",
        "Evaluated model performance and contributed to research outcomes"
      ],
      focusAreas: ["NLP", "Machine Learning", "Data Analysis", "Data Scraping"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Background</p>
          <h2 className="text-5xl font-black mb-6 text-black">Professional Experience</h2>
          <div className="h-1.5 w-16 bg-black rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-gray-100 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-10 items-start">
                {/* Icon Column */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-black border border-gray-100 shadow-sm">
                    <Briefcase size={28} />
                  </div>
                </div>
                
                {/* Content Column */}
                <div className="flex-grow">
                  <div className="mb-8">
                    <h3 className="text-3xl font-black text-black mb-2 tracking-tight">{exp.role}</h3>
                    <p className="text-xl font-bold text-gray-500 mb-1">{exp.company}</p>
                    <p className="text-sm font-extrabold text-gray-300 uppercase tracking-widest">{exp.period}</p>
                  </div>

                  <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-4xl">
                    {exp.summary}
                  </p>

                  <div className="space-y-4 mb-10">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-4 text-[16px] text-gray-600 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 shrink-0" />
                        <span className="leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-50">
                    {exp.focusAreas.map(area => (
                      <span key={area} className="text-[13px] font-black uppercase tracking-widest text-black/40 hover:text-black transition-colors">
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
    </section>
  );
};

export default Experience;
