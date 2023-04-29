import ResizeBar from "./ResizeBar";

export type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Wrapper = ({ children }: Props) => {
  return (
    <div className="flex">
      {Array.isArray(children)
        ? children.map((c, index) => (
            <>
              {index > 0 ? <ResizeBar /> : ""}
              {c}
            </>
          ))
        : children}
    </div>
  );
};

export default Wrapper;
