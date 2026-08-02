// null (nulo) => representa ausencia de valor
// undefined (não definido) => nem um valor for atribuído

let value1
console.log('typeof ' + typeof value1)

value1 = null

console.log('typeof ' + typeof value1)

function hello(value: string | null | undefined) {
  if (value) {
    console.log('Hello, ' + value.toUpperCase())
  }
}

hello('Lucas')
hello(null)
