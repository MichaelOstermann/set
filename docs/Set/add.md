# add

```ts
function Set.add<T>(
    target: ReadonlySet<T>,
    value: NoInfer<T>,
): ReadonlySet<T>
```

Returns a set with the value added. If the value already exists in the set, returns the original set unchanged.

## Example

::: code-group

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

:::
