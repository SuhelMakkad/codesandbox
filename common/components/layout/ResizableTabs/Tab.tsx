export type Props = {
  id: string;
  children?: JSX.Element | JSX.Element[];
};

const Wrapper = ({ id, children }: Props) => {
  return (
    <section id={id} className="resize-section flex-grow">
      {children}
    </section>
  );
};

export default Wrapper;
