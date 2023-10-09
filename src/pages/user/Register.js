import React, { useState } from "react";
import SignUp from "../../auth/service";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { AuthHeader } from "../../auth/AuthHeader";

export default function CustomerRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [rePassword, setRePassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isMatch, setIsMatch] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function regUser(e) {
    e.preventDefault();

    try {
      if (password === rePassword) {
        setIsMatch(true);

        const firebaseId = await SignUp(email, password);

        const newUser = {
          firebaseId,
          type,
          email,
          userId: "",
          username: name,
          address,
          phone,
          birthday,
          position: "",
          gender: "",
        };
        console.log("newUser :", newUser);

        const res = await axios.post(
          "http://localhost:5000/user/add",
          newUser,
          AuthHeader()
        );
        if (res.data.status === 200) {
          window.location = "/Login";
        }
      } else {
        setIsMatch(false);
      }
    } catch (error) {
      console.log("error : ", error);
    }
  }

  return (
    <div className="container mb-5">
      <div className="register">
        <div className="col-lg-9 mt-2 mb-2">
          <b>
            <h2> Register to the System </h2>
          </b>
        </div>
        <br></br>
        <form onSubmit={regUser}>
          <div className="col-md-8 mb-3 font">
            <label htmlFor="license" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your Name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="col-md-8 mb-3 font">
            <label htmlFor="email" className="form-label">
              Email
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
            <label htmlFor="category" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter your address"
              required
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>

          <div className="col-md-8 mb-3 font">
            <label htmlFor="number" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Ex :- 07x-xxxxxxx"
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <div className="col-md-8 mb-3 font">
            <label htmlFor="type" className="form-label">
              User Type
            </label>
            <select
              className="form-select"
              required
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option selected>Choose User Type</option>
              <option value={"CUSTOMER"}>CUSTOMER</option>
              <option value={"EMPLOYEE"}>EMPLOYEE</option>
            </select>
          </div>

          <div className="form-group">
            <label> Birthday: </label>
            <div>
              <DatePicker
                selected={birthday}
                onChange={(date) => setBirthday(date)}
              />
            </div>
          </div>

          <br></br>

          <div className="col-md-8 mb-3 font">
            <label htmlFor="password" className="form-label">
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
                  setIsMatch(password === rePassword ? true : false);
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

          <div className="col-md-8 mb-3 font">
            <label htmlFor="password" className="form-label">
              Confirm Password
              {rePassword !== null ? (
                !isMatch ? (
                  <span className="text-danger"> password is not match</span>
                ) : (
                  <span className="text-success"> match</span>
                )
              ) : null}
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="re-password"
              placeholder="Enter your Password"
              required
              onChange={(e) => {
                setRePassword(e.target.value);
                setIsMatch(password === rePassword ? true : false);
              }}
            />
          </div>

          <hr className="col-md-10 mb-3" />

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="term"
              required
            />
            <label className="form-check-label" htmlFor="terms">
              I have read and agree to the term & conditions
            </label>
          </div>

          <hr className="col-md-10 mb-3" />

          <button type="submit" className="btn btn-success btn-lg">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
