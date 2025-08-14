import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { postID } = useParams();

  console.log(postID);

  const handleGoBack = () => {
    navigate(-1);
  };
  const { title, body } = post;
  return (
    <div className="flex flex-col justify-center px-20 border p-5 rounded-md">
      <h2 className="text-4xl">Title: {title}</h2>
      <p className="text-xl">{body}</p>

      <button
        className="text-indigo-500 text-3xl hover:underline"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
