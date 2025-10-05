"use client";
import React, { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import { help, whoami } from "../terminal/terminal";
import "./styles.css";
import { wranglerResponse } from "../api/types";

export default function TerminalController() {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={Math.random()}>
      Run `welcome` to get started!
    </TerminalOutput>,
  ]);

  const handleTerminalInput = async (terminalInput: String) => {
    let terminalOutput: String = "";
    if (terminalInput.toLowerCase() == "clear") {
      setTerminalLineData([]);
      return;
    } else if (terminalInput.toLowerCase() == "help") {
      terminalOutput = help();
    } else if (terminalInput.toLowerCase() == "whoami") {
      terminalOutput = whoami();
    } else if (terminalInput.split(" ")[0].toLowerCase() == "ask") {
      const match = terminalInput.match(/^\S+\s*(.*)$/);
      const question = match ? match[1] : "";

      console.log("ask");

      const res = await fetch(
        `/api/wrangler?question=${encodeURIComponent(question)}`,
      );
      const data: wranglerResponse = await res.json();

      terminalOutput = data.result.response;
    } else {
      terminalOutput = `command not found: ${terminalInput}\n`;
    }

    setTerminalLineData([
      ...terminalLineData,
      <TerminalOutput key={Math.random()}>
        $ {terminalInput}
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
        height={`${window.innerHeight}px`}
        onInput={(terminalInput) => handleTerminalInput(terminalInput)}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
}
