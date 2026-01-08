import { dfdlT } from "@monstermann/dfdl"

/**
 * # isSubsetOf
 *
 * ```ts
 * function Set.isSubsetOf<T>(
 *     target: ReadonlySet<T>,
 *     source: ReadonlySet<NoInfer<T>>,
 * ): boolean
 * ```
 *
 * Returns `true` if all values in the target set are also in the source set, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Set } from "@monstermann/set";
 *
 * Set.isSubsetOf(Set.create([1, 2]), Set.create([1, 2, 3])); // true
 * Set.isSubsetOf(Set.create([1, 4]), Set.create([1, 2, 3])); // false
 * ```
 *
 * ```ts [data-last]
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2]), Set.isSubsetOf(Set.create([1, 2, 3]))); // true
 * pipe(Set.create([1, 4]), Set.isSubsetOf(Set.create([1, 2, 3]))); // false
 * ```
 *
 */
export const isSubsetOf: {
    <T>(source: ReadonlySet<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean => {
    if (target.size > source.size) return false
    for (const value of target) {
        if (!source.has(value)) return false
    }
    return true
}, 2)
