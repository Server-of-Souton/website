import { navbar } from "vuepress-theme-hope";

export const zhcnNavbar = navbar([
  "/zh-CN/",
  "/zh-CN/news/",
  {
    text: "相關協議",
    icon: "material-symbols:policy",
    prefix: "/zh-CN/policy/",
    children: [
      {
        text: "伺服器",
        icon: "server",
        prefix: "",
        children: [
          "resource-pack"
        ],
      },
    ],
  },
  {
    text: "關於我們",
    icon: "circle-info",
    prefix: "/zh-CN/about/",
    children: [
      "history", 
      "members-list"
    ],
  },
  "/zh-CN/join-us",

]);

