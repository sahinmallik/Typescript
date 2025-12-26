type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makekChai(order: ChaiOrder) {
  console.log(order);
}

function serveChia(order: ChaiOrder) {
  console.log(order);
}

// type TeaRecipe = {
//   water: number;
//   milk: number;
// };

// class MasalaChai implements TeaRecipe {
//   water = 10;
//   milk = 5;
// }
// this things has no problem but when we only have the static data then it will have problem

// for this type of the assignments this type wont work properly.
// type CupSize = 'small'|'large';

// class Chai implements CupSize{

// }

interface TeaRecipe {
  water: number;
  sugar: number;
}

// class MasalaChai implements TeaRecipe {
//   water: number = 100;
//   sugar: number = 50;
// }

interface CupSize {
  size: "small" | "large";
}
class Chai implements CupSize {
  size: "small" | "large" = "small";
}

//this will work with the interface
// type Response = { ok: true } | { ok: false };

// class MyResponse implements Response {
//   ok: boolean = true;
// }

//this is union
type TeaType = "masala" | "ginger" | "lemon"; // this is called literal type

function orderChai(t: TeaType) {
  console.log(t);
}

//this is intersection

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 3,
};

//this is optional value for the type

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Sahin" };
const u2: User = { username: "Sahin", bio: "sahin.com" };

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "WeStudy",
  version: 1,
};

// cfg.appName = "Masterjii"; can not be updated as it is the read only.
