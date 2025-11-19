/**
 * ```ts
 * function Set.create(iterable?)
 * ```
 *
 * Example
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.create([1, 2, 3]); // Set([1, 2, 3])
 * ```
 */
export function create<T>(iterable?: Iterable<T> | null | undefined): Set<T> {
    return new globalThis.Set(iterable)
}
