# symmetricDifference

```ts
function Set.symmetricDifference(target, source)
```

## Example

::: code-group

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

:::
