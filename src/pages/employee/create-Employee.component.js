import React, { Component } from "react";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export default class CreateEmployee extends Component {
  constructor(props) {
    super(props);

    this.onChangeEid = this.onChangeEid.bind(this);
    this.onChangeusername = this.onChangeusername.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangebirthday = this.onChangebirthday.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);

    this.state = {
      email: "",
      firebaseId: "",
      type: "EMPLOYEE",
      userId: "",
      username: "",
      address: "",
      phone: "",
      birthday: "",
      position: "",
      gender: "",
    };
  }

  //set the Eid

  onChangeEid(e) {
    this.setState({
      userId: e.target.value,
    });
  }

  //set the username

  onChangeusername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  //set Address
  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  //set Phone

  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  //Set birthday

  onChangebirthday(date) {
    this.setState({
      birthday: date,
    });
  }

  //set Position
  onChangePosition(e) {
    this.setState({
      position: e.target.value,
    });
  }

  //set Gender
  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }

  //set Email
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
      //     if (.isEmail(Email)) {
    });
  }

  //submit Function

  onSubmit(e) {
    e.preventDefault();

    const Employee = {
      email: this.state.email,
      firebaseId: this.state.firebaseId,
      type: this.state.type,
      userId: this.state.userId,
      username: this.state.username,
      address: this.state.address,
      phone: this.state.phone,
      birthday: this.state.birthday,
      position: this.state.position,
      gender: this.state.gender,
    };

    console.log(Employee);

    axios.post("http://localhost:5000/user/add", Employee).then((res) => {
      console.log(res.data);
      alert("Success fully Add New employee");
    });
  }

  render() {
    return (
      <div className="container mb-5">
        <h3> New Employee </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}> Employee Code </label>
            <input
              type="text"
              required
              className="form-control"
              name="Employee Code "
              placeholder="Employee Code"
              value={this.state.userId}
              onChange={this.onChangeEid}
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
              value={this.state.username}
              onChange={this.onChangeusername}
            />
          </div>
          <div className="form-group">
            <label> Email: </label>
            <input
              type="text"
              required
              className="form-control"
              name="Email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.onChangeEmail}
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
              value={this.state.address}
              onChange={this.onChangeAddress}
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
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
          </div>
          <div className="form-group">
            <label> Birthday: </label>
            <div>
              <DatePicker
                selected={this.state.birthday}
                onChange={this.onChangebirthday}
              />
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
              value={this.state.position}
              onChange={this.onChangePosition}
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
              value={this.state.gender}
              onChange={this.onChangeGender}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
