export const getMockList = (n: number) =>
  Array.from({ length: 10 }, (_, idx) => ({ uid: idx + 1, name: `demo${n}-test${idx + 1}` }))
