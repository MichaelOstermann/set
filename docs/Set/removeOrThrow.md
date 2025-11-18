# removeOrThrow

```ts
function Set.removeOrThrow(target, value)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.removeOrThrow(Set.create([1, 2, 3]), 2); // Set([1, 3])
Set.removeOrThrow(Set.create([1, 2, 3]), 4); // throws FnError
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.removeOrThrow(2)); // Set([1, 3])
pipe(Set.create([1, 2, 3]), Set.removeOrThrow(4)); // throws FnError
```

:::
