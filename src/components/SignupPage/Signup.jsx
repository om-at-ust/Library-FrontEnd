import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onButtonClick = () => {
    let valid = true;

    // Reset error messages
    setEmailError("");
    setPasswordError("");

    // Email validation
    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email.");
      valid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    }

    // If all validations pass, proceed to navigate (or submit form)
    if (valid) {
      // Perform your login logic here (e.g., API call)
      navigate("/home"); // Change "/home" to your target path
    }
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Signup</div>
      </div>
      <br />
      <div className="inputContainer">
        <input
          type="email"
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          type="password"
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className="buttons">
        <div className="inputContainer">
          <input
            className="inputButton btn-cornflowerBlue"
            type="button"
            onClick={onButtonClick}
            value="Sign Up"
          />
        </div>
        <div className="inputContainer">
          <input
            className="inputButton btn-purple"
            type="button"
            onClick={() => navigate("/login")}
            value="Login"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
