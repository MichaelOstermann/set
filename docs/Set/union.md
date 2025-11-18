# union

```ts
function Set.union(target, source)
```

## Example

::: code-group

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

:::
