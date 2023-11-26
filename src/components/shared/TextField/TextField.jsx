import React from "react";

const TextField = ({
  name,
  id,
  placeholder,
  extraClasses = null,
  className = null,
  type = null,
}) => {
  let defaultButtonClassName = `focus:outline-none p-3 w-[100%] rounded-lg  border-transparent border-2 focus:border-indigo-900 focus:border-2 text-indigo-900 ${extraClasses && extraClasses
    }`;

  return (
    <input
      type={type || "text"}
      name={name || ""}
      id={id || ""}
      placeholder={placeholder || ""}
      className={className || defaultButtonClassName}
    />
  );
};

export default TextField;
