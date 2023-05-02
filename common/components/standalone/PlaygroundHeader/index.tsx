export type Props = {
  name: string;
};

const PlaygroundHeader = ({ name }: Props) => {
  return (
    <div className="flex border-b border-b-neutral-600 py-2 text-sm">
      <span className="flex-grow text-center text-neutral-300">{name}</span>
    </div>
  );
};

export default PlaygroundHeader;
