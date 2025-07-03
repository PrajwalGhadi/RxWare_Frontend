import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Email from "./Email";
import Otp from "./Otp";
import Details from "./Details";
import Domain from "./Domain";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      navigate("/create-site"); // Redirect after completing all steps
    }
  };

useEffect(() => {
  // Back button handler
  const handleBackNavigation = () => {
    window.location.href = "/signup/email";
  };

  window.addEventListener("popstate", handleBackNavigation);

  return () => {
    window.removeEventListener("popstate", handleBackNavigation);  //Reason for Remove Listener: To Avoid the memory leak as if user goes back or forth and eventlistener will get pileup
  };
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
