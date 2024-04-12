// Tipagem dinâmica
const user = {
  name: 'Lucas',
  age: 30,
}

console.log(user.name) // Lucas
console.log('propriedade que não existe ' + user.location) // undefined

function flipCoin() {
  return Math.random() < 0.5 ? 'cara' : 'coroa'
}

const result = flipCoin()

if (result === 'cara') {
  console.log('Você ganhou!')
} else {
  console.log('Você perdeu!')
}
