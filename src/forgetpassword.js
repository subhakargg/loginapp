import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Password validation rules
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.");
        return;
    }

    navigate("/complete");
  };

  return (
    <div className="Auth-form-container">
      <form className="Forgot-password-form" onSubmit={handleSubmit}>
        <div className="Forgot-password-form-content">
          <h3 className="Forgot-password-form-title">Forgot Password</h3>
          <div className="form-group mt-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Change
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
