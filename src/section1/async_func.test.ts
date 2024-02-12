import { delay } from "./async_func";

it('delayがされた時間後にメッセージを返す', async () => {
  const result = await delay('test', 100)

  expect(result).toBe('test')
})

it('timeがマイナスの場合はエラーが発生する。', async () => {
  try {
    const result = await delay('test', 100)
  } catch (e: any) {
    expect(e.message).toBe('timeは0以上で指定してください')
  }
})
