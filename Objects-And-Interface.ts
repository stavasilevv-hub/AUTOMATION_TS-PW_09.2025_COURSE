// Interface declaration
interface Car {
  type: string;
  model: string;
  color: string;
  horsePower: number;
}

// Object declaration
const car: Car = {
  type: "Mercedes",
  model: "G-Class",
  color: "black",
  horsePower: 585,
};

// console.log(car);

// Interface person object
interface Person {
  name: string;
  lastName: string;
  address: string;
  age: number;
  hobbies: string[];
  greeting: () => string; //zadavame tip na function
}

// object with method and array value
const person: Person = {
  name: "Ivan",
  lastName: "Ivanov",
  address: "Bul.Vitosha 30",
  age: 30,
  hobbies: ["football", "tennis", "hiking"],
  greeting: function () {
    return "Hello! My name is Ivan.";
  },
};

// console.log(person);

// properties access
person.name;
person["name"];
person.age;
person["age"];
person["address"];
// person.name; // dostupvame imeto - console.log(person.name)

// izvikvane na []
const key = "name";
const testObj = { name: "Pesho", age: 30 };
// console.log (testObj[key]);

// console.log(person.greeting()); // izvikvame methoda ili person["greeting"]();

// properties redeclaration
person.age = 35;
// console.log(person);

// let vs const redeclaration
let dog = { name: "Spark" };
dog.name = "Bobb";
dog = { name: "Nik" };

const cat = { name: "Lusi" };
cat.name = "Kitty";
// cat ={name: "Tom"}

// explicit object type
const mouse: { name: string; favFood: string; age: number } = {
  name: "Jerry",
  favFood: "cheese",
  age: 10,
};

// Interfaces - optional parameters, read only and string literals
interface User {
  name: string;
  email: string; // ako slojim readonly predi email - ne mojem da mu promenqme stoinostite
  // string literals
  role: "user" | "admin" | "superadmin" | "superuser";
  // optional parameter deklarirame s ?
  job?: string;
  password?: string | number;
}

const user: User = {
  name: "Tom",
  password: "dasdasdas",
  email: "tom@mail.com",
  role: "admin",
  job: "QA",
};
// optional parameter added later
user.password = 123123;
console.log(user);


interface UserPermissions extends User {
  permissions: string;

};

const secondUser: UserPermissions = {
  name: "Tom",
  password: "dasdasdas",
  email: "tom@mail.com",
  role: "admin",
  job: "QA",
  permissions: "denied",
};