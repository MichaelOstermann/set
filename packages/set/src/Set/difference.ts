import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Set.difference(target, source)
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.difference(Set.create([1, 2, 3]), Set.create([2, 3, 4])); // Set([1])
 * Set.difference(Set.create([1, 2]), Set.create([3, 4])); // Set([1, 2])
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.difference(Set.create([2, 3, 4]))); // Set([1])
 * pipe(Set.create([1, 2]), Set.difference(Set.create([3, 4]))); // Set([1, 2])
 * ```
 */
export const difference: {
    <T, U>(source: Set<U>): (target: Set<T>) => Set<T>
    <T, U>(target: Set<T>, source: Set<U>): Set<T>
} = dfdlT(<T, U>(target: Set<T>, source: Set<U>): Set<T> => {
    if (source.size === 0) return target

    for (const value of target) {
        if (source.has(value as any)) {
            const result = new Set<T>()
            for (const value of target) {
                if (source.has(value as any)) continue
                result.add(value)
            }
            return result
        }
    }

    return target
}, 2)
