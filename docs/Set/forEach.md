# forEach

```ts
function Set.forEach<T>(
    target: ReadonlySet<T>,
    fn: (
        value: NoInfer<T>,
        target: ReadonlySet<NoInfer<T>>,
    ) => unknown,
): ReadonlySet<T>
```

Executes a function for each value in the set and returns the set unchanged.

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
