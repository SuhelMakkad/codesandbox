"use client";

import { useEffect, useRef } from "react";

import "xterm/css/xterm.css";

const Xterm = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!divRef.current) return;

    const init = async () => {
      if (!divRef.current) return;

      const { Terminal } = await import("xterm");
      const { FitAddon } = await import("xterm-addon-fit");

      const socket = new WebSocket("ws://localhost:6060");
      const term = new Terminal({
        cursorBlink: true,
      });
      const fitAddon = new FitAddon();
      let command = "";

      term.loadAddon(fitAddon);
      term.open(divRef.current);

      prompt();

      term.onData((e) => {
        switch (e) {
          case "\u0003": // Ctrl+C
            term.write("^C");
            prompt();
            break;
          case "\r": // Enter
            runCommand(command);
            command = "";
            break;
          case "\u007F": // Backspace (DEL)
            // Do not delete the prompt
            if ((term as any)._core.buffer.x > 2) {
              term.write("\b \b");
              if (command.length > 0) {
                command = command.substr(0, command.length - 1);
              }
            }
            break;
          case "\u0009":
            console.log("tabbed", e, ["dd", "ls"]);
            break;
          default:
            if (
              (e >= String.fromCharCode(0x20) &&
                e <= String.fromCharCode(0x7e)) ||
              e >= "\u00a0"
            ) {
              command += e;
              term.write(e);
            }
        }
      });

      function clearInput(command: string) {
        var inputLength = command.length;
        for (var i = 0; i < inputLength; i++) {
          term.write("\b \b");
        }
      }

      function prompt() {
        command = "";
        term.write("\r\n$ ");
      }

      socket.onmessage = (event) => {
        term.write(event.data);
      };

      function runCommand(command: string) {
        if (command.length > 0) {
          clearInput(command);
          socket.send(command + "\n");
          return;
        }
      }

      function handleWrapperResize() {
        console.log("called");
        fitAddon.fit();
      }

      divRef.current.addEventListener("resize", handleWrapperResize);
    };

    init();

    () => {
      // term?.dispose();
      // fitAddon?.dispose();
      // socket?.close();
      // divRef.current?.removeEventListener("resize", handleWrapperResize);
    };
  }, [divRef]);

  return <div ref={divRef} className="xterm"></div>;
};

export default Xterm;
