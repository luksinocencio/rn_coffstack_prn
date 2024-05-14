import React from 'react'
import { StyleSheet } from 'react-native'

import { ReactTestInstance } from 'react-test-renderer'
import { fireEvent, render, screen } from 'test-utils'

import { theme } from '@theme'

import { Button, ButtonProps } from '../Button'

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="Button Title" {...props} />)

  const titleElement = screen.queryByText(/button title/i)
  const buttonElement = screen.getByTestId('button')
  const loadingElement = screen.queryByTestId('activity-indicator')

  return {
    titleElement,
    buttonElement,
    loadingElement,
  }
}

describe('<Button />', () => {
  it('should not call onPress when disabled', () => {
    const mockedOnPress = jest.fn()
    const { titleElement, loadingElement } = renderComponent({
      onPress: mockedOnPress,
    })

    fireEvent.press(titleElement as ReactTestInstance)

    expect(mockedOnPress).toHaveBeenCalled()
    expect(loadingElement).toBeFalsy()
  })

  it('should not call onPress function when it is disabled', () => {
    const mockedOnPress = jest.fn()
    const { titleElement } = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    })

    fireEvent.press(titleElement as ReactTestInstance)

    expect(mockedOnPress).not.toHaveBeenCalled()
  })

  it('should be gray if button is disabled', () => {
    const { titleElement } = renderComponent({ disabled: true })
    const titleStyle = StyleSheet.flatten(titleElement?.props.style)

    expect(titleStyle.color).toEqual(theme.colors.gray2)
  })

  describe('when button is loading', () => {
    it('should show loading indicator', () => {
      const { loadingElement } = renderComponent({ loading: true })
      expect(loadingElement).toBeTruthy()
    })

    it('should not show title', () => {
      const { titleElement } = renderComponent({ loading: true })
      expect(titleElement).toBeFalsy()
    })

    it('should not call onPress', () => {
      const mockedOnPress = jest.fn()
      const { buttonElement } = renderComponent({
        loading: true,
        onPress: mockedOnPress,
      })

      fireEvent.press(buttonElement)

      expect(mockedOnPress).not.toHaveBeenCalled()
    })
  })
})
