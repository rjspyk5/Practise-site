import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ user: { id, name, email, phone } }) => {
  return (
    <div className="border border-yellow-400 p-2 rounded-lg text-center space-y-3">
      <h2>{name}</h2>
      <p>Email :{email}</p>
      <p>Phone :{phone}</p>
      <Link
        className="bg-blue-600 p-1 rounded-md text-white font-bold"
        to={`/user/${id}`}
      >
        Show Details
      </Link>
    </div>
  );
};
