import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Set.size(target)
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.size(Set.create([1, 2, 3])); // 3
 * Set.size(Set.create()); // 0
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.size()); // 3
 * pipe(Set.create(), Set.size()); // 0
 * ```
 */
export const size: {
    (): <T extends ReadonlySet<unknown>>(target: T) => number
    <T extends ReadonlySet<unknown>>(target: T): number
} = dfdlT(<T extends ReadonlySet<unknown>>(target: T): number => {
    return target.size
}, 1)
