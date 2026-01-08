# intersection

```ts
function Set.intersection<T, U>(
    target: Set<T>,
    source: Set<U>,
): Set<T | U>
```

Returns a set containing only the values that exist in both sets.

## Example

::: code-group

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

:::
