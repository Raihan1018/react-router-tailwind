import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const nagigate = useNavigate();
  const handleBackHome = () => {
    nagigate('/');
  };
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-2xl text-red-500">
      <p>{error.error.message}</p>
      <p>{error.status}</p>
      <button className="bg-red-500 text-white py-2 px-6 rounded-md my-5" onClick={handleBackHome}>Go Back</button>
    </div>
  );
};

export default Error;
