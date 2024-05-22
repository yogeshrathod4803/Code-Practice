import React, { useState } from "react";
import Styles from "../form/Form.module.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const checkString = (input) => {
    if (input.trim() === "") {
      return "Input must be a non-empty string";
    } else if (typeof input !== String) {
      return "Invalid Input";
    }
    return "";
  };

  const checkEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
      return "Invalid email address";
    }
    return "";
  };

  const checkPassword = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters";
    }
    return "";
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const usernameError = checkString(username);
    const emailError = checkEmail(email);
    const passwordError = checkPassword(password);
    const confirmpasswordError =
      password !== confirmpassword ? "Passwords do not match" : "";

    if (usernameError || emailError || passwordError || confirmpasswordError) {
      setErrors({
        username: usernameError,
        email: emailError,
        password: passwordError,
        confirmpassword: confirmpasswordError,
      });
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      {isSubmitted ? (
        <div>Welcome, {username}!</div>
      ) : (
        <div className={Styles.container}>
          <h1>Registration Form</h1>
          <form onSubmit={handleFormSubmit}>
            <div className={Styles.username}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <small className={Styles.error}>{errors.username}</small>
            </div>
            <div className={Styles.email}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <small className={Styles.error}>{errors.email}</small>
            </div>
            <div className={Styles.password}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small className={Styles.error}>{errors.password}</small>
            </div>
            <div className={Styles.confirm_password}>
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
              <small className={Styles.error}>{errors.confirmpassword}</small>
            </div>
            <button className={Styles.btn} type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
