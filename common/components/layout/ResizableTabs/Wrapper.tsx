export type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Wrapper = ({ children }: Props) => {
  return <div className="flex">{children}</div>;
};

export default Wrapper;
