import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * ```ts
 * function Set.removeOr(target, value, or)
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.removeOr(Set.create([1, 2, 3]), 2, null); // Set([1, 3])
 * Set.removeOr(Set.create([1, 2, 3]), 4, null); // null
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.removeOr(2, null)); // Set([1, 3])
 * pipe(Set.create([1, 2, 3]), Set.removeOr(4, null)); // null
 * ```
 */
export const removeOr: {
    <T, U>(value: NoInfer<T>, or: U): (target: ReadonlySet<T>) => Set<T> | U
    <T, U>(target: ReadonlySet<T>, value: NoInfer<T>, or: U): Set<T> | U
} = dfdlT(<T, U>(target: ReadonlySet<T>, value: NoInfer<T>, or: U): Set<T> | U => {
    if (!target.has(value)) return or
    const result = cloneSet(target)
    result.delete(value)
    return result
}, 3)
