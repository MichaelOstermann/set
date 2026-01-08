import { dfdlT } from "@monstermann/dfdl"

/**
 * # toArray
 *
 * ```ts
 * function Set.toArray<T>(target: ReadonlySet<T>): T[]
 * ```
 *
 * Converts the set to an array.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Set } from "@monstermann/set";
 *
 * Set.toArray(Set.create([1, 2, 3])); // [1, 2, 3]
 * Set.toArray(Set.create(["a", "b"])); // ['a', 'b']
 * ```
 *
 * ```ts [data-last]
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.toArray()); // [1, 2, 3]
 * pipe(Set.create(["a", "b"]), Set.toArray()); // ['a', 'b']
 * ```
 *
 */
export const toArray: {
    (): <T>(target: ReadonlySet<T>) => T[]
    <T>(target: ReadonlySet<T>): T[]
} = dfdlT(<T>(target: ReadonlySet<T>): T[] => {
    return Array.from(target)
}, 1)
