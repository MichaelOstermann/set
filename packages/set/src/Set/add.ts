import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * # add
 *
 * ```ts
 * function Set.add<T>(
 *     target: ReadonlySet<T>,
 *     value: NoInfer<T>,
 * ): ReadonlySet<T>
 * ```
 *
 * Returns a set with the value added. If the value already exists in the set, returns the original set unchanged.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Set } from "@monstermann/set";
 *
 * Set.add(Set.create([1, 2]), 3); // Set([1, 2, 3])
 * Set.add(Set.create([1, 2]), 2); // Set([1, 2])
 * ```
 *
 * ```ts [data-last]
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2]), Set.add(3)); // Set([1, 2, 3])
 * pipe(Set.create([1, 2]), Set.add(2)); // Set([1, 2])
 * ```
 *
 */
export const add: {
    <T>(value: NoInfer<T>): (target: Set<T>) => Set<T>
    <T>(value: NoInfer<T>): (target: ReadonlySet<T>) => ReadonlySet<T>

    <T>(target: Set<T>, value: NoInfer<T>): Set<T>
    <T>(target: ReadonlySet<T>, value: NoInfer<T>): ReadonlySet<T>
} = dfdlT(<T>(target: Set<T>, value: NoInfer<T>): Set<T> => {
    if (target.has(value)) return target
    target = cloneSet(target)
    target.add(value)
    return target
}, 2)
