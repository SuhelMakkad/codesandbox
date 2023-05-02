import Link from "next/link";

import { RiCheckDoubleLine } from "react-icons/ri";

export type Props = {
  name: string;
};

const PlaygroundHeader = ({ name }: Props) => {
  return (
    <div className="flex items-center gap-2 border-b border-b-neutral-600 bg-[#191919] text-sm">
      <Link
        href={"/"}
        className="group flex items-center gap-4 pl-4 transition-[color] hover:bg-blue-900/50 hover:text-blue-200"
      >
        <span className="text-xl font-bold uppercase">c</span>
        <h1 className="w-0 overflow-hidden text-base font-semibold opacity-0 transition-[width,opacity] duration-300 group-hover:w-20 group-hover:opacity-100">
          codebox
        </h1>
      </Link>

      <div className="flex items-center gap-1 text-neutral-400">
        <RiCheckDoubleLine className="shrink-0 text-lg" />
        <span>Saved</span>
      </div>

      <span className="flex-grow py-2 text-center text-neutral-300">
        {name}
      </span>
    </div>
  );
};

export default PlaygroundHeader;
