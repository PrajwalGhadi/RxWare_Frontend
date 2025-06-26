import Email from "./Email";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Otp from "./Otp";
import Details from "./Details";
import Domain from "./Domain";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState("email");

  const steps = ["email", "otp", "details", "domain"];

  const handleNext = (data, step) => {
    setFormData({ ...formData, ...data });

    const nextStep = steps[steps.indexOf(step) + 1];

    if (nextStep) {
      setCurrentStep(nextStep);
      navigate(`/signup/${nextStep}`);
    } else {
      console.log("Final Data:", formData);
      navigate("/"); // Redirect after completing all steps
    }
  };

useEffect(() => {
  const currentPath = location.pathname.split("/").pop(); // Extract the last part of the URL
  if (steps.includes(currentPath)) {
    navigate("/signup/email"); // Redirect to the email step on reload
  }
}, []);

  return (
    <>
      <section className="signUpPage">
        {/* <section className="email"> */}
        <div className="overlay">
          <div className="left-div">
            <h1>Warehouse Wisdom, at your fingertips</h1>

            <h3>Manage inventory with ease, unlock team potential</h3>
          </div>

          <div className="right-div">
            {currentStep === "email" && <Email onNext={handleNext} />}
            {currentStep === "otp" && <Otp onNext={handleNext} />}
            {currentStep === "details" && <Details onNext={handleNext} />}
            {currentStep === "domain" && <Domain onNext={handleNext} />}
          </div>
        </div>
        {/* </section> */}
      </section>
    </>
  );
};

export default SignUp;
