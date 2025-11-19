import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Set.hasNone(target, values)
 * ```
 *
 * Example
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.hasNone(Set.create([1, 2, 3]), [4, 5]); // true
 * Set.hasNone(Set.create([1, 2, 3]), [3, 4]); // false
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.hasNone([4, 5])); // true
 * pipe(Set.create([1, 2, 3]), Set.hasNone([3, 4])); // false
 * ```
 */
export const hasNone: {
    <T>(values: Iterable<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (target.has(value)) return false
    }
    return true
}, 2)
