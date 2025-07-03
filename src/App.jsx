import React from "react";
import Header from "./components/Header";
import LogIn from "./components/LogIn";

const App = () => {
  return (
    <>
      <div
        className="bg-[rgb(60, 64, 67)]"
      >
        <Header />
        <LogIn />
      </div>
    </>
  );
};

export default App;
