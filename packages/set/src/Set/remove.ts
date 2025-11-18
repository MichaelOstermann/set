import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * ```ts
 * function Set.remove(target, value)
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.remove(Set.create([1, 2, 3]), 2); // Set([1, 3])
 * Set.remove(Set.create([1, 2, 3]), 4); // Set([1, 2, 3])
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.remove(2)); // Set([1, 3])
 * pipe(Set.create([1, 2, 3]), Set.remove(4)); // Set([1, 2, 3])
 * ```
 */
export const remove: {
    <T>(value: NoInfer<T>): (target: Set<T>) => Set<T>
    <T>(value: NoInfer<T>): (target: ReadonlySet<T>) => ReadonlySet<T>

    <T>(target: Set<T>, value: NoInfer<T>): Set<T>
    <T>(target: ReadonlySet<T>, value: NoInfer<T>): ReadonlySet<T>
} = dfdlT(<T>(target: Set<T>, value: NoInfer<T>): Set<T> => {
    if (!target.has(value)) return target
    target = cloneSet(target)
    target.delete(value)
    return target
}, 2)
