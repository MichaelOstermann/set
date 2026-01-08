import type { NonNil } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * # compact
 *
 * ```ts
 * function Set.compact<T>(
 *     target: ReadonlySet<T>,
 * ): ReadonlySet<NonNil<T>>
 * ```
 *
 * Returns a set with all `null` and `undefined` values removed.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Set } from "@monstermann/set";
 *
 * Set.compact(Set.create([1, null, 2, undefined])); // Set([1, 2])
 * Set.compact(Set.create([1, 2, 3])); // Set([1, 2, 3])
 * ```
 *
 * ```ts [data-last]
 * import { Set } from "@monstermann/set";
 *
 * pipe(Set.create([1, null, 2, undefined]), Set.compact()); // Set([1, 2])
 * pipe(Set.create([1, 2, 3]), Set.compact()); // Set([1, 2, 3])
 * ```
 *
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
