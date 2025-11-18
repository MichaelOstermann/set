# addOrElse

```ts
function Set.addOrElse(target, value, orElse)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.addOrElse(Set.create([1, 2]), 3, (set) => set.size); // Set([1, 2, 3])
Set.addOrElse(Set.create([1, 2]), 2, (set) => set.size); // 2
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(
    Set.create([1, 2]),
    Set.addOrElse(3, (set) => set.size),
); // Set([1, 2, 3])

pipe(
    Set.create([1, 2]),
    Set.addOrElse(2, (set) => set.size),
); // 2
```

:::
