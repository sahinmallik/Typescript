//Generics are one kind of templates which helps to make the code more reusable
function WrapInArray<T>(item: T): T[] {
  return [item];
}
WrapInArray("Masala");
WrapInArray(42);
WrapInArray({ flavor: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = {
  content: 10,
};

const numberBoxCup: Box<string> = {
  content: "10",
};

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: { flavor: "Masala" },
};
