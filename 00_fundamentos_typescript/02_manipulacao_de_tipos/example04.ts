import { User } from './interfaces'
import { comment } from './mocksData'

export const joao: User = {
  name: 'João',
  userName: 'joao_paulo',
  email: 'joao@mail.com',
}

const value = joao.userName
// const value = joao["userName"] // acessar de forma dinamica
console.log(value)

function getUserProperty<Type>(value: Type, key: keyof Type) {
  return value[key]
}

const value2 = getUserProperty(joao, 'userName')
console.log(value2)

const value3 = getUserProperty(comment, 'user')
console.log(value3)
