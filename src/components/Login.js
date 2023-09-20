import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CustomerRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function regUser(e) {
    e.preventDefault();

    const newUser = {
      email,
      password,
    };

    axios
      .post(
        "http://localhost:8070/driver/613728a89f2ac365dc10e3ab/reg",
        newUser
      )
      .then(() => {
        alert("Login Successfully");
        e.target.reset(); // to clear input field after the submission
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container mb-5">
      <div className="login">
        <div className="col-lg-9 mt-2 mb-2">
          <b>
            {" "}
            <h2> Login to the System </h2>{" "}
          </b>{" "}
        </div>
        <br></br>
        <form onSubmit={regUser}>
          <div className="col-md-8 mb-3 font">
            <label htmlFor="license" className="form-label">
              Email Address
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="col-md-8 mb-3 font">
            <label htmlFor="number" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <hr className="col-md-10 mb-3" />
          <Link to="/">
            <button type="submit" className="btn btn-success btn-lg">
              Login
            </button>
          </Link>

          <div className="col-lg-9 mt-2 mb-2">
            <b>Don't have an account?</b>{" "}
          </div>

          <Link to="/Register">
            <button type="submit" className="btn btn-success btn-lg">
              SIGN UP
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
