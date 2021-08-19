interface BookBase {
  title: string;
  price: number;
}

interface PhysicalBook extends BookBase {
  weightG: number;
}

export const isPhysicalBook = (x: unknown): x is PhysicalBook =>
  !!x && typeof (x as PhysicalBook).weightG === "number";

interface DigitalBook extends BookBase {
  sizeKB: number;
}

export const isDigitalBook = (x: unknown): x is DigitalBook =>
  !!x && typeof (x as DigitalBook).sizeKB === "number";

export type Book = PhysicalBook | DigitalBook;

export const getBooks = (): Book[] => [
  {
    title: "Catch-22 - Hardback",
    price: 899,
    weightG: 442
  },
  {
    title: "Catch-22 - EBook",
    price: 499,
    sizeKB: 2600
  }
];
