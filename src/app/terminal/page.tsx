import TerminalController from "../components/terminal";
import Link from "next/link";

export const metadata = {
  title: "Terminal | Jeevan Shah",
  description: "A terminal-style way to explore Jeevan Shah's portfolio.",
};

export default function TerminalPage() {
  return (
    <main className="terminal-page">
      <Link className="terminal-home" href="/">← Back to portfolio</Link>
      <TerminalController />
    </main>
  );
}
