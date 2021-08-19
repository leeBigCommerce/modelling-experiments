import { ComponentProps, ReactElement } from "react";
import { Heading } from "./Heading";

interface Props extends ComponentProps<typeof Heading> {
  weightG: number;
}

export const Physical = ({ title, price, weightG }: Props): ReactElement => (
  <div>
    <Heading title={title} price={price} />
    <p>Weight: {weightG}g</p>
  </div>
);
