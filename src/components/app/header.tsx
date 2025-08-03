"use client";

import Image from "next/image";
import labels from "@/app/labels";
import Menu from "@/components/daisy-ui/menu";

export default function Component() {
  return (
    <>
      <Image
        className="ms-2 rounded-sm border-1 border-black"
        src="/img/morgantech/logo.png"
        width={32}
        height={32}
        alt={labels.title}
      ></Image>
      <div className="font-semibold">{labels.title}</div>
      <div className="hidden md:flex flex-grow flex-row px-3 gap-2">
        <Menu
          size="sm"
          direction="horizontal"
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
          autocollapse={true}
        />
      </div>
      <div className="flex md:hidden flex-grow" />
      <div className="px-3 flex flex-row gap-2">
        <a href="mailto:matthew@morgantech.info">
          <Image
            className="dark:invert active:outline-2 hover:outline-primary hover:opacity-60"
            src="/img/social/email.svg"
            width={32}
            height={32}
            alt={labels.images.email}
          ></Image>
        </a>
        <a href="https://www.linkedin.com/in/mnmorgan/">
          <Image
            className="dark:invert active:outline-2 hover:outline-primary hover:opacity-60"
            src="/img/social/linkedin.svg"
            width={32}
            height={32}
            alt={labels.images.linkedin}
          ></Image>
        </a>
        <a href="https://www.github.com/mattnmorgan">
          <Image
            className="dark:invert active:outline-2 hover:outline-primary hover:opacity-60"
            src="/img/social/github.svg"
            width={32}
            height={32}
            alt={labels.images.github}
          ></Image>
        </a>
      </div>
    </>
  );
}
