import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export const Postdetails = () => {
  const { title, body } = useLoaderData();
  const navigate = useNavigate();
  const handleClcik = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="p-2 bg-slate-900 text-white rounded-md shadow-xl">
        <h2>Title is:{title}</h2>
        <p>Details :{body}</p>
        <button
          className="bg-gray-200 px-2 py-1 rounded-md"
          onClick={handleClcik}
        >
          Back
        </button>
      </div>
    </div>
  );
};
