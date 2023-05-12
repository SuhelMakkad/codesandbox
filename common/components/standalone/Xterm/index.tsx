"use client";

import "xterm/css/xterm.css";
import { useXterm } from "@/hooks/useXtrem";

const Xterm = () => {
  const { elementRef } = useXterm({ socketUrl: "ws://localhost:6060" });

  return <div ref={elementRef} className="xterm"></div>;
};

export default Xterm;
