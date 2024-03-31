function Button({ className, onClick, text, disabled }) {
  return (
    <button className={`button ${className}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
