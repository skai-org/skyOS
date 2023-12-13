import React, { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { initShell, writeToPty, fitTerminal, readFromPty } from "./main";


const XTerm = () => {
  const termRef = useRef(null);

  useEffect(() => {
    // Initialize Terminal and FitAddon
    const term = new Terminal({
      fontSize: 14, // Adjust the font size as needed
      lineHeight: 1.2,
      
      theme: {
      
        background: "rgb(47, 47, 47,0)",
      },
    });
    const fitAddon = new FitAddon();

    // Set up terminal and addons
    if (termRef.current) {
      term.open(termRef.current);
      
      term.loadAddon(fitAddon);
      term.writeln("Sky OS Terminal Emulator ©2023-2024")
      
      fitAddon.fit(); // Ensure the initial fit
      term.write("\x1B[1;3;31m>\x1B[0m $ ");
      

    }
    term.onRender(() => {
      term.focus();  // Focus the terminal after rendering
    });

    // Initialize shell and event listeners
    initShell();
    term.onData((data) => writeToPty(data));
    window.addEventListener("resize", () => fitTerminal(term, fitAddon));
    fitTerminal(term, fitAddon);

    // Start reading from the PTY
    const animationFrameId = requestAnimationFrame(() => readFromPty(term));

    // Cleanup function
    return () => {
      if (termRef.current) {
        term.dispose();
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array ensures it runs only once

  return <div  className="h-screen pb-10  transparent">
    <div ref={termRef} id="terminal" className="h-full"></div>
  </div>;
};

export default XTerm;
