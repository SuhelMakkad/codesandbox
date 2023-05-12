import { useEffect, useRef } from "react";

import type {
  Terminal,
  ITerminalAddon,
  ITerminalOptions,
  ITerminalInitOnlyOptions,
} from "xterm";

export type XtermOptions = ITerminalOptions & ITerminalInitOnlyOptions;

export type Props = {
  options?: XtermOptions;
  socketUrl: string;
};

export const useXterm = ({ options, socketUrl }: Props) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let socket: WebSocket | undefined;
    let term: Terminal | undefined;
    let fitAddon: ITerminalAddon | undefined;
    let fitAddonListener: () => void;

    const mountingElement = divRef.current;

    const init = async () => {
      if (!mountingElement) return;

      socket = new WebSocket(socketUrl);

      const xtermData = await xtermInit(mountingElement, socket, options);

      term = xtermData.term;
      fitAddon = xtermData.fitAddon;
      fitAddonListener = xtermData.fitAddonListener;
    };

    init();

    () => {
      term?.dispose();
      fitAddon?.dispose();
      socket?.close();
      mountingElement?.removeEventListener("resize", fitAddonListener);
    };
  }, [divRef.current]);

  return { elementRef: divRef };
};

export const xtermInit = async (
  element: HTMLElement,
  socket: WebSocket,
  options?: XtermOptions
) => {
  const { Terminal } = await import("xterm");
  const { FitAddon } = await import("xterm-addon-fit");

  const term = new Terminal(options);
  const fitAddon = new FitAddon();
  let command = "";

  term.loadAddon(fitAddon);
  term.open(element);

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
        break;
      default:
        if (
          (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7e)) ||
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
    fitAddon.fit();
  }

  element.addEventListener("resize", handleWrapperResize);

  return { term, fitAddon, fitAddonListener: handleWrapperResize };
};
