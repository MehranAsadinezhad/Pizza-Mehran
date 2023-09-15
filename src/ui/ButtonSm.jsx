import React from "react";

export default function Button({ children }) {
  return (
    <button className="rounded-full bg-secondary px-4 py-1 font-vazir text-white transition-all duration-200  hover:bg-lightRed focus:ring-2 focus:ring-lightRed focus:ring-offset-2">
      {children}
    </button>
  );
}
