"use client";

import { useState } from "react";
import Image from "next/image";
import ConditionalContent from "@/components/system/conditional-content";
import Drawer from "@/components/daisy-ui/drawer";

export type Props = {
  /**
   * Optional drawers content
   */
  drawers?: React.ReactNode;

  /**
   * Navigation header content
   */
  header: React.ReactNode;

  /**
   * Navigation header drawer content
   */
  headerDrawer: React.ReactNode;

  /**
   * Body content
   */
  body: React.ReactNode;

  /**
   * Optional footer content
   */
  footer?: React.ReactNode;
};

export const labels = {
  navigationMenu: "Navigation Menu",
};

export default function Layout(props: Props) {
  const [navigationDrawerOpen, setNavigationDrawerOpen] =
    useState<boolean>(false);

  return (
    <>
      <ConditionalContent condition={props.drawers}>
        {props.drawers}
      </ConditionalContent>
      <Drawer
        drawerId="navigation-menu"
        isOpen={navigationDrawerOpen}
        onClose={() => setNavigationDrawerOpen(false)}
      >
        {props.headerDrawer}
      </Drawer>
      <header className="fixed top-0 w-full z-50">
        <div className="navbar flex flex-row gap-2 bg-base-300 shadow-sm">
          <div className="md:hidden flex flex-row px-3 gap-2">
            <button
              className="btn mx-0 px-0 w-[36px]"
              onClick={() => {
                setNavigationDrawerOpen(true);
              }}
            >
              <Image
                className="dark:invert"
                src="/img/global/menu.svg"
                width={32}
                height={32}
                alt={labels.navigationMenu}
              />
            </button>
          </div>
          {props.header}
        </div>
      </header>
      <main className="flex-grow pt-16">{props.body}</main>
      <ConditionalContent condition={props.footer}>
        <footer className="text-xs bg-base-200 px-2 py-3">
          <div className="flex flex-col items-center">{props.footer}</div>
        </footer>
      </ConditionalContent>
    </>
  );
}
