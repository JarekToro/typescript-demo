// Using keyof

let x = { a: 1, b: "data", c: 3, d: 4 };

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const imANumber = getProperty(x, "a");
const imAString = getProperty(x, "b");

// Errors out because it is not a proper key
// const imAFailure = getProperty(x, "e");

// Advance Keyof

//JS
function oldPluck(o: any, propertyNames: any) {
  return propertyNames.map((n: any) => o[n]);
}

//TS
function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
  return propertyNames.map((n) => o[n]);
}

interface Car {
  manufacturer: string;
  model: string;
  year: number;
}

let taxi: Car = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2014,
};

// Manufacturer and model are both of type string,
// so we can pluck them both into a typed string array
let makeAndModel = pluck(taxi, ["manufacturer", "model"]);

// If we try to pluck model and year, we get an
// array of a union type: (string | number)[]
let modelYear = pluck(taxi, ["model", "year"]);
