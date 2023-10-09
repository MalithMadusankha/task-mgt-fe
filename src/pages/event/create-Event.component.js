import React, { Component } from "react";
import axios from "axios";
import { AuthHeader } from "../../auth/AuthHeader";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeEventId = this.onChangeEventId.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      eventId: "",
      name: "",
      address: "",
      phone: "",
      dateOn: "",
    };
  }

  //set the Cid

  onChangeEventId(e) {
    this.setState({
      eventId: e.target.value,
    });
  }

  //set the username

  onChangename(e) {
    this.setState({
      name: e.target.value,
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

  onChangeDate(date) {
    this.setState({
      dateOn: date,
    });
  }

  //submit Function

  onSubmit(e) {
    e.preventDefault();

    const Evnte = {
      eventId: this.state.eventId,
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      date: this.state.dateOn,
      attend: [],
    };

    console.log(Evnte);

    axios
      .post("http://localhost:5000/event/add", Evnte, AuthHeader())
      .then((res) => console.log(res.data))
      .then(() => alert("Success Fully added "));
  }

  render() {
    return (
      <div className="container mb-5">
        <h3> New Evnte </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}> Event Code </label>
            <input
              type="text"
              required
              className="form-control"
              name="Event Code "
              placeholder="Event Code"
              value={this.state.eventId}
              onChange={this.onChangeEventId}
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
              value={this.state.name}
              onChange={this.onChangename}
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
            <label> Event Date: </label>
            <div>
              <DatePicker
                selected={this.state.dateOn}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
