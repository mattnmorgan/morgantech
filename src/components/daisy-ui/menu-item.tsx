import IterativeContent from "@/components/system/iterative-content";

export type Item = {
  /**
   * Unique id for the menu item
   */
  id: string;

  /**
   * Visible label to be shown for the menu item
   */
  label: string;

  /**
   * Children menu items
   */
  children?: Item[];

  /**
   * Optional size class to apply to the item
   */
  sizeClass?: string;

  [property: string]: unknown;
};

export type MenuItemProps = {
  /**
   * The item being rendered
   */
  item: Item;

  /**
   * Event handler for when an item has been clicked
   *
   * @param itemId The id of the clicked item
   * @param activeItem The id of the active item
   */
  onMenuClick: (itemId: string, activeItem: string | undefined) => void;

  /**
   * The id of the currently active menu item
   */
  activeItem?: string;

  /**
   * Event handler for when this item is hovered
   *
   * @param fullItemId Full item id that was hovered
   */
  onItemHover: (fullItemId: string) => void;

  /**
   * The id of the currently-hovered menu item
   */
  hoveredItem?: string;

  /**
   * Does this item and its parent menu autocollapse
   */
  autocollapse?: boolean;
};

export default function MenuItem(props: MenuItemProps) {
  const autocollapse = props.autocollapse ?? false;

  if (props.item.children?.length) {
    return (
      <li
        className={props.item.sizeClass}
        onMouseEnter={() => props.onItemHover(props.item.fullId as string)}
        onFocusCapture={() => props.onItemHover(props.item.fullId as string)}
      >
        <details
          open={
            autocollapse
              ? props.hoveredItem?.split(".").includes(props.item.id)
              : undefined
          }
        >
          <summary>{props.item.label}</summary>
          <ul>
            <IterativeContent
              collection={props.item.children}
              renderer={(item) => (
                <MenuItem
                  item={item}
                  onMenuClick={props.onMenuClick}
                  activeItem={props.activeItem}
                  onItemHover={props.onItemHover}
                  hoveredItem={props.hoveredItem}
                  autocollapse={autocollapse}
                />
              )}
            />
          </ul>
        </details>
      </li>
    );
  } else {
    return (
      <li
        className={props.item.sizeClass}
        onMouseEnter={() => props.onItemHover(props.item.fullId as string)}
        onFocusCapture={() => props.onItemHover(props.item.fullId as string)}
      >
        <a
          tabIndex={0}
          className={props.activeItem == props.item.id ? "menu-active" : ""}
          onClick={() => props.onMenuClick(props.item.id, props.activeItem)}
        >
          {props.item.label}
        </a>
      </li>
    );
  }
}
