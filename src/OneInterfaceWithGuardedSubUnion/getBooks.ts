interface DigitalSpecs {
  sizeKB: number;
}

export const isDigitalSpecs = (x: unknown): x is DigitalSpecs =>
  !!x && typeof (x as DigitalSpecs).sizeKB === "number";

interface PhysicalSpecs {
  weightG: number;
}

export const isPhysicalSpecs = (x: unknown): x is PhysicalSpecs =>
  !!x && typeof (x as PhysicalSpecs).weightG === "number";

export type Specs = DigitalSpecs | PhysicalSpecs;

interface Book {
  title: string;
  price: number;
  specs: Specs;
}

export const getBooks = (): Book[] => [
  {
    title: "Catch-22 - Hardback",
    price: 899,
    specs: { weightG: 442 }
  },
  {
    title: "Catch-22 - EBook",
    price: 499,
    specs: { sizeKB: 2600 }
  }
];
