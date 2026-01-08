# is

```ts
function Set.is(target: unknown): target is Set<unknown>
```

Returns `true` if the value is a Set, `false` otherwise.

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.is(Set.create([1, 2, 3])); // true
Set.is([1, 2, 3]); // false
Set.is({}); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.is()); // true
pipe([1, 2, 3], Set.is()); // false
pipe({}, Set.is()); // false
```

:::
