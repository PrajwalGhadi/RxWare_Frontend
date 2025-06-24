import logoImage from "../../assets/rx-icon2.png"


const SignUpCard = ({ children, currentStep }) => {
  const steps = ["email", "otp", "details", "create site"];

  return (
    <div className="card">
      <div className="circle">
        <img src= {`${logoImage}`} alt="Logo" />
      </div>
      <div className="details">
        <h1>
          Welcome to <span className="logo">RxWare</span>
        </h1>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={step} className="singleStep">
              <h1 className={`${currentStep === step ? "active" : ""}`}>
                {index + 1}
              </h1>
              <p className={`${currentStep === step ? "activeStep" : ""}`}>{step === 'otp' ? step.toUpperCase(): step.charAt(0).toUpperCase() + step.slice(1)}</p>
            </div>
          ))}
          <div className="line"></div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default SignUpCard;
