// any - não quer ter o trabalho de converncer o Typescript

function sum(value1: number, value2: number, flag?: boolean): number {
  if (flag) {
    return value1 + value2
  } else {
    return 0
  }
}

const total = sum(3, 7)

console.log('Total: ', total)
