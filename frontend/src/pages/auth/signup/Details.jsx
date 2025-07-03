import { useState } from "react";
import SignUpCard from "../../../components/utils/signUpCard";
import { useForm } from "react-hook-form";
import PasswordInput from "./PasswordInput";
import { BiSolidErrorCircle } from "react-icons/bi";

const details_input = [
  {
    labelName: "First Name",
    labelClass: "label",
    pattern: {
      value: /^[a-zA-Z]{3,30}$/,
      message: "First name must be 3-30 characters.",
    },
    requiredMessage: "First Name is required",
  },

  {
    labelName: "Last Name",
    labelClass: "label",
    pattern: {
      value: /^[a-zA-Z]{3,30}$/,
      message: "Name must be 3-30 letters",
    },
  },
];

const Details = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handlePasswordChange = (newPassword, isValid) => {
    setPassword(newPassword);
    setIsPasswordValid(isValid);
  };

  const onSubmit = (data) => {
    if (!isPasswordValid) {
      // alert("Please enter a valid password.");
      return;
    }

    const updatedData = { ...data, password }; // Adding password to the data
    onNext(updatedData, "details"); // Passing the updated data to the onNext function
    reset();
  };

  return (
    <SignUpCard currentStep="details">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="multi-inputs detail-input-wrapper">
          {details_input.map((item, index) => {
            return (
              <div key={index} className="input-wrapper">
                <label htmlFor={item.labelName} className={item.labelClass}>
                  {item.labelName.charAt(0).toUpperCase() +
                    item.labelName.slice(1)}
                  {item.requiredMessage ? <span className="imp">*</span> : ""}
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder={`Enter your ${item.labelName.toLowerCase()}`}
                  {...register(`${item.labelName}`, {
                    required: item?.requiredMessage,
                    pattern: item.pattern,
                  })}
                />

                {/* Error Handling */}
                <small
                  className={`errorMessage ${
                    errors[item.labelName] ? "active" : ""
                  }`}
                >
                  <BiSolidErrorCircle />
                  {errors[item.labelName]?.message}
                </small>
              </div>
            );
          })}
        </div>

        <PasswordInput onPasswordChange={handlePasswordChange} isPasswordValid = {isPasswordValid}/>

        <div className="alignButton">
          <button type="submit" className="button">
            Next Step
          </button>
        </div>
      </form>
    </SignUpCard>
  );
};

export default Details;
