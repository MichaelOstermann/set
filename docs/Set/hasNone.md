# hasNone

```ts
function Set.hasNone(target, values)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.hasNone(Set.create([1, 2, 3]), [4, 5]); // true
Set.hasNone(Set.create([1, 2, 3]), [3, 4]); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.hasNone([4, 5])); // true
pipe(Set.create([1, 2, 3]), Set.hasNone([3, 4])); // false
```

:::
