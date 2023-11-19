import React from "react";

const TextField = ({ type, placeholder, name, id }) => {
  return (
    <input
      type={type}
      className="focus:outline-none p-3 w-[100%] rounded-lg  border-transparent border-2 focus:border-indigo-900 focus:border-2 text-indigo-900"
      placeholder={placeholder}
      name={name}
      id={id}
    />
  );
};

export default TextField;
