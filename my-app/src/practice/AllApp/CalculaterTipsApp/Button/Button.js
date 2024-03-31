function Button({ el, setTips, tips}) {
  const handleClick = () => {
    setTips(el);
  };

  return (
    <button
      className={`button ${el === tips ? "active" : ""}`}
      onClick={() => handleClick(el)}
    >
      {el}%
    </button>
  );
}

export default Button;
