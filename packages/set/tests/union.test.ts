import { describe, expect, it } from "vitest"
import { Set } from "../src"

describe("Set.union", () => {
    it("should return all elements from both sets", () => {
        const target = Set.create([1, 2])
        const source = Set.create([2, 3, 4])
        const result = Set.union(target, source)
        expect(result).toEqual(Set.create([1, 2, 3, 4]))
    })

    it("should return target unchanged when source is empty", () => {
        const target = Set.create([1, 2, 3])
        const source = Set.create<number>([])
        const result = Set.union(target, source)
        expect(result).toBe(target)
    })

    it("should return source unchanged when target is empty", () => {
        const target = Set.create<number>([])
        const source = Set.create([1, 2, 3])
        const result = Set.union(target, source)
        expect(result).toBe(source)
    })

    it("should return target unchanged when source is subset", () => {
        const target = Set.create([1, 2, 3, 4])
        const source = Set.create([2, 3])
        const result = Set.union(target, source)
        expect(result).toBe(target)
    })

    it("should handle no overlap", () => {
        const target = Set.create([1, 2])
        const source = Set.create([3, 4])
        const result = Set.union(target, source)
        expect(result).toEqual(Set.create([1, 2, 3, 4]))
    })

    it("should handle single element sets with same element", () => {
        const target = Set.create([1])
        const source = Set.create([1])
        const result = Set.union(target, source)
        expect(result).toBe(target)
    })

    it("should handle single element sets with different elements", () => {
        const target = Set.create([1])
        const source = Set.create([2])
        const result = Set.union(target, source)
        expect(result).toEqual(Set.create([1, 2]))
    })

    it("should handle new element at start of source", () => {
        const target = Set.create([2, 3, 4])
        const source = Set.create([1, 2, 3])
        const result = Set.union(target, source)
        expect(result).toEqual(Set.create([1, 2, 3, 4]))
    })

    it("should handle new element at end of source", () => {
        const target = Set.create([1, 2, 3])
        const source = Set.create([2, 3, 4])
        const result = Set.union(target, source)
        expect(result).toEqual(Set.create([1, 2, 3, 4]))
    })

    it("should handle new element in middle of source", () => {
        const target = Set.create([1, 3, 5])
        const source = Set.create([1, 2, 3])
        const result = Set.union(target, source)
        expect(result).toEqual(Set.create([1, 2, 3, 5]))
    })

    it("should work with curried form", () => {
        const target = Set.create([1, 2])
        const source = Set.create([2, 3, 4])
        const unionWith = Set.union(source)
        const result = unionWith(target)
        expect(result).toEqual(Set.create([1, 2, 3, 4]))
    })

    it("should handle string elements", () => {
        const target = Set.create(["a", "b"])
        const source = Set.create(["b", "c", "d"])
        const result = Set.union(target, source)
        expect(result).toEqual(Set.create(["a", "b", "c", "d"]))
    })

    it("should handle object elements", () => {
        const obj1 = { id: 1 }
        const obj2 = { id: 2 }
        const obj3 = { id: 3 }
        const target = Set.create([obj1, obj2])
        const source = Set.create([obj2, obj3])
        const result = Set.union(target, source)
        expect(result).toEqual(Set.create([obj1, obj2, obj3]))
    })

    it("should preserve all target elements when creating result", () => {
        const target = Set.create([1, 2, 3, 4, 5])
        const source = Set.create([6])
        const result = Set.union(target, source)
        expect(result).toEqual(Set.create([1, 2, 3, 4, 5, 6]))
    })

    it("should return target unchanged when both sets are empty", () => {
        const target = Set.create<number>([])
        const source = Set.create<number>([])
        const result = Set.union(target, source)
        expect(result).toBe(target)
    })

    it("should return target unchanged when sets are equal", () => {
        const target = Set.create([1, 2, 3])
        const source = Set.create([1, 2, 3])
        const result = Set.union(target, source)
        expect(result).toBe(target)
    })

    it("should create new set when target is subset", () => {
        const target = Set.create([2, 3])
        const source = Set.create([1, 2, 3, 4])
        const result = Set.union(target, source)
        expect(result).toEqual(Set.create([1, 2, 3, 4]))
        expect(result).not.toBe(target)
        expect(result).not.toBe(source)
    })
})
