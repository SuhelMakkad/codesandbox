import { PanelResizeHandle as PanelResize } from "react-resizable-panels";

import { GetComponentProps } from "@/utils/type";

export type Props = {
  direction: "horizontal" | "vertical";
} & GetComponentProps<typeof PanelResize>;

const PanelResizeHandle = ({ direction, className, ...props }: Props) => {
  return (
    <PanelResize
      {...props}
      className={`${className} ${
        direction === "vertical" ? "h-[2px]" : "w-[2px]"
      } bg-neutral-700 transition-[background-color] hover:bg-blue-300 data-[resize-handle-active]:bg-blue-300`}
    />
  );
};

export default PanelResizeHandle;
