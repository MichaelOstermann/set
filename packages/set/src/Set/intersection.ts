import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Set.intersection(target, source)
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.intersection(Set.create([1, 2, 3]), Set.create([2, 3, 4])); // Set([2, 3])
 * Set.intersection(Set.create([1, 2]), Set.create([3, 4])); // Set([])
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.intersection(Set.create([2, 3, 4]))); // Set([2, 3])
 * pipe(Set.create([1, 2]), Set.intersection(Set.create([3, 4]))); // Set([])
 * ```
 */
export const intersection: {
    <T, U>(source: Set<U>): (target: Set<T>) => Set<T | U>
    <T, U>(target: Set<T>, source: Set<U>): Set<T | U>
} = dfdlT(<T, U>(target: Set<T>, source: Set<U>): Set<T | U> => {
    if (target.size === 0) return target
    if (source.size === 0) return source

    for (const value of target) {
        if (!source.has(value as any)) {
            const result = new Set<T>()
            for (const value of target) {
                if (!source.has(value as any)) continue
                result.add(value)
            }
            return result
        }
    }

    return target
}, 2)
