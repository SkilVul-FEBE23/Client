import { useContext } from "react";
import React from "react";
import "./Login.css";
import lock from "../../img/lock.png";
import user from "../../img/user.png";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../App.js";

let users = null;
function Login() {
  ceklocalstorage();
  const baseURL = "http://localhost:5555/users/login"
  const Context = useContext(AppContext);
  let navigasi = useNavigate();

  // const loginClick = (e) => {
  //   e.preventDefault();
  //   let em = e.target.username.value;
  //   let p = e.target.password.value;

  //   const data = {username: em, password: p}
  
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
    let inputUsername = e.target.username.value;
    let inputPassword = e.target.password.value;
    let cek_login = await fetch(baseURL, {
      method: "POST",
      headers: { 'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'yoursecret' },
      body: JSON.stringify({
        username: inputUsername,
        password: inputPassword,
        // expiresInMins: 60, // optional
      })
    })
      .then((res) => res.json())
      .then((hasil) => {
        localStorage.setItem("token", JSON.stringify(hasil));
        console.log(hasil)
      });

      if (inputUsername !== null|| inputPassword !== null) {
        Context.setPengguna(cek_login);
        alert("success login");
        navigasi("/Gethelp");
        window.location.reload()
      } else{
        alert("login gagal. username atau password salah!")
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
    <div className="login-form d-flex justify-content-center p-5">
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
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Username</label>            
          <input type="text" class="form-control form-control-lg" id="exampleInputEmail1" name="username" placeholder="Enter Username" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password</label>            
            <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" name="password" placeholder="Password"/>
          </div>
          <button className="btn-login mb-5" type="submit">
            Login
          </button>

          <Link to="/daftar" style={{ textDecoration: "none" }}>
            <p className="mb-0">Don't have an account? <a href="registrasi.html" className="fw-bold create-acc">Sign Up</a></p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
