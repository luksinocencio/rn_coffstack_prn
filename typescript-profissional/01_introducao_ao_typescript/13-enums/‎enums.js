var Direction
;(function (Direction) {
  Direction['LEFT'] = 'left'
  Direction['RIGHT'] = 'right'
  Direction['TOP'] = 'top'
  Direction['BOTTOM'] = 'bottom'
})(Direction || (Direction = {}))

function moveToFn(direction) {
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
