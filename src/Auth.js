import React, { useState } from "react";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if( email ==="test@app.com"  && password === "1234")
    {
        alert("login is authenticated");
    }
    else
    {
        alert("Invalid userid/password")
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
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
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            <a href="/forget">Forgot password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
