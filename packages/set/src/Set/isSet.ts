import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Set.isSet(target)
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.isSet(Set.create([1, 2, 3])); // true
 * Set.isSet([1, 2, 3]); // false
 * Set.isSet({}); // false
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.isSet()); // true
 * pipe([1, 2, 3], Set.isSet()); // false
 * pipe({}, Set.isSet()); // false
 * ```
 */
export const isSet: {
    (): (target: unknown) => target is Set<unknown>
    (target: unknown): target is Set<unknown>
} = dfdlT((target: unknown): target is Set<unknown> => {
    return target instanceof Set
}, 1)
