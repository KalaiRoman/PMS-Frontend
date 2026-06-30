const ButtonBox = ({ children, type = "button", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`${className ? className : "btn-com"}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonBox;
