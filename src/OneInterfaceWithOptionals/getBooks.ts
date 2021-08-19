interface Book {
  title: string;
  price: number;
  weightG?: number;
  sizeKB?: number;
}

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
