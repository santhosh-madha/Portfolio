import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, Award } from 'lucide-react';

const Research = () => {
  const publications = [
    {
      title: "Vocal Fold Cancer Diagnosis: Leveraging Nonlinear and Linear Features for Accurate Detection",
      venue: "Springer Nature, ICCIS 2024",
      desc: "Developed a hybrid acoustic feature extraction framework combining Multi-Fractal Detrended Fluctuation Analysis (MFDFA) with linear features for voice-based cancer detection.",
      highlights: [
        "Improved classification accuracy by 3% over traditional methods",
        "Outperformed standard OpenSMILE features",
        "Validated on Saarbruecken Voice Database"
      ],
      link: "https://doi.org/10.1007/978-981-96-5732-2_11"
    },
    {
      title: "Audio Driven Detection of Hate Speech in Telugu: Toward Ethical and Secure CPS",
      venue: "Springer Nature, 2025",
      desc: "Built a multimodal hate speech detection system for a low-resource language using audio and text from real-world YouTube data.",
      highlights: [
        "Created and annotated a multimodal Telugu dataset",
        "Achieved F1-score of 0.89 with SVM classification",
        "Demonstrated effectiveness of multimodal learning"
      ],
      link: "https://doi.org/10.1007/978-3-032-09917-4_3"
    },
    {
      title: "Exploring NTK Kernel and NLP-Based Approach for Robust DNA Sequence Classification",
      venue: "Procedia Computer Science, 2025",
      desc: "Designed an NLP-inspired machine learning pipeline for viral DNA sequence classification using k-mer representations and advanced feature extraction methods.",
      highlights: [
        "Applied TF-IDF, Bag-of-Words, and Word2Vec for sequences",
        "Developed SVM-NTK model with 98% accuracy",
        "Demonstrated strong generalization across virus families"
      ],
      link: "https://doi.org/10.1016/j.procs.2025.04.524"
    }
  ];

  return (
    <section id="research" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[#f0a500] font-bold uppercase tracking-[0.2em] text-xs mb-4">Scientific Contributions</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 text-black">Research & Publications</h2>
          <div className="h-1 w-12 bg-black rounded-full"></div>
          <p className="mt-8 text-gray-500 text-lg max-w-3xl leading-relaxed">
            My research focuses on multimodal AI, speech processing, natural language processing, and machine learning systems for real-world applications. I have contributed to peer-reviewed publications across healthcare AI, low-resource NLP, and bioinformatics.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-gray-100 pb-16 last:border-0"
            >
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="shrink-0 pt-2">
                  <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#f0a500] group-hover:text-white transition-all shadow-sm">
                    <BookOpen size={24} />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="inline-block px-3 py-1 bg-orange-50 text-[11px] font-extrabold text-[#f0a500] uppercase tracking-widest rounded-md">
                      {pub.venue}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black mb-6 text-black group-hover:text-[#f0a500] transition-colors leading-tight">
                    {pub.title}
                  </h3>
                  
                  <p className="text-gray-500 text-[15px] sm:text-[17px] mb-8 leading-relaxed italic border-l-4 border-gray-50 pl-6 py-2 bg-gray-50/30 rounded-r-lg">
                    {pub.desc}
                  </p>
                  
                  <div className="flex flex-col gap-4 mb-10">
                    {pub.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-4 text-[15px] text-gray-500 font-medium leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f0a500] mt-2.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-[13px] font-black text-black border-b-2 border-black/10 hover:border-[#f0a500] pb-1 transition-all uppercase tracking-[0.2em]"
                    >
                      Access Publication <ExternalLink size={16} />
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
