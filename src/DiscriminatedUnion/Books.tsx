import { ReactElement } from "react";
import { Physical, Digital } from "./tiles";
import { getBooks, Book } from "./getBooks";

const getTile = (book: Book): ReactElement => {
  switch (book.__typename) {
    case "Digital":
      return <Digital {...book} />;
    case "Physical":
      return <Physical {...book} />;
  }
};

export const Books = (): ReactElement => {
  const books = getBooks();

  return (
    <ul>
      {books.map((book) => (
        <li>{getTile(book)}</li>
      ))}
    </ul>
  );
};
