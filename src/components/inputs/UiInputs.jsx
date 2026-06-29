const InputBox = ({ type, placeholder, onChange, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-box"
    />
  );
};

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