import React from 'react'
import { StyleSheet } from 'react-native'

import { TestInstance } from 'test-renderer'
import { fireEvent, render, screen } from 'test-utils'

import { theme } from '../../../theme/theme'

import { Button, ButtonProps } from '../Button'

async function renderComponent(props?: Partial<ButtonProps>) {
  await render(<Button title="Button Title" {...props} />)

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
  it('should not call onPress when disabled', async () => {
    const mockedOnPress = jest.fn()
    const { titleElement, loadingElement } = await renderComponent({
      onPress: mockedOnPress,
    })

    await fireEvent.press(titleElement as TestInstance)

    expect(mockedOnPress).toHaveBeenCalled()
    expect(loadingElement).toBeFalsy()
  })

  it('should not call onPress function when it is disabled', async () => {
    const mockedOnPress = jest.fn()
    const { titleElement } = await renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    })

    await fireEvent.press(titleElement as TestInstance)

    expect(mockedOnPress).not.toHaveBeenCalled()
  })

  it('should be gray if button is disabled', async () => {
    const { titleElement } = await renderComponent({ disabled: true })
    const titleStyle = StyleSheet.flatten(titleElement?.props.style)

    expect(titleStyle.color).toEqual(theme.colors.gray2)
  })

  describe('when button is loading', () => {
    it('should show loading indicator', async () => {
      const { loadingElement } = await renderComponent({ loading: true })
      expect(loadingElement).toBeTruthy()
    })

    it('should not show title', async () => {
      const { titleElement } = await renderComponent({ loading: true })
      expect(titleElement).toBeFalsy()
    })

    it('should not call onPress', async () => {
      const mockedOnPress = jest.fn()
      const { buttonElement } = await renderComponent({
        loading: true,
        onPress: mockedOnPress,
      })

      await fireEvent.press(buttonElement)

      expect(mockedOnPress).not.toHaveBeenCalled()
    })
  })
})
