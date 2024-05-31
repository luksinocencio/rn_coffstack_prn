import React from 'react'

import { mockUtils } from '@test'
import { fireEvent, renderScreen, screen } from 'test-utils'

import { AppStack } from '@routes'
import { authCredentialsStorage } from '@services'

beforeAll(() => {
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials)
})

describe('integration: SearchScreen', () => {
  it('Search Flow', () => {
    renderScreen(<AppStack initialRouteName="SearchScreen" />)

    const inputText = screen.getByPlaceholderText(/digite para buscar/i)

    expect(inputText).toBeTruthy()

    fireEvent.changeText(inputText, 'mar')
  })
})
