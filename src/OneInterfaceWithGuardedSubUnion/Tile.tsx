import { ReactElement } from "react";

interface props {
  title: string;
  price: number;
  children: ReactElement;
}

export const Tile = (props: props): ReactElement => {
  const { title, price, children } = props;

  return (
    <div>
      <h1>
        {title} - ${price / 100}
      </h1>
      {children}
    </div>
  );
};
