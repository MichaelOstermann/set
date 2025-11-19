import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * ```ts
 * function Set.removeOrElse(target, value, orElse)
 * ```
 *
 * Example
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.removeOrElse(Set.create([1, 2, 3]), 2, (set) => set.size); // Set([1, 3])
 * Set.removeOrElse(Set.create([1, 2, 3]), 4, (set) => set.size); // 3
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(
 *     Set.create([1, 2, 3]),
 *     Set.removeOrElse(2, (set) => set.size),
 * ); // Set([1, 3])
 *
 * pipe(
 *     Set.create([1, 2, 3]),
 *     Set.removeOrElse(4, (set) => set.size),
 * ); // 3
 * ```
 */
export const removeOrElse: {
    <T, U>(value: NoInfer<T>, orElse: (target: ReadonlySet<NoInfer<T>>) => U): (target: ReadonlySet<T>) => Set<T> | U
    <T, U>(target: ReadonlySet<T>, value: NoInfer<T>, orElse: (target: ReadonlySet<NoInfer<T>>) => U): Set<T> | U
} = dfdlT(<T, U>(target: ReadonlySet<T>, value: NoInfer<T>, orElse: (target: ReadonlySet<NoInfer<T>>) => U): Set<T> | U => {
    if (!target.has(value)) return orElse(target)
    const result = cloneSet(target)
    result.delete(value)
    return result
}, 3)
