import React from "react";

const Button = ({
  children,
  type = null,
  extraClasses = null,
  onClickCallback = null,
  className = null,
  disabled = null,
  required = false
}) => {
  let defaultButtonClassName = `bg-indigo-950 text-slate-50 rounded-lg p-2 ${extraClasses ? extraClasses : ""
    }`;

  return (
    <button
      disabled={disabled && disabled === true ? true : false}
      onClick={onClickCallback && onClickCallback}
      type={type && type}
      className={className ? className : defaultButtonClassName}>
      {children}
    </button>
  );
};

export default Button;
