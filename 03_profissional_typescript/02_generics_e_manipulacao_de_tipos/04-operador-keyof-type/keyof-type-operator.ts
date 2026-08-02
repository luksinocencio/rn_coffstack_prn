// "keyof" Type Operator - Produz um novo tipo a partir da união das chaves de um objeto
import { lucas, publications } from './data'
import type { Publication, User } from './models'

function getProperty<T>(value: T, key: keyof T) {
  return value[key]
}

console.log(getProperty<User>(lucas, 'email'))
console.log(getProperty<User>(lucas, 'firstName'))
console.log(getProperty<User>(lucas, 'lastName'))

console.log(getProperty<Publication>(publications[0], 'author'))
console.log(getProperty<Publication>(publications[0], 'description'))
console.log(getProperty<Publication>(publications[0], 'imageURL'))
