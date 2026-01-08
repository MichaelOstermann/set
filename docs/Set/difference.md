# difference

```ts
function Set.difference<T, U>(
    target: Set<T>,
    source: Set<U>,
): Set<T>
```

Returns a set containing all values from the target set that are not in the source set.

## Example

::: code-group

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

:::
