import React from "react";
import ButtonLg from "../../ui/ButtonLg";
import ButtonSm from "../../ui/ButtonSm";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import SecondButton from "../../ui/SecondButton";
import { clearCart, getCard } from "./cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector(getCard);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  return (
    <div className="mx-4">
      <div className="my-5 flex items-center justify-between">
        <h2 className="font-vazir text-lg font-semibold border-b-2 border-dark border-dashed">
          سبد خرید {username}
        </h2>
        <div>
          <Link className="font-vazir text-lg bg-dark text-light rounded-full px-2 py-0.5" to="/menu">&larr; منو</Link>
        </div>
      </div>

      <ul className="divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="my-5 flex items-center justify-center gap-x-3">
        <ButtonLg to="/order/new">سفارش</ButtonLg>
        <SecondButton onClick={() => dispatch(clearCart())}>
          حذف سبد خرید
        </SecondButton>
      </div>
    </div>
  );
}
