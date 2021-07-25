import { fireEvent, render } from '@testing-library/svelte'
import Counter from './Counter.svelte'

it('it works', async () => {
    const { getByText, getByTestId } = render(Counter)

    const increment = getByText('increment')
    const decrement = getByText('decrement')
    const counter = getByTestId('counter-value')

    await fireEvent.click(increment)
    await fireEvent.click(increment)
    await fireEvent.click(increment)
    await fireEvent.click(decrement)

    expect(counter.textContent).toBe('2')

    // with jest-dom
    expect(counter).toHaveTextContent('2')
})