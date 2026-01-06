import { IStorage } from '@/src/infra/storage/IStorage'
import RNAsynvStorage from '@react-native-async-storage/async-storage'

export const AsyncStorage: IStorage = {
  getItem: async key => {
    const item = await RNAsynvStorage.getItem(key)
    if (item) {
      return JSON.parse(item)
    }

    return null
  },

  setItem: async (key, value) => {
    await RNAsynvStorage.setItem(key, value)
  },

  removeItem: async key => {
    await RNAsynvStorage.removeItem(key)
  },
}
