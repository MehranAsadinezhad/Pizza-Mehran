import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-48 md:w-52 lg:text-lg sm:w-64 sm:text-lg sm:text-center px-2 py-2 rounded-full bg-light  font-vazir outline-none transition-all duration-200 placeholder:font-vazir focus:ring-2 focus:ring-secondary "
        placeholder="جست و جوی سفارش #"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      ></input>
    </form>
  );
}
