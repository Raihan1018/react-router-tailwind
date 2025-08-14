import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <NavBar />
      <main className="flex justify-center my-10">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
