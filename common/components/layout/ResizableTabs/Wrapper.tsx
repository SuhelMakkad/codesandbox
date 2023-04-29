import { Fragment } from "react";

import ResizeBar from "./ResizeBar";

export type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Wrapper = ({ children }: Props) => {
  return (
    <div className="flex">
      {Array.isArray(children)
        ? children.map((c, index) => (
            <Fragment key={index}>
              {index > 0 ? <ResizeBar /> : ""}
              {c}
            </Fragment>
          ))
        : children}
    </div>
  );
};

export default Wrapper;
