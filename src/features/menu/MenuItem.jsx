import React from "react";
import { formatCurrency } from "../../utils/helpers";
import ButtonSm from "../../ui/ButtonSm";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantity } from "../cart/cartSlice";
import DeleteButton from "../../ui/DeleteButton";

export default function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantity(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const selectedItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(selectedItem));
  }

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
        {isInCart && <DeleteButton pizzaId={id}>حذف</DeleteButton>}
        {!soldOut && !isInCart && (
          <ButtonSm onClick={handleAddToCart}>اضافه به سبد</ButtonSm>
        )}
      </div>
    </li>
  );
}
