// arrays declaration
let numsArray: number[] = [1, 2, 3, 4];
let stringsArray: string[] = ["Pesho", "Gosho", "Tosho", "Ivan"];
let combinedArray: (string | number)[] = [1, "Pesho", "Ivan", 2];

// access element by index
stringsArray[0]; // Pesho
stringsArray[1]; // Gosho
combinedArray[2]; // Ivan

// acces array lenght
numsArray.length;

// method map
let multiplyNums = numsArray.map((num: number) => num * 2);
let mapNames = stringsArray.map((currName: string) => `Hello ${currName}`);
let checkTypeOf = combinedArray.map((element: number | string) => {
  if (typeof element === "number") {
    return element + 5;
  } else {
    return `Welcome ${element}`;
  }
});
// console.log(checkTypeOf);

// method filter
let positiveNumbs: number[] = [2, 3, 4, 5, 6];
let filteredArr: number[] = positiveNumbs.filter((num: number) => num > 3);
// console.log("filteredArr", filteredArr);

// method sort
let sortNums: number [] = [100, 4, 30, 5, 1, 40, 6];
// console.log (sortNums.sort());
let sortedResult = sortNums.sort((a: number, b:number) => a-b);
// console.log(sortedResult);

// method push
sortedResult.push(200);
// console.log(sortedResult);

// method pop
sortedResult.pop();
// console.log(sortedResult);

// method shift
sortedResult.shift();
// console.log(sortedResult);

// method unshift
sortedResult.unshift(1);
console.log(sortedResult);