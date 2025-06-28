import { useForm } from "react-hook-form";
import SignUpCard from "../../../components/utils/signUpCard";
const Domain = ({ onNext }) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    let copyData = { ...data };
    onNext(copyData, "domain");
    reset();
  };


  return (
    <SignUpCard currentStep="create site">
      <div className="page-details">
        <h1 className="domain-heading">Create a site</h1>
        <p className="domain-para1">
          Your own workspace on RigelX is just a name away.
        </p>
        <p className="domain-para2">
          Work on ideas, share them instantly, and make your mark.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <label htmlFor="createSite" className="label">
            Site Name<span className="imp">*</span>
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your site name"
            {...register("domain", {
              required: "domain is required",
              pattern: {
                value: /^[a-zA-Z][a-zA-Z0-9-]{2,29}$/,
                message:
                  "Site name must start with a letter and be 3-30 characters long",
              },
              minlength: {
                value: 3,
                message: "Warehouse must be aleast 3 characters",
              },
            })}
          />
          <small className={`errorMessage ${errors.domain ? "active" : ""}`}>
            {errors.domain?.message}
          </small>
        </div>
        <div className="alignButton">
          <button type="submit" className="button">
            Sign Up
          </button>
        </div>
      </form>
    </SignUpCard>
  );
};

export default Domain;
