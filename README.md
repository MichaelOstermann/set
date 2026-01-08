<div align="center">

<h1>set</h1>

![Minified](https://img.shields.io/badge/Minified-3.43_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff) ![Minzipped](https://img.shields.io/badge/Minzipped-1.03_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff)

**Functional utilities for sets.**

[Documentation](https://MichaelOstermann.github.io/set)

</div>

## Features

- Opt-in mutability with [`remmi`](https://michaelostermann.github.io/remmi/)
- Reference preservation (`mapEach(set, (v) => v) === set`)
- Pipe-friendly (`pipe(mapEach((v) => v))(set)`)
- Graceful failure handling (`get()`, `getOr()`, `getOrElse()`, `getOrThrow()`)

## Installation

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

## Tree-shaking

### Installation

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

### Usage

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

## Set

### add

```ts
function Set.add<T>(
    target: ReadonlySet<T>,
    value: NoInfer<T>,
): ReadonlySet<T>
```

Returns a set with the value added. If the value already exists in the set, returns the original set unchanged.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.add(Set.create([1, 2]), 3); // Set([1, 2, 3])
Set.add(Set.create([1, 2]), 2); // Set([1, 2])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2]), Set.add(3)); // Set([1, 2, 3])
pipe(Set.create([1, 2]), Set.add(2)); // Set([1, 2])
```

### addAll

```ts
function Set.addAll<T>(
    target: ReadonlySet<T>,
    values: Iterable<NoInfer<T>>,
): ReadonlySet<T>
```

Returns a set with all values from the iterable added. Values that already exist in the set are skipped.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.addAll(Set.create([1, 2]), [3, 4]); // Set([1, 2, 3, 4])
Set.addAll(Set.create([1, 2]), [2, 3]); // Set([1, 2, 3])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2]), Set.addAll([3, 4])); // Set([1, 2, 3, 4])
pipe(Set.create([1, 2]), Set.addAll([2, 3])); // Set([1, 2, 3])
```

### clone

```ts
function Set.clone<T>(target: ReadonlySet<T>): Set<T>
```

Returns a shallow copy of the set, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

const original = Set.create([1, 2, 3]);
const copy = Set.clone(original); // Set { 1, 2, 3 }
```

```ts [data-last]
import { Set } from "@monstermann/set";

const original = Set.create([1, 2, 3]);
const copy = pipe(original, Set.clone()); // Set { 1, 2, 3 }
```

### compact

```ts
function Set.compact<T>(
    target: ReadonlySet<T>,
): ReadonlySet<NonNil<T>>
```

Returns a set with all `null` and `undefined` values removed.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.compact(Set.create([1, null, 2, undefined])); // Set([1, 2])
Set.compact(Set.create([1, 2, 3])); // Set([1, 2, 3])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, null, 2, undefined]), Set.compact()); // Set([1, 2])
pipe(Set.create([1, 2, 3]), Set.compact()); // Set([1, 2, 3])
```

### create

```ts
function Set.create<T>(
    iterable?: Iterable<T> | null | undefined,
): Set<T>
```

Creates a new set from an optional iterable.

#### Example

```ts
import { Set } from "@monstermann/set";

Set.create([1, 2, 3]); // Set([1, 2, 3])
```

### difference

```ts
function Set.difference<T, U>(
    target: Set<T>,
    source: Set<U>,
): Set<T>
```

Returns a set containing all values from the target set that are not in the source set.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.difference(Set.create([1, 2, 3]), Set.create([2, 3, 4])); // Set([1])
Set.difference(Set.create([1, 2]), Set.create([3, 4])); // Set([1, 2])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.difference(Set.create([2, 3, 4]))); // Set([1])
pipe(Set.create([1, 2]), Set.difference(Set.create([3, 4]))); // Set([1, 2])
```

### forEach

```ts
function Set.forEach<T>(
    target: ReadonlySet<T>,
    fn: (
        value: NoInfer<T>,
        target: ReadonlySet<NoInfer<T>>,
    ) => unknown,
): ReadonlySet<T>
```

Executes a function for each value in the set and returns the set unchanged.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.forEach(Set.create([1, 2, 3]), (value) => console.log(value)); // Set([1, 2, 3])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(
    Set.create([1, 2, 3]),
    Set.forEach((value) => console.log(value)),
); // Set([1, 2, 3])
```

### has

```ts
function Set.has<T>(
    target: ReadonlySet<T>,
    value: NoInfer<T>,
): boolean
```

Returns `true` if the set contains the value, `false` otherwise.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.has(Set.create([1, 2, 3]), 2); // true
Set.has(Set.create([1, 2, 3]), 4); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.has(2)); // true
pipe(Set.create([1, 2, 3]), Set.has(4)); // false
```

### hasAll

```ts
function Set.hasAll<T>(
    target: ReadonlySet<T>,
    values: Iterable<NoInfer<T>>,
): boolean
```

Returns `true` if the set contains all values from the iterable, `false` otherwise.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.hasAll(Set.create([1, 2, 3]), [1, 2]); // true
Set.hasAll(Set.create([1, 2, 3]), [1, 4]); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.hasAll([1, 2])); // true
pipe(Set.create([1, 2, 3]), Set.hasAll([1, 4])); // false
```

### hasAny

```ts
function Set.hasAny<T>(
    target: ReadonlySet<T>,
    values: Iterable<NoInfer<T>>,
): boolean
```

Returns `true` if the set contains at least one value from the iterable, `false` otherwise.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.hasAny(Set.create([1, 2, 3]), [3, 4]); // true
Set.hasAny(Set.create([1, 2, 3]), [4, 5]); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.hasAny([3, 4])); // true
pipe(Set.create([1, 2, 3]), Set.hasAny([4, 5])); // false
```

### hasNone

```ts
function Set.hasNone<T>(
    target: ReadonlySet<T>,
    values: Iterable<NoInfer<T>>,
): boolean
```

Returns `true` if the set contains none of the values from the iterable, `false` otherwise.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.hasNone(Set.create([1, 2, 3]), [4, 5]); // true
Set.hasNone(Set.create([1, 2, 3]), [3, 4]); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.hasNone([4, 5])); // true
pipe(Set.create([1, 2, 3]), Set.hasNone([3, 4])); // false
```

### intersection

```ts
function Set.intersection<T, U>(
    target: Set<T>,
    source: Set<U>,
): Set<T | U>
```

Returns a set containing only the values that exist in both sets.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.intersection(Set.create([1, 2, 3]), Set.create([2, 3, 4])); // Set([2, 3])
Set.intersection(Set.create([1, 2]), Set.create([3, 4])); // Set([])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.intersection(Set.create([2, 3, 4]))); // Set([2, 3])
pipe(Set.create([1, 2]), Set.intersection(Set.create([3, 4]))); // Set([])
```

### is

```ts
function Set.is(target: unknown): target is Set<unknown>
```

Returns `true` if the value is a Set, `false` otherwise.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.is(Set.create([1, 2, 3])); // true
Set.is([1, 2, 3]); // false
Set.is({}); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.is()); // true
pipe([1, 2, 3], Set.is()); // false
pipe({}, Set.is()); // false
```

### isDisjointFrom

```ts
function Set.isDisjointFrom<T>(
    target: ReadonlySet<T>,
    source: ReadonlySet<NoInfer<T>>,
): boolean
```

Returns `true` if the sets have no values in common, `false` otherwise.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.isDisjointFrom(Set.create([1, 2]), Set.create([3, 4])); // true
Set.isDisjointFrom(Set.create([1, 2]), Set.create([2, 3])); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2]), Set.isDisjointFrom(Set.create([3, 4]))); // true
pipe(Set.create([1, 2]), Set.isDisjointFrom(Set.create([2, 3]))); // false
```

### isEmpty

```ts
function Set.isEmpty<T extends ReadonlySet<unknown>>(
    target: T,
): boolean
```

Returns `true` if the set contains no values, `false` otherwise.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.isEmpty(Set.create()); // true
Set.isEmpty(Set.create([1, 2, 3])); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create(), Set.isEmpty()); // true
pipe(Set.create([1, 2, 3]), Set.isEmpty()); // false
```

### isShallowEqual

```ts
function Set.isShallowEqual<T>(
    target: ReadonlySet<T>,
    source: ReadonlySet<NoInfer<T>>,
): boolean
```

Returns `true` if both sets contain the same values, `false` otherwise.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.isShallowEqual(Set.create([1, 2, 3]), Set.create([3, 2, 1])); // true
Set.isShallowEqual(Set.create([1, 2]), Set.create([1, 2, 3])); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.isShallowEqual(Set.create([3, 2, 1]))); // true
pipe(Set.create([1, 2]), Set.isShallowEqual(Set.create([1, 2, 3]))); // false
```

### isSubsetOf

```ts
function Set.isSubsetOf<T>(
    target: ReadonlySet<T>,
    source: ReadonlySet<NoInfer<T>>,
): boolean
```

Returns `true` if all values in the target set are also in the source set, `false` otherwise.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.isSubsetOf(Set.create([1, 2]), Set.create([1, 2, 3])); // true
Set.isSubsetOf(Set.create([1, 4]), Set.create([1, 2, 3])); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2]), Set.isSubsetOf(Set.create([1, 2, 3]))); // true
pipe(Set.create([1, 4]), Set.isSubsetOf(Set.create([1, 2, 3]))); // false
```

### isSupersetOf

```ts
function Set.isSupersetOf<T>(
    target: ReadonlySet<T>,
    source: ReadonlySet<NoInfer<T>>,
): boolean
```

Returns `true` if the target set contains all values from the source set, `false` otherwise.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.isSupersetOf(Set.create([1, 2, 3]), Set.create([1, 2])); // true
Set.isSupersetOf(Set.create([1, 2, 3]), Set.create([1, 4])); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.isSupersetOf(Set.create([1, 2]))); // true
pipe(Set.create([1, 2, 3]), Set.isSupersetOf(Set.create([1, 4]))); // false
```

### mapEach

```ts
function Set.mapEach<T, U>(
    target: ReadonlySet<T>,
    fn: (
        value: NoInfer<T>,
        target: ReadonlySet<NoInfer<T>>,
    ) => U,
): ReadonlySet<U>
```

Returns a new set with each value transformed by the mapping function.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.mapEach(Set.create([1, 2, 3]), (x) => x * 2); // Set([2, 4, 6])
Set.mapEach(Set.create(["a", "b"]), (x) => x.toUpperCase()); // Set(['A', 'B'])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(
    Set.create([1, 2, 3]),
    Set.mapEach((x) => x * 2),
); // Set([2, 4, 6])

pipe(
    Set.create(["a", "b"]),
    Set.mapEach((x) => x.toUpperCase()),
); // Set(['A', 'B'])
```

### remove

```ts
function Set.remove<T>(
    target: ReadonlySet<T>,
    value: NoInfer<T>,
): ReadonlySet<T>
```

Returns a set with the value removed. If the value doesn't exist in the set, returns the original set unchanged.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.remove(Set.create([1, 2, 3]), 2); // Set([1, 3])
Set.remove(Set.create([1, 2, 3]), 4); // Set([1, 2, 3])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.remove(2)); // Set([1, 3])
pipe(Set.create([1, 2, 3]), Set.remove(4)); // Set([1, 2, 3])
```

### removeAll

```ts
function Set.removeAll<T>(
    target: ReadonlySet<T>,
    values: Iterable<NoInfer<T>>,
): ReadonlySet<T>
```

Returns a set with all values from the iterable removed. Values that don't exist in the set are skipped.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.removeAll(Set.create([1, 2, 3, 4]), [2, 3]); // Set([1, 4])
Set.removeAll(Set.create([1, 2, 3]), [4, 5]); // Set([1, 2, 3])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3, 4]), Set.removeAll([2, 3])); // Set([1, 4])
pipe(Set.create([1, 2, 3]), Set.removeAll([4, 5])); // Set([1, 2, 3])
```

### size

```ts
function Set.size<T extends ReadonlySet<unknown>>(
    target: T,
): number
```

Returns the number of values in the set.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.size(Set.create([1, 2, 3])); // 3
Set.size(Set.create()); // 0
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.size()); // 3
pipe(Set.create(), Set.size()); // 0
```

### symmetricDifference

```ts
function Set.symmetricDifference<T, U>(
    target: Set<T>,
    source: Set<U>,
): Set<T | U>
```

Returns a set containing values that exist in either set but not in both.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.symmetricDifference(Set.create([1, 2, 3]), Set.create([3, 4, 5])); // Set([1, 2, 4, 5])
Set.symmetricDifference(Set.create([1, 2]), Set.create([3, 4])); // Set([1, 2, 3, 4])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.symmetricDifference(Set.create([3, 4, 5]))); // Set([1, 2, 4, 5])
pipe(Set.create([1, 2]), Set.symmetricDifference(Set.create([3, 4]))); // Set([1, 2, 3, 4])
```

### toArray

```ts
function Set.toArray<T>(target: ReadonlySet<T>): T[]
```

Converts the set to an array.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.toArray(Set.create([1, 2, 3])); // [1, 2, 3]
Set.toArray(Set.create(["a", "b"])); // ['a', 'b']
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.toArray()); // [1, 2, 3]
pipe(Set.create(["a", "b"]), Set.toArray()); // ['a', 'b']
```

### union

```ts
function Set.union<T, U>(
    target: Set<T>,
    source: Set<U>,
): Set<T | U>
```

Returns a set containing all values from both sets.

#### Example

```ts [data-first]
import { Set } from "@monstermann/set";

Set.union(Set.create([1, 2]), Set.create([2, 3, 4])); // Set([1, 2, 3, 4])
Set.union(Set.create([1, 2]), Set.create([3, 4])); // Set([1, 2, 3, 4])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2]), Set.union(Set.create([2, 3, 4]))); // Set([1, 2, 3, 4])
pipe(Set.create([1, 2]), Set.union(Set.create([3, 4]))); // Set([1, 2, 3, 4])
```
