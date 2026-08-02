// Interface e Type

interface User {
  firstName: string
  lastName: string
  age: number
}

// interface Programmer extends User {
//   favoriteLanguage: string
//   role: 'front-end' | 'back-end'
// }

type Programmer = {
  favoriteLanguage: string
  role: 'front-end' | 'back-end'
} & User // extends

function getBio(programmer: Programmer) {
  return `Hi my name is ${programmer.firstName} ${programmer.lastName} and my favorite language is ${programmer.favoriteLanguage} and I work as a ${programmer.role} developer.`
}

const programmer: Programmer = {
  favoriteLanguage: 'Swift',
  role: 'front-end',
  firstName: 'Lucas',
  lastName: 'Inocêncio',
  age: 30,
}

console.log(getBio(programmer))
