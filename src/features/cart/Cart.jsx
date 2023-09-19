import React from "react";
import ButtonLg from "../../ui/ButtonLg";
import ButtonSm from "../../ui/ButtonSm";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import SecondButton from "../../ui/SecondButton";
import { clearCart, getCard } from "./cartSlice";

export default function Cart() {
  const cart = useSelector(getCard);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  return (
    <div className="mx-4">
      <div className="my-5 flex items-center justify-between">
        <h2 className="font-vazir text-lg font-semibold">
          سبد خرید {username}
        </h2>
        <div>
          <ButtonLg to="/menu">&larr; منو</ButtonLg>
        </div>
      </div>

      <ul className="divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="my-5 flex items-center gap-x-3">
        <ButtonLg to="/order/new">سفارش</ButtonLg>
        <SecondButton onClick={() => dispatch(clearCart())}>
          حذف سبد خرید
        </SecondButton>
      </div>
    </div>
  );
}
