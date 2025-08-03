export type Props = {
  /**
   * Unique identifier for the drawer
   */
  drawerId: string;

  /**
   * Is the drawer open?
   */
  isOpen: boolean;

  /**
   * Event handler for when the drawer closes
   */
  onClose?: () => void;
};

export const labels = {
  closeDrawer: "Close sidebar",
};

export default function Component(props: Props) {
  return (
    <>
      <input
        id={props.drawerId}
        type="checkbox"
        className="drawer-toggle"
        checked={props.isOpen}
        readOnly
      />
      <div className="drawer-side z-999">
        <label
          htmlFor={props.drawerId}
          aria-label={labels.closeDrawer}
          className="drawer-overlay"
          onClick={() => props.onClose?.()}
        ></label>
        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <div className="flex flex-col gap-2">
            <div>Content 1</div>
            <div>content 2</div>
          </div>
        </div>
      </div>
    </>
  );
}
