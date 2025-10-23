import Link from "next/link";

export function help(): string {
  return `whoami - who are you\nwhois - who is Jeevan Shah\nprojects - learn about some of my notable personal projects\neducation - educational background\nwork - read about my previous work experience\nsocials - check out how to connect with me\nhistory - view command history\nask [question] - ask any question\nemail - send me an email\nresume - view my formal resume\nclear - clears the terminal\n`;
}

export function whoami(): string {
  return "visitor@jeevan.shah.dev\n";
}

export function ask(question: string): string {
  return question;
}

export function education(): string {
  const edu: string =
    "2021-2025: West Morris Mendham High School\n\tGPA: 5.463/6 \n2025-Present: The Honors College at Rutgers University\n\tB.S. in Mathematics\n\tB.S. in Computer Science\n";

  return edu;
}

export function whois(): string {
  const bio: string =
    "Hi, I'm Jeevan Shah!\nI'm a full stack software engineer and mathematician passionate about connecting the real world with theoretical and abstract ones.\n";

  return bio;
}

export function email(): string {
  window.open(
    "mailto:jeevandshah@gmail.com",
    "_blank",
    "rel=noopener noreferrer",
  );
  return "Sending an email!";
}

export function resume(): string {
  window.open(
    "https://images.sevenlayer.org/Jeevan%20Shah%20Resume.pdf",
    "_blank",
    "rel-nooopner noreferrer",
  );
  return "Opening in new tab!";
}

export function history(commands: string[]): string {
  let historyString = "";

  for (const str of commands) {
    historyString = historyString + `${str}\n`;
  }

  return historyString;
}

export function renderSocials() {
  return (
    <div>
      You can reach me at:
      <br />
      <u>
        <Link
          className="text-sky-400 pl-3 hover:drop-shadow-sky-700 hover:drop-shadow-md"
          href="https://github.com/jeevanshah07"
        >
          Github
        </Link>
      </u>
      <br />
      <u>
        <Link
          className="text-sky-400 pl-3 hover:drop-shadow-sky-700 hover:drop-shadow-md"
          href="https://www.linkedin.com/in/jshah07/"
        >
          LinkedIn
        </Link>
      </u>
    </div>
  );
}

export function commandNotFound(command: string) {
  return (
    <div>
      Command `<span className="text-red-500">{command}</span>` not found!
    </div>
  );
}

export function work() {
  return (
    <div>
      Over the past few years I&apos;ve had the wonderful opportunity to work as a
      freelance software engineer!
      <p>
        <u className="text-rose-500">College Canine</u> (2024-2025)
        <br />
        &nbsp;&nbsp;At College Canine I was a fullstack developer helping work
        on their{" "}
        <u className="text-sky-400">
          <Link href="https://collegecanine.com/" target="_blank">website</Link>
        </u>{" "}
        which was written using{" "}
        <span className="text-purple-600">NextJS</span>,{" "}
        <span className="text-violet-600">Prisma</span>, and{" "}
        <span className="text-indigo-600">Supabase</span>.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Beyond that, I was also the sole developer in charge of writing their mobile app using{" "}
        <span className="text-blue-600">Flutter</span>
      </p>
      <br />
      <p>
        <u className="text-rose-500">STEMpire Tutoring</u> (2023-2025)
        <br />
        &nbsp;&nbsp;At STEMpire Tutoring I was the Chief Technological Officer in charge of all development and systems. 
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;I wrote the company{" "}
        <u className="text-sky-400">
          <Link href="https://stempiretutoring.com/" target="_blank">website</Link>
        </u>{" "}
        using{" "}
        <span className="text-red-600">NextJS</span>,{" "}
        <span className="text-orange-600">Stripe</span>,{" "}
        <span className="text-amber-600">Auth0</span>,{" "}
        <span className="text-yellow-600">MongoDB</span>, and{" "}
        <span className="text-lime-600">Cloudflare</span>.
      </p>
    </div>
  );
}

export function projects() {
  return (
    <div>
      Here are some of my favorite personal passion projects! Click on the name
      of each on to visit its github page!
      <p>
        <u className="text-sky-400">
          <Link href="https://github.com/jeevanshah07/mathLang">MathLang</Link>
        </u>
        &nbsp;-&gt; A{" "}
        <span className="bg-gradient-to-tr from-[#306998] to-[#FFD43B] bg-clip-text text-transparent">
          Python
        </span>{" "}
        project that uses <span className="text-fuchsia-600">SymPy</span>,{" "}
        <span className="text-purple-600">NumPy</span>,{" "}
        <span className="text-violet-600">SLY</span>, and{" "}
        <span className="text-indigo-600">rich</span> to create a programming
        language <br />
        &nbsp;&nbsp;with many of the features found in a graphing calculator.
      </p>
      <br />
      <p>
        <u className="text-sky-400">
          <Link href="https://github.com/jeevanshah07/mastermind">
            Mastermind
          </Link>
        </u>
        &nbsp;-&gt; A{" "}
        <span className="bg-gradient-to-tr from-[#306998] to-[#FFD43B] bg-clip-text text-transparent">
          Python
        </span>{" "}
        project that uses <span className="text-yellow-400">Websockets</span>{" "}
        and <span className="text-amber-400">Pickle</span> to re-create the
        iconic game of mastermind <br />
        &nbsp;&nbsp; with multiplayer capabilites calculator.
      </p>
      <br />
      <p>
        <u className="text-sky-400">
          <Link href="https://github.com/jeevanshah07/morning-texts">
            Morning Texts
          </Link>
        </u>
        &nbsp;-&gt; A{" "}
        <span className="bg-gradient-to-tr from-[#306998] to-[#FFD43B] bg-clip-text text-transparent">
          Python
        </span>{" "}
        project that uses the{" "}
        <span className="text-blue-500">Google Calendar</span> API and{" "}
        <span className="text-cyan-500">Requests</span> to send myself daily
        text messages <br /> &nbsp;&nbsp; containing the weather and upcoming
        events.
      </p>
      <br />
      <p>
        <u className="text-sky-400">
          <Link href="https://github.com/jeevanshah07/derivative-generator">
            Derivative Generator
          </Link>
        </u>
        &nbsp;-&gt; A{" "}
        <span className="bg-gradient-to-r from-[#61DAFB] to-[#21A1F1] bg-clip-text text-transparent">
          ReactJS
        </span>{" "}
        project that uses <span className="text-lime-400">Typescript</span> and{" "}
        <span className="text-emerald-400">LaTeX</span> to generate functions
        for students <br /> &nbsp;&nbsp; to practice taking the derivative of.
      </p>
    </div>
  );
}
