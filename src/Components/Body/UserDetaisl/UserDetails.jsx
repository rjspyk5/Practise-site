import React from "react";
import { useLoaderData } from "react-router-dom";

export const UserDetails = () => {
  const { name, email, website } = useLoaderData();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="p-2 bg-slate-900 text-white rounded-md shadow-xl">
        <h2>Username is:{name}</h2>
        <p>User Email is :{email}</p>
        <p>Visited Link:{website}</p>
      </div>
    </div>
  );
};
