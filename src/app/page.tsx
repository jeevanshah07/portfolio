import Image from "next/image";
import localFont from "next/font/local";
import GitHubActivity from "./github-activity";
import "./portfolio.css";

const jetBrainsMono = localFont({ src: "./fonts/JetBrainsMono-Latin.woff2", weight: "400 800", display: "swap", variable: "--font-jetbrains-mono" });

export const dynamic = "force-dynamic";

const features = [
  {
    number: "01",
    label: "The web application",
    title: "Making race data readable.",
    description:
      "A telemetry explorer for Rutgers Formula Racing. Upload a run, find sensor channels, and turn raw CSV data into interactive plots and useful statistics.",
    detail: "React / Plotly / FastAPI / pandas",
    href: "https://github.com/rutgers-fsae/daq-website",
  },
  {
    number: "02",
    label: "The data pipeline",
    title: "Recording every run.",
    description:
      "A Raspberry Pi logger for the VN-300 that keeps IMU, GNSS, and INS readings synchronized, with a live dashboard for recording and device health.",
    detail: "Python / C++ / Raspberry Pi",
    href: "https://github.com/rutgers-fsae/vectorNav",
  },
  {
    number: "03",
    label: "The research tool",
    title: "A simpler path to compute.",
    description:
      "A Flask interface for Rutgers’ Amarel supercomputer that uploads Python workloads, generates SLURM job scripts, and tracks submissions.",
    detail: "Python / Flask / Paramiko / SQLite",
    href: "https://github.com/jeevanshah07/amarel-interface",
  },
];

export default function Home() {
  return (
    <div className={`portfolio ${jetBrainsMono.variable}`} id="top">
      <div className="ep-masthead">
        <span>VOL. 01 · SEPTEMBER 2026</span>
        <strong>jeevanshah.dev <em>— portfolio</em></strong>
        <span>RUTGERS · NEW JERSEY</span>
      </div>
      <header className="ep-header">
        <nav aria-label="Main navigation">
          <a href="#story">STORY</a>
          <a href="#work">FEATURED</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <div className="ep-header-right">
          <a href="/resume.pdf">↓ RESUME</a>
        </div>
      </header>

      <main>
        <section className="ep-hero" id="story">
          <div className="ep-hero-copy">
            <p className="ep-kicker">FEATURE · 01 / JEEVAN SHAH</p>
            <h1>Building tools<br /><i>for the work</i><br />that matters<span>.</span></h1>
            <p className="ep-summary"><span>SUMMARY</span> I&apos;m a Rutgers computer science and mathematics student building accessible university software and data systems for Formula Racing. My work moves between the browser, the server, and the car.</p>
            <div className="ep-byline"><span>BY JEEVAN SHAH · 2026</span><a href="#contact">GET IN TOUCH →</a></div>
          </div>
          <div className="ep-hero-visual">
            <div className="ep-graphic">
              <Image src="/JeevanPortrait.jpeg" alt="Jeevan Shah at a Rutgers Formula Racing competition" fill priority sizes="(max-width: 760px) 100vw, 35vw" className="ep-portrait" />
            </div>
            <GitHubActivity />
          </div>
        </section>

        <section className="ep-index" aria-label="In this issue">
          <div><span className="ep-kicker">IN THIS ISSUE</span><a href="#work"><b>I.</b> Featured work <span>Three things, built →</span></a><a href="#experience"><b>II.</b> Experience <span>Where I spend my weeks →</span></a><a href="#contact"><b>III.</b> Contact <span>Write, and I&apos;ll reply →</span></a></div>
          <p>“I like working where software meets a real user, a real system, or a real piece of hardware.”</p>
        </section>

        <section className="ep-section" id="work">
          <div className="ep-section-head"><span className="ep-roman">I.</span><div><p className="ep-kicker">FEATURE</p><h2>Projects, <i>shipping.</i></h2><p>Selected work across data, hardware, and the web.</p></div></div>
          <div className="ep-features">
            {features.map((feature) => (
              <a className="ep-feature" href={feature.href} key={feature.number} target="_blank" rel="noopener noreferrer">
                <div className="ep-feature-top"><span>FIG. {feature.number}</span><span>CASE {feature.number} · SOURCE AVAILABLE</span></div>
                <div className="ep-feature-body"><span className="ep-feature-label">{feature.label}</span><h3>{feature.title}</h3><p>{feature.description}</p></div>
                <div className="ep-feature-bottom"><span>{feature.detail}</span><strong>VIEW PROJECT ↗</strong></div>
              </a>
            ))}
          </div>
        </section>

        <section className="ep-section ep-experience" id="experience">
          <div className="ep-section-head"><span className="ep-roman">II.</span><div><p className="ep-kicker">ENGAGEMENTS</p><h2>Where I spend <i>my weeks.</i></h2><p>Two roles, one habit: make complex work easier to use.</p></div></div>
          <div className="ep-roles">
            <article><div><span className="ep-kicker">● CURRENTLY · JAN 2026 — PRESENT</span><h3>Fullstack Developer</h3><p>Rutgers Open System Solutions</p></div><p>Expanded search across 150K+ links and improved a WAVE AIM accessibility score from 4.2/10 to 9.2/10 for a service supporting 5K+ users.</p></article>
            <article><div><span className="ep-kicker">● CURRENTLY · JUN 2026 — PRESENT</span><h3>Electronics &amp; Software Lead</h3><p>Rutgers Formula Racing</p></div><p>Lead the electronics and software subteam, build telemetry tools, and teach C, Git, and microcontroller flashing to 10+ students.</p></article>
          </div>
        </section>

        <section className="ep-contact" id="contact"><span className="ep-kicker">COLOPHON · CONTACT</span><h2>Write, and<br /><i>I&apos;ll write back.</i></h2><div><a href="mailto:jeevandshah@gmail.com">EMAIL<br /><strong>jeevandshah@gmail.com ↗</strong></a><a href="https://github.com/jeevanshah07" target="_blank" rel="noopener noreferrer">GITHUB<br /><strong>github.com/jeevanshah07 ↗</strong></a><a href="https://linkedin.com/in/jshah07" target="_blank" rel="noopener noreferrer">LINKEDIN<br /><strong>linkedin.com/in/jshah07 ↗</strong></a></div></section>
      </main>
      <footer className="ep-footer"><span>JEEVANSHAH.DEV — PORTFOLIO</span><span>RUTGERS · 2026</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}
