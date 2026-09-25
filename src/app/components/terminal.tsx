"use client";
import React, { ReactElement, useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import {
  education,
  email,
  help,
  welcome,
  renderSocials,
  whoami,
  whois,
  resume,
  history,
  commandNotFound,
  projects,
  work,
} from "../terminal/terminal";
import "./styles.css";

export default function TerminalController() {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={Math.random()}>
      <div>
        Run `
        <span className="text-green-400 drop-shadow-md drop-shadow-green-500">
          welcome
        </span>
        ` to get started!
      </div>
    </TerminalOutput>,
  ]);
  const [termHistory, setTermHistory] = useState<string[]>([]);

  const handleTerminalInput = (terminalInput: string) => {
    let terminalOutput: string | ReactElement = "";
    let validCommand: boolean = true;

    setTermHistory([...termHistory, terminalInput]);

    if (terminalInput.toLowerCase() == "clear") {
      setTerminalLineData([]);
      return;
    } else if (terminalInput.toLowerCase() == "help") {
      terminalOutput = help();
    } else if (terminalInput.toLowerCase() == "whoami") {
      terminalOutput = whoami();
    } else if (terminalInput.toLowerCase() == "projects") {
      terminalOutput = projects();
    } else if (terminalInput.toLowerCase() == "education") {
      terminalOutput = education();
    } else if (terminalInput.toLowerCase() == "work") {
      terminalOutput = work();
    } else if (terminalInput.toLowerCase() == "socials") {
      terminalOutput = renderSocials();
    } else if (terminalInput.toLowerCase() == "email") {
      terminalOutput = email();
    } else if (terminalInput.toLowerCase() == "resume") {
      terminalOutput = resume();
    } else if (terminalInput.toLowerCase() == "whois") {
      terminalOutput = whois();
    } else if (terminalInput.toLowerCase() == "welcome") {
      terminalOutput = welcome();
    } else if (terminalInput.toLowerCase() == "history") {
      terminalOutput = history(termHistory);
    } else {
      terminalOutput = commandNotFound(terminalInput);
      validCommand = false;
    }

    setTerminalLineData([
      ...terminalLineData,
      <TerminalOutput key={Math.random()}>
        $
        <span className={validCommand ? "text-green-400" : "text-red-500"}>
          {" "}
          {terminalInput}
        </span>
        <br />
        {terminalOutput}
        <br />
      </TerminalOutput>,
    ]);
  };

  return (
    <div>
      <Terminal
        name="Jeevan Shah"
        colorMode={ColorMode.Dark}
        prompt="visitor@jeevanshah.dev:~$"
        height="calc(100dvh - 40px)"
        onInput={(terminalInput) => handleTerminalInput(terminalInput)}
        TopButtonsPanel={() => null}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
}
