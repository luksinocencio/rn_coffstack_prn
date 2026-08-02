enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

function moveToFn(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log('move to ' + Direction.LEFT)
      break
    case Direction.RIGHT:
      console.log('move to ' + Direction.RIGHT)
      break
    case Direction.TOP:
      console.log('move to ' + Direction.TOP)
      break
    case Direction.BOTTOM:
      console.log('move to ' + Direction.BOTTOM)
      break

    default:
      console.log("I don't know where to go :(")
  }
}

moveToFn(Direction.RIGHT)
