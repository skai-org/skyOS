import { useRef, useEffect } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
import { initShell, writeToPty, fitTerminal, readFromPty } from "./main";

const XTerm = <T extends HTMLDivElement>() => {
  const termRef = useRef<T>(null);

  useEffect(() => {
    const term = new Terminal({
      fontSize: 14, // Adjust the font size as needed
      lineHeight: 1.2,
      theme: {
        background: "rgb(47, 47, 47)",
      },
    });

    const fitAddon = new FitAddon();

    if (termRef.current) {
      term.loadAddon(fitAddon);
      term.open(termRef.current);
      // term.write("skyOs@ \x1B[1;3;31muser\x1B[0m $ ");
    }

    initShell();
    term.onData(writeToPty);
    addEventListener("resize", () => fitTerminal(term, fitAddon));
    fitTerminal(term,fitAddon);

    window.requestAnimationFrame(() => readFromPty(term));

    return () => {
      if (termRef.current) {
        term.dispose();
      }
    };
  }, []);

  return <div ref={termRef} id="terminal"></div>;
};

export default XTerm;
