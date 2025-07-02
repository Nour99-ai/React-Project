const Sidebar = ({ children }) => {
  return (
    <div className="p-1 bg-gradient-to-r from-cyan-800 to-blue-400 rounded-xl m-2.5 h-96 w-44 mt-8 mr-12">
      <div className="bg-white rounded-lg h-full w-full p-4 flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
};
export default Sidebar;
