const message: string = 'Hello World!'
const numberValue: number = 10
const booleanValue: boolean = false

const nullValue: null = null
const undefinedValue: undefined = undefined

const value: string | number = 5
const value2: 'primary' | 'secondary' = 'primary'

function hello(name: string) {
  return `Hello ${name}`
}

console.log(hello('Lucas'))

const list: string[] = ['a', 'b', 'c', 'd', 'e', 'f']

const users = [
  { name: 'Jack', age: 30 },
  { name: 'Jane', age: 21 },
]

const findJack = users.find(user => user.name === 'Jack')
console.log(findJack)

const jane = users.length > 4 ? users[3] : null
console.log(jane?.age)
