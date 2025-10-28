// basic async operation
//console.log("Start");

//setTimeout(() => {
//console.log("Async operation");
//}, 2000);

//console.log("End");

// multiple async operations
function setTimeouts() {
  setTimeout(() => {
    console.log("3seconds delay");
  }, 3000);

  setTimeout(() => {
    console.log("1seconds delay");
  }, 1000);

  setTimeout(() => {
    console.log("2seconds delay");
  }, 2000);
}
// setTimeouts();

// async await syntax
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  await delay(2000);
  console.log("2 secs delay");

  await delay(3000);
  console.log("3 secs delay");

  await delay(1000);
  console.log("1 sec delay");
}
// demo();

// get product data

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

async function getData(): Promise<void> {
  const response = await fetch("https://fakestoreapi.com/products/1");
  const data: Product = await response.json()
  console.log(`Title: ${data.title}`);
  console.log(`Price: ${data.price}`);
  console.log(`Category: ${data.category}`);
}
// getData();

// try catch finally
try{
const jsonData = JSON.parse('{"valid: true}');
console.log(jsonData);
} catch (err) {
 console.error("Invalid JSON format!", err);
} finally{
  console.log("JSON parser ready");
}
