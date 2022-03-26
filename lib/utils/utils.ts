export const sumAll = (num: number) => (num / 2) * (1 + num)

export const getLargest = (numbers: number[] = []) =>
  numbers.length ? numbers.sort((a, b) => b - a)[0] : 0

export const multiply = (a: number, b: number) => a * b
