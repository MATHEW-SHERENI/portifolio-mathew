import { useState, useEffect } from 'react'
import './index.css'
import './App.css'
import mathewLogo from './assets/mathewLogo.png'
import profilePic from './assets/profilePic.jpeg'
import resumePdf from './assets/MATHEWSHERENI_RESUME.pdf'
import csharpCertPreview from './assets/csharp-cert-preview.png'
import oracleJavaBadge from './assets/oracle-java-badge.png'
import oracleOciBadge from './assets/oracle-oci-badge.png'
import realtimeChatPreview from './assets/realtime-chat-preview.png'

const ROLES = [
  'Software Engineer',
  'Tech lead',
  'DevOps Engineer',
  'Backend developer',
  'Open-source contributor',
  'Mentor',
  'Team builder',
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
      from Saint Louis, USA
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
        <a
          className="nav-name hos-500"
          href="https://mathewshereni.com/"
        >
          Mathew Shereni
        </a>
        <a
          className="nav-text-link"
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
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
        <a
          className="nav-text-link hos-350"
          href="https://www.linkedin.com/in/mathew-shereni-213130aa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
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
                href={resumePdf}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
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
          <a
            href="https://zjspt.org/"
            className="project-card project-card-featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-visual project-visual-zjspt" aria-hidden="true">
              <span className="project-visual-badge">Live</span>
              <span className="project-visual-kicker">Academic publishing</span>
              <span className="project-visual-title">ZJSPT</span>
              <span className="project-visual-sub">Zambian Journal of Sports Physical Therapy</span>
            </div>
            <div className="project-body">
              <h3>Zambian Journal of Sports Physical Therapy</h3>
              <p className="project-desc">
                Designed and built the official open-access journal website for Zambia&apos;s
                leading sports physiotherapy publication—manuscript submissions, current issues,
                peer-review information, and editorial contact in one responsive platform.
              </p>
              <div className="tags">
                <span className="tag">Web Development</span>
                <span className="tag">Responsive UI</span>
                <span className="tag">Academic Publishing</span>
                <span className="tag">Zambia</span>
              </div>
              <span className="project-cta">Visit zjspt.org →</span>
            </div>
          </a>
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
          <article className="project-card project-card-with-preview">
            <a
              href="https://real-time-chat-web-app-bqsb.onrender.com"
              className="project-preview-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={realtimeChatPreview}
                alt="Real-Time Chat Application showing live messaging and file attachments in dark and light mode"
                className="project-preview-img"
              />
            </a>
            <div className="project-preview-body">
              <h3>Real-Time Chat (Zimchat)</h3>
              <p className="project-desc">
                Spring Boot chat app with STOMP WebSockets for instant messaging, file attachments,
                and timestamps. Containerised with Docker and shipped via CI/CD on GitHub Actions
                to Render.
              </p>
              <div className="tags">
                <span className="tag">Spring Boot</span>
                <span className="tag">WebSocket</span>
                <span className="tag">Docker</span>
                <span className="tag">GitHub Actions</span>
              </div>
              <div className="project-card-actions">
                <a
                  href="https://real-time-chat-web-app-bqsb.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo →
                </a>
                <a
                  href="https://github.com/MATHEW-SHERENI/Real-time-chat-web-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </article>
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
            <p>Docker, Kubernetes, AWS, Oracle Cloud, CI/CD, IaC, Jenkins, Docker, Kubernetes</p>
          </div>
          <div className="skill-category">
            <h4>Languages</h4>
            <p>Java, Python, C#, SQL, TypeScript, JavaScript, HTML, CSS</p>
          </div>
          <div className="skill-category">
            <h4>Backend</h4>
            <p>Spring Boot, Node.js, REST APIs</p>
          </div>
          <div className="skill-category">
            <h4>Frontend</h4>
            <p>React, Angular, TypeScript, HTML, CSS</p>
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
          <article className="experience-item experience-item-featured">
            <div className="experience-featured-head">
              <div>
                <h3 className="role">Web Developer</h3>
                <p className="company">Zambian Journal of Sports Physical Therapy (ZJSPT)</p>
                <p className="date">Lusaka, Zambia · Remote · 2024 – Present</p>
              </div>
              <a
                href="https://zjspt.org/"
                className="experience-site-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                zjspt.org ↗
              </a>
            </div>
            <p className="experience-lead">
              End-to-end delivery of the journal&apos;s public-facing platform—translating editorial
              needs into a credible, accessible site for authors, reviewers, and readers across Africa.
            </p>
            <ul>
              <li>Built a responsive, mobile-first site highlighting peer-reviewed research, submission workflows, and diamond open-access publishing</li>
              <li>Structured content for current issues, author guidelines, reviewer recruitment, and editorial contact</li>
              <li>Deployed and maintained production hosting with a professional presence aligned to sports physiotherapy in the global south</li>
            </ul>
          </article>
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
          <a
            href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=6467BA695BF5817D6F80AA0B6E8E0EBE8E9E20A0E2DBCD1FFB6CAFC91157AD4B"
            className="cert cert-with-preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={oracleJavaBadge}
              alt="Oracle Certified Associate Java SE 8 Programmer badge"
              className="cert-preview cert-preview-badge"
            />
            <span className="cert-label">Oracle Certified Java Programmer</span>
            <span className="cert-meta">Oracle · Java SE 8 · View credential →</span>
          </a>
          <a
            href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=095341BB941A5930023EE54A315A8458F18599A77AEC5F3186DD18DA4880EF91"
            className="cert cert-with-preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={oracleOciBadge}
              alt="Oracle Cloud Infrastructure Foundations Associate 2023 badge"
              className="cert-preview cert-preview-badge"
            />
            <span className="cert-label">Oracle Cloud Infrastructure Associate</span>
            <span className="cert-meta">Oracle · OCI Foundations 2023 · View credential →</span>
          </a>
          <a
            href="https://freecodecamp.org/certification/fcc92e1e538-cae0-4f07-8e45-ffd5c525716e/foundational-c-sharp-with-microsoft"
            className="cert cert-with-preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={csharpCertPreview}
              alt="Foundational C# with Microsoft certificate awarded to Mathew Shereni, September 6, 2023"
              className="cert-preview"
            />
            <span className="cert-label">Foundational C# with Microsoft</span>
            <span className="cert-meta">freeCodeCamp · Sep 2023 · View credential →</span>
          </a>
        </div>
      </section>

        <footer className="footer">
          <span>© 2026 Mathew Shereni</span>
          <span className="footer-links">
            <a href="https://mathewshereni.com/" target="_blank" rel="noopener noreferrer">
              mathewshereni.com
            </a>
            <a
              href="https://www.linkedin.com/in/mathew-shereni-213130aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <img src={mathewLogo} alt="" className="nav-avatar" />
          </span>
        </footer>
      </div>
    </div>
  )
}

export default App
