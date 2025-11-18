# removeAll

```ts
function Set.removeAll(target, values)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.removeAll(Set.create([1, 2, 3, 4]), [2, 3]); // Set([1, 4])
Set.removeAll(Set.create([1, 2, 3]), [4, 5]); // Set([1, 2, 3])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3, 4]), Set.removeAll([2, 3])); // Set([1, 4])
pipe(Set.create([1, 2, 3]), Set.removeAll([4, 5])); // Set([1, 2, 3])
```

:::
