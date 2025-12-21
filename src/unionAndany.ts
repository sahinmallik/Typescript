let sub: number | string; // this variable will be able to take the both the number and the string.

sub = 1;
sub = "1M";

// we can set custom values also in the variable
// using union we can add possible values also line enum.
let apiRequestStatus: "Pending" | "Success" | "Error";
apiRequestStatus = "Success";

let airlineSeat: "Aisle" | "Window" | "Middle";
airlineSeat = "Middle";

const orders = ["12", "20", "28", "42"];

// By Default the variables that are not being typecasted they by default takes the any for that variable. So we can add any value in that variable.

// let currentOrder;

// for (let order in orders) {
//   if (order === "28") {
//     currentOrder = order;
//     break;
//   }
// }

// // here i can update the variable with any values as the type of that variable is any. so any sort of the value can be assigned to that variable

// currentOrder = 42;

// console.log(currentOrder);

let currentOrder: string | undefined;

for (let order in orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
}
console.log(currentOrder);
