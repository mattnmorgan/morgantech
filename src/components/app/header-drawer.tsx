"use client";

import { usePathname } from "next/navigation";
import Menu from "@/components/daisy-ui/menu";
import { menu, menuOnClick, getActiveMenuItem } from "@/app/navigation-menu";

export default function Component() {
  const url = usePathname();

  return (
    <Menu
      size="sm"
      items={menu}
      onMenuClick={menuOnClick}
      activeItem={getActiveMenuItem(url)}
    />
  );
}
