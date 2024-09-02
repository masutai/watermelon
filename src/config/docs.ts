import type { MainNavItem, SidebarNavItem } from "@/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  chartsNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Game",
      href: "/game",
    },
    {
      title: "Books",
      href: "/books",
    },
  ],
  sidebarNav: [],
  chartsNav: [],
};
