# hasAll

```ts
function Set.hasAll(target, values)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.hasAll(Set.create([1, 2, 3]), [1, 2]); // true
Set.hasAll(Set.create([1, 2, 3]), [1, 4]); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.hasAll([1, 2])); // true
pipe(Set.create([1, 2, 3]), Set.hasAll([1, 4])); // false
```

:::
