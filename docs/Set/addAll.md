# addAll

```ts
function Set.addAll<T>(
    target: ReadonlySet<T>,
    values: Iterable<NoInfer<T>>,
): ReadonlySet<T>
```

Returns a set with all values from the iterable added. Values that already exist in the set are skipped.

## Example

::: code-group

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

:::
