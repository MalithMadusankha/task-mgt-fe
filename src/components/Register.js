import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CustomerRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nearbyTown, setLocation] = useState("");
  const [contactNo, setNumber] = useState("");
  const [userType, setType] = useState("");
  const [password, setPassword] = useState("");
  const [img1, setImg1] = useState("");

  function regUser(e) {
    e.preventDefault();

    const newUser = {
      name,
      email,
      nearbyTown,
      contactNo,
      userType,
      password,
      img1,
    };

    axios
      .post(
        "http://localhost:8070/driver/613728a89f2ac365dc10e3ab/reg",
        newUser
      )
      .then(() => {
        alert("Registered Successfully");
        e.target.reset(); // to clear input field after the submission
      })

      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container mb-5">
      <div className="register">
        <div className="col-lg-9 mt-2 mb-2">
          <b>
            {" "}
            <h2> Register to the System </h2>{" "}
          </b>{" "}
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
              Nearby Location
            </label>
            <select
              className="form-select"
              required
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            >
              <option selected>Select the closest location</option>
              <option value={"Akuressa"}>Akuressa</option>
              <option value={"Godagama"}>Godagama</option>
              <option value={"Hakmana"}>Hakmana</option>
              <option value={"Kamburupitiya"}>Kamburupitiya</option>
              <option value={"Matara"}>Matara</option>
              <option value={"Telijjawila"}>Telijjawila</option>
              <option value={"Weligama"}>Weligama</option>
            </select>
          </div>

          <div className="col-md-8 mb-3 font">
            <label htmlFor="number" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="regNumber"
              placeholder="Ex :- 07x-xxxxxxx"
              required
              onChange={(e) => {
                setNumber(e.target.value);
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
              <option value={"Customer"}>Customer</option>
              <option value={"Staff"}>Staff</option>
            </select>
          </div>

          <br></br>

          <div className="col-md-8 mb-3 font">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div style={{ display: "flex" }} className="col-md-10 mb-3">
            <div className="col-md-7 mb-1">
              <input
                type="file"
                accept="image/png, image/jpeg"
                id="image1"
                required
                onChange={(e) => {
                  setImg1(e.target.value);
                }}
              />{" "}
            </div>
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
          <Link to="/Login">
            <button type="submit" className="btn btn-success btn-lg">
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
