import { ReactElement } from "react";

export type Props = {
  children: ReactElement;
};

const Wrapper = ({ children }: Props) => {
  return <div className="flex">{children}</div>;
};

export default Wrapper;
