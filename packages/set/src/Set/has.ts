import { dfdlT } from "@monstermann/dfdl"

/**
 * # has
 *
 * ```ts
 * function Set.has<T>(
 *     target: ReadonlySet<T>,
 *     value: NoInfer<T>,
 * ): boolean
 * ```
 *
 * Returns `true` if the set contains the value, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Set } from "@monstermann/set";
 *
 * Set.has(Set.create([1, 2, 3]), 2); // true
 * Set.has(Set.create([1, 2, 3]), 4); // false
 * ```
 *
 * ```ts [data-last]
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.has(2)); // true
 * pipe(Set.create([1, 2, 3]), Set.has(4)); // false
 * ```
 *
 */
export const has: {
    <T>(value: NoInfer<T>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, value: NoInfer<T>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, value: NoInfer<T>): boolean => {
    return target.has(value)
}, 2)
