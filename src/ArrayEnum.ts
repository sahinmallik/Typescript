const chaiFlavours: string[] = ["Masala", "Adrak"];

const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 5.0];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masala", price: 15 },
  { name: "Adrak", price: 25 },
];

const cities: readonly string[] = ["Delhi", "Kolkata"]; // with this readonly array we cannot change the array after it is being defined.

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//Tuples

let chaiTuple: [string, number];
//the order is important. if there is string and number then we have to provide the value in this order only. first string and then number.
chaiTuple = ["Masala", 20];

let userInfo: [string, number, boolean?];
userInfo = ["Sahin", 10];

userInfo = ["sahin", 100, true];

//readonly tuples

const location: readonly [number, number] = [28.66, 32.22];

// location = [23.44,45.78] // this cannot be changed;

const chaiItems: [name: string, price: number] = ["Masala", 25];

//ENUM

enum CupSize {
  SMALL,
  MEDIUM,
  LAGE,
}

const size = CupSize.SMALL;

//auto increment in the enum
enum Status {
  PENDING = 100,
  SERVED, // as we are not assigning anything this is two other apart from the pending so automatically it will take the value 101 and 102
  CANCELLED,
}

// const status = Status.

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making: ${type}`);
}

makeChai(ChaiType.MASALA);
// makeChai("masala") this is not allowed

enum Random {
  ID = 1,
  NAME = "Chai",
}

//The standard practices in enum, we generally try to keep the datastructure of the enum is same. if we are using number then it is adviced to use number throughout or string then string throughout.

const enum Sugar {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

let t: [string, number] = ["Chai", 10];
t.push("Extra");
