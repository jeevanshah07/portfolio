import Link from "next/link";

const linkClass = "text-sky-400 underline hover:text-sky-300";

export function help() {
  return "welcome · whois · education · work · projects · socials · email · resume · history · clear";
}

export function whoami() {
  return "visitor@jeevanshah.dev";
}

export function whois() {
  return "Jeevan Shah · Rutgers CS and mathematics student · full-stack developer · Formula Racing electronics and software lead";
}

export function education() {
  return "Rutgers University Honors College · B.S. Computer Science + B.S. Mathematics · Expected May 2028";
}

export function work() {
  return (
    <div>
      <p>Rutgers Open System Solutions · Fullstack Developer · Jan 2026–present</p>
      <p>Search across 150K+ links; accessibility score improved from 4.2/10 to 9.2/10.</p>
      <br />
      <p>Rutgers Formula Racing · Electronics &amp; Software Lead · Jun 2026–present</p>
      <p>Leading electronics and software work; building vehicle telemetry and firmware.</p>
      <br />
      <Link className={linkClass} href="/#experience">Read more on the homepage ↗</Link>
    </div>
  );
}

export function projects() {
  return (
    <div>
      <p><a className={linkClass} href="https://github.com/rutgers-fsae/daq-website" target="_blank" rel="noopener noreferrer">Vehicle telemetry explorer ↗</a> · React, Plotly, FastAPI, pandas</p>
      <p><a className={linkClass} href="https://github.com/rutgers-fsae/vectorNav" target="_blank" rel="noopener noreferrer">VN-300 data logger ↗</a> · Python, C++, Raspberry Pi</p>
      <p><a className={linkClass} href="https://github.com/jeevanshah07/amarel-interface" target="_blank" rel="noopener noreferrer">Amarel Interface ↗</a> · Flask, Paramiko, SQLite</p>
      <br />
      <Link className={linkClass} href="/#projects">Read project details on the homepage ↗</Link>
    </div>
  );
}

export function renderSocials() {
  return (
    <div>
      <a className={linkClass} href="https://github.com/jeevanshah07" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      <br />
      <a className={linkClass} href="https://linkedin.com/in/jshah07" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
    </div>
  );
}

export function email() {
  return <a className={linkClass} href="mailto:jeevandshah@gmail.com">Email Jeevan ↗</a>;
}

export function resume() {
  return <a className={linkClass} href="/resume.pdf">Open current resume ↗</a>;
}

export function history(commands: string[]) {
  return commands.join("\n");
}

export function welcome() {
  return (
    <div>
      <p>Welcome to Jeevan Shah&apos;s portfolio.</p>
      <p>Type <span className="text-green-400">help</span> for commands, or <Link className={linkClass} href="/">browse the homepage ↗</Link>.</p>
    </div>
  );
}

export function commandNotFound(command: string) {
  return <span>Command <span className="text-red-500">{command}</span> not found. Type help.</span>;
}
