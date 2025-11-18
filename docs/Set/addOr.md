# addOr

```ts
function Set.addOr(target, value, or)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.addOr(Set.create([1, 2]), 3, null); // Set([1, 2, 3])
Set.addOr(Set.create([1, 2]), 2, null); // null
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2]), Set.addOr(3, null)); // Set([1, 2, 3])
pipe(Set.create([1, 2]), Set.addOr(2, null)); // null
```

:::
