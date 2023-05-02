import { ReactElement } from "react";

export type Props = {
  isActive: boolean;
  children?: ReactElement | ReactElement[];
};

const AnimateHeight = ({ isActive, children }: Props) => {
  return (
    <div
      className={`grid  transition-[opacity,grid-template-rows] duration-300 ${
        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export default AnimateHeight;
