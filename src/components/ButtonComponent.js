const BtnSub = ({ onClick, isValid }) => {
  return (
    <button
      className="ButtonSub"
      onClick={onClick}
      disabled={!isValid}
      style={{ opacity: isValid ? 1 : 0.6 }}
    >
      Submit
    </button>
  );
};

export default BtnSub;
