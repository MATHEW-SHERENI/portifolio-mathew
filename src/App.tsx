import { useState, useEffect } from 'react'
import './index.css'
import './App.css'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="portrait">
      <header className="header">
        <div className="logo">MS</div>
        <nav className="nav">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </header>

      <section className="hero">
        <p className="greeting">Heyo. I'm</p>
        <h1 className="title">Mathew<br/>Shereni</h1>
        <p className="subtitle">
          Software Engineer, Tech Lead, and open-source enthusiast building reliable backend systems and collaborative development teams.
        </p>
        <div className="meta">
          <span>📍 Saint Louis, MO</span>
          <a className="email" href="mailto:mashereni@gmail.com">✉ mashereni@gmail.com</a>
          <a className="email" href="tel:+13142801084">📞 +1 (314) 280-1084</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/MATHEW-SHERENI" className="social-link" title="GitHub" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </a>
          <a href="www.linkedin.com/in/mathew-shereni-213130aa" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="mailto:mashereni@gmail.com" className="social-link" title="Email" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-header">
          <span className="section-icon">▦</span>
          <h2>Selected Projects</h2>
          <a href="https://github.com/MATHEW-SHERENI" className="section-link" target="_blank" rel="noopener noreferrer">View GitHub →</a>
        </div>
        <div className="project-grid">
          <a href="https://github.com/oss-slu/material-derailleur" className="project-card" target="_blank" rel="noopener noreferrer">
            <h3>Material-Derailleur</h3>
            <p className="project-desc">Open-source donation and inventory management platform for 3D-printing manufacturing. Leading backend, contributor onboarding, and architectural decisions as Tech Lead.</p>
            <div className="tags">
              <span className="tag">Spring Boot</span>
              <span className="tag">Java</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">OSS</span>
            </div>
          </a>
          <a href="#" className="project-card">
            <h3>Research Assistant</h3>
            <p className="project-desc">Chrome extension leveraging Java, Spring Boot, and Google Gemini API to provide AI-powered summaries of large web texts, streamlining academic research workflows.</p>
            <div className="tags">
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">Gemini AI</span>
              <span className="tag">Chrome Extension</span>
            </div>
          </a>
          <a href="#" className="project-card">
            <h3>Real-Time Chat</h3>
            <p className="project-desc">Real-time messaging application built with Spring Boot, WebSocket, STOMP, and Thymeleaf for instant communication with a smooth user experience.</p>
            <div className="tags">
              <span className="tag">Spring Boot</span>
              <span className="tag">WebSocket</span>
              <span className="tag">Thymeleaf</span>
              <span className="tag">Java</span>
            </div>
          </a>
          <a href="#" className="project-card">
            <h3>Email Assistant</h3>
            <p className="project-desc">Java/Spring Boot email assistant web app that helps reply to Gmail messages using Google's Gemini AI for smart email composition.</p>
            <div className="tags">
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">Gemini AI</span>
              <span className="tag">Gmail API</span>
            </div>
          </a>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-header">
          <span className="section-icon">⚡</span>
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>DevOps & Cloud</h4>
            <p>Docker, Kubernetes, AWS, Oracle Cloud, CI/CD, IaC</p>
          </div>
          <div className="skill-category">
            <h4>Languages</h4>
            <p>Java, Python, C#, SQL, TypeScript</p>
          </div>
          <div className="skill-category">
            <h4>Backend</h4>
            <p>Spring Boot, Node.js, REST APIs</p>
          </div>
          <div className="skill-category">
            <h4>Frontend</h4>
            <p>React, Angular, TypeScript</p>
          </div>
          <div className="skill-category">
            <h4>Databases</h4>
            <p>PostgreSQL, MySQL, MongoDB, Firebase</p>
          </div>
          <div className="skill-category">
            <h4>Soft Skills</h4>
            <p>Team leadership, mentoring, communication, process improvement</p>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-header">
          <span className="section-icon">▹</span>
          <h2>Experience</h2>
        </div>
        <div className="experience-list">
          <div className="experience-item">
            <h3 className="role">Tech Lead — Open-Source Program</h3>
            <p className="company">Saint Louis University</p>
            <p className="date">Saint Louis, MO · Dec 2025 – Present</p>
            <ul>
              <li>Leading backend development for OSS-SLU Material-Derailleur, ensuring reliability, scalability, and clear documentation</li>
              <li>Coordinating contributor onboarding and fostering collaborative team rituals</li>
              <li>Driving process improvements and architectural decisions</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3 className="role">IT Officer</h3>
            <p className="company">ACOL Chemical Holdings</p>
            <p className="date">Zimbabwe · Mar 2022 – Aug 2025</p>
            <ul>
              <li>Managed IT infrastructure with focus on secure production environments</li>
              <li>Automated backup and recovery ensuring data integrity</li>
              <li>Developed and deployed company website with secure hosting & monitoring</li>
              <li>Provided technical training to staff on new tools and secure workflows</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-header">
          <span className="section-icon">📚</span>
          <h2>Education</h2>
        </div>
        <div className="education-list">
          <div className="education-item">
            <h3 className="degree">Master of Science in Software Engineering</h3>
            <p className="school">Saint Louis University</p>
            <p className="year">Saint Louis, MO · Expected May 2027</p>
          </div>
          <div className="education-item">
            <h3 className="degree">Master's in Information Systems Management</h3>
            <p className="school">Midlands State University</p>
            <p className="year">Zimbabwe · 2024</p>
          </div>
          <div className="education-item">
            <h3 className="degree">Bachelor of Information Technology (Honors)</h3>
            <p className="school">Zimbabwe Open University</p>
            <p className="year">Zimbabwe · 2022</p>
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="section-header">
          <span className="section-icon">🏅</span>
          <h2>Certifications</h2>
        </div>
        <div className="certifications">
          <a href="#" className="cert" target="_blank" rel="noopener noreferrer">Oracle Certified Java Programmer</a>
          <a href="#" className="cert" target="_blank" rel="noopener noreferrer">Oracle Cloud Infrastructure Associate</a>
          <a href="#" className="cert" target="_blank" rel="noopener noreferrer">Foundational C# with Microsoft</a>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Mathew Shereni</span>
        <span>Built with React + TypeScript · Cloudflare Pages</span>
      </footer>
    </div>
  )
}

export default App
