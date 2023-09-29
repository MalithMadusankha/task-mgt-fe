import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignIn } from "../auth/service";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function CustomerRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function userLogin(e) {
    e.preventDefault();

    try {
      const res = await SignIn(email, password);
      if (res === 1) {
        window.location.href = "/admin";
      }
    } catch (error) {}
  }

  return (
    <div className="container mb-5">
      <div className="login">
        <div className="col-lg-9 mt-2 mb-2">
          <b>
            <h2> Login to the System </h2>
          </b>
        </div>
        <br></br>
        <form onSubmit={userLogin}>
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
            <div class="input-group mb-3">
              <input
                type={showPassword ? "text" : "password"}
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <span class="input-group-text" id="basic-addon2">
                {showPassword ? (
                  <AiFillEyeInvisible onClick={togglePasswordVisibility} />
                ) : (
                  <AiFillEye onClick={togglePasswordVisibility} />
                )}
              </span>
            </div>
          </div>

          <hr className="col-md-10 mb-3" />

          <button type="submit" className="btn btn-success btn-lg">
            Login
          </button>

          <div className="col-lg-9 mt-2 mb-2">
            <b>Don't have an account?</b>
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
