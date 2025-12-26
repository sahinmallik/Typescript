const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};
// the way the object is being inferred here
// {
//     name: string;
//     price: number;
//     isHot: boolean
// }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

//alias object
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Ginger Tea",
  price: 25,
  ingredients: ["Ginger", "Tea Leaves"],
};

// duck typing

type Cup = {
  size: string;
};
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;
// as both the object has the size in their value so this doesnot matter.

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "sahinmallik",
  password: "123",
};
// here if any of the username or password is missing then it will definatly flag

type Item = {
  name: string;
  quantity: number;
};

type Address = {
  street: string;
  pin: number;
};

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updatedChai = (updates: Partial<Chai>) => {
  console.log("updating chai with", updates);
};

// here we are not passing all the parametes of the type Chai. as we are using the partial keyword that's why only some of the value or sometime we can pass the empty objects also.

updatedChai({ price: 25 });
updatedChai({ isHot: false });
updatedChai({});

//if we use the keyword Required then we have to pass all the parameters of the type as the Require keywords make all the parameters required for that datatype.
type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({ name: "Masala Chai", quantity: 2 });

// here with the pick we can explictly tell what are the values we need or we want to work with. as there in the Partial we also using the partial of the type parameters. but in the pick we defined what are those we want to works with.

type Chai2 = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<Chai2, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 10,
};

//
type Chai3 = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};

type PublicChai = Omit<Chai, "secretIngredients">;
