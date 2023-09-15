import React from "react";
import Header from "../../ui/Header";
import { FaHeartPulse, FaHandHoldingHeart, FaRegHeart } from "react-icons/fa6";
import ButtonLg from "../../ui/ButtonLg";

export default function Home() {
  return (
    <div className="flex my-20 flex-col items-center justify-center">
      <h1 className="font-vazir text-4xl tracking-wider text-primary">
        یکبار امتحان از منوی ما
      </h1>
      <div className="my-10 flex gap-x-2 font-vazir text-4xl tracking-wider text-dark">
        <h1>و یک عمر تکرار امتحان</h1>
        <span className="text-dark">
          <FaRegHeart />
        </span>
      </div>
      <input
        type="text"
        className="mb-10 rounded-full p-2 font-vazir outline-none ring-1 ring-gray-200 transition-all duration-200 focus:ring-2 focus:ring-primary "
        placeholder="نام کاربری"
      ></input>
      <ButtonLg>سفارش</ButtonLg>
    </div>
  );
}
