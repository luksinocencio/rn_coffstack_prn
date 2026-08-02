// O pacote parou de distribuir `jest/async-storage-mock` na v3, então o mock
// in-memory vive aqui. Cobre a superfície que o app usa (`getItem`/`setItem`/
// `removeItem`) mais as operações de conjunto, para o caso de crescer.
let store = {}

const AsyncStorageMock = {
  getItem: jest.fn(async key => (key in store ? store[key] : null)),
  setItem: jest.fn(async (key, value) => {
    store[key] = value
  }),
  removeItem: jest.fn(async key => {
    delete store[key]
  }),
  clear: jest.fn(async () => {
    store = {}
  }),
  getAllKeys: jest.fn(async () => Object.keys(store)),
  multiGet: jest.fn(async keys =>
    keys.map(key => [key, key in store ? store[key] : null]),
  ),
  multiSet: jest.fn(async pairs => {
    pairs.forEach(([key, value]) => {
      store[key] = value
    })
  }),
  multiRemove: jest.fn(async keys => {
    keys.forEach(key => {
      delete store[key]
    })
  }),
}

export default AsyncStorageMock
export const {
  getItem,
  setItem,
  removeItem,
  clear,
  getAllKeys,
  multiGet,
  multiSet,
  multiRemove,
} = AsyncStorageMock
