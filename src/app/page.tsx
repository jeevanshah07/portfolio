const projects = [
  {
    name: "Vehicle telemetry explorer",
    type: "Full-stack · Rutgers Formula Racing",
    description: "Built a web app for uploading vehicle CSV logs, finding sensor channels, and exploring runs with interactive plots and viewport statistics.",
    stack: "React · Plotly · FastAPI · pandas",
    url: "https://github.com/rutgers-fsae/daq-website",
  },
  {
    name: "VN-300 data logger",
    type: "Systems · Rutgers Formula Racing",
    description: "Built a Raspberry Pi logger for synchronized IMU, GNSS, and INS data, with a live dashboard for position, device health, and recording controls.",
    stack: "Python · C++ · Raspberry Pi",
    url: "https://github.com/rutgers-fsae/vectorNav",
  },
  {
    name: "Amarel Interface",
    type: "Full-stack · Personal project",
    description: "Built a Flask interface for Rutgers’ Amarel supercomputer to upload Python workloads, generate SLURM jobs, and track submissions.",
    stack: "Python · Flask · Paramiko · SQLite",
    url: "https://github.com/jeevanshah07/amarel-interface",
  },
];

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jeevan Shah, back to top">JS<span>.</span></a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="mailto:jeevandshah@gmail.com">Contact ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">Jeevan Shah / Rutgers University</p>
            <h1 id="hero-title">Full-stack developer.<br /><span>Systems thinker.</span></h1>
            <p className="hero-intro">I study computer science and mathematics at Rutgers and build accessible web tools, data systems, and software for a Formula Racing car.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">See my work <span aria-hidden="true">↘</span></a>
              <a className="button button-secondary" href="/resume.pdf">Download resume <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <aside className="hero-facts" aria-label="At a glance">
            <div><span className="fact-label">Currently</span><strong>Fullstack Developer</strong><span>Rutgers Open System Solutions</span></div>
            <div><span className="fact-label">Also</span><strong>Electronics &amp; Software Lead</strong><span>Rutgers Formula Racing</span></div>
            <div><span className="fact-label">Education</span><strong>CS + Mathematics</strong><span>Rutgers Honors College · May 2028</span></div>
          </aside>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading"><p className="eyebrow">01 / Experience</p><h2 id="experience-title">Work with measurable impact.</h2></div>
          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-meta"><span>Jan 2026 — Present</span><span>Piscataway, NJ</span></div>
              <div>
                <h3>Fullstack Developer</h3><p className="experience-org">Rutgers Open System Solutions</p>
                <ul>
                  <li>Expanded search across 150K+ links, enabling queries over 13 fields.</li>
                  <li>Raised the WAVE AIM accessibility score from 4.2/10 to 9.2/10 through contrast, labels, and responsive UI fixes.</li>
                  <li>Helped modernize the React frontend and deploy infrastructure for a service supporting 5K+ users and 40M+ visits.</li>
                </ul>
              </div>
            </article>
            <article className="experience-item">
              <div className="experience-meta"><span>Jun 2026 — Present</span><span>Piscataway, NJ</span></div>
              <div>
                <h3>Electronics &amp; Software Lead</h3><p className="experience-org">Rutgers Formula Racing</p>
                <ul>
                  <li>Lead electronics and software work, review contributions, and teach C, Git, and microcontroller flashing to 10+ students.</li>
                  <li>Built a Pi-based VN-300 logger and a web app for exploring vehicle telemetry.</li>
                  <li>Previously developed STM32 firmware for 90+ thermistors; bench testing showed 80% less peak-to-peak sensor noise.</li>
                </ul>
                <a className="text-link" href="https://github.com/rutgers-fsae/firmware" target="_blank" rel="noopener noreferrer">Explore team firmware ↗</a>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading"><p className="eyebrow">02 / Selected projects</p><h2 id="projects-title">From idea to working tool.</h2><p>A mix of full-stack applications and software built for real hardware.</p></div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-card-top"><span className="project-number">0{index + 1}</span><span className="project-arrow" aria-hidden="true">↗</span></div>
                <div><p className="project-category">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p></div>
                <div className="project-card-bottom"><p>{project.stack}</p><a href={project.url} target="_blank" rel="noopener noreferrer">View source ↗</a></div>
              </article>
            ))}
          </div>
          <div className="more-projects">
            <h3>More projects</h3>
            <a href="https://github.com/jeevanshah07/derivative-generator" target="_blank" rel="noopener noreferrer">Derivative Practice Generator <span>React · TypeScript · math.js ↗</span></a>
            <a href="https://github.com/jeevanshah07/study" target="_blank" rel="noopener noreferrer">Study <span>Next.js · TypeScript · MongoDB ↗</span></a>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="section-heading"><p className="eyebrow">03 / About</p><h2 id="about-title">Software, math, and the physical world.</h2></div>
          <div className="about-content">
            <p>I&apos;m a Rutgers Honors College student pursuing bachelor&apos;s degrees in computer science and mathematics, graduating in May 2028. I enjoy making complex systems easier to understand and use, whether that means improving a university service or tracing sensor data from a race car to a dashboard.</p>
            <div className="about-links">
              <a href="/resume.pdf">Resume ↗</a>
              <a href="https://github.com/jeevanshah07" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href="https://linkedin.com/in/jshah07" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">04 / Get in touch</p><h2 id="contact-title">Let&apos;s talk about what you&apos;re building.</h2>
          <a href="mailto:jeevandshah@gmail.com">jeevandshah@gmail.com ↗</a>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Jeevan Shah</span>
        <a href="/terminal">Open the terminal ↗</a>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
