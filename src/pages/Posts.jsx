import React from "react";
import { useLoaderData } from "react-router-dom";
import SinglePost from "./SinglePost";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2 className="text-center text-2xl">Total Post: {posts.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
