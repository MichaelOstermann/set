# clone

```ts
function Set.clone<T>(target: ReadonlySet<T>): Set<T>
```

Returns a shallow copy of the set, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).

## Example

::: code-group

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

:::
