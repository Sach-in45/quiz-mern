import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Home.module.css';

const TOPICS = [
  { id: 'mongodb', label: 'MongoDB', icon: '🍃', desc: 'Queries, aggregation, indexes' },
  { id: 'express', label: 'Express.js', icon: '⚡', desc: 'Routing, middleware, REST' },
  { id: 'react', label: 'React', icon: '⚛️',  desc: 'Hooks, state, components' },
  { id: 'node', label: 'Node.js', icon: '🟢',  desc: 'Event loop, modules, fs' }
];

const DIFFICULTIES = ['easy', 'medium', 'hard'];

const OVERVIEW = [
  { icon: '🍃', name: 'MongoDB', color: '#16a34a', bg: '#dcfce7', desc: 'A NoSQL document database that stores data in flexible JSON-like documents. Perfect for scalable, schema-less data storage.', features: ['Document-based storage', 'Flexible schema', 'Horizontal scaling', 'Rich query language'] },
  { icon: '⚡', name: 'Express.js', color: '#d97706', bg: '#fef3c7', desc: 'A minimal and flexible Node.js web application framework providing a robust set of features for web and mobile apps.', features: ['Minimal & fast', 'Middleware support', 'RESTful routing', 'Template engines'] },
  { icon: '⚛️', name: 'React', color: '#0ea5e9', bg: '#e0f2fe', desc: 'A JavaScript library for building user interfaces. React makes it painless to create interactive UIs with reusable components.', features: ['Component-based', 'Virtual DOM', 'Hooks API', 'Rich ecosystem'] },
  { icon: '🟢', name: 'Node.js', color: '#15803d', bg: '#f0fdf4', desc: "A JavaScript runtime built on Chrome's V8 engine. Enables JavaScript on the server with non-blocking I/O operations.", features: ['Event-driven', 'Non-blocking I/O', 'npm ecosystem', 'Cross-platform'] },
];

const ROADMAPS = {
  '3 Months': {
    label: 'Fast Track', tagline: 'Intensive — best for those who can dedicate 6–8 hrs/day', color: '#ef4444',
    months: [
      { title: 'Month 1 — Foundations', weeks: [
        { week: 'Week 1–2', items: ['HTML, CSS, JavaScript basics', 'ES6+ features (arrow functions, promises)', 'Git & GitHub basics'] },
        { week: 'Week 3–4', items: ['Node.js fundamentals', 'npm & package management', 'Build a simple CLI app'] },
      ]},
      { title: 'Month 2 — Backend & Database', weeks: [
        { week: 'Week 5–6', items: ['Express.js routing & middleware', 'REST API design', 'Authentication with JWT'] },
        { week: 'Week 7–8', items: ['MongoDB & Mongoose', 'CRUD operations', 'Database design patterns'] },
      ]},
      { title: 'Month 3 — React & Deployment', weeks: [
        { week: 'Week 9–10', items: ['React components & JSX', 'useState, useEffect hooks', 'React Router'] },
        { week: 'Week 11–12', items: ['Full MERN project', 'Deploy to Vercel + Render', 'Polish & portfolio'] },
      ]},
    ]
  },
  '6 Months': {
    label: 'Balanced', tagline: 'Recommended — 3–4 hrs/day with solid practice projects', color: '#2563eb',
    months: [
      { title: 'Month 1 — Web & JS Foundations', weeks: [
        { week: 'Month 1', items: ['HTML5, CSS3, Flexbox & Grid', 'JavaScript core concepts', 'DOM manipulation', 'Responsive design'] },
        { week: 'Month 2', items: ['ES6+ deep dive', 'Fetch API & Promises', 'Git workflow', 'Project: Portfolio website'] },
      ]},
      { title: 'Month 3 — Node.js & Express', weeks: [
        { week: 'Week 1–2', items: ['Node.js event loop & modules', 'File system & streams', 'npm ecosystem'] },
        { week: 'Week 3–4', items: ['Express.js in depth', 'Middleware & error handling', 'Project: REST API'] },
      ]},
      { title: 'Month 4 — MongoDB', weeks: [
        { week: 'Week 1–2', items: ['MongoDB setup & shell', 'CRUD operations', 'Mongoose ODM'] },
        { week: 'Week 3–4', items: ['Aggregation pipeline', 'Indexes & performance', 'Auth with bcrypt + JWT'] },
      ]},
      { title: 'Month 5 — React', weeks: [
        { week: 'Week 1–2', items: ['React fundamentals & JSX', 'Props, state, lifecycle', 'React Router v6'] },
        { week: 'Week 3–4', items: ['Hooks: useState, useEffect, useContext', 'Axios & API integration', 'Context API'] },
      ]},
      { title: 'Month 6 — Full Stack Project', weeks: [
        { week: 'Week 1–3', items: ['Plan & build complete MERN app', 'Connect frontend to backend', 'Handle errors & loading states'] },
        { week: 'Week 4', items: ['Deploy: Vercel + Render + Atlas', 'Code review & cleanup', 'Add to portfolio'] },
      ]},
    ]
  },
  '9 Months': {
    label: 'In-Depth', tagline: 'Thorough — 2 hrs/day, covers advanced topics & best practices', color: '#7c3aed',
    months: [
      { title: 'Month 1–2 — Strong Foundations', weeks: [
        { week: 'Month 1', items: ['HTML5 semantics & accessibility', 'CSS advanced (animations, variables)', 'JavaScript ES6+ mastery'] },
        { week: 'Month 2', items: ['Async JS deep dive', 'Browser APIs', 'Project: Interactive UI'] },
      ]},
      { title: 'Month 3–4 — Node & Express Mastery', weeks: [
        { week: 'Month 3', items: ['Node.js architecture', 'Streams, buffers, events', 'Express from scratch'] },
        { week: 'Month 4', items: ['Advanced middleware patterns', 'Security (helmet, cors, rate limiting)', 'Testing with Jest & Supertest'] },
      ]},
      { title: 'Month 5–6 — MongoDB & Auth', weeks: [
        { week: 'Month 5', items: ['Mongoose advanced schemas', 'Aggregation & $lookup', 'Database optimization & indexing'] },
        { week: 'Month 6', items: ['JWT & refresh tokens', 'OAuth & Google login', 'File uploads (Multer + Cloudinary)'] },
      ]},
      { title: 'Month 7–8 — React Advanced', weeks: [
        { week: 'Month 7', items: ['Advanced hooks (useMemo, useCallback)', 'Custom hooks', 'Redux Toolkit / Zustand'] },
        { week: 'Month 8', items: ['React Query for server state', 'Performance optimization', 'Component testing with RTL'] },
      ]},
      { title: 'Month 9 — Pro-Level Launch', weeks: [
        { week: 'Week 1–2', items: ['Architect a production-grade app', 'Docker basics', 'CI/CD with GitHub Actions'] },
        { week: 'Week 3–4', items: ['Deploy & monitor', 'SEO & performance audit', 'Open source contribution'] },
      ]},
    ]
  }
};

const FAQS = [
  { q: 'What is the MERN stack?', a: "MERN stands for MongoDB, Express.js, React, and Node.js. It's a full-stack JavaScript framework that lets you build complete web applications using only JavaScript — from database to server to UI." },
  { q: 'Do I need prior programming experience to learn MERN?', a: 'Basic JavaScript knowledge is recommended. You should be comfortable with variables, functions, arrays, and objects before diving into MERN. HTML & CSS basics also help for the React part.' },
  { q: 'Is MERN stack good for finding jobs in 2025?', a: "Yes! MERN is one of the most in-demand full-stack combinations. Companies love hiring developers who can work across the entire stack, and JavaScript's ubiquity makes MERN developers very versatile." },
  { q: 'What is the difference between SQL and MongoDB?', a: 'SQL databases store data in structured tables with fixed schemas. MongoDB stores data in flexible JSON-like documents, making it easier to work with unstructured or evolving data and better for horizontal scaling.' },
  { q: 'Should I learn REST API or GraphQL with MERN?', a: "Start with REST API — it's simpler, more widely used, and Express makes it straightforward. Once you're comfortable, GraphQL is worth exploring for complex data requirements." },
  { q: 'How long does it take to get job-ready with MERN?', a: 'With consistent practice, most learners are job-ready in 6–9 months. The key is building real projects. Employers care more about your GitHub portfolio than your theoretical knowledge.' },
  { q: 'What is JWT and why is it used in MERN apps?', a: 'JWT (JSON Web Token) is used for authentication. After a user logs in, the server issues a JWT token. The client sends this token with every request to prove identity — without storing sessions on the server.' },
  { q: 'Can I use TypeScript with the MERN stack?', a: "Absolutely! TypeScript adds static typing to JavaScript and is increasingly popular with MERN. React has excellent TypeScript support, and you can use TypeScript with Express and Mongoose too." },
];

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState('mongodb');
  const [selectedDiff, setSelectedDiff] = useState('easy');
  const [activeTab, setActiveTab] = useState('6 Months');
  const [openFaq, setOpenFaq] = useState(null);

  const handleStart = () => {
    if (!user) return navigate('/login');
    navigate(`/quiz?topic=${selectedTopic}&difficulty=${selectedDiff}`);
  };

  return (
    <div className={styles.page}>

      {/* ── HERO / QUIZ SELECTOR ── */}
      <section className={styles.hero}>
        <div className="section-tag">MERN STACK LEARNING PLATFORM</div>
        <h1 className={styles.heroTitle}>
          Master the <span className={styles.hi}>MERN</span> Stack<br />
          One Quiz at a Time
        </h1>
        <p className={styles.heroSub}>
          Test your MongoDB, Express, React & Node.js skills with interactive quizzes,
          track your progress, and compete on the global leaderboard.
        </p>

        <div className={styles.topicGrid}>
          {TOPICS.map((t) => (
            <button key={t.id}
              className={`${styles.topicCard} ${selectedTopic === t.id ? styles.selected : ''}`}
              onClick={() => setSelectedTopic(t.id)}>
              <div className={styles.topicIcon}>{t.icon}</div>
              <div className={styles.topicLabel}>{t.label}</div>
              <div className={styles.topicDesc}>{t.desc}</div>
              <div className={styles.topicCount}>{t.count} questions</div>
              {selectedTopic === t.id && <div className={styles.checkmark}>✓</div>}
            </button>
          ))}
        </div>

        <div className={styles.diffRow}>
          {DIFFICULTIES.map((d) => (
            <button key={d}
              className={`${styles.diffBtn} ${selectedDiff === d ? styles.diffSelected : ''}`}
              onClick={() => setSelectedDiff(d)}>
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </button>
          ))}
        </div>

        <button className={`btn-primary ${styles.startBtn}`} onClick={handleStart}>
          {user ? '🤖 Start AI Quiz →' : 'Sign in to Play →'}
        </button>

        <div className={styles.statsRow}>
          {[{val:'12.4k',key:'quizzes taken'},{val:'4',key:'topics'},{val:'73%',key:'avg score'},{val:'2.1k',key:'players today'}].map(({val,key}) => (
            <div key={key} className={styles.stat}>
              <div className={styles.statVal}>{val}</div>
              <div className={styles.statKey}>{key}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section id="overview" className={styles.section}>
        <div className={styles.sectionHead}>
          <div className="section-tag">WHAT IS MERN?</div>
          <h2 className="section-title">Overview of the MERN Stack</h2>
          <p className="section-sub">
            MERN is a full-stack JavaScript framework. Every layer uses JavaScript,
            making it one of the most productive stacks to learn.
          </p>
        </div>

        <div className={styles.overviewGrid}>
          {OVERVIEW.map((item) => (
            <div key={item.name} className={styles.overviewCard}>
              <div className={styles.overviewIcon} style={{ background: item.bg, color: item.color }}>{item.icon}</div>
              <h3 className={styles.overviewName}>{item.name}</h3>
              <p className={styles.overviewDesc}>{item.desc}</p>
              <ul className={styles.overviewFeatures}>
                {item.features.map((f) => (
                  <li key={f}><span className={styles.featureDot} style={{ background: item.color }} />{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.stackFlow}>
          {['React (UI)', '→', 'Express (API)', '→', 'Node.js (Runtime)', '→', 'MongoDB (DB)'].map((item, i) => (
            <div key={i} className={item === '→' ? styles.arrow : styles.flowBox}>{item}</div>
          ))}
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section id="roadmap" className={styles.section}>
        <div className={styles.sectionHead}>
          <div className="section-tag">LEARNING PATH</div>
          <h2 className="section-title">MERN Stack Roadmap</h2>
          <p className="section-sub">
            Choose a learning pace that fits your schedule. All three paths lead to the same destination — a job-ready MERN developer.
          </p>
        </div>

        <div className={styles.tabs}>
          {Object.keys(ROADMAPS).map((tab) => (
            <button key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              style={activeTab === tab ? { borderColor: ROADMAPS[tab].color, color: ROADMAPS[tab].color, background: `${ROADMAPS[tab].color}12` } : {}}
              onClick={() => setActiveTab(tab)}>
              <span className={styles.tabTitle}>{tab}</span>
              <span className={styles.tabLabel}>{ROADMAPS[tab].label}</span>
            </button>
          ))}
        </div>

        <div className={styles.tabTagline} style={{ color: ROADMAPS[activeTab].color, background: `${ROADMAPS[activeTab].color}10`, border: `1px solid ${ROADMAPS[activeTab].color}30` }}>
          💡 {ROADMAPS[activeTab].tagline}
        </div>

        <div className={styles.roadmapGrid}>
          {ROADMAPS[activeTab].months.map((month, mi) => (
            <div key={mi} className={styles.monthCard}>
              <div className={styles.monthTitle} style={{ color: ROADMAPS[activeTab].color, borderColor: `${ROADMAPS[activeTab].color}25` }}>
                {month.title}
              </div>
              {month.weeks.map((week, wi) => (
                <div key={wi} className={styles.weekBlock}>
                  <div className={styles.weekLabel} style={{ background: `${ROADMAPS[activeTab].color}15`, color: ROADMAPS[activeTab].color }}>{week.week}</div>
                  <ul className={styles.weekItems}>
                    {week.items.map((item) => (
                      <li key={item}><span className={styles.checkIcon} style={{ color: ROADMAPS[activeTab].color }}>✓</span>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className={styles.section}>
        <div className={styles.sectionHead}>
          <div className="section-tag">GOT QUESTIONS?</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">Everything you need to know about learning and working with the MERN stack.</p>
        </div>
        <div className={styles.faqList}>
          {FAQS.map((faq, i) => (
            <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}>
              <button className={styles.faqQuestion} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span className={styles.faqIcon}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <div className={styles.faqAnswer}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to test your MERN skills?</h2>
          <p className={styles.ctaSub}>Join thousands of developers sharpening their skills every day.</p>
          <div className={styles.ctaActions}>
            <button className="btn-primary" onClick={handleStart} style={{ fontSize: 16, padding: '14px 36px' }}>
              {user ? 'Take a Quiz →' : 'Get Started Free →'}
            </button>
            {!user && <button className="btn-outline" onClick={() => navigate('/register')}>Create Account</button>}
          </div>
        </div>
      </section>

    </div>
  );
}
