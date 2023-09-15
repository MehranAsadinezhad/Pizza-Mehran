import React from "react";

export default function Button({ children }) {
  return (
    <button className="hover:bg-lightRed  px-7 py-3  focus:ring-lightRed rounded-full bg-secondary font-vazir text-white  transition-all duration-200 focus:ring-2 focus:ring-offset-2">
      {children}
    </button>
  );
}
