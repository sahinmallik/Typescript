let response: any = "42";

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name":"Art Of Being Alone"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElements = document.getElementById("username") as HTMLInputElement; // This is called type assertions. we are forcefully assigning the type.

let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();

let newValue: unknown;

newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase(); //this won't work for the unknown case.

if (typeof newValue === "string") {
  newValue.toUpperCase();
}

//this is the way of doing by using the any as the type
// try {

// } catch (error:any) {
//   console.log(error.message);
// }

// orelse we can use the guardcheck for the types

try {
} catch (error: any) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "Chai aur Code";
// const strData:string = data; though the data is string but still it won't be assigned to the strData for that we have to forcefully say it

const strData: string = data as string;

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("redirect to the admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("redirect to the user dashboard");
    return;
  }
  role;
}

function neverReturn(): never {
  while (true) {}
}
