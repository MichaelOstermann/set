import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Set.is(target)
 * ```
 *
 * Example
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.is(Set.create([1, 2, 3])); // true
 * Set.is([1, 2, 3]); // false
 * Set.is({}); // false
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.is()); // true
 * pipe([1, 2, 3], Set.is()); // false
 * pipe({}, Set.is()); // false
 * ```
 */
export const is: {
    (): (target: unknown) => target is Set<unknown>
    (target: unknown): target is Set<unknown>
} = dfdlT((target: unknown): target is Set<unknown> => {
    return target instanceof Set
}, 1)
