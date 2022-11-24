import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/login/Login";
import Signup from "../components/signup/Signup";

function Rout() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Signup />} />
    </Routes>
  );
}

export default Rout;
