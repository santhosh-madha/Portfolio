import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "NLP", "Computer Vision", "Multimodal Learning", "Reinforcement Learning", "Generative AI", "LLMs", "Model Optimization", "Predictive Analytics", "Statistical Modeling"]
    },
    {
      title: "Programming & Data",
      skills: ["Python", "Java", "SQL", "Scala", "Data Analysis", "Data Preprocessing", "Feature Engineering", "Data Cleaning", "Data Visualization", "Exploratory Data Analysis", "Data Scraping", "Statistical Analysis"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "OpenCV", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Apache Spark MLlib"]
    },
    {
      title: "Tools & Platforms",
      skills: ["AWS", "Docker", "Git", "GitHub", "Linux", "Jupyter Notebook", "VS Code", "Databricks", "Google Colab"]
    },
    {
      title: "Data Engineering & Big Data",
      skills: ["Apache Spark", "ETL Pipelines", "Data Pipelines", "Database Management", "MySQL", "PostgreSQL", "Data Warehousing", "Delta Lake", "Big Data Processing"]
    },
    {
      title: "Deployment & MLOps",
      skills: ["FastAPI", "REST APIs", "Streamlit", "Model Deployment", "Containerization", "CI/CD (Basics)", "API Development", "Workflow Automation"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Technical Proficiency</p>
          <h2 className="text-4xl font-extrabold mb-6">Expertise & Proficiency</h2>
          <div className="h-0.5 w-20 bg-black"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold text-black mb-8 pb-3 border-b border-gray-50 flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                {cat.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {cat.skills.map((skill, sIndex) => (
                  <div 
                    key={sIndex}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-black transition-colors shrink-0"></div>
                    <span className="text-[14px] text-gray-500 font-medium group-hover:text-black transition-colors">
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
