import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

export default function Cart() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (!totalCartQuantity) return null;
  return (
    <div className="flex items-center rounded-b-xl justify-between bg-dark p-4 font-vazir text-light">
      <Link to="/cart" className="text-primary">
        ثبت سفارش
      </Link>
      <div className="flex items-center gap-x-5">
        <h1>{formatCurrency(totalCartPrice)}</h1>
        <h1>{totalCartQuantity} پیتزا</h1>
      </div>
    </div>
  );
}
