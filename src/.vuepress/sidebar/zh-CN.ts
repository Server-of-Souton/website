import { sidebar } from "vuepress-theme-hope";

export const zhcnSidebar = sidebar({
  "/zh-CN/": [],
  "/zh-CN/news/": "structure",
  "/zh-CN/about/": [
    {
      text: "關於我們",
      icon: "lightbulb",
      prefix: "",
      children: [
        "history",
        "members-list",
      ],
    },
  ],
  "/zh-CN/join-us": [],
});

