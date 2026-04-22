import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Reinforcement Learning for Autonomous Vehicle Navigation",
      desc: "Developed deep reinforcement learning agents to optimize autonomous navigation in simulated environments with efficient reward design and transfer learning.",
      tech: ["Python", "PyTorch", "Reinforcement Learning"],
      github: "https://github.com/santhosh-madha/Reinforcement-Learning-for-Autonomous-Vehicle-Navigation",
      highlights: [
        "Implemented DQN and DDQN algorithms with reward shaping",
        "Improved course completion time by 15%",
        "Designed collision-aware reward optimization",
        "Applied transfer learning for cross-environment generalization"
      ]
    },
    {
      title: "Multilingual Transformer-Based Telugu Sentiment Analysis",
      desc: "Built a complete NLP pipeline for sentiment analysis in a low-resource language using multilingual transformers and custom dataset creation.",
      tech: ["Python", "Hugging Face", "NLP", "Transformers"],
      github: "https://github.com/santhosh-madha/telugu-sentiment-dataset",
      highlights: [
        "Curated and annotated 1,287 Telugu YouTube comments",
        "Evaluated models including LaBSE, XLM-R, and mBERT",
        "Achieved F1-score of 0.80 using LaBSE fine-tuning",
        "Compared transformer models with traditional ML classifiers"
      ]
    },
    {
      title: "Vehicle Routing Problem Optimization for Delivery Services",
      desc: "Solved a multi-depot vehicle routing problem using optimization techniques and built a web interface for route visualization and delivery planning.",
      tech: ["Python", "Optimization Algorithms", "Web Development"],
      github: "https://github.com/santhosh-madha/Vehicle-Routing-Problem-VRP-Optimization-for-Delivery-Services",
      highlights: [
        "Implemented exact and heuristic algorithms for distance minimization",
        "Developed web-based interface for route visualization",
        "Integrated database workflows for route storage",
        "Performed clustering-based analysis for depot assignments"
      ]
    },
    {
      title: "Superstore Sales Data Analysis",
      desc: "Designed a big data analytics pipeline using Apache Spark and MySQL to generate business insights from large-scale retail sales data.",
      tech: ["Apache Spark", "Scala", "MySQL", "SQL"],
      github: "https://github.com/santhosh-madha/-Superstore-sales-analysis",
      highlights: [
        "Processed high-volume retail data using Spark SQL",
        "Analyzed profit trends and discount impact",
        "Built SQL-based data pipelines for scalable processing",
        "Generated actionable insights for business decision-making"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[#b8d960] font-bold uppercase tracking-[0.2em] text-xs mb-4">Software & Systems</p>
          <h2 className="text-4xl font-extrabold mb-4">Featured Projects</h2>
          <div className="h-1 w-12 bg-black rounded-full"></div>
          <p className="mt-8 text-gray-500 text-lg max-w-3xl leading-relaxed">
            A selection of projects demonstrating my experience in building end-to-end AI systems, machine learning pipelines, and scalable data-driven solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="academic-card group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 group-hover:text-black transition-colors">
                  <FolderOpen size={24} />
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black transition-colors"
                  >
                    <FaGithub size={22} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 leading-relaxed group-hover:text-[#b8d960] transition-colors line-clamp-2">
                {project.title}
              </h3>

              <p className="text-gray-500 text-[15px] mb-8 leading-relaxed italic border-l-2 border-gray-50 pl-4 py-1">
                {project.desc}
              </p>

              <div className="mb-8 flex-grow">
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-[13px] text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#b8d960] mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-50">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 text-[10px] font-bold uppercase tracking-tighter text-gray-400 bg-gray-50 rounded-full">
                    {t}
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
