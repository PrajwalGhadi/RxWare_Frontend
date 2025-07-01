import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";


const PasswordInput = ({ onPasswordChange }) => {
  const [password, setPassword] = useState("");
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handlePasswordChange = (password) => {
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
    onPasswordChange(password);
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
        <li className={passwordValidations.length ? "valid" : "invalid"}>
          {passwordValidations.length ? <AiOutlineCheckCircle />: <AiOutlineCloseCircle />}  Must be at least 8 characters long
        </li>
        <li className={passwordValidations.uppercase ? "valid" : "invalid"}>
          {passwordValidations.uppercase ? <AiOutlineCheckCircle />: <AiOutlineCloseCircle />} Must contain at least one uppercase letter (A–Z)
        </li>
        <li className={passwordValidations.lowercase ? "valid" : "invalid"}>
          {passwordValidations.lowercase ? <AiOutlineCheckCircle />: <AiOutlineCloseCircle />} Must contain at least one lowercase letter (a–z)
        </li>
        <li className={passwordValidations.number ? "valid" : "invalid"}>
         {passwordValidations.number ? <AiOutlineCheckCircle />: <AiOutlineCloseCircle />} Must include at least one number (0–9)
        </li>
        <li className={passwordValidations.special ? "valid" : "invalid"}>
         {passwordValidations.special ? <AiOutlineCheckCircle />: <AiOutlineCloseCircle />} Must include at least one special character (e.g. ! @ # $ % ^ & *)
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