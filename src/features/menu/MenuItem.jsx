import React from "react";
import { formatCurrency } from "../../utils/helpers";
import ButtonSm from "../../ui/ButtonSm";

export default function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-x-5 border-b-2 py-2">
      <img src={imageUrl} alt={name} className="h-28 w-28"></img>
      <div className="flex flex-col">
        <p className="text-lg font-semibold tracking-wide">{name}</p>
        <p className="font-mono text-dark">{ingredients.join(", ")}</p>
        <div className="mt-auto">
          {!soldOut ? (
            <p className="font-mono">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-semibold text-dark">SOLD OUT</p>
          )}
        </div>
      </div>
      <div className="mr-auto mt-auto">
        <ButtonSm>سفارش</ButtonSm>
      </div>
    </li>
  );
}
