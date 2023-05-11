import { useId } from "react";

import { VscCaseSensitive, VscRegex } from "react-icons/vsc";

import Accordion from "@/ui/Accordion";

const ProjectSearch = () => {
  const fIncludeId = useId();
  const fExcludeId = useId();

  return (
    <Accordion label={<span className="font-semibold">Search</span>}>
      <div className="flex flex-col gap-2 px-2 py-3">
        <div className="flex items-center gap-1">
          <input
            className="w-full rounded-sm px-2 py-1 text-sm"
            type="text"
            placeholder="Search"
          />
          <button
            title="Match Case"
            className="shrink-0 rounded-sm px-0.5 py-1 text-lg transition-[background-color] hover:bg-neutral-700"
          >
            <VscCaseSensitive />
          </button>
          <button
            title="Use Regular Expression"
            className="shrink-0 rounded-sm px-0.5 py-1 text-lg transition-[background-color] hover:bg-neutral-700"
          >
            <VscRegex />
          </button>
        </div>

        <div>
          <label htmlFor={fIncludeId} className="cursor-pointer text-sm">
            Files to include
          </label>
          <input
            type="text"
            placeholder="e.g. *.ts, *.json"
            id={fIncludeId}
            className="w-full rounded-sm px-2 py-1 text-sm"
          />
        </div>

        <div>
          <label htmlFor={fExcludeId} className="cursor-pointer text-sm">
            Files to exclude
          </label>
          <input
            type="text"
            placeholder="node_modules, .git, build, *.map"
            id={fExcludeId}
            className="w-full rounded-sm px-2 py-1 text-sm"
          />
        </div>
      </div>
    </Accordion>
  );
};

export default ProjectSearch;
