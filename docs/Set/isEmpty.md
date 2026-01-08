# isEmpty

```ts
function Set.isEmpty<T extends ReadonlySet<unknown>>(
    target: T,
): boolean
```

Returns `true` if the set contains no values, `false` otherwise.

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.isEmpty(Set.create()); // true
Set.isEmpty(Set.create([1, 2, 3])); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create(), Set.isEmpty()); // true
pipe(Set.create([1, 2, 3]), Set.isEmpty()); // false
```

:::
