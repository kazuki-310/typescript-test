// 1. toBe

it("数値のテスト", () => {
  expect(2 + 2).toBe(4)
})

it("文字列のテスト", () => {
  expect("hoge").toBe("hoge")
})

it('booleanのテスト', () => {
  expect(true).toBe(true)
})

// 2. toEqual
it('配列のテスト', () => {
  const arr1 = [1, 2, 3]
  const arr2 = [1, 2, 3]

  expect(arr1).toEqual(arr2)
})

it('オブジェクトのテスト', () => {
  const obj1 = { foo: 'bar' }
  const obj2 = { foo: 'bar' }

  expect(obj1).toEqual(obj2)
})

// 3. not
it('2+2は5ではない', () => {
  expect(2 + 2).not.toBe(5)
})
