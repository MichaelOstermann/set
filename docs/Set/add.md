# add

```ts
function Set.add(target, value)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.add(Set.create([1, 2]), 3); // Set([1, 2, 3])
Set.add(Set.create([1, 2]), 2); // Set([1, 2])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2]), Set.add(3)); // Set([1, 2, 3])
pipe(Set.create([1, 2]), Set.add(2)); // Set([1, 2])
```

:::
