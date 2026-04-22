import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.jpeg';

const Hero = () => {
  const highlights = [
    { text: "MS Data Science @ University at Buffalo" },
    { text: "Research Assistant (Multimodal AI Systems)" },
    { text: "3+ Publications in AI & ML" }
  ];

  return (
    <section id="home" className="py-12 sm:py-20 lg:py-32 bg-white min-h-[90vh] flex items-center">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-32 text-center lg:text-left">

          {/* Left: Circular Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="profile-image-container relative">
              <img
                src={heroImg}
                alt="Santhosh"
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-0 tracking-tighter text-black leading-none">
                Santhosh Reddy Madha
              </h1>

              <div className="mt-8 space-y-4 mb-16 lg:mb-24 flex flex-col items-center lg:items-start text-left">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-4 text-black font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#82d1d1]" />
                    <span className="text-[16px] sm:text-[18px] tracking-tight">{h.text}</span>
                  </div>
                ))}
              </div>

              <h2 className="sub-header pt-16 border-t border-gray-50 uppercase tracking-widest text-xs text-gray-400 mb-8">A Bit About Me</h2>
              <p className="text-[17px] text-gray-600 leading-relaxed max-w-2xl mb-8">
                I am a Data Science graduate student at the University at Buffalo and a Research Assistant working on AI-driven systems with a focus on multimodal learning and real-world applications. My interests lie in designing scalable, low-latency, and resource-efficient models that bridge the gap between research and practical deployment.
              </p>
              <p className="text-[17px] text-gray-600 leading-relaxed max-w-2xl">
                I work across machine learning, multimodal AI, NLP, and Computer Vision, building end-to-end solutions that combine data, intelligence, and system design to solve impactful problems. I am particularly passionate about developing AI systems that are both technically strong and practically useful.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
