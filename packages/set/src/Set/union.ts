import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Set.union(target, source)
 * ```
 *
 * Example
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.union(Set.create([1, 2]), Set.create([2, 3, 4])); // Set([1, 2, 3, 4])
 * Set.union(Set.create([1, 2]), Set.create([3, 4])); // Set([1, 2, 3, 4])
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2]), Set.union(Set.create([2, 3, 4]))); // Set([1, 2, 3, 4])
 * pipe(Set.create([1, 2]), Set.union(Set.create([3, 4]))); // Set([1, 2, 3, 4])
 * ```
 */
export const union: {
    <T, U>(source: Set<U>): (target: Set<T>) => Set<T | U>
    <T, U>(target: Set<T>, source: Set<U>): Set<T | U>
} = dfdlT(<T, U>(target: Set<T>, source: Set<U>): Set<T | U> => {
    if (source.size === 0) return target
    if (target.size === 0) return source

    let result: Set<T | U> | undefined
    for (const element of source) {
        if (!target.has(element as any)) {
            if (result === undefined) {
                result = new Set<T | U>()
                for (const a of target) result.add(a)
            }
            result.add(element)
        }
    }

    return result ?? target
}, 2)
