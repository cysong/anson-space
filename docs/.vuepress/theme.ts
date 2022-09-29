import { hopeTheme } from "vuepress-theme-hope";
import { enNavbarConfig, zhNavbarConfig } from "./navbar.js";

export default hopeTheme({
    hostname: "https://cysong.github.io",

    author: {
        name: "Anson",
        url: "https://github.com/cysong",
    },

    editLink: false,
    repoDisplay: false,
    repo: "https://github.com/cysong/space",
    repoLabel: "GitHub",

    docsDir: "docs",

    darkmode: "enable",
    breadcrumb: false,

    iconAssets: "fontawesome",

    navbarLayout: {
        left: ["Brand"],
        center: [],
        right: ["Links", "Search"],
    },

    pageInfo: ["Date", "Tag"],

    locales: {
        "/": {
            navbar: zhNavbarConfig,
            // sidebar: zhSidebarConig,

            blog: {
                description: "",
                intro: "/about",
                medias: {
                },
            },
        },

        "/en/": {
            navbar: enNavbarConfig,
            // sidebar: enSidebarConfig,

            blog: {
                description: "",
                intro: "/en/about",
                medias: {
                },
            },
        },
    },

    displayFooter: false,
    copyright: "Copyright © 2022-present Anson",

    blog: {
        sidebarDisplay: "none",
        articlePerPage: 10,
    },

    plugins: {
        blog: true,

        feed: {
            atom: true,
            json: true,
            rss: true,
        },

        mdEnhance: {
            align: true,
            codetabs: true,
            demo: true,
            flowchart: true,
            footnote: true,
            imageMark: true,
            katex: true,
            mermaid: true,
            presentation: true,
            sub: true,
            sup: true,
            vpre: true,
        },
    }
})