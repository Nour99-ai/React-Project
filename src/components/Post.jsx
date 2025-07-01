const Post = ({ user, postTitle, postContent }) => {
  const post = document.getElementById("post");
  const postP = document.getElementById("postP");

  return (
    <div
      id="post"
      className=" w-full mt-8 p-4 text-gray-800 shadow-md hover:shadow-xl transition-shadow duration-500 h-auto mr-4 "
    >
      <div
        className="p-[2px] bg-gradient-to-r from-cyan-900 
        to-blue-300 rounded"
      >
        <div className="bg-white rounded p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold">{postTitle}</h2>
            <span className="text-xs text-gray-500 ml-2 mb-2 whitespace-nowrap">
              By: {user}
            </span>
          </div>
          <div>
            <hr className="border-gray-400 mb-2" />
            <p id="postP">{postContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
