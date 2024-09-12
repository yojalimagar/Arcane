import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="center-box">
      <div className="logo-container">
        <img src="logo.png" alt="Logo" className="logo" />
        <img src="Arcane.png" alt="Additional Image" className="additional-image" />
      </div>
      <div className="content">
        <form className="Login-form">
          <h2>Welcome Back!</h2>
          <h3>Login to your Account</h3>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit" className="Login-button">Login</button>
          <p><a href="ForgetPage.html">Forget password</a></p>
        </form>
        <img src="login.png" alt="Image" className="side-image" />
      </div>
      </div>
    </div>
  );
};

export default Login;
