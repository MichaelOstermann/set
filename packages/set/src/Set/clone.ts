import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * ```ts
 * function Set.clone(target)
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * const original = Set.create([1, 2, 3]);
 * const copy = Set.clone(original); // Set { 1, 2, 3 }
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * const original = Set.create([1, 2, 3]);
 * const copy = pipe(original, Set.clone()); // Set { 1, 2, 3 }
 * ```
 */
export const clone: {
    (): <T>(target: ReadonlySet<T>) => Set<T>
    <T>(target: ReadonlySet<T>): Set<T>
} = dfdlT(cloneSet, 1)
