import { navbar } from "vuepress-theme-hope";

export const zhcnNavbar = navbar([
  "/zh-CN/",
  "/zh-CN/news/",
  {
    text: "相关协议",
    icon: "material-symbols:policy",
    prefix: "/zh-CN/policy/",
    children: [
      {
        text: "服务器",
        icon: "server",
        prefix: "",
        children: [
          "resource-pack"
        ],
      },
    ],
  },
  {
    text: "关于我们",
    icon: "circle-info",
    prefix: "/zh-CN/about/",
    children: [
      "history", 
      "members-list"
    ],
  },
  "/zh-CN/join-us",

]);

