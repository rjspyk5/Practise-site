import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Post = ({ post: { id, title, body } }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${id}`);
  };
  return (
    <div className="border border-emerald-500 p-2 max-w-4xl mx-auto">
      <h2>Post id:{id}</h2>
      <h1>Title :{title}</h1>
      <button
        className="btn rounded-md px-2 py-1 bg-green-400 text-white"
        onClick={handleClick}
      >
        View Details
      </button>
    </div>
  );
};
