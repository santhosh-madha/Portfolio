import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "University at Buffalo, SUNY",
      location: "Buffalo, New York",
      period: "Aug 2025 – Dec 2026",
      desc: "Focused on Machine Learning, Data Science, Artificial Intelligence, and scalable data-driven systems."
    },
    {
      degree: "Bachelor of Technology in CS (Artificial Intelligence)",
      school: "Amrita Vishwa Vidyapeetham",
      location: "Coimbatore, India",
      period: "Aug 2021 – May 2025",
      desc: "Built strong foundations in Artificial Intelligence, Machine Learning, Data Structures, Algorithms, and Software Development."
    }
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[#818cf8] font-bold uppercase tracking-[0.2em] text-xs mb-4">Academic Background</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 text-black">Education</h2>
          <div className="h-1 w-12 bg-black rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-gray-50 pb-12 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <h3 className="text-xl sm:text-3xl font-black group-hover:text-[#818cf8] transition-colors">{edu.degree}</h3>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-300">{edu.period}</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-8 text-gray-400 text-[15px] mb-8 font-semibold">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                    <GraduationCap size={18} />
                  </div>
                  <span>{edu.school}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <span>{edu.location}</span>
                </div>
              </div>

              <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-4xl italic border-l-4 border-gray-50 pl-6 sm:pl-8 py-2 bg-gray-50/20 rounded-r-lg">
                {edu.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
