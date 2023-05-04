import type { ReactElement } from "react";

export type GetComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? P
  : never;
``;

export type ReactChildren = ReactElement | ReactElement[] | string;
