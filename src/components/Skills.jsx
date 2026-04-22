import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Code2, 
  Layers, 
  Terminal, 
  Database, 
  Rocket,
  CheckCircle2 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="text-blue-400" />,
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "NLP", "Computer Vision", "Multimodal Learning", "Reinforcement Learning", "Generative AI", "Model Optimization", "Transfer Learning"]
    },
    {
      title: "Programming & Data",
      icon: <Code2 className="text-purple-400" />,
      skills: ["Python", "Java", "SQL", "Data Analysis", "Data Preprocessing", "Feature Engineering", "Data Cleaning", "Data Visualization"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="text-pink-400" />,
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "OpenCV", "Pandas", "NumPy"]
    },
    {
      title: "Tools & Platforms",
      icon: <Terminal className="text-emerald-400" />,
      skills: ["AWS", "Docker", "Git", "Linux", "Jupyter Notebook", "VS Code"]
    },
    {
      title: "Data Engineering & Big Data",
      icon: <Database className="text-cyan-400" />,
      skills: ["Apache Spark", "ETL Pipelines", "Data Pipelines", "Database Management Systems", "MySQL"]
    },
    {
      title: "Deployment & MLOps",
      icon: <Rocket className="text-orange-400" />,
      skills: ["FastAPI", "REST APIs", "Streamlit", "Model Deployment", "Containerization", "CI/CD (Basics)"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white/50 relative overflow-hidden">
      {/* Visual background accents - softer for light mode */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-primary/[0.03] rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-secondary/[0.03] rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-text-main">Technical <span className="gradient-text">Expertise</span></h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              A comprehensive toolkit focused on building cutting-edge AI solutions, 
              scalable data pipelines, and production-ready ML systems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group border-accent-primary/5 bg-white hover:bg-slate-50 flex flex-col h-full shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-primary/5 transition-all duration-500 shadow-sm border border-slate-100">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main group-hover:text-accent-primary transition-all duration-300">
                    {category.title}
                  </h3>
                  <div className="h-1 w-12 bg-accent-primary/20 rounded-full mt-2 group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex items-center gap-2 group/skill"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary opacity-30 group-hover/skill:opacity-100 group-hover/skill:scale-125 transition-all"></div>
                    <span className="text-[13px] font-medium text-text-muted group-hover/skill:text-text-main transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
