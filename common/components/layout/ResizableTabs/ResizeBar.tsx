import { useId } from "react";
import type { MouseEvent } from "react";

export type Props = {
  prevSectionId: string;
  nextSectionId: string;
};

const ResizeBar = ({ prevSectionId, nextSectionId }: Props) => {
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    console.log(document.getElementById(prevSectionId));
    console.log(document.getElementById(nextSectionId));
    console.log("handleMouseDown");
    console.log(e);
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    console.log("handleMouseUp");
    console.log(e);
  };

  return (
    <div
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => handleMouseUp(e)}
      className="w-1 cursor-col-resize bg-neutral-600 transition-[background-color] hover:bg-blue-400"
    />
  );
};

export default ResizeBar;
