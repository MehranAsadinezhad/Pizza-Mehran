import React from "react";
import { useDispatch } from "react-redux";
import { decreaseItem, increaseItem } from "./cartSlice";
export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row-reverse items-center gap-x-2">
      <button
        className="h-8 w-8 rounded-full bg-secondary text-center text-sm font-bold text-light transition-all duration-200 hover:bg-lightRed"
        onClick={() => dispatch(decreaseItem(pizzaId))}
      >
        -
      </button>
      <span className="font-semibold">{currentQuantity}</span>
      <button
        className="h-8 w-8 rounded-full bg-secondary text-center text-sm font-bold text-light transition-all duration-200 hover:bg-lightRed"
        onClick={() => dispatch(increaseItem(pizzaId))}
      >
        +
      </button>
    </div>
  );
}
