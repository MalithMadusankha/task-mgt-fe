import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GetFirebaseID, SignIn } from "../../auth/service";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";

export default function CustomerRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getUser = async (id) => {
    try {
      const res = await axios.get("http://localhost:5000/user/firebase/" + id);
      console.log("res :", res.data);
      const type = res.data[0].type;
      localStorage.setItem("userType", type);
      localStorage.setItem("userId", res.data[0]._id);
      setUserType(type);

      return type;
    } catch (error) {
      console.log(error);
    }
  };

  async function userLogin(e) {
    e.preventDefault();

    try {
      const res = await SignIn(email, password);
      if (res === 1) {
        console.log("if ==>");
        const firebaseId = await GetFirebaseID();
        if (firebaseId !== 0) {
          console.log("if ==>", firebaseId);
          const type = await getUser(firebaseId);
          console.log("type:", type);
          if (type === "CUSTOMER") {
            console.log("CUSTOMER: T");
            window.location.href = "/customer";
          } else if (type === "EMPLOYEE") {
            window.location.href = "/employee";
          } else if (type === "ADMIN") {
            window.location.href = "/admin";
          }
        }
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
