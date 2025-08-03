"use client";

import Menu from "@/components/daisy-ui/menu";

export default function Component() {
  function onMenuClick(itemId: string) {
    console.log(itemId);
  }

  return (
    <Menu
      size="sm"
      items={[
        { id: "item-1", label: "Item 1" },
        {
          id: "item-2",
          label: "Item 2",
          children: [
            { id: "item-2-a", label: "Item 2A" },
            {
              id: "item-2-b",
              label: "Item 2B",
              children: [{ id: "item-2-b-1", label: "Item 2B1" }],
              sizeClass: "w-50",
            },
          ],
        },
        {
          id: "item-3",
          label: "Item 3",
        },
        {
          id: "item-4",
          label: "Item 4",
          children: [
            { id: "item-4-a", label: "Item 4A" },
            { id: "item-4-b", label: "Item 4B" },
          ],
        },
      ]}
      onMenuClick={(itemId) => {
        console.log(itemId);
      }}
      activeItem="item-2-b-1"
    />
  );
}
