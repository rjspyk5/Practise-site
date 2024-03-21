import React from "react";
import { useLoaderData } from "react-router-dom";
export const Services = () => {
  const catagory = useLoaderData();
  console.log(catagory);
  return (
    <div>
      <h1 className="text-center font-black text-4xl">Catagories</h1>
      <div className="flex gap-3"></div>
      <div className="space-x-3 flex justify-center mt-5">
        <select name="" id="">
          <option value="">Search by Catagory</option>
        </select>
        <input
          className="bg-gray-300 text-black outline-none p-1 rounded-md"
          type="text"
          placeholder="Search"
        />
        <button className="bg-green-500 py-1 px-3 text-white rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
};
