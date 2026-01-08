import { dfdlT } from "@monstermann/dfdl"

/**
 * # forEach
 *
 * ```ts
 * function Set.forEach<T>(
 *     target: ReadonlySet<T>,
 *     fn: (
 *         value: NoInfer<T>,
 *         target: ReadonlySet<NoInfer<T>>,
 *     ) => unknown,
 * ): ReadonlySet<T>
 * ```
 *
 * Executes a function for each value in the set and returns the set unchanged.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Set } from "@monstermann/set";
 *
 * Set.forEach(Set.create([1, 2, 3]), (value) => console.log(value)); // Set([1, 2, 3])
 * ```
 *
 * ```ts [data-last]
 * import { Set } from "@monstermann/set";
 *
 * pipe(
 *     Set.create([1, 2, 3]),
 *     Set.forEach((value) => console.log(value)),
 * ); // Set([1, 2, 3])
 * ```
 *
 */
export const forEach: {
    <T>(fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => unknown): (target: Set<T>) => Set<T>
    <T>(fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => unknown): (target: ReadonlySet<T>) => ReadonlySet<T>

    <T>(target: Set<T>, fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => unknown): Set<T>
    <T>(target: ReadonlySet<T>, fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => unknown): ReadonlySet<T>
} = dfdlT(<T>(target: Set<T>, fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => unknown): Set<T> => {
    for (const value of target) fn(value, target)
    return target
}, 2)
