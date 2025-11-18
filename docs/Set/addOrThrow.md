# addOrThrow

```ts
function Set.addOrThrow(target, value)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.addOrThrow(Set.create([1, 2]), 3); // Set([1, 2, 3])
Set.addOrThrow(Set.create([1, 2]), 2); // throws FnError
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2]), Set.addOrThrow(3)); // Set([1, 2, 3])
pipe(Set.create([1, 2]), Set.addOrThrow(2)); // throws FnError
```

:::
