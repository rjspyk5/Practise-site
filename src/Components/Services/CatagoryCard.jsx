import React from "react";

export const CatagoryCard = ({ data }) => {
  return (
    <div className="keen-slider__slide number-slide1 text-white bg-slate-500 p-4 flex flex-col justify-center items-center rounded-lg">
      {data.strCategory}
    </div>
  );
};
