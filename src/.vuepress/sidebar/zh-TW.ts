import { sidebar } from "vuepress-theme-hope";

export const zhtwSidebar = sidebar({
  "/": [
    "",
  ],
  "/news/": "structure",
  "/about/": [
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
});
