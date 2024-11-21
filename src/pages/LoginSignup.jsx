// AuthPage.js
import React, { useState } from 'react';
import './Styles/LoginSignup.css'; // Import the common styles

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for both forms
    if (!email || !password || (isLogin ? false : !confirmPassword)) {
      setErrorMessage('Please fill out all fields');
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    if (isLogin) {
      // Simulate login logic (replace with actual authentication logic)
      if (email === 'test@hostel.com' && password === 'password123') {
        alert('Login successful');
      } else {
        setErrorMessage('Invalid credentials');
      }
    } else {
      // Simulate signup logic (replace with actual signup logic)
      alert('Signup successful');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="auth-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="auth-form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {!isLogin && (
          <div className="auth-form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        {errorMessage && <div className="auth-error">{errorMessage}</div>}

        <button type="submit" className="auth-btn">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p>
        {isLogin ? (
          <>
            Don't have an account?{' '}
            <span className="auth-switch-link" onClick={() => setIsLogin(false)}>
              Sign Up
            </span>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <span className="auth-switch-link" onClick={() => setIsLogin(true)}>
              Login
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default LoginSignup;
