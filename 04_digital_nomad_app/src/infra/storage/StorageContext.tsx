import { IStorage } from '@/src/infra/storage/IStorage'
import { createContext, PropsWithChildren, useContext } from 'react'

const StorageContext = createContext<{ storage: IStorage }>({
  storage: {} as IStorage,
})

export function StorageProvider({ children, storage }: PropsWithChildren<{ storage: IStorage }>) {
  return <StorageContext.Provider value={{ storage }}>{children}</StorageContext.Provider>
}

export function useStorage() {
  const context = useContext(StorageContext)

  if (!context) {
    throw new Error('Storage Context should be user within a StorageProvider')
  }

  return context
}
