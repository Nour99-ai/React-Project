import { useState } from "react";
//========useState Section=========
const LogInForm = (type, key , label) => {
  const [formInputs, setFormInputs] = useState({
    Name: { firstName: "", lastName: "" },
    Gender: "",
    BirthDate: "",
    Profession: "",
    Education: "",
    Email: "",
    ConfirmEmail: "",
    Location: "",
    PhoneNumber: "",
    Language: "",
    Skills: "",
  });
  //=========form section=========
  return (
    <>
      <div className="mx-auto flex flex-col md:flex-row max-w-md md:max-w-lg m-6 lg:max-w-xl lg:flex-row mt-8 border-4 border-slate-300 py-3 px-1 justify-center">
        <label>{label}<input type={type} onChange={(e) => {setFormInputs({...formInputs , [key] : e.target.value })}}/></label>
      </div>
    </>
  );
};
export default LogInForm;
