"use client";

import { useEffect } from "react";
import type { MouseEvent, MouseEventHandler } from "react";

const ResizeBar = () => {
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    console.log("handleMouseDown");
    console.log(e);
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    console.log("handleMouseUp");
    console.log(e);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="w-1 cursor-col-resize bg-neutral-600 transition-[background-color] hover:bg-blue-400"
    />
  );
};

export default ResizeBar;
