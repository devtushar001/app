// AuthPage.js
import React, { useState } from 'react';
import './Styles/LoginSignup.css'; // Import the common styles

const LoginSignup = () => {
  const [signup, setSignup] = useState("Sign Up");

  return (
    <>
      <div className="login-signup">
        <div className="container">
          <div className="inputs">
            {signup == "Sign Up" ? <input type="text" placeholder='Full Name' className="name" /> : ""}
            <br />
            <input type="email" placeholder='Email' className='email' />
            <br />
            <input type="password" placeholder='Password' className='password' />
            <br />
            <input type="password" placeholder='Confirm Password' className='confirm-password' />
            <br />
            <div className="content">
              <p>{signup == "Sign Up" ? "Allready have an account?" : "Don't have account?" } <span onClick={()=>{ signup == "Sign Up" ? setSignup("Login") : setSignup("Sign Up")}}>{signup == "Sign Up" ? "Login" : "Sign Up"}</span></p>
              <button>{signup}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default LoginSignup;