import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
import { invoke } from "@tauri-apps/api";


// Make the terminal fit all the window size
async function fitTerminal(term: Terminal, fitAddon: FitAddon): Promise<void> {
    fitAddon.fit();
    await invoke<string>("async_resize_pty", {
      rows: term.rows,
      cols: term.cols,
    });
  }
// Write data from pty into the terminal
function writeToTerminal(data: string,term: Terminal) {
  return new Promise<void>((r) => {
    term.write(data, () => r());
  });
}

// Write data from the terminal to the pty
function writeToPty(data: string) {
  void invoke("async_write_to_pty", {
    data,
  });
}

function initShell() {
  invoke("async_create_shell").catch((error) => {
    // on linux it seem to to "Operation not permitted (os error 1)" but it still works because echo $SHELL give /bin/bash
    console.error("Error creating shell:", error);
  });
}


async function readFromPty(term: Terminal) {
    const data = await invoke<string>("async_read_from_pty");
  
    if (data) {
        console.log(data)
      await writeToTerminal(data, term);
    }
  
    window.requestAnimationFrame(() => readFromPty(term));
  }
  



export {fitTerminal,writeToPty,writeToTerminal,initShell,readFromPty};