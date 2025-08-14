import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SinglePost = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`${id}`);
  };
  return (
    <div className="border p-3 m-3 rounded-md hover:bg-slate-900 transition-all duration-150 flex flex-col">
      <h2 className="text-3xl">
        <span className="italic font-bold underline">Title:</span>{" "}
        {title.slice(0, 30)}...
      </h2>
      <div className="mt-auto pt-2 text-center">
        <button
          className="text-indigo-500 hover:underline font-semibold text-2xl"
          onClick={handleShowDetails}
        >
          Click to see details
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
