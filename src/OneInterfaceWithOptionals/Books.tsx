import { ReactElement } from "react";
import { Tile } from "./Tile";
import { getBooks } from "./getBooks";

export const Books = (): ReactElement => {
  const books = getBooks();

  return (
    <ul>
      {books.map((book) => (
        <li>
          <Tile {...book} />
        </li>
      ))}
    </ul>
  );
};
