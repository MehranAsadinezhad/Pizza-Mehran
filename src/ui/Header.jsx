import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex h-14 flex-row-reverse items-center justify-between bg-primary px-5">
      <Link className="font-cody transition-all duration-200 hover:text-medium text-3xl font-bold tracking-widest text-light">
        PIZZA MEHRAN
      </Link>
      <input
        className="w-64 bg-light rounded-full py-2 px-5 font-vazir outline-none transition-all duration-200 placeholder:font-vazir focus:w-72 focus:ring-2 focus:ring-secondary"
        placeholder="جست و جوی سفارش #"
      ></input>
    </header>
  );
}
