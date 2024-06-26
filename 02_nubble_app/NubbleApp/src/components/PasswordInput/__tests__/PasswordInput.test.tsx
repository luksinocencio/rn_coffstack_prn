import React from 'react'

import { IconProps } from 'src/components/Icon/Icon'
import { fireEvent, render, screen } from 'test-utils'

import { PasswordInput } from '../PasswordInput'

describe('<PasswordInput />', () => {
  it('should start with hidden password', () => {
    const mockedOnChange = jest.fn()

    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    )

    const inputElement = screen.getByPlaceholderText('password')

    expect(inputElement.props.secureTextEntry).toBeTruthy()
  })

  it('when pressing the eye icon, it should show the password, and change to the eye off icon', () => {
    const mockedOnChange = jest.fn()

    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    )

    const eyeIcon: IconProps['name'] = 'eyeOn'
    fireEvent.press(screen.getByTestId(eyeIcon))

    const eyeOffIcon: IconProps['name'] = 'eyeOff'
    const eyeOffIconElement = screen.getByTestId(eyeOffIcon)
    const inputElement = screen.getByPlaceholderText('password')

    expect(eyeOffIconElement).toBeTruthy()
    expect(inputElement.props.secureTextEntry).toBeFalsy()
  })
})
