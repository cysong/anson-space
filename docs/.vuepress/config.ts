import { defineUserConfig } from 'vuepress'
import theme from "./theme.js";

export default defineUserConfig({
    base: '/blog/',
    permalinkPattern: "/:year/:month/:day/:slug",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Anson's Space",
            description: "Anson's personal space",
        },
        "/en/": {
            title: "Anson's Space",
            description: "Anson's personal space",
        },
    },

    theme
})