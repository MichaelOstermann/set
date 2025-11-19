import { defineConfig } from "vitepress"
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons"

export default defineConfig({
    base: "/set/",
    description: "Functional utilities for sets.",
    title: "set",
    markdown: {
        theme: {
            dark: "catppuccin-macchiato",
            light: "github-light-default",
        },
        config(md) {
            md.use(groupIconMdPlugin)
        },
    },
    themeConfig: {
        aside: false,
        outline: "deep",
        docFooter: {
            next: false,
            prev: false,
        },
        search: {
            provider: "local",
        },
        sidebar: [
            {
                base: "/Set/",
                text: "Set",
                items: [
                    { link: "add", text: "add" },
                    { link: "addAll", text: "addAll" },
                    { link: "addOr", text: "addOr" },
                    { link: "addOrElse", text: "addOrElse" },
                    { link: "addOrThrow", text: "addOrThrow" },
                    { link: "clone", text: "clone" },
                    { link: "compact", text: "compact" },
                    { link: "difference", text: "difference" },
                    { link: "forEach", text: "forEach" },
                    { link: "has", text: "has" },
                    { link: "hasAll", text: "hasAll" },
                    { link: "hasAny", text: "hasAny" },
                    { link: "hasNone", text: "hasNone" },
                    { link: "intersection", text: "intersection" },
                    { link: "is", text: "is" },
                    { link: "isDisjointFrom", text: "isDisjointFrom" },
                    { link: "isEmpty", text: "isEmpty" },
                    { link: "isShallowEqual", text: "isShallowEqual" },
                    { link: "isSubsetOf", text: "isSubsetOf" },
                    { link: "isSupersetOf", text: "isSupersetOf" },
                    { link: "mapEach", text: "mapEach" },
                    { link: "remove", text: "remove" },
                    { link: "removeAll", text: "removeAll" },
                    { link: "removeOr", text: "removeOr" },
                    { link: "removeOrElse", text: "removeOrElse" },
                    { link: "removeOrThrow", text: "removeOrThrow" },
                    { link: "size", text: "size" },
                    { link: "symmetricDifference", text: "symmetricDifference" },
                    { link: "toArray", text: "toArray" },
                    { link: "union", text: "union" },
                ],
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/MichaelOstermann/set" },
        ],
    },
    vite: {
        plugins: [
            groupIconVitePlugin(),
        ],
    },
})
