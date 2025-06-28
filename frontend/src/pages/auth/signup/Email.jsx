import { useForm } from "react-hook-form";
import SignUpCard from "../../../components/utils/signUpCard";
import { MdOutlineEmail } from "react-icons/md";

const Email = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    onNext(data, "email");
    reset();
  };

  return (
    <SignUpCard currentStep="email">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <label htmlFor="email" className="label">
            Enter your Email<span className="imp">*</span>
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="📧 Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          <small className={`errorMessage ${errors.email ? "active" : ""}`}>
            {errors.email?.message}
          </small>
        </div>
        <div className="alignButton">
          <button type="submit" className="button">
            Send Verification Code
          </button>
        </div>
      </form>
    </SignUpCard>
  );
};

export default Email;
