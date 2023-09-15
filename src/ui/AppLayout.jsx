import React from "react";
import Header from "./Header";
import Cart from "../features/cart/Cart";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-scroll">
        <main>
          <Outlet />
        </main>
      </div>

      {/* <Cart /> */}
    </div>
  );
}
