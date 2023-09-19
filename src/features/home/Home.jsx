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
    <div className="my-14 flex flex-col items-center justify-center">
      <h1 className="font-vazir text-2xl tracking-wider text-primary">
        یکبار امتحان از منوی ما
      </h1>
      <div className="my-5 flex gap-x-1 font-vazir text-2xl tracking-wider text-dark">
        <h1>و یک عمر تکرار امتحان</h1>
        <span className="text-dark">
          <FaRegHeart />
        </span>
      </div>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        {!isUsername && (
          <input
            type="text"
            className="mb-5 rounded-full py-1 px-2  font-vazir outline-none ring-1 ring-gray-200 transition-all duration-200 focus:ring-2 focus:ring-primary "
            placeholder="نام و نام خانوادگی"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        )}
        {username && <ButtonLg>سفارش</ButtonLg>}
        {isUsername && <ButtonLg to="/menu">برگشت به منو</ButtonLg>}
      </form>
    </div>
  );
}
