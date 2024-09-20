import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResetPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you might want to make an API call
    alert(`Password reset link sent to ${email}`);
    navigate('/EnterOTP'); // Navigate to EnterOTP page
  };

  return (
    <div className="login-container">
      <div className="side-panel">
        <div className="logo-container">
          <img src="public/images/Logo.png" alt="Logo" className="logo" />
          <h1>Package GPS <br></br>Tracking</h1>
        </div>
      </div>
      <div className="login-panel">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Get Reset Link</button>
        </form>
      </div>
    </div>
  );
}
