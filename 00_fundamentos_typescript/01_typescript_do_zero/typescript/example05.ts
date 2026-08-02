// Interface e Type

interface User {
  firstName: string
  lastName: string
  age: number
}

// type User = {
//   firstName: string
//   lastName: string
//   age: number
// }

const person: User = { firstName: 'Lucas', lastName: 'Inocêncio', age: 30 }

function getFullName(user: User) {
  return `${user.firstName} ${user.lastName}`
}

console.log(getFullName(person))
