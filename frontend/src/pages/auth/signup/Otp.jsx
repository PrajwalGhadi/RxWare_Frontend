import { useForm } from "react-hook-form";
import SignUpCard from "../../../components/utils/signUpCard";
import { useEffect, useRef, useState } from "react";

const Otp = ({ onNext }) => {
  const [seconds, setSeconds] = useState(30);
  const [resendVisible, setResendVisible] = useState(false);
  const inputs = useRef([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const otpValues = [
    watch("otp0"),
    watch("otp1"),
    watch("otp2"),
    watch("otp3"),
  ];
  const isOtpFilled = otpValues.every((digit) => /^\d$/.test(digit));

  const handleChange = async (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      setValue(`otp${index}`, value);
      await trigger(`otp${index}`);
      if (value && index < 3) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e) => {
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight"
    ) {
      e.preventDefault();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
  };

  const onSubmit = (data) => {
    const otp = otpValues.join("");
    console.log("Submitted OTP:", otp);
    onNext({ otp }, "otp");
  };

  const handleResend = () => {
    if (!resendVisible) return;
    setSeconds(30);
    setResendVisible(false);
  };

  useEffect(() => {
    if (!resendVisible && seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 1) setResendVisible(true);
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [seconds, resendVisible]);
  return (
    <SignUpCard currentStep="otp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <p className="otp-label">
            Please Enter the OTP to Verify your account
          </p>
          <div className="otp-container">
            {[...Array(4)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="otp-input"
                {...register(`otp${index}`, { required: true })}
                ref={(el) => (inputs.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
                inputMode="numeric"
                pattern="[0-9]*"
              />
            ))}
          </div>

          <small
            className={`errorMessage ${
              Object.keys(errors).length > 0 ? "active" : ""
            }`}
          >
            {Object.keys(errors).length > 0 ? "Please fill out all fields" : ""}
          </small>

          <small className="otpResendTimer">
            {resendVisible
              ? "OTP has expired"
              : `00:${seconds < 10 ? "0" + seconds : seconds}`}
          </small>

          <div className="alignButton">
            <button
              type="submit"
              className="button"
              style={{
                backgroundColor: !isOtpFilled ? "#bcffaf" : "#3aff16",
              }}
              disabled={!isOtpFilled}
            >
              Validate OTP
            </button>
          </div>

          <p className="otpResendLabel">
            Haven't received the OTP?{" "}
            <span
              onClick={handleResend}
              style={{
                color: resendVisible ? "#1082ff" : "gray",
                cursor: resendVisible ? "pointer" : "not-allowed",
                // textDecoration: resendVisible ? "underline" : "none",
                textDecoration: "none",
                pointerEvents: resendVisible ? "auto" : "none",
              }}
            >
              Resend Otp
            </span>
          </p>
        </div>
      </form>
    </SignUpCard>
  );
};

export default Otp;
