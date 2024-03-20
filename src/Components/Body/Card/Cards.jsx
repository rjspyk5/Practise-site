import React from "react";
import { Card } from "./Card";
import { useLoaderData } from "react-router-dom";

export const Cards = () => {
  const users = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {users.map((el) => (
        <Card key={el.id} user={el} />
      ))}
    </div>
  );
};
