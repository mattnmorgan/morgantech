import React from "react";

export type Props = {
  condition:
    | (() => boolean)
    | boolean
    | string
    | number
    | undefined
    | null
    | object;
  children: React.ReactNode;
};

export default function Component(props: Props) {
  let doRender: boolean = false;

  switch (typeof props.condition) {
    case "boolean":
      doRender = props.condition;
      break;
    case "function":
      doRender = props.condition();
      break;
    default:
      doRender = !!props.condition;
      break;
  }

  return <>{doRender && props.children}</>;
}
