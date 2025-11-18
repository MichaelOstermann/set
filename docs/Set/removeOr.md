# removeOr

```ts
function Set.removeOr(target, value, or)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.removeOr(Set.create([1, 2, 3]), 2, null); // Set([1, 3])
Set.removeOr(Set.create([1, 2, 3]), 4, null); // null
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.removeOr(2, null)); // Set([1, 3])
pipe(Set.create([1, 2, 3]), Set.removeOr(4, null)); // null
```

:::
