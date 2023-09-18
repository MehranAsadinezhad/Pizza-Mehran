import React from "react";
import ButtonLg from "../../ui/ButtonLg";
import ButtonSm from "../../ui/ButtonSm";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import SecondButton from "../../ui/SecondButton";
const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export default function Cart() {
  const cart = fakeCart;
  const username = useSelector((state) => state.user.username);
  return (
    <div className="mx-72 my-5 px-4 py-3">
      <div className="flex justify-between items-center my-6">
        <h2 className="font-vazir text-xl font-semibold">
          سبد خرید {username}
        </h2>
        <ButtonSm to="/menu">&larr; برگشت به منو</ButtonSm>
      </div>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-x-3">
        <ButtonLg to="/order/new">سفارش</ButtonLg>
        <SecondButton>حذف سبد خرید</SecondButton>
      </div>
    </div>
  );
}
