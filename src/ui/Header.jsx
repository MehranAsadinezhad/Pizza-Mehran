import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header className="flex h-16 flex-row-reverse items-center justify-between bg-primary px-5">
      <Link className="font-cody text-3xl font-bold tracking-widest text-light transition-all duration-200 hover:text-medium">
        PIZZA MEHRAN
      </Link>
      <SearchOrder />
    </header>
  );
}
