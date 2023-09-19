import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";

export default function Header() {
  const username = useSelector((state) => state.user.username);
  return (
    <header className="flex px-4 py-3 gap-x-3 flex-row-reverse items-center justify-between bg-primary">
      <Link className="font-cody text-left text-xl font-bold tracking-widest text-light transition-all duration-200 hover:text-dark">
        PIZZA MEHRAN
      </Link>
      <SearchOrder />
      {username && (
        <h1 className="font-vazir hidden text-lg text-light">{username}</h1>
      )}
    </header>
  );
}
