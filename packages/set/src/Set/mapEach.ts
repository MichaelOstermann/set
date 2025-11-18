import { dfdlT } from "@monstermann/dfdl"

/**
 * ```ts
 * function Set.mapEach(target, fn)
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * Set.mapEach(Set.create([1, 2, 3]), (x) => x * 2); // Set([2, 4, 6])
 * Set.mapEach(Set.create(["a", "b"]), (x) => x.toUpperCase()); // Set(['A', 'B'])
 * ```
 *
 * ```ts
 * import { Set } from "@monstermann/set";
 *
 * pipe(
 *     Set.create([1, 2, 3]),
 *     Set.mapEach((x) => x * 2),
 * ); // Set([2, 4, 6])
 *
 * pipe(
 *     Set.create(["a", "b"]),
 *     Set.mapEach((x) => x.toUpperCase()),
 * ); // Set(['A', 'B'])
 * ```
 */
export const mapEach: {
    <T, U>(fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => U): (target: Set<T>) => Set<U>
    <T, U>(fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => U): (target: ReadonlySet<T>) => ReadonlySet<U>

    <T, U>(target: Set<T>, fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => U): Set<U>
    <T, U>(target: ReadonlySet<T>, fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => U): ReadonlySet<U>
} = dfdlT((target: any, fn: any): any => {
    let hasChanges = false
    const result = new Set()
    for (const prev of target) {
        const next = fn(prev, target)
        hasChanges ||= prev !== next
        result.add(next)
    }
    return hasChanges ? result : target
}, 2)
