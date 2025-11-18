# hasAny

```ts
function Set.hasAny(target, values)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.hasAny(Set.create([1, 2, 3]), [3, 4]); // true
Set.hasAny(Set.create([1, 2, 3]), [4, 5]); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.hasAny([3, 4])); // true
pipe(Set.create([1, 2, 3]), Set.hasAny([4, 5])); // false
```

:::
