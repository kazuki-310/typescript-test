
// it('1+2を足すと3になる', () => {
//   expect(sum(1, 2)).toBe(3)
// })

import { sum } from "./sum"


it.each`
  a | b | expected
  ${1} | ${2} | ${3}
  ${1} | ${-2} | ${-1}
`('$a + $b は $expected`になる', ({ a, b, expected }) => {
  expect(sum(a, b)).toBe(expected)
})
