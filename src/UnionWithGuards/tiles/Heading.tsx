import { ReactElement } from "react";

interface Props {
  title: string;
  price: number;
}

export const Heading = ({ title, price }: Props): ReactElement => (
  <h1>
    {title} - ${price / 100}
  </h1>
);
