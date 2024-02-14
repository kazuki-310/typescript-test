import { render ,screen} from "@testing-library/react"
import Form from "./Form"

describe('Form', () => {
  it('初期状態ではテキストは空欄', () => {
    render(<Form />)

    const input = screen.getByPlaceholderText('Enter text')
    expect(input).toBeInTheDocument()
    expect(input).toHaveTextContent('')
  })
})