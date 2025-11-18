# toArray

```ts
function Set.toArray(target)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.toArray(Set.create([1, 2, 3])); // [1, 2, 3]
Set.toArray(Set.create(["a", "b"])); // ['a', 'b']
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.toArray()); // [1, 2, 3]
pipe(Set.create(["a", "b"]), Set.toArray()); // ['a', 'b']
```

:::
