import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Server of Souton",
      description: "Souton Project Team",
    },
    /*"/zh-TW/": {
      lang: "zh-TW",
      title: "Server of Souton",
      description: "修頓項目組",
    },*/
    "/zh-CN/": {
      lang: "zh-CN",
      title: "Server of Souton",
      description: "修顿项目组",
    },

  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
