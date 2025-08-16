import { Item } from "@/components/daisy-ui/menu-item";
import labels from "@/app/labels";
import { redirect } from "next/navigation";

const menu: Item[] = [
  { id: "home", label: labels.navigationMenuEntries.home },
  {
    id: "status",
    label: labels.navigationMenuEntries.status,
  },
];

function menuOnClick(itemId: string, activeItemId: string | undefined) {
  if (itemId == activeItemId) {
    return;
  }

  switch (itemId) {
    case "home":
      redirect("/");
    case "status":
      redirect("/status");
  }
}

function getActiveMenuItem(url: string) {
  switch (url) {
    case "/":
      return "home";
    case "/status":
      return "status";
  }
}

export { menu, menuOnClick, getActiveMenuItem };
