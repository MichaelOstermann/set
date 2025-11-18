# isDisjointFrom

```ts
function Set.isDisjointFrom(target, source)
```

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
