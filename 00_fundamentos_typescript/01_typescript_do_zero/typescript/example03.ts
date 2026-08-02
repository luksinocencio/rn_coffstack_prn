// Tipagem dinâmica
const user = {
  name: 'Lucas',
  age: 30,
}

console.log(user.name) // Lucas
// console.log(user.location) // error pois não existe

function flipCoin(): 'cara' | 'coroa' {
  return Math.random() < 0.5 ? 'cara' : 'coroa'
}

const result = flipCoin()

if (result === 'cara') {
  console.log('Você ganhou!')
} else {
  console.log('Você perdeu!')
}
