interface BookBase {
  title: string;
  price: number;
}

interface PhysicalBook extends BookBase {
  __typename: "Physical";
  weightG: number;
}

interface DigitalBook extends BookBase {
  __typename: "Digital";
  sizeKB: number;
}

export type Book = PhysicalBook | DigitalBook;

export const getBooks = (): Book[] => [
  {
    __typename: "Physical",
    title: "Catch-22 - Hardback",
    price: 899,
    weightG: 442
  },
  {
    __typename: "Digital",
    title: "Catch-22 - EBook",
    price: 499,
    sizeKB: 2600
  }
];
