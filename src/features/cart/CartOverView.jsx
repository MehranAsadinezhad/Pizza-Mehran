import React from "react";
import { Link } from "react-router-dom";


export default function Cart() {

  return (
    <div className="flex h-16 items-center justify-between bg-dark px-5 font-vazir text-xl text-light">
      <Link>مشاهده سبد خرید</Link>
      <div className="flex items-center gap-x-5">
        <h1>$12</h1>
        <h1>2 پیتزا</h1>
      </div>
    </div>
  );
}
