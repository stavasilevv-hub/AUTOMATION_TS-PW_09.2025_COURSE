// Task 1 adding element
let carsModels: string[] = ["Mercedes", "BMW", "Audi"];
carsModels.push("Toyota");
console.log(carsModels);

// Task 2 removing element
let numArray: number[] = [2, 4, 5, 6, 7, 10];
numArray.shift();
console.log(numArray);

// Task 3 map method
const divideArray: number[] = [1, 2, 3, 4, 5];
const dividedNums: number[] = divideArray.map((num: number): number => num / 2);
console.log(dividedNums);

// Task 4 filter method
const taskNums : number [] = [3,7,1,9,12,4];
const filterNums: number [] = taskNums.filter((num) => num>5);
console.log(filterNums);

// Task 5 sort method
const Nums: number [] = [9,3,7,2,8,5];
const sortedNums: number [] = Nums.sort((a: number, b:number) => a-b);
console.log(sortedNums);

// Task 6 slice method
const fruitsArr: string [] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const extr3: string [] = fruitsArr.slice(0,3);
console.log(extr3);

// Task 7 splice
const randArr: string [] = ['car', 'bike','bus','train','boat'];
const twoelements: string[] = randArr.splice(1,2);
console.log(randArr);

// Task 8 findLargest
function findLargest(a:number =6, b:number = 8, c:number = 11): string {
  if (a >= b && a >= c) {
    return `${a} is the largest number`;
  } else if (b >= a && b >= c) {
    return `${b} is the largest number`;
  } else {
    return `${c} is the largest number`;
  }
}

console.log(findLargest());

// task 9 convrtToCentimeters
function convrtToCentimeters(inches: number =1):number {
  const centimeters = inches * 2.54;
  return centimeters;
}
console.log("Default param:", convrtToCentimeters());
console.log("Passed param (10 inches):", convrtToCentimeters(10));

// task 10 calculateArea
function calculateArea(width: number, height?:number): string{
  if (height === undefined){
    return `The figure is square`;
  }
  else return `The figure is triangle`;
}
console.log("Square area (width=5);", calculateArea(5));
console.log("Triangle area (width=5, height=10):", calculateArea(5,10));