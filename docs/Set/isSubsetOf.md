# isSubsetOf

```ts
function Set.isSubsetOf(target, source)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.isSubsetOf(Set.create([1, 2]), Set.create([1, 2, 3])); // true
Set.isSubsetOf(Set.create([1, 4]), Set.create([1, 2, 3])); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2]), Set.isSubsetOf(Set.create([1, 2, 3]))); // true
pipe(Set.create([1, 4]), Set.isSubsetOf(Set.create([1, 2, 3]))); // false
```

:::
