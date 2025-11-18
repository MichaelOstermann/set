# isSupersetOf

```ts
function Set.isSupersetOf(target, source)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.isSupersetOf(Set.create([1, 2, 3]), Set.create([1, 2])); // true
Set.isSupersetOf(Set.create([1, 2, 3]), Set.create([1, 4])); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.isSupersetOf(Set.create([1, 2]))); // true
pipe(Set.create([1, 2, 3]), Set.isSupersetOf(Set.create([1, 4]))); // false
```

:::
