// Tipos Literais - Literal Types
// Uma variável pode fazer parte de um conjunto específico de string ou number
// exemplo: Direction => left, top, right, and bottom
// const value: Direction = "top";

function moveToFn(direction) {
  switch (direction) {
    case 'left':
      console.log('move to left')
      break
    case 'right':
      console.log('move to right')
      break
    case 'top':
      console.log('move to top')
      break
    case 'bottom':
      console.log('move to bottom')
      break
    default:
      console.log("I don't know where to go :(")
  }
}
moveToFn('right')
