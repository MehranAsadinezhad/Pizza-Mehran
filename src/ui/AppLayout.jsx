import React from "react";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      {isLoading && <Loader/>}
      
      <Header />
      <div className="overflow-y-scroll">
        <main className="mx-auto max-w-4xl">
          <Outlet />
        </main>
      </div>

    </div>
  );
}
