import { dfdlT } from "@monstermann/dfdl"

/**
 * # isDisjointFrom
 *
 * ```ts
 * function Set.isDisjointFrom<T>(
 *     target: ReadonlySet<T>,
 *     source: ReadonlySet<NoInfer<T>>,
 * ): boolean
 * ```
 *
 * Returns `true` if the sets have no values in common, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Set } from "@monstermann/set";
 *
 * Set.isDisjointFrom(Set.create([1, 2]), Set.create([3, 4])); // true
 * Set.isDisjointFrom(Set.create([1, 2]), Set.create([2, 3])); // false
 * ```
 *
 * ```ts [data-last]
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2]), Set.isDisjointFrom(Set.create([3, 4]))); // true
 * pipe(Set.create([1, 2]), Set.isDisjointFrom(Set.create([2, 3]))); // false
 * ```
 *
 */
export const isDisjointFrom: {
    <T>(source: ReadonlySet<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean => {
    for (const value of target) {
        if (source.has(value)) return false
    }
    return true
}, 2)
