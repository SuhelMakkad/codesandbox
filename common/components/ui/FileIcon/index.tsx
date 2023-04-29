import type { HTMLAttributes } from "react";

import { getIcon } from "material-file-icons";

export type Props = {
  filename: string;
} & HTMLAttributes<HTMLDivElement>;

function FileIcon({ filename, ...props }: Props) {
  return (
    <div
      {...props}
      dangerouslySetInnerHTML={{ __html: getIcon(filename).svg }}
    />
  );
}

export default FileIcon;
