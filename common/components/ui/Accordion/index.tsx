"use client";

import { useState } from "react";
import type { ReactElement } from "react";

import { IoIosArrowDown } from "react-icons/io";

import AnimateHeight from "@/ui/AnimateHeight";

export type Props = {
  label: string | ReactElement | ReactElement[];
  children?: ReactElement | ReactElement[];
};

const Accordion = ({ label, children }: Props) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="flex flex-col">
      <span
        className="flex items-center gap-2 border-b border-b-neutral-600 px-2 py-1 text-xs uppercase"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <button>
          <IoIosArrowDown
            className={`${
              isActive ? "" : "-rotate-90"
            } shrink-0 transition-transform`}
          />
        </button>

        <div className="grow">{label}</div>
      </span>

      <AnimateHeight isActive={isActive}>{children}</AnimateHeight>
    </div>
  );
};

export default Accordion;
