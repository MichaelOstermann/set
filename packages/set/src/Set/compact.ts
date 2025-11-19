import type { NonNil } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * ```ts
 * function Set.compact(target)
 * ```
 *
 * Example
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.compact(Set.create([1, null, 2, undefined])); // Set([1, 2])
 * Set.compact(Set.create([1, 2, 3])); // Set([1, 2, 3])
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, null, 2, undefined]), Set.compact()); // Set([1, 2])
 * pipe(Set.create([1, 2, 3]), Set.compact()); // Set([1, 2, 3])
 * ```
 */
export const compact: {
    <T>(): (target: Set<T>) => Set<NonNil<T>>
    <T>(): (target: ReadonlySet<T>) => ReadonlySet<NonNil<T>>

    <T>(target: Set<T>): Set<NonNil<T>>
    <T>(target: ReadonlySet<T>): ReadonlySet<NonNil<T>>
} = dfdlT((target: any): any => {
    if (!target.has(null) && !target.has(undefined)) return target
    target = cloneSet(target)
    target.delete(null)
    target.delete(undefined)
    return target
}, 1)
