# isSupersetOf

```ts
function Set.isSupersetOf<T>(
    target: ReadonlySet<T>,
    source: ReadonlySet<NoInfer<T>>,
): boolean
```

Returns `true` if the target set contains all values from the source set, `false` otherwise.

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
