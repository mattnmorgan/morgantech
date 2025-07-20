import React from "react";
import ConditionalContent from "@/components/system/conditional-content";

export type KeyedProps<T> = { [key: string]: T };

export type Props<T> = {
  /**
   * Collection of items to render
   */
  collection: KeyedProps<T> | T[];
  /**
   * Renderer for the collection
   *
   * @param item Item to render
   * @param index Index or key of the item to render
   * @returns Element to be rendered for the item
   */
  renderer: (item: T, index: number | string) => unknown;
};

export default function Component<T>(props: Props<T>) {
  const isArray = props.collection instanceof Array;

  return (
    <>
      <ConditionalContent condition={isArray}>
        {(props.collection as T[]).map((item, index) => (
          <div key={index}>
            {props.renderer(item, index) as React.ReactNode}
          </div>
        ))}
      </ConditionalContent>
      <ConditionalContent condition={!isArray}>
        {Object.keys(props.collection).map((key) => (
          <div key={key}>
            {
              props.renderer(
                (props.collection as KeyedProps<T>)[key] as T,
                key
              ) as React.ReactNode
            }
          </div>
        ))}
      </ConditionalContent>
    </>
  );
}
