import { defineConfig } from "@monstermann/barrels"
import { flat } from "@monstermann/barrels-flat"
import { namespace } from "@monstermann/barrels-namespace"

export default defineConfig([
    namespace({
        entries: "./packages/set/src/Set",
    }),
    flat({
        entries: "./packages/set/src",
        include: ["*", "Set/index.js"],
    }),
])
