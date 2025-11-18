# clone

```ts
function Set.clone(target)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

const original = Set.create([1, 2, 3]);
const copy = Set.clone(original); // Set { 1, 2, 3 }
```

```ts [data-last]
import { Set } from "@monstermann/set";

const original = Set.create([1, 2, 3]);
const copy = pipe(original, Set.clone()); // Set { 1, 2, 3 }
```

:::
