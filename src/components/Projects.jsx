import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Reinforcement Learning for Autonomous Vehicle Navigation",
      desc: "Developed deep reinforcement learning agents to optimize autonomous navigation in simulated environments with efficient reward design and transfer learning.",
      highlights: [
        "Implemented DQN and DDQN algorithms with reward shaping for efficient navigation",
        "Improved course completion time by 15% in 2D simulation environments",
        "Designed reward system with penalties for collisions and time optimization",
        "Applied transfer learning to improve generalization across new environments"
      ],
      tags: ["Python", "PyTorch", "Reinforcement Learning"],
      link: "https://github.com/santhosh-madha"
    },
    {
      title: "Telugu Sentiment Analysis and Emotion Detection",
      desc: "Built a classification system for a low-resource language using a blend of traditional and deep learning approaches.",
      highlights: [
        "Preprocessed large-scale Telugu text data with custom tokenization",
        "Implemented LSTM and BERT-based models for emotion classification",
        "Achieved 85% accuracy in 5-class sentiment detection",
        "Optimized for real-time inference in social media monitoring apps"
      ],
      tags: ["NLP", "TensorFlow", "Deep Learning"],
      link: "https://github.com/santhosh-madha"
    },
    {
      title: "VRP Optimization with Genetic Algorithms",
      desc: "Solved complex Vehicle Routing Problems using evolutionary computing to minimize total distance and fleet costs.",
      highlights: [
        "Designed custom mutation and crossover operators for VRP constraints",
        "Reduced overall delivery distance by 20% compared to greedy baseline",
        "Implemented path visualization and cost-analysis dashboards",
        "Developed parallel processing for faster convergence on large graphs"
      ],
      tags: ["Python", "Genetic Algorithms", "Optimization"],
      link: "https://github.com/santhosh-madha"
    },
    {
      title: "Big Data Analysis of Superstore Sales",
      desc: "Engineered scalable data pipelines to analyze regional sales trends and profit drivers using Apache Spark.",
      highlights: [
        "Processed 1M+ transaction records using Spark SQL and DataFrames",
        "Identified key profit-influencing factors through statistical modeling",
        "Built interactive Tableau dashboards for real-time trend monitoring",
        "Decreased ETL pipeline latency by 40% through partitioning"
      ],
      tags: ["Apache Spark", "SQL", "Big Data"],
      link: "https://github.com/santhosh-madha"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-text-main">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            A selection of projects demonstrating my experience in building end-to-end AI systems, 
            machine learning pipelines, and scalable data-driven solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group bg-white border-slate-100 hover:border-accent-primary/20 hover:bg-slate-50/50 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-text-main group-hover:text-accent-primary transition-colors leading-tight">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noreferrer" className="p-3 rounded-xl border border-slate-100 bg-white hover:border-accent-primary hover:text-accent-primary transition-all shadow-sm">
                  <FaGithub size={20} />
                </a>
              </div>

              <p className="text-text-muted mb-8 text-sm leading-relaxed border-l-2 border-accent-primary/10 pl-4 bg-slate-50/50 py-3 rounded-r-lg italic">
                {project.desc}
              </p>

              <ul className="space-y-3 mb-10 flex-grow">
                {project.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex gap-3 text-[13px] text-text-muted group-hover:text-text-main transition-colors">
                    <CheckCircle2 size={16} className="text-accent-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-8 border-t border-slate-100">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-[10px] text-text-dim uppercase tracking-wider font-bold hover:border-accent-primary transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
