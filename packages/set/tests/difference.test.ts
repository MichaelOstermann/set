import { describe, expect, it } from "vitest"
import { Set } from "../src"

describe("Set.difference", () => {
    it("should return elements in target but not in source", () => {
        const target = Set.create([1, 2, 3])
        const source = Set.create([2, 3, 4])
        const result = Set.difference(target, source)
        expect(result).toEqual(Set.create([1]))
    })

    it("should return target unchanged when source is empty", () => {
        const target = Set.create([1, 2, 3])
        const source = Set.create<number>([])
        const result = Set.difference(target, source)
        expect(result).toBe(target)
    })

    it("should return target unchanged when there is no overlap", () => {
        const target = Set.create([1, 2])
        const source = Set.create([3, 4])
        const result = Set.difference(target, source)
        expect(result).toBe(target)
    })

    it("should return empty set when source contains all target elements", () => {
        const target = Set.create([1, 2])
        const source = Set.create([1, 2, 3, 4])
        const result = Set.difference(target, source)
        expect(result).toEqual(Set.create([]))
    })

    it("should handle single element sets", () => {
        const target = Set.create([1])
        const source = Set.create([1])
        const result = Set.difference(target, source)
        expect(result).toEqual(Set.create([]))
    })

    it("should handle partial overlap at start of target", () => {
        const target = Set.create([1, 2, 3, 4, 5])
        const source = Set.create([1])
        const result = Set.difference(target, source)
        expect(result).toEqual(Set.create([2, 3, 4, 5]))
    })

    it("should handle partial overlap at end of target", () => {
        const target = Set.create([1, 2, 3, 4, 5])
        const source = Set.create([5])
        const result = Set.difference(target, source)
        expect(result).toEqual(Set.create([1, 2, 3, 4]))
    })

    it("should handle partial overlap in middle of target", () => {
        const target = Set.create([1, 2, 3, 4, 5])
        const source = Set.create([3])
        const result = Set.difference(target, source)
        expect(result).toEqual(Set.create([1, 2, 4, 5]))
    })

    it("should work with curried form", () => {
        const target = Set.create([1, 2, 3])
        const source = Set.create([2, 3, 4])
        const diff = Set.difference(source)
        const result = diff(target)
        expect(result).toEqual(Set.create([1]))
    })

    it("should handle string elements", () => {
        const target = Set.create(["a", "b", "c"])
        const source = Set.create(["b", "c", "d"])
        const result = Set.difference(target, source)
        expect(result).toEqual(Set.create(["a"]))
    })

    it("should handle object elements", () => {
        const obj1 = { id: 1 }
        const obj2 = { id: 2 }
        const obj3 = { id: 3 }
        const target = Set.create([obj1, obj2, obj3])
        const source = Set.create([obj2])
        const result = Set.difference(target, source)
        expect(result).toEqual(Set.create([obj1, obj3]))
    })

    it("should return target unchanged when target is empty", () => {
        const target = Set.create<number>([])
        const source = Set.create([1, 2, 3])
        const result = Set.difference(target, source)
        expect(result).toBe(target)
    })

    it("should return target unchanged when both sets are empty", () => {
        const target = Set.create<number>([])
        const source = Set.create<number>([])
        const result = Set.difference(target, source)
        expect(result).toBe(target)
    })

    it("should handle multiple overlapping elements", () => {
        const target = Set.create([1, 2, 3, 4, 5])
        const source = Set.create([2, 4])
        const result = Set.difference(target, source)
        expect(result).toEqual(Set.create([1, 3, 5]))
    })
})
