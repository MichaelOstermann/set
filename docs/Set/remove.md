# remove

```ts
function Set.remove<T>(
    target: ReadonlySet<T>,
    value: NoInfer<T>,
): ReadonlySet<T>
```

Returns a set with the value removed. If the value doesn't exist in the set, returns the original set unchanged.

## Example

::: code-group

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

:::
