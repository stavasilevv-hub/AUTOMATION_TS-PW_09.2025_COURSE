// class declaration

class Person {
  // name: string;
  // age: number;

  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  introduction(): void {
    //console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Stanislav", 28);
person1.introduction(); //Hi, I am Stanislav and I am 28 years old
person1.name;
//console.log("person1.name", person1.name);
person1.age;
person1.name = "Gosho";
//console.log("person1.name", person1.name);

// readonly access modifier
class ReadOnlyPeesonData {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  intro(): void {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

const person2 = new ReadOnlyPeesonData("Petkan", 22);
console.log(person2.age);
console.log(person2.name);
// person2.name = "FoshO"; Cannot assign to 'name' because it is a read-only property.ts(2540)
// person2.age = 44;  Cannot assign to 'age' because it is a read-only property.ts(2540)

// private access modifier
class PrivatePersonData {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  private displaySecretMssg(): string {
    return "This is a message from private method.";
  }

  intro(): void {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    console.log(this.displaySecretMssg());
  }
}

const person3 = new PrivatePersonData("David", 15);
// person3.name; Property 'name' is private and only accessible within class 'PrivatePersonData'.ts(2341)
// person3.age Property 'age' is private and only accessible within class 'PrivatePersonData'.ts(2341)
// person3.intro();
// person3.displaySecretMssg(); Property 'displaySecretMssg' is private and only accessible within class 'PrivatePersonData'.ts(2341)

// Class Inheritance
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  intro(): void {
    console.log("Nice to meet you!");
  }
}

class UserDetails extends User {
  constructor(name: string) {
    super(name);
  }

  showDetails(): void {
    console.log(`My name is ${this.name}`);
  }
}

const user = new UserDetails("GOGO");
console.log(user.name);
user.showDetails();
user.intro();

// protected access modifier

class ProtectedPerson {
  //protected name: string;
  // protected age: number;

  constructor(protected name: string, protected age: number) {
    this.name = name;
    this.age = age;
  }

  protected getProtectData(): string {
    return `Protected name ${this.name} and protected age ${this.age}`;
  }
}

const protectedPerson = new ProtectedPerson(`Protected Pesho`, 22);
// protectedPerson.name Property 'name' is protected and only accessible within class 'ProtectedPerson' and its subclasses.ts(2445)


class Student extends ProtectedPerson {
  private grade: number;

  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade;
  }

  studentIntro(): void {
    console.log(this.getProtectData());
    console.log(`${this.name} is ${this.age} years old with grades ${this.grade}`);
  } 
}

const student = new Student("Hristo", 44, 6);
student.studentIntro();
// student.grade Property 'grade' is private and only accessible within class 'Student'.ts(2341)


export {};
