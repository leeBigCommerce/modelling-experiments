import { ReactElement } from "react";
import { Physical, Digital } from "./tiles";
import { getBooks, isDigitalBook, Book } from "./getBooks";

const getTile = (book: Book): ReactElement => {
  if (isDigitalBook(book)) {
    return <Digital {...book} />;
  } else {
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
