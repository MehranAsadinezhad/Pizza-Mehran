import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";

export default function Header() {
  const username = useSelector((state) => state.user.username);
  return (
    <header className="flex h-16 flex-row-reverse items-center justify-between bg-primary px-5">
      <Link className="font-cody text-3xl font-bold tracking-widest text-light transition-all duration-200 hover:text-medium">
        PIZZA MEHRAN
      </Link>
      <SearchOrder />
      {username && (
        <h1 className="font-vazir text-lg text-light">{username}</h1>
      )}
    </header>
  );
}
