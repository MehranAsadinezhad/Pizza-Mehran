import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import ButtonLg from "../../ui/ButtonLg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "../user/userSlice";
import pizzaImg from "../../assets/pizza.png";

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
    <div className="my-14 flex flex-col items-center justify-around md:flex-row md:gap-x-8 lg:my-16">
      <div className="flex flex-col flex-wrap">
        <h1 className="font-vazir text-2xl tracking-wider text-primary md:text-4xl sm:text-3xl lg:text-5xl">
          یکبار امتحان از منوی ما
        </h1>
        <div className="my-5 flex gap-x-1 font-vazir text-2xl tracking-wider text-primary md:my-8 md:text-4xl sm:my-6 sm:text-3xl lg:my-10 lg:gap-x-3 lg:text-5xl">
          <h1>و یک عمر تکرار امتحان</h1>
          <span className="text-dark">
            <FaRegHeart />
          </span>
        </div>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          {!isUsername && (
            <input
              type="text"
              className="my-5 rounded-full p-3 font-vazir outline-none  ring-1 ring-gray-200 transition-all duration-200 focus:ring-2 focus:ring-primary  sm:mb-6 sm:px-12 sm:py-3 sm:text-center sm:text-lg lg:my-8 lg:py-3 lg:text-xl "
              placeholder="نام و نام خانوادگی"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          )}
          {username && <ButtonLg>ورود به اپ</ButtonLg>}
          {isUsername && <ButtonLg to="/menu">برگشت به منو</ButtonLg>}
        </form>
      </div>
      <img
        src={pizzaImg}
        alt="pizza"
        className="mt-5 w-56 md:w-64 lg:mt-8 lg:w-72"
      ></img>
    </div>
  );
}
