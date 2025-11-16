import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  "/en/news/",
  {
    text: "Policy",
    icon: "material-symbols:policy",
    prefix: "/en/policy/",
    children: [
      {
        text: "Server",
        icon: "server",
        prefix: "",
        children: [
          "resource-pack"
        ],
      },
    ],
  },
  {
    text: "About us",
    icon: "circle-info",
    prefix: "/en/about/",
    children: [
      "history", 
      "members-list"
    ],
  },
  "/en/join-us",

]);
