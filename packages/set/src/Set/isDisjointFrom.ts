import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Set.isDisjointFrom(target, source)
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.isDisjointFrom(Set.create([1, 2]), Set.create([3, 4])); // true
 * Set.isDisjointFrom(Set.create([1, 2]), Set.create([2, 3])); // false
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2]), Set.isDisjointFrom(Set.create([3, 4]))); // true
 * pipe(Set.create([1, 2]), Set.isDisjointFrom(Set.create([2, 3]))); // false
 * ```
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
