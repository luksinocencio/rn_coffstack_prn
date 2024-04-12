import { User } from './interfaces'
import { lucas } from './mocksData'

function identify<T>(value: T): T {
  return value
}

const value = identify<User>(lucas)

console.log(value)
