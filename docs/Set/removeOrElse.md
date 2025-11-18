# removeOrElse

```ts
function Set.removeOrElse(target, value, orElse)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.removeOrElse(Set.create([1, 2, 3]), 2, (set) => set.size); // Set([1, 3])
Set.removeOrElse(Set.create([1, 2, 3]), 4, (set) => set.size); // 3
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(
    Set.create([1, 2, 3]),
    Set.removeOrElse(2, (set) => set.size),
); // Set([1, 3])

pipe(
    Set.create([1, 2, 3]),
    Set.removeOrElse(4, (set) => set.size),
); // 3
```

:::
