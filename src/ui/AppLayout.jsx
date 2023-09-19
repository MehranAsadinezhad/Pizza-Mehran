import React from "react";
import Header from "./Header";
import CartOverView from "../features/cart/CartOverView";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[80px_1fr_50px]">
      {isLoading && <Loader/>}
      
      <Header />
      <div className="overflow-y-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverView />
    </div>
  );
}
