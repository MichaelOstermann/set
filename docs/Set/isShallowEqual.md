# isShallowEqual

```ts
function Set.isShallowEqual<T>(
    target: ReadonlySet<T>,
    source: ReadonlySet<NoInfer<T>>,
): boolean
```

Returns `true` if both sets contain the same values, `false` otherwise.

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.isShallowEqual(Set.create([1, 2, 3]), Set.create([3, 2, 1])); // true
Set.isShallowEqual(Set.create([1, 2]), Set.create([1, 2, 3])); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.isShallowEqual(Set.create([3, 2, 1]))); // true
pipe(Set.create([1, 2]), Set.isShallowEqual(Set.create([1, 2, 3]))); // false
```

:::
