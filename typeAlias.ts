// type alias declaration - deklarira se s glavna bukva
type EmployName = string;
type EmployeeId = number;
type EmployeePosition = string;

type Result = string | number | null;

let data: Result = "Test";

let responseData: Result = 28;

let printsSum: Result = 50;

// type alias with string literals
type PaymentMethod = "cash" | "card" | "crypto";

function paymentDetails(amount: number, method: PaymentMethod) {
  console.log(`Payment ${amount}$ by ${method}`);
}

paymentDetails(20, "cash");

// type alias in interface
type ID= string | number
type Status = "Open" | "In Progress" | "Done";

interface Ticket {
  id:ID;
  title: string;
  status:Status;
}

interface Email {
  id: ID;
  message: string
}

const email: Email ={
  id: 10,
  message: `Hello! I am Petar.`
}

const ticket = {
  id: 1,
  title: `Send email`,
  status: `Done`,
};

