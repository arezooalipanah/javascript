// generic class
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, string>("1", "a");

// generic function
function wrapInArray<T>(value: T) {
  return [value];
}

wrapInArray<string>("1");

// generic method - for static methods is same
class ArrayUtil {
  wrapInArray<T>(value: T) {
    return [value];
  }
}

let utils = new ArrayUtil();

utils.wrapInArray<string>("a");

// generic interface
interface Result<T> {
  data: T | null;
  error: string | null;
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

fetch<User>("url");
fetch<Product>("url");

// generic limitation
class Person2 {
  constructor(public name: string) {}
}
class Customer2 extends Person2 {}

function echo<T extends Person2>(value: T): T {
  return value;
}

echo(new Person2("a"));
echo(new Customer2("b"));

// generic inheritance
interface Product2 {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  findByObj(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store = new CompressibleStore<Product>();

class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}

let store2 = new Store<Product2>();
store2.add({ name: "string", price: 1 });
let res = store2.findByObj("name", "string");
console.log(res);

// type mapping
interface Product3 {
  name: string;
  price: number;
}
type ReadonlyProduct = {
  readonly [k in keyof Product3]: Product3[k];
};

let product: ReadonlyProduct = {
  name: "a",
  price: 1,
};

