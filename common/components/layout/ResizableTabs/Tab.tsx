export type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Wrapper = ({ children }: Props) => {
  return <section className="flex-grow">{children}</section>;
};

export default Wrapper;
