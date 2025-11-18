import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * ```ts
 * function Set.removeOrThrow(target, value)
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.removeOrThrow(Set.create([1, 2, 3]), 2); // Set([1, 3])
 * Set.removeOrThrow(Set.create([1, 2, 3]), 4); // throws FnError
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, 2, 3]), Set.removeOrThrow(2)); // Set([1, 3])
 * pipe(Set.create([1, 2, 3]), Set.removeOrThrow(4)); // throws FnError
 * ```
 */
export const removeOrThrow: {
    <T>(value: NoInfer<T>): (target: ReadonlySet<T>) => Set<T>
    <T>(target: ReadonlySet<T>, value: NoInfer<T>): Set<T>
} = dfdlT(<T>(target: ReadonlySet<T>, value: NoInfer<T>): Set<T> => {
    if (!target.has(value)) throw new Error("Set.removeOrThrow: Value does not exist.")
    const result = cloneSet(target)
    result.delete(value)
    return result
}, 2)
