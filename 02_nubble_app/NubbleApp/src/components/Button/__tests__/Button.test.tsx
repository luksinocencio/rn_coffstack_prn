import React from 'react'

import { fireEvent, render } from 'test-utils'

import { Button } from '../Button'

describe('<Button />', () => {
  it('should render correctly', () => {
    render(<Button title="button title" />)
  })

  it('should calls the onPress when is pressed', () => {
    const mockedOnPress = jest.fn()

    const { getByText } = render(
      <Button title="button title" onPress={mockedOnPress} />,
    )

    fireEvent.press(getByText(/button title/i))

    expect(mockedOnPress).toHaveBeenCalled()
  })
})
