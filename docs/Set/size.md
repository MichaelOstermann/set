# size

```ts
function Set.size<T extends ReadonlySet<unknown>>(
    target: T,
): number
```

Returns the number of values in the set.

## Example

::: code-group

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

:::
