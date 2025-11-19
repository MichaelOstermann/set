import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * ```ts
 * function Set.addOrThrow(target, value)
 * ```
 *
 * Example
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.addOrThrow(Set.create([1, 2]), 3); // Set([1, 2, 3])
 * Set.addOrThrow(Set.create([1, 2]), 2); // throws FnError
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2]), Set.addOrThrow(3)); // Set([1, 2, 3])
 * pipe(Set.create([1, 2]), Set.addOrThrow(2)); // throws FnError
 * ```
 */
export const addOrThrow: {
    <T>(value: NoInfer<T>): (target: ReadonlySet<T>) => Set<T>
    <T>(target: ReadonlySet<T>, value: NoInfer<T>): Set<T>
} = dfdlT(<T>(target: ReadonlySet<T>, value: NoInfer<T>): Set<T> => {
    if (target.has(value)) throw new Error("Set.addOrThrow: Value already exists.")
    const result = cloneSet(target)
    result.add(value)
    return result
}, 2)
