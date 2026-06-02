import { useState, useEffect } from 'react'
import './index.css'
import './App.css'
import mathewLogo from './assets/mathewLogo.png'
import profilePic from './assets/profilePic.jpeg'

const ROLES = [
  'software engineer',
  'tech lead',
  'backend developer',
  'open-source contributor',
  'mentor',
  'team builder',
]

function RoleLine() {
  const [roleIndex, setRoleIndex] = useState(0)
  const role = ROLES[roleIndex]
  const article = /^[aeiou]/i.test(role) ? 'an' : 'a'

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, 1500)
    return () => window.clearInterval(id)
  }, [])

  return (
    <h2 className="hero-role">
      I&apos;m {article}{' '}
      <span key={role} className="hero-role-word">
        {role}
      </span>{' '}
      from Saint Louis
    </h2>
  )
}

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
      <nav className="top-nav" aria-label="Site">
        <img src={mathewLogo} alt="" className="nav-avatar" />
        <span className="nav-name hos-500">Mathew Shereni</span>
        <a className="nav-text-link" href="#experience">
          Experience
        </a>
        <span className="nav-spacer m-hos-750" aria-hidden="true" />
        <a className="nav-text-link m-hos-750" href="mailto:mashereni@gmail.com">
          mashereni@gmail.com
        </a>
        <span className="nav-spacer hos-350" aria-hidden="true" />
        <a
          className="nav-text-link hos-350"
          href="https://github.com/MATHEW-SHERENI"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>

      <div className="content-wrap">
        <header className="hero-header">
          <div className="hero-col hero-col-intro">
            <img
              src={profilePic}
              alt="Mathew Shereni"
              className="hero-avatar"
            />
            <h1 className="hero-greeting">Hello! I&apos;m Mathew</h1>
          </div>
          <div className="hero-col hero-col-bio">
            <RoleLine />
            <p className="hero-bio">
              I love building reliable backend systems and collaborative development teams.
              I&apos;m a lifelong learner with a passion for open source, DevOps, and
              picking up new skills and technologies.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Projects
              </a>
              <a
                href="https://www.linkedin.com/in/mathew-shereni-213130aa"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        <section id="projects" className="section">
        <div className="section-header">
          <span className="section-icon">▦</span>
          <h2>Selected Projects</h2>
          <a href="https://github.com/MATHEW-SHERENI" className="section-link" target="_blank" rel="noopener noreferrer">View GitHub →</a>
        </div>
        <div className="project-grid">
          <a href="https://github.com/oss-slu/material-derailleur" className="project-card" target="_blank" rel="noopener noreferrer">
            <h3>Material-Derailleur</h3>
            <p className="project-desc">Open-source Donation Management System. Leading backend, contributor onboarding, and architectural decisions as Tech Lead.</p>
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
    </div>
  )
}

export default App
