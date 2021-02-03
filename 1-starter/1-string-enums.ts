// String Enums

enum Direction {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right"
}
function move(dir: Direction) {
  console.log(`Moved ${dir}`);
}
move(Direction.Up);
move(Direction.Down);
move(Direction.Left);
move(Direction.Right);



/// Less preferred IMHO

type Direction2 = 'up' | 'down' | 'left' | 'right'

function move2(dir: Direction2) {
  console.log(`Moved ${dir}`);
}

move2('up')
// move2('not_up') // This will fail
