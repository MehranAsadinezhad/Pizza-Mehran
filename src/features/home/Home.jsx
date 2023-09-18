import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import ButtonLg from "../../ui/ButtonLg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "../user/userSlice";

export default function Home() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUsername = useSelector((state) => state.user.username);

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <div className="my-20 flex flex-col items-center justify-center">
      <h1 className="font-vazir text-4xl tracking-wider text-primary">
        یکبار امتحان از منوی ما
      </h1>
      <div className="my-10 flex gap-x-2 font-vazir text-4xl tracking-wider text-dark">
        <h1>و یک عمر تکرار امتحان</h1>
        <span className="text-dark">
          <FaRegHeart />
        </span>
      </div>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        {!isUsername && (
          <input
            type="text"
            className="mb-10 rounded-full p-2 font-vazir outline-none ring-1 ring-gray-200 transition-all duration-200 focus:ring-2 focus:ring-primary "
            placeholder="نام کاربری"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        )}
        {!isUsername ? (
          <ButtonLg>سفارش</ButtonLg>
        ) : (
          <ButtonLg to="/menu">برگشت به منو</ButtonLg>
        )}
      </form>
    </div>
  );
}
