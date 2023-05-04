import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { VscNewFolder, VscNewFile } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";

import Accordion from "@/ui/Accordion";
import FolderExplorer from "@/ui/FolderExplorer";
import type { File } from "@/ui/FolderExplorer";

export type Props = {
  files?: File[];
};

const buttons = [
  {
    icon: <VscNewFile />,
    label: "create new file",
  },
  {
    icon: <VscNewFolder />,
    label: "create new folder",
  },
  {
    icon: <TbLayoutNavbarCollapse />,
    label: "collapse all open folders",
  },
  {
    icon: <BsThreeDotsVertical />,
    label: "more options",
  },
];

const Explorer = ({ files }: Props) => {
  if (!files) return <></>;

  return (
    <Accordion
      label={
        <div className="flex justify-between gap-2 text-neutral-200">
          <span className="font-semibold">code</span>

          <div className="flex gap-2 text-base transition-[color]">
            {buttons.map((button, index) => (
              <button
                key={index}
                title={button.label}
                className="hover:text-neutral-100"
              >
                {button.icon}
              </button>
            ))}
          </div>
        </div>
      }
    >
      <FolderExplorer files={files} />
    </Accordion>
  );
};

export default Explorer;
