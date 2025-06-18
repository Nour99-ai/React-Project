import InputEmail from "./components/inputs/inputEmail";
import InputPass from "./components/inputs/inputPass";
import BtnSub from "./components/ButtonComponent";
import "./App.css";
function App() {
  return (
    <div>
      <header>
        <h1>welcome to the log In page!</h1>
      </header>
      <InputEmail />
      <InputPass />
      <br />
      <br />
      <BtnSub />
    </div>
  );
}

export default App;
