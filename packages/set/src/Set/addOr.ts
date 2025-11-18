import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * ```ts
 * function Set.addOr(target, value, or)
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.addOr(Set.create([1, 2]), 3, null); // Set([1, 2, 3])
 * Set.addOr(Set.create([1, 2]), 2, null); // null
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2]), Set.addOr(3, null)); // Set([1, 2, 3])
 * pipe(Set.create([1, 2]), Set.addOr(2, null)); // null
 * ```
 */
export const addOr: {
    <T, U>(value: NoInfer<T>, or: U): (target: ReadonlySet<T>) => Set<T> | U
    <T, U>(target: ReadonlySet<T>, value: NoInfer<T>, or: U): Set<T> | U
} = dfdlT(<T, U>(target: ReadonlySet<T>, value: NoInfer<T>, or: U): Set<T> | U => {
    if (target.has(value)) return or
    const result = cloneSet(target)
    result.add(value)
    return result
}, 3)
