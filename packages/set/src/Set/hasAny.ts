import { dfdlT } from "@monstermann/dfdl"

/**
 * # hasAny
 *
 * ```ts
 * function Set.hasAny<T>(
 *     target: ReadonlySet<T>,
 *     values: Iterable<NoInfer<T>>,
 * ): boolean
 * ```
 *
 * Returns `true` if the set contains at least one value from the iterable, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Set } from "@monstermann/set";
 *
 * Set.hasAny(Set.create([1, 2, 3]), [3, 4]); // true
 * Set.hasAny(Set.create([1, 2, 3]), [4, 5]); // false
 * ```
 *
 * ```ts [data-last]
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.hasAny([3, 4])); // true
 * pipe(Set.create([1, 2, 3]), Set.hasAny([4, 5])); // false
 * ```
 *
 */
export const hasAny: {
    <T>(values: Iterable<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (target.has(value)) return true
    }
    return false
}, 2)
