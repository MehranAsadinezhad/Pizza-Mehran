import React from "react";
import { Link } from "react-router-dom";

export default function SecondButton({ children, onClick, to }) {
  if (to) {
    return (
      <Link
        to={to}
        className="rounded-full  bg-secondary px-7  py-3 font-vazir text-white transition-all duration-200  hover:bg-lightRed focus:ring-2 focus:ring-lightRed focus:ring-offset-2"
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="rounded-full  bg-light px-7 py-3 font-vazir  text-secondary ring-2 ring-secondary transition-all duration-200  hover:bg-secondary hover:text-light  focus:ring-offset-2"
    >
      {children}
    </button>
  );
}
