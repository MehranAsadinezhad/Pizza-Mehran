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
      <div className="my-5 lg:my-8 flex items-center justify-between">
        <h2 className="border-b-2 lg:text-xl border-dashed border-dark font-vazir text-lg font-semibold">
          سبد خرید {username}
        </h2>
        <div>
          <Link
            className="rounded-full lg:px-4 lg:py-1 bg-dark px-2 py-0.5 sm:px-3 font-vazir text-lg text-light"
            to="/menu"
          >
            &larr; منو
          </Link>
        </div>
      </div>

      <ul className="divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="my-5 lg:my-8 lg:gap-x-8 flex items-center justify-center gap-x-3">
        <ButtonLg to="/order/new">سفارش</ButtonLg>
        <SecondButton onClick={() => dispatch(clearCart())}>
          حذف سبد خرید
        </SecondButton>
      </div>
    </div>
  );
}
