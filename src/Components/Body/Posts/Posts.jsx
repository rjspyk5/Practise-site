import React from "react";
import { useLoaderData } from "react-router-dom";
import { Post } from "./Post";

export const Posts = () => {
  const posts = useLoaderData();
  return (
    <div className="space-y-4">
      {posts.map((el) => (
        <Post post={el} key={el.id} />
      ))}
    </div>
  );
};
