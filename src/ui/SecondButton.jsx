import React from "react";
import { Link } from "react-router-dom";

export default function SecondButton({ children, onClick, to }) {
  if (to) {
    return (
      <Link
        to={to}
        className="rounded-full lg:px-5 lg:py-3.5 lg:text-lg bg-secondary px-3 py-1.5 font-vazir text-white transition-all duration-200  hover:bg-lightRed focus:ring-2 focus:ring-lightRed focus:ring-offset-2"
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="rounded-full lg:px-5 lg:py-3.5 lg:text-lg bg-light px-3 py-1.5 font-vazir  text-secondary ring-2 ring-secondary transition-all duration-200  hover:bg-secondary hover:text-light  focus:ring-offset-2"
    >
      {children}
    </button>
  );
}
