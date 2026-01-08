import { dfdlT } from "@monstermann/dfdl"

/**
 * # isSupersetOf
 *
 * ```ts
 * function Set.isSupersetOf<T>(
 *     target: ReadonlySet<T>,
 *     source: ReadonlySet<NoInfer<T>>,
 * ): boolean
 * ```
 *
 * Returns `true` if the target set contains all values from the source set, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Set } from "@monstermann/set";
 *
 * Set.isSupersetOf(Set.create([1, 2, 3]), Set.create([1, 2])); // true
 * Set.isSupersetOf(Set.create([1, 2, 3]), Set.create([1, 4])); // false
 * ```
 *
 * ```ts [data-last]
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.isSupersetOf(Set.create([1, 2]))); // true
 * pipe(Set.create([1, 2, 3]), Set.isSupersetOf(Set.create([1, 4]))); // false
 * ```
 *
 */
export const isSupersetOf: {
    <T>(source: ReadonlySet<NoInfer<T>>): (target: ReadonlySet<T>) => boolean
    <T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean
} = dfdlT(<T>(target: ReadonlySet<T>, source: ReadonlySet<NoInfer<T>>): boolean => {
    if (target.size < source.size) return false
    for (const value of source) {
        if (!target.has(value)) return false
    }
    return true
}, 2)
