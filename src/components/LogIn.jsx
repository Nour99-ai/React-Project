import { useState } from "react";
//========useState Section=========
const LogInForm = (type) => {
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
      <div className="flex flex-col md:flex-row max-w-md md:max-w-lg m-6 lg:max-w-xl lg:flex-row ">
        <form className="">
          <input
            type="email"
            onChange={(e) => {
              setFormInputs({
                ...formInputs,
                Email: e.target.value,
              });
            }}
            className="w-7 h-7"
          />
        </form>
      </div>
    </>
  );
};
export default LogInForm;
