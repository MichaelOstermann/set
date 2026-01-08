# hasNone

```ts
function Set.hasNone<T>(
    target: ReadonlySet<T>,
    values: Iterable<NoInfer<T>>,
): boolean
```

Returns `true` if the set contains none of the values from the iterable, `false` otherwise.

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
