import { createElement, useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowRight, Mail, Menu, X, FileText, BookOpen, Check, Layers, Search, Braces } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import portrait from './assets/hero.jpeg';
import ragScreenshot from './assets/rag-answer.png';

const github = 'https://github.com/santhosh-madha';
const rag = `${github}/healthcare-rag-assistant`;
const delivery = `${github}/delivery-intelligence-platform`;
const deliveryDemo = 'https://delivery-intelligence-api-2z5u.onrender.com/docs';
const resume = 'https://drive.google.com/drive/folders/196tKZa2_WyOPF8R863YXDoHcbdGlnsHc?usp=sharing';
const email = 'santhoshk.madha@gmail.com';

function External({ href, children, className = '', ...props }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>{children}<ArrowUpRight size={17} aria-hidden="true" /></a>;
}

function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const escape = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, []);
  return <header className="site-header">
    <nav className="shell nav" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="monogram">sm<span>.</span></span><span>Santhosh Madha</span></a>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <div id="navigation-links" className={`nav-links ${open ? 'is-open' : ''}`}>
        {[['Selected work', '#projects'], ['Research', '#research'], ['About', '#experience'], ['Contact', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <External href={resume} className="nav-resume">Résumé</External>
      </div>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero shell" id="home" aria-labelledby="hero-title">
    <div className="hero-copy">
      <div className="availability"><span />Open to AI & data science opportunities</div>
      <p className="eyebrow hero-role">AI ENGINEER · RESEARCHER</p>
      <h1 id="hero-title">From research<br />to <span>real-world AI.</span></h1>
      <p className="hero-description">I’m Santhosh. I build AI systems that retrieve knowledge, understand language, and learn from multiple modalities.</p>
      <p className="hero-context">MS Data Science at University at Buffalo.<br />Research Assistant exploring multimodal AI.</p>
      <div className="hero-actions"><a href="#projects" className="button button-primary">Explore my work <ArrowDown size={18} /></a><External href={resume} className="button button-outline"><FileText size={17} />View résumé</External></div>
      <div className="hero-social"><External href={github}><Github size={16} />GitHub</External><External href="https://www.linkedin.com/in/santhosh-madha/"><Linkedin size={16} />LinkedIn</External><a href={`mailto:${email}`}><Mail size={16} />Email me</a></div>
    </div>
    <div className="portrait-composition">
      <div className="portrait-label"><span>BASED IN BUFFALO, NY</span><span>01 / INTRO</span></div>
      <div className="portrait-frame"><img src={portrait} alt="Santhosh Reddy Madha" fetchPriority="high" width="1086" height="1448" /><div className="portrait-caption"><span>Curiosity, tested in code.</span><span>Santhosh Reddy Madha</span></div></div>
      <div className="portrait-note"><span className="note-symbol"><BookOpen size={22} /></span><div><strong>Research meets engineering</strong><span>Speech · Language · Healthcare AI</span></div></div>
    </div>
  </section>;
}

function SectionHeading({ number, label, title, children }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span> / {label}</p><h2>{title}</h2></div>{children && <p>{children}</p>}</div>;
}

function RagCaseStudy() {
  return <article className="feature-project" aria-labelledby="rag-title">
    <div className="feature-top">
      <div className="feature-copy">
        <div className="project-kicker"><span className="project-number">01</span> FEATURED BUILD <span className="project-type">LOCAL AI APPLICATION</span></div>
        <h3 id="rag-title">Answers are useful.<br /><span>Evidence is better.</span></h3>
        <p className="project-name">Healthcare Knowledge Assistant</p>
        <p>A local RAG application that answers questions from saved healthcare documents—and makes the retrieved evidence visible.</p>
        <div className="tags">{['Python', 'FAISS + BM25', 'Llama 3.1', 'Ollama'].map(t => <span key={t}>{t}</span>)}</div>
        <div className="feature-links"><External href={rag} className="text-link"><Github size={17} />Explore the code</External><External href={`${rag}/blob/main/docs/demo.md`} className="text-link">Demo walkthrough</External></div>
      </div>
      <figure className="project-preview"><div className="preview-header"><span className="window-dots"><i /><i /><i /></span><span>Answer + source evidence</span><Check size={15} /></div><div className="screenshot-viewport"><img src={ragScreenshot} alt="Actual Healthcare Knowledge Assistant response displaying an answer, quoted evidence, and an original-source link" width="639" height="641" loading="lazy" /></div><figcaption>Actual application · MedQuAD collection · Local demo</figcaption></figure>
    </div>
    <div className="project-metrics"><div><strong>500</strong><span>MedQuAD answer records</span></div><div><strong>1,020</strong><span>Searchable document chunks</span></div><div><strong>28 / 30</strong><span>Expected record retrieved in top 3*</span></div></div>
    <p className="metric-context">*Sampled development questions. Measures retrieval, not answer accuracy or clinical validity.</p>
    <details className="case-study"><summary><span>Inside the build <span className="summary-hint">Architecture, decisions & evaluation</span></span><span className="expand-icon" aria-hidden="true">+</span></summary><div className="case-study-body">
      <div className="case-columns"><div><p className="eyebrow">THE PROBLEM</p><h4>Make answers inspectable.</h4><p>A fluent response can still be unsupported. I built a pipeline that keeps the original sources attached, so a reader can inspect the passages behind an answer.</p></div><div><p className="eyebrow">WHAT I BUILT</p><h4>From documents to evidence.</h4><p>Document ingestion, saved indexes, hybrid retrieval, local generation, and structure and quote checks—connected through a browser interface with collection selection.</p></div></div>
      <div className="pipeline" aria-label="RAG pipeline: saved documents, hybrid search, local generation, evidence checks">{[[Layers, '01', 'Prepare', 'Chunks + source metadata'], [Search, '02', 'Retrieve', 'FAISS + BM25 → rank fusion'], [Braces, '03', 'Generate', 'Local Llama + JSON schema'], [Check, '04', 'Check', 'Source labels + quote matching']].map(([Icon, num, name, desc]) => <div key={num}>{createElement(Icon, { size: 21, 'aria-hidden': true })}<span>{num}</span><strong>{name}</strong><p>{desc}</p></div>)}</div>
      <div className="case-columns"><div><h4>Why hybrid retrieval?</h4><p>Semantic search captures related meaning; BM25 retains exact keyword matches. Reciprocal-rank fusion combines their rankings. On 17 answerable CDC development questions, top-3 retrieval improved from 15/17 to 17/17, with some rank-one regressions on older questions.</p></div><div><h4>What the checks don’t prove</h4><p>A matching quote does not establish that it supports the whole answer. This is a single-user educational demo, with small development evaluations—not a clinically validated or production healthcare system.</p></div></div>
      <External href={`${rag}/blob/main/docs/development-history.md`} className="text-link">Read experiments & limitations</External>
    </div></details>
  </article>;
}

function DeliveryCaseStudy() {
  return <article className="feature-project delivery-project" aria-labelledby="delivery-title">
    <div className="feature-top">
      <div className="feature-copy">
        <div className="project-kicker"><span className="project-number">02</span> FEATURED BUILD <span className="project-type">DEPLOYED ML API</span></div>
        <h3 id="delivery-title">From delivery data<br /><span>to a working API.</span></h3>
        <p className="project-name">Delivery Intelligence & ETA Reliability</p>
        <p>I built an application that predicts delivery duration at courier acceptance, saves each prediction, and records actual arrival times to measure error.</p>
        <div className="tags">{['CatBoost', 'FastAPI', 'PostgreSQL', 'Docker', 'MLflow', 'GitHub Actions'].map(t => <span key={t}>{t}</span>)}</div>
        <div className="feature-links"><External href={delivery} className="text-link"><Github size={17} />Explore the code</External><External href={deliveryDemo} className="text-link">Live API docs</External></div>
        <p className="demo-access">Prediction requests need an API key. <a href={`mailto:${email}?subject=Delivery%20ETA%20demo%20access`}>Ask me for demo access</a>. Free hosting may take a moment to wake up.</p>
      </div>
      <div className="delivery-result" aria-label="Verified cloud demo result">
        <p className="eyebrow">VERIFIED CLOUD DEMO · OCT 2026</p>
        <h4>Predict. Store. Measure.</h4>
        <dl><div><dt>Predicted duration</dt><dd>32.26 <span>min</span></dd></div><div><dt>Simulated actual duration</dt><dd>35.00 <span>min</span></dd></div><div><dt>Absolute error</dt><dd>2.74 <span>min</span></dd></div></dl>
        <p>Render API → CatBoost → Neon PostgreSQL</p>
        <p>Prediction and outcome saved with the same ID. This synthetic example verifies the application flow, not real-world accuracy.</p>
      </div>
    </div>
    <div className="project-metrics"><div><strong>6.73 min</strong><span>CatBoost validation MAE</span></div><div><strong>274,461</strong><span>Validation orders across four time splits</span></div><div><strong>3 models</strong><span>Ridge, random forest, and CatBoost</span></div></div>
    <p className="metric-context">Historical development evaluation, not an untouched final holdout. A training-median baseline was also included.</p>
    <details className="case-study"><summary><span>Inside the build <span className="summary-hint">Model selection, deployment & limitations</span></span><span className="expand-icon" aria-hidden="true">+</span></summary><div className="case-study-body">
      <div className="case-columns"><div><h4>Why CatBoost?</h4><p>I compared models using the same features and chronological splits. CatBoost had the lowest MAE on all four days: 6.73 minutes overall, versus 6.83 for Ridge and 7.17 for random forest. The advantage over Ridge is modest; Ridge trains faster and performs better on unseen couriers.</p></div><div><h4>Beyond the notebook</h4><p>Shared feature code connects training and inference. The Docker image verifies the saved model’s checksum, FastAPI validates requests, and PostgreSQL stores predictions and outcomes. I tested the deployed flow and confirmed requests without an API key are rejected.</p></div></div>
      <div className="case-columns"><div><h4>Testing and deployment</h4><p>GitHub Actions runs Python and PostgreSQL integration tests and a local Docker build check. Render hosts the API and Neon hosts the database. MLflow tracks experiments locally; delivery outcomes support later performance reports.</p></div><div><h4>What this demonstrates</h4><p>A deployed educational ML system for on-demand orders, from model comparison to outcome tracking. Demo records are excluded from real-performance reports. Live accuracy, sustained cloud load, and automatic retraining are not established.</p></div></div>
      <External href={`${delivery}/blob/main/docs/model_comparison.md`} className="text-link">Read the model comparison</External>
    </div></details>
  </article>;
}

const projects = [
  { num: '03', category: 'REINFORCEMENT LEARNING', title: 'Learning to navigate.', name: 'Autonomous Vehicle Navigation', description: 'DQN and DDQN agents for simulated navigation, with collision-aware rewards and transfer learning across environments.', evidence: 'Reported 15% improvement in course completion time', tags: ['PyTorch', 'DQN / DDQN', 'Reward shaping'], url: `${github}/Reinforcement-Learning-for-Autonomous-Vehicle-Navigation`, details: 'Implemented and compared deep reinforcement learning agents, shaped rewards around progress and collisions, and explored transfer to another environment. The reported result is a project-specific simulation outcome, not a real-world driving benchmark.' },
  { num: '04', category: 'LOW-RESOURCE NLP', title: 'Language deserves context.', name: 'Telugu Sentiment Analysis', description: 'A sentiment analysis pipeline built around Telugu YouTube comments, dataset annotation, and multilingual model comparisons.', evidence: '1,287 annotated comments · Reported LaBSE F1: 0.80', tags: ['Hugging Face', 'LaBSE', 'XLM-R / mBERT'], url: `${github}/telugu-sentiment-dataset`, details: 'Curated and annotated the dataset, evaluated LaBSE, XLM-R and mBERT, and compared transformer approaches with traditional machine learning classifiers. The reported F1 is specific to this project’s evaluation.' },
];

function Projects() {
  return <section id="projects" className="work-section section-pad"><div className="shell">
    <SectionHeading number="02" label="SELECTED WORK" title="Built to answer real questions.">A closer look at the systems I build, the decisions behind them, and how I evaluate the results.</SectionHeading>
    <RagCaseStudy />
    <DeliveryCaseStudy />
    <div className="project-grid">{projects.map(p => <article className="secondary-project" key={p.num}><div className="project-kicker"><span className="project-number">{p.num}</span>{p.category}</div><h3>{p.title}</h3><p className="project-name">{p.name}</p><p>{p.description}</p><div className="project-evidence">{p.evidence}</div><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><details className="small-details"><summary>Approach & evaluation <span aria-hidden="true">+</span></summary><p>{p.details}</p></details><External href={p.url} className="text-link"><Github size={17} />View project</External></article>)}</div>
    <div className="more-work"><span>ALSO BUILT</span><External href={`${github}/Vehicle-Routing-Problem-VRP-Optimization-for-Delivery-Services`}>Delivery route optimization</External><External href={`${github}/-Superstore-sales-analysis`}>Retail analytics with Spark & SQL</External></div>
  </div></section>;
}

const papers = [
  { topic: 'HEALTHCARE · AUDIO', title: 'Vocal Fold Cancer Diagnosis', description: 'Combining nonlinear signal analysis and acoustic features for voice-based classification.', venue: 'Springer · 2025', full: 'Vocal Fold Cancer Diagnosis: Leveraging Nonlinear and Linear Features for Accurate Detection', link: 'https://doi.org/10.1007/978-981-96-5732-2_11' },
  { topic: 'SPEECH · LOW-RESOURCE AI', title: 'Hate Speech Detection in Telugu', description: 'Exploring audio-driven detection in a low-resource language, with ethical and secure systems in mind.', venue: 'Springer · 2026', full: 'Audio Driven Detection of Hate Speech in Telugu: Toward Ethical and Secure CPS', link: 'https://doi.org/10.1007/978-3-032-09917-4_3' },
  { topic: 'BIOINFORMATICS · NLP', title: 'Learning from DNA Sequences', description: 'Applying language-inspired representations and Neural Tangent Kernel methods to sequence classification.', venue: 'Elsevier · 2025', full: 'Exploring NTK Kernel and NLP-Based Approach for Robust DNA Sequence Classification', link: 'https://doi.org/10.1016/j.procs.2025.04.524' },
];

function Research() {
  return <section id="research" className="research-section section-pad"><div className="shell research-layout"><div className="research-intro"><p className="eyebrow"><span>03</span> / PUBLISHED RESEARCH</p><h2>Questions worth<br /><em>going deeper on.</em></h2><p>My research explores how AI can learn from speech, language, and biological signals.</p><div className="research-count"><strong>03</strong><span>Publications across<br />Springer & Elsevier</span></div></div><div className="paper-list">{papers.map((p, i) => <article key={p.link} className="paper"><span className="paper-number">0{i + 1}</span><div><p className="eyebrow">{p.topic}</p><h3>{p.title}</h3><p>{p.description}</p><div className="paper-footer"><span>{p.venue}</span><External href={p.link} aria-label={`Read paper: ${p.full}`}>Read paper</External></div></div></article>)}</div></div></section>;
}

function About() {
  return <section id="experience" className="about-section section-pad shell"><SectionHeading number="04" label="THE PERSON BEHIND THE WORK" title="An engineer’s mindset. A researcher’s curiosity." />
    <div className="about-layout"><div className="about-copy"><p className="lead">I’m interested in what happens between a promising model and a useful system.</p><p>At the University at Buffalo, I work on multimodal AI and efficient model design. Across my projects, I connect data preparation, modeling, evaluation, and interfaces—so the work can be inspected beyond a notebook.</p><p>I’m looking for AI engineering and data science opportunities where I can contribute to applied machine learning and keep asking better questions.</p><External href={resume} className="text-link" id="resume">View my full résumé</External></div>
    <div className="timeline"><article><span className="timeline-date">OCT 2025 — PRESENT</span><h3>Research Assistant</h3><p className="organization">University at Buffalo, SUNY</p><p>Multimodal learning, efficient AI systems, and end-to-end machine learning pipelines.</p></article><article><span className="timeline-date">APR — JUN 2025</span><h3>Research Intern</h3><p className="organization">FLAME University</p><p>Low-resource NLP, dataset creation, preprocessing, and model evaluation.</p></article><article id="education"><span className="timeline-date">EDUCATION</span><h3>MS, Data Science</h3><p className="organization">University at Buffalo, SUNY</p><p>Aug 2025 – Dec 2026</p><p style={{ marginTop: '16px' }}><strong>BTech, Computer Science (Artificial Intelligence)</strong><br />Amrita Vishwa Vidyapeetham, India · 2021–2025</p></article></div></div>
    <div className="skills-strip" id="skills"><p className="eyebrow">TOOLS I WORK WITH</p><div>{['Python', 'SQL', 'PyTorch', 'Hugging Face', 'Scikit-learn', 'Docker', 'Git'].map(tool => <span key={tool}>{tool}</span>)}</div><details className="toolkit-details"><summary>Full toolkit <span aria-hidden="true">+</span></summary><div className="toolkit-grid"><p><strong>Languages</strong>Python, SQL, Java, Bash</p><p><strong>Models & methods</strong>Machine learning, deep learning, NLP, computer vision, multimodal AI, reinforcement learning</p><p><strong>Generative AI</strong>RAG, embeddings, prompt engineering, AI agents, FAISS, BM25, Ollama, ChromaDB, LangChain, LangGraph</p><p><strong>Frameworks</strong>PyTorch, TensorFlow, Hugging Face, Scikit-learn, FastAPI, Streamlit</p><p><strong>Tools & cloud</strong>Docker, MLflow, Git, GitHub Actions, AWS, Linux, CI/CD</p><p><strong>Databases</strong>MySQL, PostgreSQL</p></div></details></div>
  </section>;
}

function Contact() {
  return <footer id="contact" className="contact-section"><div className="shell"><div className="contact-top"><div><p className="eyebrow">05 / WHAT’S NEXT</p><h2>Let’s build something<br /><span>worth putting to work.</span></h2><p>Open to AI engineering, data science, and applied research opportunities.</p></div><a href={`mailto:${email}`} className="contact-button">Get in touch <ArrowUpRight size={24} /></a></div><div className="contact-bottom"><a className="email-link" href={`mailto:${email}`}>{email}</a><div><External href={github}>GitHub</External><External href="https://www.linkedin.com/in/santhosh-madha/">LinkedIn</External><External href={resume}>Résumé</External></div></div><div className="footer-meta"><span>© {new Date().getFullYear()} Santhosh Reddy Madha</span><a href="#home">Back to top <ArrowRight size={15} /></a></div></div></footer>;
}

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navigation /><main id="main"><Hero /><div className="focus-band"><div className="shell"><span>RESEARCH TO IMPLEMENTATION</span><p>Retrieval-augmented generation <i />Multimodal learning <i />Low-resource NLP</p></div></div><Projects /><Research /><About /></main><Contact /></>;
}
