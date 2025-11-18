# has

```ts
function Set.has(target, value)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.has(Set.create([1, 2, 3]), 2); // true
Set.has(Set.create([1, 2, 3]), 4); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.has(2)); // true
pipe(Set.create([1, 2, 3]), Set.has(4)); // false
```

:::
