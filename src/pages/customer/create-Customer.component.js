import React, { Component } from "react";
import axios from "axios";
import { AuthHeader } from "../../auth/AuthHeader";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export default class CreateCustomer extends Component {
  constructor(props) {
    super(props);

    this.onChangeCid = this.onChangeCid.bind(this);
    this.onChangeusername = this.onChangeusername.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangebirthday = this.onChangebirthday.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      firebaseId: "",
      type: "CUSTOMER",
      userId: "",
      username: "",
      address: "",
      phone: "",
      birthday: "",
      position: "",
      gender: "",
    };
  }

  //set the Cid

  onChangeCid(e) {
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

    const Customer = {
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

    console.log(Customer);

    axios
      .post("http://localhost:5000/user/add", Customer, AuthHeader())
      .then((res) => console.log(res.data))
      .then(() => alert("Success Fully added "));
  }

  render() {
    return (
      <div className="container mb-5">
        <h3> New Customer </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}> Customer Code </label>
            <input
              type="text"
              required
              className="form-control"
              name="Customer Code "
              placeholder="Customer Code"
              value={this.state.userId}
              onChange={this.onChangeCid}
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
              maxLength="10"
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
            <input type="submit" value="Create" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
