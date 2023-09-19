import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, onClick, to }) {
  if (to) {
    return (
      <Link
        to={to}
        className="rounded-full  bg-secondary py-1 px-3 font-vazir text-white transition-all duration-200  hover:bg-lightRed focus:ring-2 focus:ring-lightRed focus:ring-offset-2"
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="rounded-full  bg-secondary py-1 px-3 font-vazir text-white transition-all duration-200  hover:bg-lightRed focus:ring-2 focus:ring-lightRed focus:ring-offset-2"
    >
      {children}
    </button>
  );
}
