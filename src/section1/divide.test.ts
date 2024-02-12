// 1. toThrow

import { divide, ZeroDevisorError } from './divide'

it('0で割るとエラーが発生する', () => {
  expect(() => divide(1, 0)).toThrow()
  expect(() => divide(10, 3)).toThrow('0で割ることはできません')
  expect(() => divide(10, 0)).toThrow(ZeroDevisorError)
})
