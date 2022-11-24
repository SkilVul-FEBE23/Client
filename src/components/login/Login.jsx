import React from "react";
import "./Login.css";
import lock from "../../img/lock.png";
import user from "../../img/user.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-form">
      <div className="form-text">
        <div className="text">
          <h2>Hello,Selamat Datang</h2>
          <p>
            Psikiater Online BeraniMelawan.CO bukanlah praktisi kesehatan
            sembarangan. Kamu bisa terhubung langsung dengan cepat dan mudah,
            serta tidak perlu meragukan kualitas konsultasi dan penanganan yang
            ditawarkan.
          </p>

          <h4>Temukan Psikolog terbaik Anda untuk solusi yang tepat !</h4>
        </div>
      </div>

      <div className="login-input">
        <form action="" className="form-body">
          <h2>Login</h2>
          <div className="username">
            <img src={user} alt="" width="20px" height="18px" />

            <input
              type="text"
              placeholder="Enter username"
              className="input-username"
            />
          </div>

          <div className="password">
            <img src={lock} alt="" width="20px" height="18px" />
            <input
              type="text"
              placeholder="Password"
              className="input-password"
            />
          </div>
          <button className="btn-login">Sign In</button>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <p className="create-acc">Create an account</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
