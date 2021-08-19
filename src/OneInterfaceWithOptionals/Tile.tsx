import { ReactElement } from "react";

interface props {
  title: string;
  price: number;
  weightG?: number;
  sizeKB?: number;
}

export const Tile = (props: props): ReactElement => {
  const { title, price, weightG, sizeKB } = props;

  return (
    <div>
      <h1>
        {title} - ${price / 100}
      </h1>
      {weightG && <p>Weight: {weightG}g</p>}
      {sizeKB && <p>File size: {sizeKB}KB</p>}
    </div>
  );
};
