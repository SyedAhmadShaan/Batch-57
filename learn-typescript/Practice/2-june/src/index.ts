//name functions (overloading)
function add(x: number, y: number): number {
  return x + y;
}
console.log(add(5, 8));

//arrow functions
const multiply = (x: number, y: number): number => {
  return x * y;
};
console.log(multiply(5, 8));

//lambda functions
const sub = (x: number, y: number): number => x - y;
