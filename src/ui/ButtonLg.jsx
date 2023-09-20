import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, onClick, to }) {
  if (to) {
    return (
      <Link
        to={to}
        className="rounded-full lg:text-lg sm:px-5 lg:px-8 lg:py-4 bg-secondary py-2 px-3 font-vazir text-white transition-all duration-200  hover:bg-lightRed focus:ring-2 focus:ring-lightRed focus:ring-offset-2"
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="rounded-full lg:text-lg sm:px-5 lg:px-8 lg:py-4 bg-secondary py-2 px-3 font-vazir text-white transition-all duration-200  hover:bg-lightRed focus:ring-2 focus:ring-lightRed focus:ring-offset-2"
    >
      {children}
    </button>
  );
}
