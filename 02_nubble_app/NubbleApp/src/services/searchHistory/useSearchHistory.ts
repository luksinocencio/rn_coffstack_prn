import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { storage } from '../storage'

import { SearchHistoryService } from './searchHistoryType'

const useSearchHistoryStore = create<SearchHistoryService>()(
  persist(
    (set, get) => ({
      userList: [],
      addUser: user => {
        const userList = get().userList
        const updateList = [...userList, user]
        set({ userList: updateList })
      },
      removeUser: userId => {
        const userList = get().userList
        const updateList = userList.filter(user => user.id !== userId)
        set({ userList: updateList })
      },
      clearUserList: () => {
        set({ userList: [] })
      },
    }),
    {
      name: '@SearchHistoryStore',
      storage: storage,
    },
  ),
)

export function useSearchHistory(): SearchHistoryService['userList'] {
  const userList = useSearchHistoryStore(state => state.userList)
  return userList
}

export function useSearchHistoryService(): Omit<
  SearchHistoryService,
  'userList'
> {
  const addUser = useSearchHistoryStore(state => state.addUser)
  const removeUser = useSearchHistoryStore(state => state.removeUser)
  const clearUserList = useSearchHistoryStore(state => state.clearUserList)

  return {
    addUser,
    removeUser,
    clearUserList,
  }
}
