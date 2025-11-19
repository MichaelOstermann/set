import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Set.isEmpty(target)
 * ```
 *
 * Example
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.isEmpty(Set.create()); // true
 * Set.isEmpty(Set.create([1, 2, 3])); // false
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create(), Set.isEmpty()); // true
 * pipe(Set.create([1, 2, 3]), Set.isEmpty()); // false
 * ```
 */
export const isEmpty: {
    (): <T extends ReadonlySet<unknown>>(target: T) => boolean
    <T extends ReadonlySet<unknown>>(target: T): boolean
} = dfdlT(<T extends ReadonlySet<unknown>>(target: T): boolean => {
    return target.size === 0
}, 1)
