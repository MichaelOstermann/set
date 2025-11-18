# compact

```ts
function Set.compact(target)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.compact(Set.create([1, null, 2, undefined])); // Set([1, 2])
Set.compact(Set.create([1, 2, 3])); // Set([1, 2, 3])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, null, 2, undefined]), Set.compact()); // Set([1, 2])
pipe(Set.create([1, 2, 3]), Set.compact()); // Set([1, 2, 3])
```

:::
