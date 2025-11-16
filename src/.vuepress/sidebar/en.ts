import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [],
  "/zh-CN/news/": "structure",
  "/about/": [
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
  "/join-us": [],
});