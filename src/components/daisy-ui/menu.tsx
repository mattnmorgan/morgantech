import ConditionalContent from "@/components/system/conditional-content";
import IterativeContent from "@/components/system/iterative-content";
import MenuItem, { Item } from "@/components/daisy-ui/menu-item";
import { useState } from "react";

export type Props = {
  /**
   * Optional title for the menu
   */
  title?: string;

  /**
   * Menu items to render
   */
  items: Item[];

  /**
   * Event handler for when an item has been clicked
   *
   * @param itemId The id of the clicked item
   */
  onMenuClick: (itemId: string) => void;

  /**
   * The id of the currently active menu item
   */
  activeItem?: string;

  /**
   * Directionality of the menu
   */
  direction?: "vertical" | "horizontal";

  /**
   * Menu size
   */
  size: "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * Toggle if submenus should auto-collapse if clicked outside of
   */
  autocollapse?: boolean;
};

const MENU_SIZE_CLASS = {
  xs: "menu-xs",
  sm: "menu-sm",
  md: "menu-md",
  lg: "menu-lg",
  xl: "menu-xl",
};

export default function Component(props: Props) {
  function prepareMenuItems(items: Item[], lineage: string = "") {
    return items.reduce((prior, item) => {
      prior.push({
        ...item,
        fullId: lineage ? lineage + "." + item.id : item.id,
        children: prepareMenuItems(
          item.children ?? [],
          lineage + "." + item.id
        ),
      });
      return prior;
    }, [] as Item[]);
  }

  const [hoveredItem, setHoveredItem] = useState<string>("");
  const [resetHoveredItemTimeout, setResetHoveredItemTimeout] = useState<
    number | undefined
  >(undefined);
  const preparedMenuItems = prepareMenuItems(props.items);
  const autocollapse = props.autocollapse ?? false;

  return (
    <ul
      className={
        "menu bg-base-200 rounded-box w-full " +
        (props.direction == "horizontal" ? "menu-horizontal " : " ") +
        MENU_SIZE_CLASS[props.size]
      }
      onMouseEnter={() => {
        if (resetHoveredItemTimeout) {
          clearTimeout(resetHoveredItemTimeout);
          setResetHoveredItemTimeout(undefined);
        }
      }}
      onMouseLeave={() => {
        if (autocollapse) {
          setResetHoveredItemTimeout(
            window.setTimeout(() => {
              setHoveredItem("");
            }, 100)
          );
        }
      }}
    >
      <ConditionalContent condition={props.title}>
        <li className="menu-title">{props.title}</li>
      </ConditionalContent>
      <IterativeContent
        collection={preparedMenuItems}
        renderer={(item) => (
          <MenuItem
            item={item}
            onMenuClick={props.onMenuClick}
            activeItem={props.activeItem}
            onItemHover={(fullItemId) => {
              setHoveredItem(fullItemId);
            }}
            hoveredItem={hoveredItem}
            autocollapse={autocollapse ?? false}
          />
        )}
      />
    </ul>
  );
}
