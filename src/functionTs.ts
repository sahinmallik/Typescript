function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}.`);
}

makeChai("Masala", 2);

function getChaiPrice(): number {
  return 25;
}

function makeOrder(order: string): string | null {
  if (!order) return null;
  return order;
}

//This function won't return anything as we have used the void as the type of the function.
function logChai(): void {
  console.log(`Chai is ready`);
}

//optional parameter or default parameter

//this is how we can write optional
function orderChai(type?: string) {}
// this the another way of writing the optional
function orderChai2(type: string = "Masala") {} // we can add the default value as well.

type Chai = {
  type: string;
  sugar: number;
  size: "small" | "large";
};

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}

function makingChai(order: Chai) {}
