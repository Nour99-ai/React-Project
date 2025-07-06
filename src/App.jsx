import Header from "./components/Header";
import LogInForm from "./components/LogIn"
const LogInInputs = [
  { id: 1, key: "Name", type: "text", label: "Full Name" },
  { id: 2, key: "Gender", type: "text", label: "Gender" },
  { id: 3, key: "BirthDate", type: "date", label: "Birth Date" },
  { id: 4, key: "Profession", type: "text", label: "Profession" },
  { id: 5, key: "Education", type: "text", label: "Education" },
  { id: 6, key: "Email", type: "email", label: "Email" },
  { id: 7, key: "ConfirmEmail", type: "email", label: "Confirm Email" },
  { id: 8, key: "Location", type: "text", label: "Location" },
  { id: 9, key: "PhoneNumber", type: "tel", label: "Phone Number" },
  { id: 10, key: "Language", type: "text", label: "Language" },
];
const LogInInputsLoop = LogInInputs.map(<LogInForm />) //Add the fitting properties and continue here => watch the .map() video again !
const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default App;
