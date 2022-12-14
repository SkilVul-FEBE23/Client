import { useContext } from "react";
import React from "react";
import "./Login.css";
import lock from "../../img/lock.png";
import user from "../../img/user.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../App.js";

let users = null;
function Login() {
  ceklocalstorage();
  const baseURL = "https://server-production-5fed.up.railway.app/users/login"
  const Context = useContext(AppContext);
  let navigasi = useNavigate();

  // const loginClick = (e) => {
  //   e.preventDefault();
  //   let em = e.target.email.value;
  //   let p = e.target.password.value;

  //   const data = {email: em, password: p}
  
  //   axios
  //     .post(baseURL, data)
  //     .then((resp) => {
  //       localStorage.setItem("token", JSON.stringify(resp));
  //       alert("success login");
  //       window.location.reload()
  //       navigasi("/");

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //     if (em === undefined)
  //       alert("login gagal.username atau password salah!");
  //     else {
  //       Context.setPengguna();
  //       navigasi("/");
  //     }
  // }


  const loginClick = async (e) => {
    e.preventDefault();
    let u = e.target.email.value;
    let p = e.target.password.value;
    let cek_login = await fetch(baseURL, {
      method: "POST",
      headers: { 'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'yoursecret' },
      body: JSON.stringify({
        username: u,
        password: p,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((hasil) => {
        localStorage.setItem("token", JSON.stringify(hasil));
        console.log(hasil)
        alert("success login");
        window.location.reload()
        navigasi("/");

      });

    if (cek_login.username === undefined)
      alert("login gagal.username atau password salah!");
    else {
      Context.setPengguna(cek_login);
      navigasi("/");
    }
  };

  function ceklocalstorage() {
    if (users !== "") {
      users = JSON.parse(localStorage.getItem("token"));
    } else {
      users = JSON.parse(sessionStorage.getItem("token"));
    }
  }

  return (
    <div className="login-form">
      <div className="form-text">
        <div className="text">
          <h2>Hello,Selamat Datang</h2>
          <span>
            Psikiater Online BeraniMelawan.CO bukanlah praktisi kesehatan
            sembarangan. Kamu bisa terhubung langsung dengan cepat dan mudah,
            serta tidak perlu meragukan kualitas konsultasi dan penanganan yang
            ditawarkan.
          </span>

          <h4>Temukan Psikolog terbaik Anda untuk solusi yang tepat !</h4>
        </div>
      </div>

      <div className="login-input">
        <form onSubmit={loginClick} className="form-body">
          <h2>Login</h2>
          <div className="username">
            <img src={user} alt="" width="20px" height="18px" />

            <input
              type="text"
              placeholder="Enter username"
              className="input-username"
              name="email"
            />
          </div>

          <div className="password">
            <img src={lock} alt="" width="20px" height="18px" />
            <input
              type="password"
              placeholder="Password"
              className="input-password"
              name="password"
            />
          </div>
          <button className="btn-login" type="submit">
            Sign In
          </button>
          <Link to="/daftar" style={{ textDecoration: "none" }}>
            <p className="create-acc">Create an account</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
