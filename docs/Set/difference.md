# difference

```ts
function Set.difference(target, source)
```

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
