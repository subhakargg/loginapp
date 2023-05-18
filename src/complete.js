import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function PasswordChangeComplete() {
  return (
    <div className="Password-change-complete">
      <div className="Icon-container">
        <FaCheckCircle className="Success-icon" />
      </div>
      <h3 className="Success-title">Password was changed!!</h3>
    </div>
  );
}
