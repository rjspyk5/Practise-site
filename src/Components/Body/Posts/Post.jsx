import React from "react";
import { Link } from "react-router-dom";

export const Post = ({ post: { id, title, body } }) => {
  return (
    <div className="border border-emerald-500 p-2 max-w-4xl mx-auto">
      <h2>Post id:{id}</h2>
      <h1>Title :{title}</h1>
      <Link to={`${id}`}>View Details</Link>
    </div>
  );
};
