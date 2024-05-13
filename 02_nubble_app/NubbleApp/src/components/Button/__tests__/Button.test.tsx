import React from 'react'

import { fireEvent, render, screen } from 'test-utils'

import { Button, ButtonProps } from '../Button'

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="Button Title" {...props} />)

  const titleElement = screen.getByText(/button title/i)

  return {
    titleElement,
  }
}

describe('<Button />', () => {
  it('should not call onPress when disabled', () => {
    const mockedOnPress = jest.fn()
    const { titleElement } = renderComponent({ onPress: mockedOnPress })

    fireEvent.press(titleElement)

    expect(mockedOnPress).toHaveBeenCalled()
  })
  it('should not call onPress function when it is disabled', () => {
    const mockedOnPress = jest.fn()
    const { titleElement } = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    })

    fireEvent.press(titleElement)

    expect(mockedOnPress).not.toHaveBeenCalled()
  })
})
