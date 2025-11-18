# isSet

```ts
function Set.isSet(target)
```

## Example

::: code-group

```ts [data-first]
import { Set } from "@monstermann/set";

Set.isSet(Set.create([1, 2, 3])); // true
Set.isSet([1, 2, 3]); // false
Set.isSet({}); // false
```

```ts [data-last]
import { Set } from "@monstermann/set";

pipe(Set.create([1, 2, 3]), Set.isSet()); // true
pipe([1, 2, 3], Set.isSet()); // false
pipe({}, Set.isSet()); // false
```

:::
