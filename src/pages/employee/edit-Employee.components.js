import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import { AuthHeader } from "../../auth/AuthHeader";

export default function EditETask() {
  const { id } = useParams();
  const [email, setemail] = useState("");
  const [firebaseId, setfirebaseId] = useState("");
  const [type, settype] = useState("");
  const [userId, setuserId] = useState("");
  const [username, setusername] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [position, setposition] = useState("");
  const [gender, setgender] = useState("");
  const [birthday, setbirthday] = useState("");

  const getEmployee = () => {
    axios
      .get("http://localhost:5000/user/" + id, AuthHeader())
      .then((response) => {
        setemail(response.data.email);
        setfirebaseId(response.data.firebaseId);
        settype(response.data.type);
        setuserId(response.data.userId);
        setusername(response.data.username);
        setaddress(response.data.address);
        setphone(response.data.phone);
        setposition(response.data.position);
        setgender(response.data.gender);
        setbirthday(new Date(response.data.birthday));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //set the Eid

  const onChangeEid = (e) => {
    setuserId(e.target.value);
  };

  //set the username

  const onChangeusername = (e) => {
    setusername(e.target.value);
  };
  //set Address
  const onChangeAddress = (e) => {
    setaddress(e.target.value);
  };

  //set Phone

  const onChangePhone = (e) => {
    setphone(e.target.value);
  };
  //Set birthday

  const onChangebirthday = (date) => {
    setbirthday(date);
  };
  //set Position
  const onChangePosition = (e) => {
    setposition(e.target.value);
  };

  //set Gender
  const onChangeGender = (e) => {
    setgender(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const Employee = {
      email,
      firebaseId,
      type,
      userId,
      username,
      address,
      phone,
      position,
      gender,
      birthday,
    };

    console.log(Employee);

    axios
      .put("http://localhost:5000/user/update/" + id, Employee, AuthHeader())
      .then((res) => {
        console.log(res.data);
        alert("Updated Successfully");
      });
  };
  useEffect(() => {
    getEmployee();
  }, []); // eslint-disable-line

  return (
    <div className="container mb-5">
      <h3> Update Employee </h3>
      <form onSubmit={onSubmit}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}> Employee Code </label>
          <input
            type="text"
            required
            className="form-control"
            name="Employee Code "
            placeholder="Employee Code"
            value={userId}
            onChange={onChangeEid}
          />
        </div>
        <div className="form-group">
          <label> User Name: </label>
          <input
            type="text"
            required
            className="form-control"
            name="User Name"
            placeholder="Enter User Name"
            value={username}
            onChange={onChangeusername}
          />
        </div>
        <div className="form-group">
          <label> Address: </label>
          <input
            type="text"
            required
            className="form-control"
            name="Address"
            placeholder="Enter Address"
            value={address}
            onChange={onChangeAddress}
          />
        </div>
        <div className="form-group">
          <label> Phone: </label>
          <input
            type="text"
            required
            className="form-control"
            maxLength="10"
            name="Phone"
            placeholder="Enter Phone"
            value={phone}
            onChange={onChangePhone}
          />
        </div>
        <div className="form-group">
          <label> Birthday: </label>
          <div>
            <DatePicker selected={birthday} onChange={onChangebirthday} />
          </div>
        </div>
        <div className="form-group">
          <label> Position: </label>
          <input
            type="text"
            required
            className="form-control"
            name="Position"
            placeholder="Enter Position"
            value={position}
            onChange={onChangePosition}
          />
        </div>
        <div className="form-group">
          <label> Gender: </label>
          <input
            type="text"
            required
            className="form-control"
            name="Gender"
            placeholder="Enter Gender"
            value={gender}
            onChange={onChangeGender}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Update" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
