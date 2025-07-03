import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { BiSolidErrorCircle } from "react-icons/bi";

const PasswordInput = ({ onPasswordChange, isPasswordValid }) => {
  const [password, setPassword] = useState("");
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [hasTyped, setHasTyped] = useState(false); //newly added to handled the error message of password to keep password netural when it has not entered

  const togglePassword = () => setShowPassword(!showPassword);

  const handlePasswordChange = (password) => {
    if (!hasTyped && password.length > 0) {
      setHasTyped(true);
    }
    setPassword(password);

    // Update validation statuses
    const validations = password
      ? {
          length: password.length >= 8,
          uppercase: /[A-Z]/.test(password),
          lowercase: /[a-z]/.test(password),
          number: /[0-9]/.test(password),
          special: /[@$!%*?&#]/.test(password),
        }
      : {
          length: false,
          uppercase: false,
          lowercase: false,
          number: false,
          special: false,
        };
    setPasswordValidations(validations);

    // Passing data to parent component
    const isValid = Object.values(validations).every(Boolean); // use of this line because it prevent detail page to going ahead if password is not valid
    onPasswordChange(password, isValid);
  };

  return (
    <div className="input-wrapper detail-input-wrapper">
      <label htmlFor="Password" className="label">
        Password
        <span className="detail-pass-imp">*</span>
      </label>
      <input
        type={showPassword ? "text" : "password"}
        className="input-field"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => handlePasswordChange(e.target.value)}
      />
      <span onClick={togglePassword} id="eye-icon">
        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </span>

      {/* Validation Checklist */}
      <ul className="validation-checklist">
        <li
          className={
            !hasTyped
              ? "pending"
              : passwordValidations.length
              ? "valid"
              : "invalid"
          }
        >
          {passwordValidations.length ? (
            <AiOutlineCheckCircle />
          ) : (
            <AiOutlineCloseCircle />
          )}{" "}
          Must be at least 8 characters long
        </li>
        <li
          className={
            !hasTyped
              ? "pending"
              : passwordValidations.uppercase
              ? "valid"
              : "invalid"
          }
        >
          {passwordValidations.uppercase ? (
            <AiOutlineCheckCircle />
          ) : (
            <AiOutlineCloseCircle />
          )}{" "}
          Must contain at least one uppercase letter (A–Z)
        </li>
        <li
          className={
            !hasTyped
              ? "pending"
              : passwordValidations.lowercase
              ? "valid"
              : "invalid"
          }
        >
          {passwordValidations.lowercase ? (
            <AiOutlineCheckCircle />
          ) : (
            <AiOutlineCloseCircle />
          )}{" "}
          Must contain at least one lowercase letter (a–z)
        </li>
        <li
          className={
            !hasTyped
              ? "pending"
              : passwordValidations.number
              ? "valid"
              : "invalid"
          }
        >
          {passwordValidations.number ? (
            <AiOutlineCheckCircle />
          ) : (
            <AiOutlineCloseCircle />
          )}{" "}
          Must include at least one number (0–9)
        </li>
        <li
          className={
            !hasTyped
              ? "pending"
              : passwordValidations.special
              ? "valid"
              : "invalid"
          }
        >
          {passwordValidations.special ? (
            <AiOutlineCheckCircle />
          ) : (
            <AiOutlineCloseCircle />
          )}{" "}
          Must include at least one special character (e.g. ! @ # $ % ^ & *)
        </li>
      </ul>
    </div>
  );
};

// Default props for safety
PasswordInput.defaultProps = {
  onPasswordChange: () => {},
};

export default PasswordInput;
