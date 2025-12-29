// class Chai {
//   flavour: string;
//   price: number;

//   constructor(flavour: string, price: number) {
//     (this.flavour = flavour), (this.price = price);
//   }
// }

// const masalaChai = new Chai("Ginger",20);
// masalaChai.flavour = "Masala";

// Access Modifier

class Chai {
  public flavour: string = "Masala";

  private secretIngredients = "Cardamom"; // this is can only be accessable within the class not outside the class.

  reveal() {
    return this.secretIngredients;
  }
}

const c = new Chai();
console.log(`${c.reveal()}`);

// Protected Access Modifier

class Shop {
  protected shopName = "Chai Corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}

// in the Protected access Modifier the value can be access within the class or the class which is extending the class

new Branch().getName();

//Private

class Wallet {
  #balance = 100;

  getBalance() {
    this.#balance;
  }
}

const w = new Wallet();
w.getBalance();

class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }
  set sugar(value: number) {
    if (value > 5) {
      throw new Error("Too Sweet");
    } else {
      this._sugar = value;
    }
  }
}

const m = new ModernChai();
m.sugar = 3;
console.log(m.sugar);

//Static members

class EkChai {
  static shopname: string = "Chai Code Cafe";
  constructor(public flavour: string) {}
}

console.log(EkChai.shopname);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make() {
    console.log(`Drinking Chai`);
  }
}

//this is composition method. we can use this instead of the inheritance

class Heater {
  heat() {}
}

class ChaiMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}
