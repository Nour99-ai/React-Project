import React from "react";
import Header from "./components/Header";
import LogInForm from "./components/LogIn";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-[rgb(60,64,67)]">
        <Header />
        <LogInForm />
      </div>
    </>
  );
};

export default App;
