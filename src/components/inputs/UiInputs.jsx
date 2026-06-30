import { forwardRef } from "react";

const InputBox = forwardRef(
  (
    {
      type = "text",
      placeholder,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`input-box ${className}`}
        {...props}
      />
    );
  }
);


const RadioBox = ({ type,label,onChange, value }) => {
  return (
    <>
    <label>
        {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
    />
    </>
  );
};

export {InputBox,RadioBox};