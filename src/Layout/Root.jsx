import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet, useLocation, useNavigation } from "react-router-dom";

const Root = () => {
  const navigation = useNavigation();
  const location = useLocation();
  return (
    <>
      <NavBar />
      <h1 className="text-center text-slate-400">{location.pathname}</h1>
      {navigation.state === "loading" ? (
        <p className="flex justify-center items-center text-7xl text-red-500 min-h-screen">
          Loading...
        </p>
      ) : (
        <main className="flex justify-center my-10">
          <Outlet />
        </main>
      )}
    </>
  );
};

export default Root;
