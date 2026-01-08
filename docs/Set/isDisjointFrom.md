# isDisjointFrom

```ts
function Set.isDisjointFrom<T>(
    target: ReadonlySet<T>,
    source: ReadonlySet<NoInfer<T>>,
): boolean
```

Returns `true` if the sets have no values in common, `false` otherwise.

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.isDisjointFrom(Set.create([1, 2]), Set.create([3, 4])); // true
Set.isDisjointFrom(Set.create([1, 2]), Set.create([2, 3])); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2]), Set.isDisjointFrom(Set.create([3, 4]))); // true
pipe(Set.create([1, 2]), Set.isDisjointFrom(Set.create([2, 3]))); // false
```

:::
