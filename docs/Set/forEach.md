# forEach

```ts
function Set.forEach(target, fn)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.forEach(Set.create([1, 2, 3]), (value) => console.log(value)); // Set([1, 2, 3])
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(
    Set.create([1, 2, 3]),
    Set.forEach((value) => console.log(value)),
); // Set([1, 2, 3])
```

:::
