import { ReactElement } from "react";
import { Tile } from "./Tile";
import { getBooks, Specs, isDigitalSpecs } from "./getBooks";

const details = (specs: Specs): ReactElement => {
  if (isDigitalSpecs(specs)) {
    return <p>File size: {specs.sizeKB}KB</p>;
  } else {
    return <p>Weight: ${specs.weightG}g</p>;
  }
};

export const Books = (): ReactElement => {
  const Books = getBooks();

  return (
    <ul>
      {Books.map(({ title, price, specs }) => (
        <li>
          <Tile title={title} price={price}>
            {details(specs)}
          </Tile>
        </li>
      ))}
    </ul>
  );
};
