import React from "react";
import { useLoaderData } from "react-router-dom";
import { CatagoryCard } from "./CatagoryCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const Services = () => {
  const catagory = useLoaderData();
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 8,
      spacing: 5,
    },
  });

  return (
    <div>
      <h1 className="text-center font-black text-4xl">Catagories</h1>
      <div ref={sliderRef} className="keen-slider max-w-5xl mx-auto">
        {catagory.categories.map((el) => (
          <CatagoryCard data={el} key={el.idCategory} />
        ))}
      </div>
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
