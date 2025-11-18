import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Set.toArray(target)
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.toArray(Set.create([1, 2, 3])); // [1, 2, 3]
 * Set.toArray(Set.create(["a", "b"])); // ['a', 'b']
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.toArray()); // [1, 2, 3]
 * pipe(Set.create(["a", "b"]), Set.toArray()); // ['a', 'b']
 * ```
 */
export const toArray: {
    (): <T>(target: ReadonlySet<T>) => T[]
    <T>(target: ReadonlySet<T>): T[]
} = dfdlT(<T>(target: ReadonlySet<T>): T[] => {
    return Array.from(target)
}, 1)
