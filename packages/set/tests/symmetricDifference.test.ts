import { describe, expect, it } from "vitest"
import { Set } from "../src"

describe("Set.symmetricDifference", () => {
    it("should return elements in either set but not both", () => {
        const target = Set.create([1, 2, 3])
        const source = Set.create([3, 4, 5])
        const result = Set.symmetricDifference(target, source)
        expect(result).toEqual(Set.create([1, 2, 4, 5]))
    })

    it("should return target unchanged when source is empty", () => {
        const target = Set.create([1, 2, 3])
        const source = Set.create<number>([])
        const result = Set.symmetricDifference(target, source)
        expect(result).toBe(target)
    })

    it("should return source unchanged when target is empty", () => {
        const target = Set.create<number>([])
        const source = Set.create([1, 2, 3])
        const result = Set.symmetricDifference(target, source)
        expect(result).toBe(source)
    })

    it("should return all elements when there is no overlap", () => {
        const target = Set.create([1, 2])
        const source = Set.create([3, 4])
        const result = Set.symmetricDifference(target, source)
        expect(result).toEqual(Set.create([1, 2, 3, 4]))
    })

    it("should return empty set when sets are identical", () => {
        const target = Set.create([1, 2, 3])
        const source = Set.create([1, 2, 3])
        const result = Set.symmetricDifference(target, source)
        expect(result).toEqual(Set.create([]))
    })

    it("should handle single element sets with same element", () => {
        const target = Set.create([1])
        const source = Set.create([1])
        const result = Set.symmetricDifference(target, source)
        expect(result).toEqual(Set.create([]))
    })

    it("should handle single element sets with different elements", () => {
        const target = Set.create([1])
        const source = Set.create([2])
        const result = Set.symmetricDifference(target, source)
        expect(result).toEqual(Set.create([1, 2]))
    })

    it("should handle partial overlap at start", () => {
        const target = Set.create([1, 2, 3])
        const source = Set.create([1, 4, 5])
        const result = Set.symmetricDifference(target, source)
        expect(result).toEqual(Set.create([2, 3, 4, 5]))
    })

    it("should handle partial overlap at end", () => {
        const target = Set.create([1, 2, 3])
        const source = Set.create([3, 4, 5])
        const result = Set.symmetricDifference(target, source)
        expect(result).toEqual(Set.create([1, 2, 4, 5]))
    })

    it("should handle partial overlap in middle", () => {
        const target = Set.create([1, 2, 3])
        const source = Set.create([2, 4, 5])
        const result = Set.symmetricDifference(target, source)
        expect(result).toEqual(Set.create([1, 3, 4, 5]))
    })

    it("should handle target subset of source", () => {
        const target = Set.create([2, 3])
        const source = Set.create([1, 2, 3, 4])
        const result = Set.symmetricDifference(target, source)
        expect(result).toEqual(Set.create([1, 4]))
    })

    it("should handle source subset of target", () => {
        const target = Set.create([1, 2, 3, 4])
        const source = Set.create([2, 3])
        const result = Set.symmetricDifference(target, source)
        expect(result).toEqual(Set.create([1, 4]))
    })

    it("should work with curried form", () => {
        const target = Set.create([1, 2, 3])
        const source = Set.create([3, 4, 5])
        const symDiff = Set.symmetricDifference(source)
        const result = symDiff(target)
        expect(result).toEqual(Set.create([1, 2, 4, 5]))
    })

    it("should handle string elements", () => {
        const target = Set.create(["a", "b", "c"])
        const source = Set.create(["c", "d", "e"])
        const result = Set.symmetricDifference(target, source)
        expect(result).toEqual(Set.create(["a", "b", "d", "e"]))
    })

    it("should handle object elements", () => {
        const obj1 = { id: 1 }
        const obj2 = { id: 2 }
        const obj3 = { id: 3 }
        const obj4 = { id: 4 }
        const target = Set.create([obj1, obj2, obj3])
        const source = Set.create([obj3, obj4])
        const result = Set.symmetricDifference(target, source)
        expect(result).toEqual(Set.create([obj1, obj2, obj4]))
    })

    it("should handle multiple overlapping elements", () => {
        const target = Set.create([1, 2, 3, 4, 5])
        const source = Set.create([3, 4, 5, 6, 7])
        const result = Set.symmetricDifference(target, source)
        expect(result).toEqual(Set.create([1, 2, 6, 7]))
    })

    it("should return target unchanged when both sets are empty", () => {
        const target = Set.create<number>([])
        const source = Set.create<number>([])
        const result = Set.symmetricDifference(target, source)
        expect(result).toBe(target)
    })
})
