interface Person {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}

interface PersonInfo extends Person {
  country?: string;
  greeting?: () => string;
}

const Ivan: PersonInfo = {
  name: "Ivan",
  lastName: "Georgiev",
  email: "Vankata@gmail.com",
  phoneNumber: 909902922,
  greeting: function () {
   return "Hello my Name is Ivan";
  },
};

console.log(Ivan);
console.log(Ivan.greeting?.());

const Petar: PersonInfo = {
  name: "Petar",
  lastName: "Petrov",
  email: "Petrovkata@gmail.com",
  phoneNumber: 123123123,
  country: "Bulgaria",
  greeting: function () {
    return "Hello my name is Petar"
  },
};

console.log(Petar);
console.log(Petar.greeting?.());
