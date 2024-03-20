import React from "react";

export const Post = ({ post: { id, title, body } }) => {
  return (
    <div>
      <h2>Post id:{id}</h2>
      <h1>{title}</h1>
      <h2>{body}</h2>
    </div>
  );
};
