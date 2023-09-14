import React from "react";

export default function Button({ children }) {
  return (
    <button className="hover:bg-lightRed focus:ring-lightRed rounded-full bg-secondary px-7 py-3 font-vazir text-white  transition-all duration-200 focus:ring-2 focus:ring-offset-2">
      {children}
    </button>
  );
}
