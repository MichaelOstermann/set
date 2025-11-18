# mapEach

```ts
function Set.mapEach(target, fn)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.mapEach(Set.create([1, 2, 3]), (x) => x * 2); // Set([2, 4, 6])
Set.mapEach(Set.create(["a", "b"]), (x) => x.toUpperCase()); // Set(['A', 'B'])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(
    Set.create([1, 2, 3]),
    Set.mapEach((x) => x * 2),
); // Set([2, 4, 6])

pipe(
    Set.create(["a", "b"]),
    Set.mapEach((x) => x.toUpperCase()),
); // Set(['A', 'B'])
```

:::
