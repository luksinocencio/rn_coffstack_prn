// Generics (genericos) - Capacidade de criar codigos (função, classe, tipos)
// que funcionam em uma variedade de tipos ao em vez de apenas um.

function identity<Type>(arg: Type): Type {
  return arg
}

const valueNumber = identity<number>(8)
console.log(valueNumber)

const valueString = identity<string>('8')
console.log(valueString)
