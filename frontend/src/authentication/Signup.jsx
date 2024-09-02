import React from 'react';
import './Signup.css';

const App = () => {
  return (
    <div className="center-box">
      <div className="logo-container">
        <img src="logo.png" alt="Logo" className="logo" />
        <img src="Arcane.png" alt="Additional Image" className="additional-image" />
      </div>
      <div className="content">
        <form className="signup-form">
          <h2>Register with us</h2>
          <label htmlFor="full-name">Full Name:</label>
          <input type="text" id="full-name" name="full-name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
          <button type="submit" className="signup-button">Sign Up</button>
          <p>Already a user? <a href="login.html">Log in here</a></p>
        </form>
        <img src="signup.png" alt="Image" className="side-image" />
      </div>
    </div>
  );
};

export default App;
