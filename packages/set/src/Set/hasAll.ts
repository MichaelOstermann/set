import { dfdlT } from "@monstermann/dfdl"

/**
 * # hasAll
 *
 * ```ts
 * function Set.hasAll<T>(
 *     target: ReadonlySet<T>,
 *     values: Iterable<NoInfer<T>>,
 * ): boolean
 * ```
 *
 * Returns `true` if the set contains all values from the iterable, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Set } from "@monstermann/set";
 *
 * Set.hasAll(Set.create([1, 2, 3]), [1, 2]); // true
 * Set.hasAll(Set.create([1, 2, 3]), [1, 4]); // false
 * ```
 *
 * ```ts [data-last]
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.hasAll([1, 2])); // true
 * pipe(Set.create([1, 2, 3]), Set.hasAll([1, 4])); // false
 * ```
 *
 */
export const hasAll: {
    <T>(values: Iterable<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (!target.has(value)) return false
    }
    return true
}, 2)
