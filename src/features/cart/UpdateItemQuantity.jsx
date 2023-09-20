import React from "react";
import { useDispatch } from "react-redux";
import { decreaseItem, increaseItem } from "./cartSlice";
import toast from "react-hot-toast";
export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row-reverse items-baseline lg:gap-x-3 gap-x-2">
      <button
        className="h-7 w-7 lg:w-8 lg:text-lg lg:h-8 rounded-full bg-secondary text-sm font-bold text-light transition-all duration-200 hover:bg-lightRed"
        onClick={() => {
          dispatch(decreaseItem(pizzaId));
          toast.error('از سبد خرید حذف شد')
        }}
      >
        -
      </button>
      <span className="font-medium lg:text-lg">{currentQuantity}</span>
      <button
        className="h-7 w-7 lg:w-8 lg:text-lg lg:h-8 rounded-full bg-secondary text-sm font-bold text-light transition-all duration-200 hover:bg-lightRed"
        onClick={() => {
          dispatch(increaseItem(pizzaId));
          toast.success('به سبد خرید اضافه شد')
        }}
      >
        +
      </button>
    </div>
  );
}
