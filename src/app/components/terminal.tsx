"use client";
import React, { ReactElement, useState, useEffect } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import {
  education,
  email,
  help,
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
import { wranglerResponse } from "../api/types";

export default function TerminalController() {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={Math.random()}>
      <div>Run `<span className="text-green-400 drop-shadow-md drop-shadow-green-500">help</span>` to get started!</div>
    </TerminalOutput>,
  ]);
  const [termHeight, setTermHeight] = useState("0px");
  const [termHistory, setTermHistory] = useState<string[]>([]);

  useEffect(() => {
    setTermHeight(`${window.innerHeight}px`);
  }, []);

  const handleTerminalInput = async (terminalInput: string) => {
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
    } else if (terminalInput.split(" ")[0].toLowerCase() == "ask") {
      const match = terminalInput.match(/^\S+\s*(.*)$/);
      const question = match ? match[1] : "";

      console.log("ask");

      const res = await fetch(
        `/api/wrangler?question=${encodeURIComponent(question)}`,
      );
      const data: wranglerResponse = await res.json();

      terminalOutput = data.result.response;
    } else if (terminalInput.toLowerCase() == "history") {
      terminalOutput = history(termHistory);
    } else {
      terminalOutput = commandNotFound(terminalInput);
      validCommand = false;
    }

    setTerminalLineData([
      ...terminalLineData,
      <TerminalOutput key={Math.random()}>
        $<span className={validCommand ? "text-green-400" : "text-red-500"}> {terminalInput}</span>
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
        prompt="visitor@jeevan.shah.dev:~$"
        height={termHeight}
        onInput={(terminalInput) => handleTerminalInput(terminalInput)}
        TopButtonsPanel={() => null}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
}
