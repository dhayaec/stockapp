import { getLargest, multiply, sumAll } from './utils'

describe('utils', () => {
  describe('sumAll()', () => {
    test('should sumAll numbers', () => {
      expect(sumAll(10)).toEqual(55)
    })
  })

  describe('getLargest', () => {
    test('should getLargest', () => {
      expect(getLargest([])).toEqual(0)
      expect(getLargest([1, 3, 5, -3])).toEqual(5)
    })
  })

  describe('multiply', () => {
    test('should multiply', () => {
      expect(multiply(2, 2)).toEqual(4)
    })
  })
})
