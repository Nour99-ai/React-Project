const BtnSb = ({ title, content, className }) => {
  return (
    <button className={className}>
      <p className="mb-2 text-gray-300 ml-1">{title}</p>
      <span>
      </span>
      <p className=" text-sm m-2">{content}</p>
    </button>
  );
};
export default BtnSb;
