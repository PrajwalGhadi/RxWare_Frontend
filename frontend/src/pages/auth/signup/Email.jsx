import { useState } from "react";
import { useForm } from "react-hook-form";
import SignUpCard from "../../../components/utils/signUpCard";
import { BiSolidErrorCircle } from "react-icons/bi";

const Email = ({ onNext }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const email = watch("email");

  const onSubmit = (data) => {
    onNext(data, "email");
    reset();
    setIsButtonDisabled(true);
  };

  const handleInputChange = async (value) => {
    // Dynamically trigger validation and set button state
    const isValid = await trigger("email");
    setIsButtonDisabled(!isValid || value === "@gmail.com");
  };

  return (
    <SignUpCard currentStep="email">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper email-container">
          <label htmlFor="email" className="label email-label">
            Enter your Email<span className="imp">*</span>
          </label>
          <input
            type="text"
            className="input-field"
            placeholder={`✉ Email`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please Enter the Valid Email address",
              },
              onChange: (e) => handleInputChange(e.target.value), // Validate email dynamically
            })}
          />

          <small className={`errorMessage ${errors.email ? "active" : ""}`}>
            <BiSolidErrorCircle  />
            {errors.email?.message}
          </small>
        </div>
        
        {/* Emaill Button */}
        <div className="alignButton">
          <button
            type="submit"
            className="button"
            style={{
              backgroundColor: isButtonDisabled ? "#bcffaf" : "#3aff16",
            }}
            disabled={isButtonDisabled}
          >
            Send Verification Code
          </button>
        
        </div>
      </form>
    </SignUpCard>
  );
};

export default Email;
