const SkButton = ({ text, onClick, type }) => {
  return (
    <button
      value={text}
      onClick={onClick}
      type={type || "button"}
    >
      {text}
    </button>
  );
};
export default SkButton;
