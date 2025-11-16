import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [],
  "/en/news/": "structure",
  "/en/about/": [
    {
      text: "About us",
      icon: "lightbulb",
      prefix: "",
      children: [
        "history",
        "members-list",
      ],
    },
  ],
  "/en/join-us": [],
});