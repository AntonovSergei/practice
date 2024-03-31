function Input({ type, className, onChange, value }) {
  return (
    <input
      type={type}
      value={value}
      className={`input ${className}`}
      onChange={onChange}
    />
  );
}

export default Input;
