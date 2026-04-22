import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Zap, FileText, Search } from 'lucide-react';

const About = () => {
  const points = [
    { icon: <Target className="text-accent-primary" />, title: 'Goal-Oriented', desc: 'Focus on real-world assistive applications.' },
    { icon: <Zap className="text-accent-secondary" />, title: 'Efficiency', desc: 'Designing low-latency, resource-efficient models.' },
    { icon: <Search className="text-accent-primary" />, title: 'Research-Driven', desc: 'Translating complex research into deployable solutions.' }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white/50">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-accent-primary/5 rounded-full blur-3xl -ml-40 opacity-50"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Icons/Stats */}
          <div className="lg:w-1/3 w-full grid grid-cols-1 gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex flex-col items-center text-center group bg-white hover:bg-slate-50 border-accent-primary/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                <User size={32} className="text-accent-primary" />
              </div>
              <h3 className="text-xl mb-2 text-text-main">Who I Am</h3>
              <p className="text-text-muted text-sm italic">
                Data Science MS @ UB <br/>
                Research Assistant (Multimodal AI)
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-5 flex items-center gap-4 bg-white border-l-4 border-l-transparent hover:border-l-accent-primary group transition-all"
                >
                  <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-accent-primary/5 transition-colors">{point.icon}</div>
                  <div>
                    <h4 className="text-sm font-bold text-text-main">{point.title}</h4>
                    <p className="text-xs text-text-muted">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:w-2/3 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-8 flex items-center gap-4 text-text-main">
                About <span className="gradient-text">Me</span>
                <div className="h-px flex-grow bg-gradient-to-r from-accent-primary/30 to-transparent"></div>
              </h2>

              <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                <p>
                  I am a <span className="text-text-main font-semibold">Data Science graduate student at the University at Buffalo</span> and a Research Assistant working on multimodal AI systems for real-world assistive applications. My work focuses on designing low-latency, resource-efficient models that combine vision, language, and audio to enable intelligent decision-making.
                </p>
                <p>
                  I specialize in building <span className="text-accent-primary font-semibold">end-to-end machine learning systems</span>, including data pipelines, model development, evaluation, and deployment. My experience spans multimodal learning, natural language processing, computer vision, and reinforcement learning, with a strong focus on translating complex research into deployable AI solutions.
                </p>
                <p>
                  With multiple research publications and hands-on project experience, I aim to develop scalable and impactful AI systems, particularly in accessibility, low-resource environments, and data-driven applications.
                </p>
                
                <div className="pt-8 border-t border-glass-border">
                  <p className="mb-8 italic text-base">
                    I am actively seeking <span className="text-accent-primary font-bold">AI Engineer and Data Scientist roles</span> where I can contribute to building intelligent, real-world systems.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://drive.google.com/file/d/1HUM7A1tEyRWq4SAFu6hp0s3G5RwKDvhS/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary"
                    >
                      <FileText size={20} /> Download CV
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
