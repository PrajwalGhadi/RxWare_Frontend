import { useEffect, useState } from "react";
import SignUpCard from "../../../components/utils/signUpCard";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Details = ({ onNext }) => {
  const details_input = [
    {
      labelName: "First Name",
      labelClass: "label",
      pattern: {
        value: /^[a-zA-Z]{3,30}$/,
        message: "Name must be 3-30 letters only",
      },
      requiredMessage: "First Name is required"
    },

    {
      labelName: "Last Name",
      labelClass: "label",
      pattern: {
        value: /^[a-zA-Z]{3,30}$/,
        message: "Name must be 3-30 letters only",
      },
    },

    // {
    //   labelName: "password",
    //   labelClass: "label",
    //   patternValue:
    //     /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
    //   patternMessage:
    //     "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.",
    // },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    onNext(data, "details");
    reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    console.log("clicked on togglePassword");
    setShowPassword((prevState) => !prevState);
  }

  return (
    <SignUpCard currentStep="details">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="multi-inputs">
          {details_input.map((item, index) => {
            return (
              <div key={index} className="input-wrapper">
                <label htmlFor={item.labelName} className={item.labelClass}>
                  {item.labelName.charAt(0).toUpperCase() +
                    item.labelName.slice(1)}
                  {item.requiredMessage ? <span className="imp">*</span> : ''}
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
                {errors[item.labelName] && (
                  <small className="errorMessage">
                    {errors[item.labelName]?.message}
                  </small>
                )}
              </div>
            );
          })}
        </div>

        <div className="input-wrapper">
          <label htmlFor="Password" className="label">
            Password
            <span className="imp">*</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="input-field"
            placeholder={`Enter your password`}
            {...register(`password`, {
              required: `Password is required`,
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                message:
                  "8+ chars, 1 uppercase, 1 number, 1 special char.",
              },
            })}
          />

          <span onClick={() => togglePassword()} id="eye-icon">
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>

          {/* Error Handling */}
          {errors["password"] && (
            <small className="errorMessage">
              {errors["password"]?.message}
            </small>
          )}
        </div>

        <div className="alignButton">
          <button type="submit" className="button">
            Next
          </button>
        </div>
      </form>
    </SignUpCard>
  );
};

export default Details;
