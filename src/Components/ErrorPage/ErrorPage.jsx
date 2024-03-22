import React from "react";
import { useNavigate, useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div>
      oops! somethiing went wrong
      <h1>{error.statusText || error.message}</h1>
      <button onClick={handleGoBack}>Go home</button>
    </div>
  );
};
