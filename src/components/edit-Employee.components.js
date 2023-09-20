import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";

export default function EditETask() {
  const { id } = useParams();
  const [Eid, setEid] = useState("");
  const [username, setusername] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [birthday, setbirthday] = useState("");
  const [Position, setPosition] = useState("");
  const [Gender, setGender] = useState("");

  const getEmployee = () => {
    axios
      .get("http://localhost:5000/Employee/" + id)
      .then((response) => {
        setEid(response.data.Eid);
        setusername(response.data.username);
        setAddress(response.data.Address);
        setPhone(response.data.Phone);
        setPosition(response.data.Position);
        setGender(response.data.Gender);
        setbirthday(new Date(response.data.birthday));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //set the Eid

  const onChangeEid = (e) => {
    setEid(e.target.value);
  };

  //set the username

  const onChangeusername = (e) => {
    setusername(e.target.value);
  };
  //set Address
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  //set Phone

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  //Set birthday

  const onChangebirthday = (date) => {
    setbirthday(date);
  };
  //set Position
  const onChangePosition = (e) => {
    setPosition(e.target.value);
  };

  //set Gender
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const Employee = {
      Eid: Eid,
      username: username,
      Address: Address,
      Phone: Phone,
      birthday: birthday,
      Position: Position,
      Gender: Gender,
    };

    console.log(Employee);

    axios
      .post("http://localhost:5000/Employee/update/" + id, Employee)
      .then((res) => {
        console.log(res.data);
        alert("Updated Successfully");
      });
  };
  useEffect(() => {
    getEmployee();
  }, []);

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
            value={Eid}
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
            value={Address}
            onChange={onChangeAddress}
          />
        </div>
        <div className="form-group">
          <label> Phone: </label>
          <input
            type="text"
            required
            className="form-control"
            maxlength="10"
            name="Phone"
            placeholder="Enter Phone"
            value={Phone}
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
            value={Position}
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
            value={Gender}
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
