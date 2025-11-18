---
aside: true
---

# set

<Badge type="info" class="size">
    <span>Minified</span>
    <span>3.43 KB</span>
</Badge>

<Badge type="info" class="size">
    <span>Minzipped</span>
    <span>1.03 KB</span>
</Badge>

**Functional utilities for sets.**

## Features

- Opt-in mutability with [`remmi`](https://michaelostermann.github.io/remmi/)
- Reference preservation (`mapEach(set, (v) => v) === set`)
- Pipe-friendly (`pipe(mapEach((v) => v))(set)`)
- Graceful failure handling (`get()`, `getOr()`, `getOrElse()`, `getOrThrow()`)
- [Tree-shaking](#tree-shaking)

## Installation

::: code-group

```sh [npm]
npm install @monstermann/set
```

```sh [pnpm]
pnpm add @monstermann/set
```

```sh [yarn]
yarn add @monstermann/set
```

```sh [bun]
bun add @monstermann/set
```

:::

## Tree-shaking

### Installation

::: code-group

```sh [npm]
npm install -D @monstermann/unplugin-set
```

```sh [pnpm]
pnpm -D add @monstermann/unplugin-set
```

```sh [yarn]
yarn -D add @monstermann/unplugin-set
```

```sh [bun]
bun -D add @monstermann/unplugin-set
```

:::

### Usage

::: code-group

```ts [Vite]
// vite.config.ts
import set from "@monstermann/unplugin-set/vite";

export default defineConfig({
    plugins: [set()],
});
```

```ts [Rollup]
// rollup.config.js
import set from "@monstermann/unplugin-set/rollup";

export default {
    plugins: [set()],
};
```

```ts [Rolldown]
// rolldown.config.js
import set from "@monstermann/unplugin-set/rolldown";

export default {
    plugins: [set()],
};
```

```ts [Webpack]
// webpack.config.js
const set = require("@monstermann/unplugin-set/webpack");

module.exports = {
    plugins: [set()],
};
```

```ts [Rspack]
// rspack.config.js
const set = require("@monstermann/unplugin-set/rspack");

module.exports = {
    plugins: [set()],
};
```

```ts [ESBuild]
// esbuild.config.js
import { build } from "esbuild";
import set from "@monstermann/unplugin-set/esbuild";

build({
    plugins: [set()],
});
```

:::
