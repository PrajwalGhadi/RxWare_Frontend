import { useForm } from "react-hook-form";
import SignUpCard from "../../../components/utils/signUpCard";
import { useEffect, useRef, useState } from "react";
const Otp = ({ onNext }) => {
  const [isOtpResend, setIsOtpResend] = useState(false);
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const [otpSendTimer, setOtpSendTimer] = useState(true);  //This will use to run the otp timer only for first time when we come to signUp page 

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^[0-9]$/.test(value)) {
      setValue(`otp${index}`, value); // Update form state
      if (index < inputs.current.length - 1) {
        inputs.current[index + 1].focus(); // Move to the next field
      }
    } else if (value === "") {
      setValue(`otp${index}`, ""); // Clear the value
    }
  };

  const onSubmit = (data) => {
    const otp = [data.otp0, data.otp1, data.otp2, data.otp3].join(""); // Combine OTP
    console.log("Submitted OTP:", otp);
    onNext({ otp }, "otp"); // Pass OTP to parent component
  };

  function resendOTP() {
    setIsOtpResend(true);
    setSeconds(30); //Reseting timer
  }

  function sendOTP() {
    setIsOtpSend(true);
    setSeconds(30);
  }

  useEffect(() => {
    if (isOtpResend) {
      const timer = setInterval(() => {
        setSeconds((prevSecond) => {
          if (prevSecond <= 0) {
            setIsOtpResend(false);
            clearInterval(timer);
            return 0
          }

          return prevSecond - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }

    if (isOtpSend) {
      const timer = setInterval(()=> {
        setSeconds(prevSecond => {
          if (prevSecond <= 0) {
            setIsOtpSend(false);
            clearInterval(timer);
            return 0;
          }

          return prevSecond - 1;
        })
      }, 1000);

      return () => clearInterval(timer);
    }

    if (otpSendTimer) {
      sendOTP();
      setOtpSendTimer(false);
    }

  }, [isOtpResend, isOtpSend]);

  return (
    <SignUpCard currentStep="otp">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <h1>Enter OTP</h1> */}
        <p className="otpLabel">Please Enter the OTP to Verify your account</p>

        <div className="otp-container">
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="otp-input"
              {...register(`otp${index}`, {
                required: "All fields are required",
                pattern: {
                  value: /^[0-9]$/,
                  message: "Only numeric digits are allowed",
                },
              })}
              ref={(el) => (inputs.current[index] = el)} // Save reference
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        {Object.keys(errors).length > 0 && (
          <small className="errorMessage">
            Please fill out all fields correctly.
          </small>
        )}

        {isOtpSend ? (
          <p className="otpResendTimer">{`00:${seconds < 10 ? '0'+ seconds: seconds}`}</p>
        ) : isOtpResend ? "" : (<p className="otpResendTimer">OTP has expired</p>)}

        <div className="alignButton">
          <button type="submit" className="button">
            Validate OTP
          </button>
        </div>

        {isOtpResend ? (
          <p className="otpResendTimer">{`00:${seconds < 10 ? '0'+ seconds: seconds}`}</p>
        ) : (
          <p className="otpResendLabel">
            Haven't recieved the Otp?{" "}
            <span onClick={() => resendOTP()}>Resend Otp</span>
          </p>
        )}
      </form>
    </SignUpCard>
  );
};

export default Otp;
