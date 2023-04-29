import { Fragment, useId } from "react";

import Tab from "./Tab";
import ResizeBar from "./ResizeBar";

export type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Wrapper = ({ children }: Props) => {
  const tabIds = Array.isArray(children)
    ? new Array(children.length).fill(0).map((_) => useId())
    : [useId()];

  console.log({ tabIds });

  return (
    <div className="flex">
      {Array.isArray(children)
        ? children.map((c, index) => (
            <Fragment key={index}>
              {index > 0 ? (
                <ResizeBar
                  nextSectionId={tabIds[index]}
                  prevSectionId={tabIds[index - 1]}
                />
              ) : (
                ""
              )}
              <Tab id={tabIds[index]}>{c}</Tab>
            </Fragment>
          ))
        : children}
    </div>
  );
};

export default Wrapper;
