import React from "react";
import { useLoaderData } from "react-router-dom";

export const Postdetails = () => {
  const { title, body } = useLoaderData();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="p-2 bg-slate-900 text-white rounded-md shadow-xl">
        <h2>Title is:{title}</h2>
        <p>Details :{body}</p>
      </div>
    </div>
  );
};
