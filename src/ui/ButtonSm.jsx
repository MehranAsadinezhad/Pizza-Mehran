import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, onClick, to }) {
  if (to) {
    return (
      <Link
        to={to}
        className="rounded-full lg:px-4 lg:py-2 bg-secondary px-2 py-1 font-vazir text-white transition-all duration-200  hover:bg-lightRed focus:ring-2 focus:ring-lightRed focus:ring-offset-2"
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="rounded-full lg:px-4 lg:py-2 bg-secondary px-2 py-1 font-vazir text-white transition-all duration-200  hover:bg-lightRed focus:ring-2 focus:ring-lightRed focus:ring-offset-2"
    >
      {children}
    </button>
  );
}
