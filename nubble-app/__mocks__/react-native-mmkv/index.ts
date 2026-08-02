// O MMKV é um Nitro module: instanciar `createMMKV()` exige o binário nativo,
// que não existe no ambiente do Jest. Como `MMKVStorage.ts` cria a instância no
// topo do módulo, qualquer import da barrel `services/storage` quebraria.
const store = new Map<string, string>()

export function createMMKV() {
  return {
    getString: (key: string) => store.get(key),
    set: (key: string, value: string) => {
      store.set(key, value)
    },
    remove: (key: string) => {
      store.delete(key)
    },
    clearAll: () => {
      store.clear()
    },
  }
}
