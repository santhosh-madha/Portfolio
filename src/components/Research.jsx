import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, Award, CheckCircle2 } from 'lucide-react';

const Research = () => {
  const publications = [
    {
      title: "Vocal Fold Cancer Diagnosis: Leveraging Nonlinear and Linear Features for Accurate Detection",
      venue: "Springer Nature, ICCIS 2024",
      desc: "Developed a hybrid acoustic feature extraction framework combining Multi-Fractal Detrended Fluctuation Analysis (MFDFA) with linear features for voice-based cancer detection.",
      highlights: [
        "Improved classification accuracy by 3% over traditional feature sets",
        "Outperformed standard OpenSMILE features with a reduced feature set",
        "Validated on Saarbruecken Voice Database for clinical and remote applications"
      ],
      link: "https://doi.org/10.1007/978-981-96-5732-2_11"
    },
    {
      title: "Audio Driven Detection of Hate Speech in Telugu: Toward Ethical and Secure CPS",
      venue: "Springer Nature, 2025",
      desc: "Built a multimodal hate speech detection system for a low-resource language by creating a novel audio-text dataset from real-world YouTube data.",
      highlights: [
        "Created a 2-hour annotated multimodal dataset (audio + text)",
        "Achieved F1-score of 0.89 using OpenSMILE + SVM for speech classification",
        "Demonstrated effectiveness of multimodal approaches in low-resource settings"
      ],
      link: "https://doi.org/10.1007/978-3-032-09917-4_3"
    },
    {
      title: "Exploring NTK Kernel and NLP-based Approach for Robust DNA Sequence Classification",
      venue: "Procedia Computer Science, 2025",
      desc: "Designed an NLP-inspired pipeline for viral DNA classification using k-mer representations and multiple feature extraction techniques.",
      highlights: [
        "Applied TF-IDF, Bag-of-Words, and Word2Vec for sequence representation",
        "Developed SVM-NTK model achieving 98% average accuracy",
        "Demonstrated strong generalization across multiple virus families"
      ],
      link: "https://doi.org/10.1016/j.procs.2025.04.524"
    }
  ];

  return (
    <section id="research" className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-text-main">Research & <span className="gradient-text">Publications</span></h2>
          <p className="text-lg text-text-muted leading-relaxed">
            My research focuses on multimodal AI, speech processing, and machine learning systems for real-world applications. 
            I have contributed to multiple peer-reviewed publications covering healthcare AI and low-resource NLP.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 group relative overflow-hidden bg-white border-slate-100 hover:shadow-md transition-all"
            >
              {/* Left Accent Bar */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-accent-primary to-accent-secondary opacity-20 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col gap-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-50 pb-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="px-3 py-1.5 rounded-lg bg-accent-primary/5 text-accent-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-accent-primary/10">
                      {pub.venue.split(',')[0]}
                    </span>
                    <span className="flex items-center gap-2 text-text-dim text-xs font-semibold mono">
                      <Calendar size={14} className="text-accent-primary" /> {pub.venue.split(',')[1]?.trim() || pub.venue}
                    </span>
                  </div>

                  {/* Compact Peer Reviewed Indicator */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 shadow-sm">
                    <Award size={14} className="text-accent-primary" />
                    <span className="text-[9px] font-bold text-text-dim uppercase tracking-[0.1em]">Peer Reviewed</span>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-text-main group-hover:text-accent-primary transition-colors leading-tight">
                      {pub.title}
                    </h3>
                    
                    <p className="text-text-muted mb-8 italic text-sm border-l-2 border-accent-primary/5 pl-4 py-1">
                      {pub.desc}
                    </p>

                    <div className="grid grid-cols-1 gap-4 mb-8">
                      {pub.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-3 text-sm text-text-muted">
                          <CheckCircle2 size={18} className="text-accent-primary mt-0.5 shrink-0" />
                          <span className="group-hover:text-text-main transition-colors">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Sidebar */}
                  <div className="lg:w-1/3 flex flex-col justify-end items-start lg:items-end">
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary !py-3 !px-6 !rounded-xl !text-xs !tracking-widest uppercase flex items-center gap-3 w-full lg:w-auto justify-center"
                    >
                      Full Paper <ExternalLink size={16} />
                    </a>
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

export default Research;
