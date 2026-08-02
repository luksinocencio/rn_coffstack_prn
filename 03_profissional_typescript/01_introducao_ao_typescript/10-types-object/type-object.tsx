// Type Aliases (type) and Interface
// Interface consigo redeclarar e mergear as propriedades e é mais performática na compilação

//type Person = {
//firstName: string
//lastName: string
//}

interface Person {
  firstName: string
  lastName: string
}

interface Person {
  age?: number
}

function getFullName(person: Person): string {
  console.log(person.age)
  return `${person.firstName} ${person.lastName}`
}

// Structural type system => Sistema de tipo estrutural
const person: Person = {
  firstName: 'Lucas',
  lastName: 'Inocencio',
  age: 31,
}

const fullName = getFullName(person)
console.log(fullName)
