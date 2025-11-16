import { navbar } from "vuepress-theme-hope";

export const zhtwNavbar = navbar([
  "/",
  "/news/",
  {
    text: "相關協議",
    icon: "material-symbols:policy",
    prefix: "/policy/",
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
    prefix: "/about/",
    children: [
      "history", 
      "members-list"
    ],
  },
  "/join-us",

]);
