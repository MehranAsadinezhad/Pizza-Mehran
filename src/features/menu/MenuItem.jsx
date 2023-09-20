import React from "react";
import { formatCurrency } from "../../utils/helpers";
import ButtonSm from "../../ui/ButtonSm";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantity } from "../cart/cartSlice";
import DeleteButton from "../../ui/DeleteButton";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import toast from "react-hot-toast";


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
    <li className="flex gap-x-3 border-b-2 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      ></img>
      <div className="flex grow flex-col pt-0.5">
        <p className="text-lg font-medium tracking-wide">{name}</p>
        <p className="capitalize italic text-dark">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="font-semibold text-dark">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="font-semibold text-dark">SOLD OUT</p>
          )}

          {isInCart && (
            <div className="flex flex-row-reverse items-center gap-3">
              <DeleteButton pizzaId={id}>حذف</DeleteButton>
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
            </div>
          )}
          {!soldOut && !isInCart && (
            <ButtonSm onClick={()=>{
              handleAddToCart();
              toast.success('به سبد خرید اضافه شد')
            }}>اضافه به سبد</ButtonSm>
          )}
        </div>
      </div>
    </li>
  );
}
