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
    <div className="mx-72 my-5 px-4 py-3">
      <div className="my-6 flex items-center justify-between">
        <h2 className="font-vazir text-xl font-semibold">
          سبد خرید {username}
        </h2>
        <ButtonSm to="/menu">&larr; برگشت به منو</ButtonSm>
      </div>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-x-3">
        <ButtonLg to="/order/new">سفارش</ButtonLg>
        <SecondButton onClick={() => dispatch(clearCart())}>
          حذف سبد خرید
        </SecondButton>
      </div>
    </div>
  );
}
