"use client";

import { useState } from "react";
import type { ReactElement } from "react";

import { IoIosArrowDown } from "react-icons/io";

export type Props = {
  label: string;
  children?: ReactElement | ReactElement[];
};

const Accordion = ({ label, children }: Props) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="flex flex-col">
      <button
        className="flex items-center gap-2 border-b border-b-neutral-600 px-2 py-1 text-sm capitalize"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <IoIosArrowDown
          className={`${isActive ? "" : "-rotate-90"} transition-transform`}
        />
        {label}
      </button>

      {isActive ? children : ""}
    </div>
  );
};

export default Accordion;
