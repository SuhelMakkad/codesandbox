import type { HTMLAttributes } from "react";

import { getIcon } from "material-file-icons";

export type Props = {
  filename: string;
} & HTMLAttributes<HTMLDivElement>;

const folderOpenIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"/><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link"/><style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet"/><path fill-rule="evenodd" clip-rule="evenodd" d="M.706 2h5.208c.168 0 .33.06.458.169l1.731 1.478h5.924c.39 0 .706.316.706.706v.47H2.058c-.34 0-.63.242-.694.575L0 12.588V2.706C0 2.316.316 2 .706 2zm2.05 3.53a.706.706 0 00-.684.527L.231 13.116A.706.706 0 00.914 14H13.45a.706.706 0 00.683-.528l1.842-7.059a.706.706 0 00-.683-.884H2.755z" fill="#6CC7F6"/></svg>';

const folderCloseIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"/><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link"/><style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet"/><path d="M6.867 2l1.466 1.467H14.2c.8 0 1.467.666 1.467 1.466V12.4c0 .8-.667 1.467-1.467 1.467H2.467C1.667 14 1 13.333 1 12.533V3.467C1 2.667 1.667 2 2.467 2h4.4z" fill="#64D2FF"/></svg>';

function FileIcon({ filename, ...props }: Props) {
  const html =
    filename === "folder"
      ? folderCloseIcon
      : filename === "folderOpen"
      ? folderOpenIcon
      : getIcon(filename).svg;

  return <div {...props} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default FileIcon;
