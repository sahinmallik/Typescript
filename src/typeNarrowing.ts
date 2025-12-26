// This is called narrowing down of the type.

const getChai = (kind: string | number) => {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order: ${kind}`;
};

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`; // This block suggest that there will be message for this block.
  }
  return `Serving the default`; //This block suggest that there won't be any message for this block.
}

//Exhustive Check

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `${size} cutting chai...`;
  }
  if (size === "medium" || size === "large") {
    return `Order is extra chai...`;
  }
  return `Chai order #${size}`;
}

//Here we are doing some exhaustive checking of the passing variable.

class Kulhadchai {
  serve() {
    return `Serving Kulhadchai`;
  }
}
class Cuttingchai {
  serve() {
    return `Serving Cuttingchai`;
  }
}

function serve(chai: Kulhadchai | Cuttingchai) {
  if (chai instanceof Kulhadchai) {
    chai.serve();
  }
}

// we can create out own type in the typescript

type chaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serverOrder(item: chaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar}`;
  }
  return `Serving custom chai: ${item}`;
}

type MasalaChai = {
  type: "masala";
  spiceLevel: number;
};
type ElaichiChai = {
  type: "elaichi";
  aroma: number;
};
type GingerChai = {
  type: "ginger";
  amount: number;
};

type Chai = MasalaChai | ElaichiChai | GingerChai;

function makeChai(order: Chai) {
  switch (order.type) {
    case "elaichi":
      return `Serving the Elaichi Chai...`;
      break;

    case "masala":
      return `Serving the Masala Chai...`;
      break;

    case "ginger":
      return `Serving the Ginger Chai...`;
      break;
    default:
      return `Serving the normal Chai...`;
      break;
  }
}

function brew(order: Chai) {
  if ("spiceLevel" in order) {
    return `Serving the Masala Chai...`;
  }
}

// function isStringArray(arr: unknown): arr is string[] {
//   return ["1", "2", "3", "4"];
// }
