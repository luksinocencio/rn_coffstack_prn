// console.log(email);

import { publication1 } from './data'

// type UserKey = "firstName" | "lastName" | "email";
function getProperty<T, Key extends keyof T>(value: T, key: Key): T[Key] {
  return value[key]
}

const value = getProperty(publication1, 'author')
console.log(value)
