import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { Toaster } from "react-hot-toast";

export default function Header() {
  const username = useSelector((state) => state.user.username);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <header className="to-third flex flex-col justify-between gap-3 bg-primary px-4 py-3">
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ top: 0 }}
        toastOptions={{
          success: {
            duration: 2000,
            style: {
              backgroundColor: "green",
              color: "whitesmoke",
              fontSize: "16px",
              fontFamily: "vazir",
              width: "500px",
            },
          },
          error: {
            duration: 2000,
            style: {
              backgroundColor: "whitesmoke",
              color: "red",
              fontSize: "16px",
              fontFamily: "vazir",
              width: "500px",
            },
          },
        }}
      />
      <Link className="text-center font-cody text-3xl font-extrabold tracking-widest text-light transition-all duration-200 hover:text-dark">
        PIZZA MEHRAN
      </Link>
      <div className="flex flex-row-reverse items-center justify-center gap-x-4">
        <Link
          to="/cart"
          className="relative rounded-full p-2 ring-2 ring-light transition-all duration-200 hover:bg-dark focus:bg-dark focus:ring-2"
        >
          <FaCartShopping className="text-light" />
          <div className="absolute -right-3 -top-3 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-dark text-xs font-bold text-white dark:border-gray-900">
            {totalCartQuantity}
          </div>
        </Link>
        <SearchOrder />
        {username && (
          <h1 className="hidden font-vazir text-lg text-light">{username}</h1>
        )}
      </div>
    </header>
  );
}
