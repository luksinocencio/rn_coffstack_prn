import React from 'react'

import { IconProps } from '../../Icon/Icon'
import { fireEvent, render, screen } from 'test-utils'

import { PasswordInput } from '../PasswordInput'

describe('<PasswordInput />', () => {
  it('should start with hidden password', async () => {
    const mockedOnChange = jest.fn()

    await render(
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

  it('when pressing the eye icon, it should show the password, and change to the eye off icon', async () => {
    const mockedOnChange = jest.fn()

    await render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    )

    const eyeIcon: IconProps['name'] = 'eyeOn'
    await fireEvent.press(screen.getByTestId(eyeIcon))

    const eyeOffIcon: IconProps['name'] = 'eyeOff'
    const eyeOffIconElement = screen.getByTestId(eyeOffIcon)
    const inputElement = screen.getByPlaceholderText('password')

    expect(eyeOffIconElement).toBeTruthy()
    expect(inputElement.props.secureTextEntry).toBeFalsy()
  })
})
