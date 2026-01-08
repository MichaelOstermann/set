import { dfdlT } from "@monstermann/dfdl"

/**
 * # symmetricDifference
 *
 * ```ts
 * function Set.symmetricDifference<T, U>(
 *     target: Set<T>,
 *     source: Set<U>,
 * ): Set<T | U>
 * ```
 *
 * Returns a set containing values that exist in either set but not in both.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Set } from "@monstermann/set";
 *
 * Set.symmetricDifference(Set.create([1, 2, 3]), Set.create([3, 4, 5])); // Set([1, 2, 4, 5])
 * Set.symmetricDifference(Set.create([1, 2]), Set.create([3, 4])); // Set([1, 2, 3, 4])
 * ```
 *
 * ```ts [data-last]
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.symmetricDifference(Set.create([3, 4, 5]))); // Set([1, 2, 4, 5])
 * pipe(Set.create([1, 2]), Set.symmetricDifference(Set.create([3, 4]))); // Set([1, 2, 3, 4])
 * ```
 *
 */
export const symmetricDifference: {
    <T, U>(source: Set<U>): (target: Set<T>) => Set<T | U>
    <T, U>(target: Set<T>, source: Set<U>): Set<T | U>
} = dfdlT(<T, U>(target: Set<T>, source: Set<U>): Set<T | U> => {
    if (source.size === 0) return target
    if (target.size === 0) return source

    let result: Set<T | U> | undefined
    let allMatch = true

    for (const a of target) {
        if (!source.has(a as any)) {
            allMatch = false
            result ??= new Set()
            result.add(a)
        }
    }

    for (const b of source) {
        if (!target.has(b as any)) {
            allMatch = false
            result ??= new Set()
            result.add(b)
        }
    }

    if (allMatch) return new Set<T | U>()
    return result!
}, 2)
