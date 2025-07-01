import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import BtnSb from "./components/BtnSb";
const App = () => {

  
  return (
    <>
      <Header />
      <div className="flex  bg-zinc- items-start">
        <Sidebar />
        <Post
          user={"soe"}
          postTitle={"Pizza is great!"}
          postContent={"some fake content idk welll well wel "}
        />
      </div>
    </>
  );
};
export default App;
