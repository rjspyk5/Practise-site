import React from "react";

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const age = e.target.age.value;
    console.log(name, age);
  };
  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input className="bg-gray-200" name="name" type="text" />
        <br />
        <input type="text" className="bg-gray-200" name="age" /> <br />
        <input
          type="submit"
          className="bg-blue-300 rounded-md p-1"
          value="submit"
        />
      </form>
    </div>
  );
};
