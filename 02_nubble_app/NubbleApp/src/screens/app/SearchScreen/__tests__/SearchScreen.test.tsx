import React from 'react'

import { mockUtils, server, userMocked } from '@test'
import { act, fireEvent, renderScreen, screen } from 'test-utils'

import { AppStack } from '@routes'
import { authCredentialsStorage } from '@services'

jest.unmock('@react-navigation/native')

beforeAll(() => {
  server.listen()
  jest.useFakeTimers()
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials)
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
  jest.useRealTimers()
  jest.resetAllMocks()
})

describe('integration: SearchScreen', () => {
  it('Search Flow', async () => {
    // 1) Navigate to SearchScreen
    renderScreen(<AppStack initialRouteName="SearchScreen" />)

    // 2) Find the search input and type user name
    const inputText = screen.getByPlaceholderText(/digite para buscar/i)
    fireEvent.changeText(inputText, 'mar')
    act(() => jest.runAllTimers())

    // 3) Find two users as per the MSW mock
    const user1 = await screen.findByText(userMocked.user1.username)
    expect(user1).toBeTruthy()

    const user2 = await screen.findByText(userMocked.user2.username)
    expect(user2).toBeTruthy()

    // 4) Select the user1 and navigate to Profile screen
    fireEvent.press(user1)

    // 5) Expect to be at the Profile screen with user1 loaded
    const userFullName = await screen.findByText(userMocked.user1.full_name)
    expect(userFullName).toBeTruthy()

    // 6) Go back to the Search screen
    const backButton = screen.getByTestId('screen-back-button')
    fireEvent.press(backButton)

    // 7) Clear the search input
    const inputTextAfterBack =
      screen.getByPlaceholderText(/digite para buscar/i)
    fireEvent.changeText(inputTextAfterBack, '')
    act(() => jest.runAllTimers())

    // 8) Make sure the search history (busca recentes) section appears
    const searchHistoryTitle = screen.getByText(/buscas recentes/i)
    expect(searchHistoryTitle).toBeTruthy()

    // 9) The user1 (pressed) was the saved in the search history
    const user1AfterBack = screen.queryByText(userMocked.user1.username)
    expect(user1AfterBack).toBeTruthy()

    // 10) The user2 (not pressed) was not saved in the search history
    const user2AfterBack = screen.queryByText(userMocked.user2.username)
    expect(user2AfterBack).toBeFalsy()

    // 11) Remove user1 from the search history pressing the trash icon
    const trashIcon = screen.getByTestId('trash')
    fireEvent.press(trashIcon)

    // 12) Make sure the user1 is not in the search history anymore
    const user1AfterRemoved = screen.queryByText(userMocked.user1.username)
    expect(user1AfterRemoved).toBeFalsy()
  })
})
