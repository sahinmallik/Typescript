//Interface

interface Chai {
  flavor: string;
  price: number;
  milk?: boolean;
}

const MasalaChai: Chai = {
  flavor: "Masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "Chai Code Cafe",
};

interface DiscountCalculator {
  (price: number): number;
}

const APPLY50: DiscountCalculator = (p) => {
  return p * 0.5;
};
interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

//index signature

interface ChaiRatings {
  [flavor: string]: number;
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
};

//interface got merged. suppose we are working with the both library and our own code that time if we are taking a interface for the library and then we are creating our own interface having the same name then both the interface will get merged.
interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "Sahin",
  age: 24,
};

interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}
