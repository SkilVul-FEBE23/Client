import React from "react";
import "./Signup.css";
import user1 from "../assets/user.png";
import lock1 from "../assets/lock.png";
import email from "../assets/email.png";
import img from "../assets/img1.png";

function Signup() {
  return (
    <div className="signup">
      <img className="img" src={img} alt="" width="120px" height="350px" />
      <div className="signup-form">
        <h2>Create an account </h2>

        <div className="signup-body">
          <div className="username-signup">
            <img src={user1} alt="" width="20px" height="18px" />
            <input type="text" placeholder="Username" />
          </div>

          <div className="email-signup">
            <img src={email} alt="" width="20px" height="18px" />
            <input type="text" placeholder="Email" />
          </div>

          <div className="password-signup">
            <img src={lock1} alt="" width="20px" height="18px" />
            <input type="text" placeholder="Password" />
          </div>

          <button>Sign up</button>
        </div>
        <p>Akun berhasil dibuat !</p>
      </div>
    </div>
  );
}

export default Signup;
