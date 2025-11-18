import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * ```ts
 * function Set.addOrElse(target, value, orElse)
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.addOrElse(Set.create([1, 2]), 3, (set) => set.size); // Set([1, 2, 3])
 * Set.addOrElse(Set.create([1, 2]), 2, (set) => set.size); // 2
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(
 *     Set.create([1, 2]),
 *     Set.addOrElse(3, (set) => set.size),
 * ); // Set([1, 2, 3])
 *
 * pipe(
 *     Set.create([1, 2]),
 *     Set.addOrElse(2, (set) => set.size),
 * ); // 2
 * ```
 */
export const addOrElse: {
    <T, U>(value: NoInfer<T>, orElse: (target: ReadonlySet<NoInfer<T>>) => U): (target: ReadonlySet<T>) => Set<T> | U
    <T, U>(target: ReadonlySet<T>, value: NoInfer<T>, orElse: (target: ReadonlySet<NoInfer<T>>) => U): Set<T> | U
} = dfdlT(<T, U>(target: ReadonlySet<T>, value: NoInfer<T>, orElse: (target: ReadonlySet<NoInfer<T>>) => U): Set<T> | U => {
    if (target.has(value)) return orElse(target)
    const result = cloneSet(target)
    result.add(value)
    return result
}, 3)
