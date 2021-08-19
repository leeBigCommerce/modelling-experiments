import { ComponentProps, ReactElement } from "react";
import { Heading } from "./Heading";

interface Props extends ComponentProps<typeof Heading> {
  sizeKB: number;
}

export const Digital = ({ title, price, sizeKB }: Props): ReactElement => (
  <div>
    <Heading title={title} price={price} />
    <p>File size: {sizeKB}KB</p>
  </div>
);
