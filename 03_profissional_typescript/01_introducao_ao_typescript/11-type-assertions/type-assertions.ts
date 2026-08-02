type Person = {
  firstName: string
  lastName: string
  email: string
  address: {
    zipCode: string
  }
}

// const value = <Person>{}
const value = {
  firstName: 'Lucas',
} as Person

// 1 - algo que acontece em tempo de execução ou fator externo
// 2 - criando mocks para testes automatizados

console.log(value.firstName)
