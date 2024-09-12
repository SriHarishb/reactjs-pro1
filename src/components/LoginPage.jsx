import React from 'react';

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logged in!');
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
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="actions">
            <a href="/reset-password" className="reset-password-link">Reset Password</a>
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="register">
          <p>or</p>
          <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
}
