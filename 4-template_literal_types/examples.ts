type Color = "red" | "blue";
type Quantity = "one" | "two";

type SeussFish = `${Quantity | Color} fish`;


function logFish(fish: SeussFish){
    console.log(fish)
}

logFish('red fish')
// test('orange fish')



//Practical Example

type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";
type Alignment = `${VerticalAlignment}-${HorizontalAlignment}`;

// Takes
//   | "top-left"    | "top-center"    | "top-right"
//   | "middle-left" | "middle-center" | "middle-right"
//   | "bottom-left" | "bottom-center" | "bottom-right"

declare function setAlignment(value: Alignment): void;
