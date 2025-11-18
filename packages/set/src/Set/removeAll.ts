import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * ```ts
 * function Set.removeAll(target, values)
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.removeAll(Set.create([1, 2, 3, 4]), [2, 3]); // Set([1, 4])
 * Set.removeAll(Set.create([1, 2, 3]), [4, 5]); // Set([1, 2, 3])
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3, 4]), Set.removeAll([2, 3])); // Set([1, 4])
 * pipe(Set.create([1, 2, 3]), Set.removeAll([4, 5])); // Set([1, 2, 3])
 * ```
 */
export const removeAll: {
    <T>(values: Iterable<NoInfer<T>>): (target: Set<T>) => Set<T>
    <T>(values: Iterable<NoInfer<T>>): (target: ReadonlySet<T>) => ReadonlySet<T>

    <T>(target: Set<T>, values: Iterable<NoInfer<T>>): Set<T>
    <T>(target: ReadonlySet<T>, values: Iterable<NoInfer<T>>): ReadonlySet<T>
} = dfdlT(<T>(target: Set<T>, values: Iterable<NoInfer<T>>): Set<T> => {
    let result
    for (const value of values) {
        if (!target.has(value)) continue
        result ??= cloneSet(target)
        result.delete(value)
    }
    return result ?? target
}, 2)
