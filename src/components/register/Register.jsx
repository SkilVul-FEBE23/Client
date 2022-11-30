import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("https://6384a0324ce192ac605e0d4a.mockapi.io/students", {
                username,
                email,
                password,
            })
            .then(() => {
                setData({username, email, password});
                setUsername("");
                setEmail("");
                setPassword("");
            })
            .catch((err) => {
                console.log(err);
            });

        // alert(`Nama: ${username}, Address: ${address}`);
    };
    console.log(data);

    return (
        <>
        <div className="register">
            <div className="form-register">
                <h2>Create an Account</h2>
                <p>register and enjoy the service</p>
                <form action="" onSubmit={handleSubmit} className="form-input">
                    <label htmlFor="username"></label>
                    <input className="input" placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <label htmlFor="email"></label>
                    <input className="input" placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="password"></label>
                    <input className="input" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Sign Up</button>
                </form>
            </div>

        {/* <br/>
        <h2>username: {data.username}</h2>
        <h2>Email: {data.email}</h2>
        <h2>Password: {data.password}</h2> */}
        </div>
        </>
    )
}

export default Register;